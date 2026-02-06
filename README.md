# Advanced Frontend

A modern, responsive, and accessible frontend application built with React, featuring advanced UI components, animations, and performance optimizations.

## Features

- **Modern Architecture**: Built with React 18, Redux Toolkit, and React Router
- **Responsive Design**: Fully responsive layout with mobile-first approach
- **Accessibility**: WCAG compliant with keyboard navigation and screen reader support
- **Performance Optimized**: Lazy loading, code splitting, and performance monitoring
- **Animations**: Smooth transitions and micro-interactions powered by Framer Motion
- **Component Library**: Reusable UI components with consistent design system
- **Dark Mode**: Automatic theme switching with manual override
- **Type Safety**: PropTypes for runtime type checking

## Tech Stack

- **Framework**: React 18 with Hooks
- **Styling**: Tailwind CSS + Custom CSS
- **State Management**: Redux Toolkit
- **Routing**: React Router v6
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Forms**: React Hook Form
- **HTTP Client**: Axios
- **Build Tool**: Vite

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd advanced-frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser to `http://localhost:3000`

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Lint code
- `npm run format` - Format code with Prettier

## Project Structure

```
src/
├── components/          # Reusable UI components
├── containers/          # Connected components with Redux
├── layouts/             # Layout components (Header, Footer, etc.)
├── pages/               # Page components
├── routes/              # Routing configuration
├── store/               # Redux store configuration
├── features/            # Redux slices
├── hooks/               # Custom React hooks
├── contexts/            # React Context providers
├── utils/               # Utility functions
├── styles/              # Global styles and CSS
├── assets/              # Static assets (images, fonts, etc.)
├── types/               # TypeScript definitions (if applicable)
└── main.jsx             # Main entry point
```

## Components

The application includes a comprehensive set of reusable components:

- **Button**: Highly customizable button component with multiple variants
- **Card**: Flexible container for content display
- **Input**: Form input with validation states
- **Modal**: Accessible modal dialog component
- **Navbar**: Responsive navigation bar with dropdown support
- **Tabs**: Tabbed interface component
- **ProgressBar**: Visual progress indicator
- **LazyImage**: Performance-optimized image component
- **AccessibleDropdown**: Keyboard-navigable dropdown menu

## State Management

The application uses Redux Toolkit for global state management with the following slices:

- **Theme**: Manages light/dark mode preference
- **UI**: Handles loading states, notifications, and UI flags
- **Auth**: Authentication state management

## Accessibility Features

- Proper semantic HTML structure
- ARIA attributes for dynamic content
- Keyboard navigation support
- Screen reader compatibility
- Focus management
- Color contrast compliance (WCAG AA standard)

## Performance Optimizations

- Code splitting with React.lazy
- Image lazy loading
- Memoization with React.memo and useMemo
- Efficient rendering with virtualization (for large lists)
- Bundle size optimization
- Performance monitoring utilities

## Theming

The application supports both light and dark themes with automatic switching based on system preference. Users can also manually toggle between themes.

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.