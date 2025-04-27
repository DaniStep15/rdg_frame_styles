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
  - `js-by-page/` - JavaScript entry points for different pages
    - `registration.js` - Entry point for registration page
    - `upload.js` - Entry point for file upload page
    - `email.js` - Entry point for email login page
    - `identity.js` - Entry point for identity login page
  - `mixin-vars/` - Shared SCSS mixins and variables
    - `_mixins.scss` - Shared mixins for styling components
    - `_vars.scss` - Shared variables for colors and dimensions
  - `styles/` - SCSS modules for different pages
    - `registration-styles.scss` - Styles for registration page
    - `login_styles_main.scss` - Styles for main login page
    - `login-styles-identity.scss` - Styles for identity login page
    - `upload-file-first.scss` - Styles for file upload page
  - `sub-pages/` - HTML templates for different pages
    - `rdg-registration-list.html` - Template for registration page
    - `rdg-upload-first.html` - Template for file upload page
    - `rdg-login-page.html` - Template for email login page
    - `rdg-login-page-identity.html` - Template for identity login page
  - `location_switcher.js` - Configuration for different page templates
- `static3/` - Static assets (images, fonts, etc.)
- `build/` - Compiled output (generated during build)

## Switching Between Pages

To switch between different pages (registration, login, etc.), modify the `src/location_switcher.js` file to export the desired configuration. For example, to switch to the registration page, change the last line to:

```javascript
module.exports = config['registration']
```

Each JavaScript entry point in the `js-by-page` directory automatically imports its corresponding style file. The webpack configuration uses the selected entry point and HTML template to build the page.

### How It Works

1. The `location_switcher.js` file exports a configuration object with a `key` and an `htmlfile`
2. The webpack configuration uses the `key` to determine which JavaScript entry point to use
3. The JavaScript entry point imports the corresponding SCSS file
4. The webpack configuration uses the `htmlfile` to determine which HTML template to use
5. Webpack builds the page by combining the JavaScript, styles, and HTML template

## Development Workflow

1. Select the page you want to work on by updating `location_switcher.js`
2. Run `npm start` to start the development server
3. Make changes to the SCSS files in the `styles/` directory
4. The browser will automatically reload to show your changes
5. Use `npm run prettier` to format your code before committing

## Dependencies

- Webpack 5 for bundling and development server
- SASS for styling
- Prettier for code formatting
- HTML Webpack Plugin for template processing
- Mini CSS Extract Plugin for CSS extraction

## License

ISC

## Author

Danil Stepanov
