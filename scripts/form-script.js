// Product Array
const products = [
    { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
    { id: "fc-2050", name: "power laces", averagerating: 4.7 },
    { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
    { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
    { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
  ];
  
  // Populate the product selection options dynamically
  window.onload = function() {
      const productSelect = document.getElementById('productName');
      
      // Loop through the product array and create options
      products.forEach(product => {
          const option = document.createElement('option');
          option.value = product.id;
          option.textContent = product.name;
          productSelect.appendChild(option);
      });
  
      // Check if the review counter is saved in localStorage
      if (!localStorage.getItem('reviewCount')) {
          localStorage.setItem('reviewCount', 0);
      }
  
      // Increment the review count when the page is loaded
      localStorage.setItem('reviewCount', parseInt(localStorage.getItem('reviewCount')) + 1);
  };
  