# RDG-Mediwho

A styling framework for iframe registration and login pages.

## Description

This project provides customizable styles for various iframe pages including registration forms, login pages, and file upload interfaces. It's designed to create a consistent, responsive user experience across different pages within the RDG system.

## Features

- Responsive design for desktop and mobile devices
- RTL (right-to-left) text support for Hebrew
- Customizable styles for:
  - Registration forms
  - Login pages
  - File upload interfaces
- Webpack-based build system
- SCSS for maintainable styling
- Configurable page templates

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/DaniStep15/rdg_frame_styles.git
   ```

2. Install dependencies:
   ```
   npm install
   ```

## Usage

### Development

To start the development server:

```
npm start
```

This will build the project and start a development server at http://localhost:5050.

### Building for Production

To build the project for production:

```
npm run build
```

This will create optimized files in the `build` directory.

### Code Formatting

To format the code using Prettier:

```
npm run prettier
```

## Project Structure

- `src/` - Source files
  - `index.js` - Main entry point
  - `styles.scss` - Main stylesheet that imports specific style modules
  - `styles/` - SCSS modules for different pages
    - `registration-styles.scss` - Styles for registration page
    - `login_styles_main.scss` - Styles for main login page
    - `login-styles-identity.scss` - Styles for identity login page
    - `upload-file-first.scss` - Styles for file upload page
  - `sub-pages/` - HTML templates for different pages
  - `location_switcher.js` - Configuration for different page templates
- `static3/` - Static assets
- `build/` - Compiled output

## Switching Between Pages

To switch between different pages (registration, login, etc.), modify the `src/location_switcher.js` file to export the desired configuration and uncomment the corresponding style import in `src/styles.scss`.

## Dependencies

- Webpack for bundling
- SASS for styling
- Prettier for code formatting
- Lodash for utility functions

## License

ISC

## Author

Danil Stepanov