// Cloudflare Worker 入口文件：整合KV留言接口 + 静态资源托管
export default {
  // 核心请求处理函数
  async fetch(request, env, ctx) {
    try {
      const url = new URL(request.url);
      // 1. 处理 /api/submit  POST 留言提交接口
      if (url.pathname === '/api/submit' && request.method === 'POST') {
        // 解析表单数据
        const formData = await request.formData();
        // 获取表单字段并做非空校验
        const name = (formData.get('name') || '').trim();
        const msg = (formData.get('msg') || '').trim();

        // 基础参数校验，避免空数据存入KV
        if (!name) {
          return new Response(JSON.stringify({ code: 400, msg: '请输入你的昵称！' }), {
            headers: { 'Content-Type': 'application/json; charset=utf-8' }
          });
        }
        if (!msg) {
          return new Response(JSON.stringify({ code: 400, msg: '请输入留言内容！' }), {
            headers: { 'Content-Type': 'application/json; charset=utf-8' }
          });
        }

        // 构造存储到KV的数据，包含唯一ID、昵称、留言、时间
        const id = Date.now().toString(); // 时间戳作为唯一Key
        const saveData = {
          name,
          msg,
          time: new Date().toLocaleString('zh-CN'), // 强制中文时间格式（如2026/2/6 16:30:00）
          id
        };

        // 存入Cloudflare KV（MY_KV为命名空间别名，后续配置）
        await env.MY_KV.put(id, JSON.stringify(saveData));

        // 返回成功响应，指定JSON格式+中文编码
        return new Response(JSON.stringify({ code: 200, msg: `提交成功！感谢 ${name} 的留言` }), {
          headers: { 'Content-Type': 'application/json; charset=utf-8' }
        });
      }

      // 2. 其他所有请求：托管静态资源（dist目录的html/css/js等）
      return fetch(request);
    } catch (error) {
      // 全局异常捕获，避免Worker崩溃，返回友好错误
      console.error('请求处理失败：', error);
      return new Response(JSON.stringify({ code: 500, msg: '服务器内部错误，请稍后再试' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json; charset=utf-8' }
      });
    }
  }
};