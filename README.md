# TestoMax - TestoBoosting Website

A clean, modern website for testosterone optimization with integrated revenue generation features.

## Features

- **Clean UI Design**: Modern, responsive layout optimized for all devices
- **Revenue Generation**:
  - Newsletter signup for email marketing
  - Product recommendations with affiliate tracking
  - E-commerce ready product cards
- **Node.js Server**: Express-based server for production deployment
- **SVG Icons**: Lightweight, scalable vector graphics
- **Gradient Backgrounds**: Modern hero sections without image dependencies

## Getting Started

### Prerequisites

- Node.js 14.0.0 or higher
- npm (comes with Node.js)

### Installation

1. Clone the repository
```bash
git clone https://github.com/MaxeLBerger/TestoMax.git
cd TestoMax
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm start
```

4. Open your browser and navigate to:
```
http://localhost:3000
```

## Project Structure

```
TestoMax/
├── public/                # Static assets
│   ├── css/               # Stylesheets
│   ├── js/                # JavaScript files
│   ├── images/            # Images and icons
│   └── *.html             # HTML pages
├── server/                # Server-side logic (optional)
├── server.js              # Express server entry point
├── package.json           # Node.js dependencies
└── README.md              # This file
```

## Revenue Generation Features

### Newsletter Signup
- Located prominently on the homepage
- Email validation and submission tracking
- Ready for integration with email marketing services

### Product Recommendations
- Three featured products with pricing
- Click tracking for affiliate links
- Expandable for full e-commerce integration

## Development

### Available Scripts

- `npm start` - Start the production server
- `npm run dev` - Start the development server (same as start)

### Adding Products

Edit `index.html` and add more product cards in the `.products-grid` section. Each product should include:
- Product image (SVG placeholder or actual image)
- Product name
- Description
- Price
- "Jetzt kaufen" (Buy Now) button

### Customizing Styles

- Primary color: `#e8501b` (defined in `css/style.css` as `--primary-color`)
- Secondary color: `#111` (defined as `--secondary-color`)
- Update CSS variables in `:root` to customize the theme

## Deployment

The site can be deployed to any Node.js hosting platform:

- Heroku
- DigitalOcean
- AWS Elastic Beanstalk
- Vercel
- Netlify

Make sure to set the `PORT` environment variable if required by your hosting provider.

## License

MIT License - see LICENSE file for details
