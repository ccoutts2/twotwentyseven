// Optional JavaScript for interactive features
// This file is included in the development and build output

console.log('Shopify Liquid Test - Ready!');

// Example: Add interactivity if needed
document.addEventListener('DOMContentLoaded', () => {
  
  const products = document.querySelectorAll('.ProductCard');

  products.forEach((product) => {
    const minusQuantityButton = product.querySelector('#minus-quantity');
    const addQuantityButton = product.querySelector('#add-quantity');
    const quantityAmount = product.querySelector('#quantity');
    const quantityAmountValue = product.querySelector('.Product__quantityValue');

    let count = 1;

    quantityAmount.textContent = count;

    minusQuantityButton.addEventListener("click", () => {
      if (count > 1) {
        quantityAmount.textContent = count -= 1;
        quantityAmountValue.value = count;
      }
    })

    addQuantityButton.addEventListener("click", () => {
     quantityAmount.textContent = count += 1;
     quantityAmountValue.value = count;
    })
  })
});
