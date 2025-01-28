# Amazon Clone Project

This project is an **Amazon Clone** that replicates key features of the popular e-commerce platform. It is built with a **modular structure** for frontend and backend development, allowing seamless integration and scalability.

## File Structure Overview

### Frontend HTML Files
- `checkout.html`: Checkout page layout.
- `index.html`: Homepage of the application.
- `orders.html`: Orders summary page.

---

### Images
- **`icons/`**: Icons used throughout the application.
- **`products/`**: Images of the products listed on the platform.
- **`ratings/`**: Images for displaying product ratings visually.
- Logo and Assets:
  - `amazon-logo-white.png`
  - `amazon-logo.png`
  - `amazon-mobile-logo-white.png`
  - `amazon-mobile-logo.png`
  - `appliance-instructions.png`
  - `appliance-warranty.png`
  - `clothing-size-chart.png`

---

### Jasmine Standalone
- **`dist/`** and **`lib/jasmine-5.1.1/`**: Jasmine testing framework setup.
- Testing Scripts:
  - `boot0.js`, `boot1.js`: Jasmine boot files.
  - `jasmine-html.js`: HTML support for Jasmine.
  - `jasmine.css`: CSS for Jasmine.
  - `moneyTest.js`: Unit tests for money-related functions.
  - `Test.html`: Entry point for running Jasmine tests.

---

### Scripts
#### Checkout
- **Dist Compiled Files**:
  - `cheoutHeader.js`: Handles the checkout page header.
  - `orderSummary.js`: Displays the order summary.
  - `paymentSummary.js`: Displays payment details and summary.
- **Development Files**:
  - `checkout.dev.js`: Development version for checkout functionality.
  - `product.dev.js`: Development version for product functionality.

#### Utilities
- **Utility Scripts**:
  - `formatprice.js`: Formats prices for display.
  - `checkout.js`: Handles checkout-related logic.
  - `product.js`: Manages product-related operations.

---

### Styles
#### Pages
- **`checkout/`**:
  - `checkout-header.css`: Styling for the checkout page header.
  - `checkout.css`: Styling for the checkout page.
  - `amazon.css`: Styling for the Amazon clone platform.
  - `orders.css`: Styling for order details pages.
  - `tracking.css`: Styling for order tracking page.

#### Shared
- **`amazon-header.css`**: Styling for the Amazon header component.
- **`general.css`**: General styling used across pages.

---



## Features

- **Dynamic Product Listing**: Products are fetched dynamically from `products.json` and displayed with their images, prices, and ratings.
- **Cart Management**: Add, update, and remove items from the cart.
- **Order Summary**: View the summary of items before finalizing the purchase.
- **Responsive Design**: Mobile-friendly with optimized layout for smaller screens.
- **Checkout and Payment**: Complete payment and order confirmation.

---

## Technologies Used

### Frontend
- **HTML5**
- **CSS3**
- **JavaScript (ES6)**

### Testing
- **Jasmine** for unit testing.

---
