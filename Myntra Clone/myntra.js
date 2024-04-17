
document.addEventListener('DOMContentLoaded', function() {
    const productId = getProductIdFromUrl();
    displayProductDetails(productId);
  });
  
  function getProductIdFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id');
  }
  
  function displayProductDetails(productId) {
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