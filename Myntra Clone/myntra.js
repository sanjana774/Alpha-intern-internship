// product.js
// This script handles displaying product details based on the product ID

document.addEventListener('DOMContentLoaded', function() {
    const productId = getProductIdFromUrl();
    displayProductDetails(productId);
  });
  
  function getProductIdFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id');
  }
  
  function displayProductDetails(productId) {
    // Here you would fetch product details from a database or API based on the productId
    // For this example, let's just display a hardcoded product
    const product = {
      id: productId,
      name: 'Product 1',
      price: '$50',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    };
  
    const productContainer = document.getElementById('product-details');
    productContainer.innerHTML = `
      <h2>${product.name}</h2>
      <p><strong>Price:</strong> ${product.price}</p>
      <p><strong>Description:</strong> ${product.description}</p>
    `;
  }