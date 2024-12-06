// Product array
const products = [
    {
      id: "fc-1888",
      name: "flux capacitor",
      averagerating: 4.5
    },
    {
      id: "fc-2050",
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      averagerating: 5.0
    }
  ];
  
  // Populate product select dropdown dynamically
  const productSelect = document.getElementById('productName');
  
  products.forEach(product => {
    const option = document.createElement('option');
    option.value = product.id;  // Use product ID as the value
    option.textContent = product.name;  // Use product name as the text
    productSelect.appendChild(option);
  });
  
  // Increment review counter in localStorage
  window.onload = function() {
    let reviewCount = localStorage.getItem('reviewCount');
    if (!reviewCount) {
      reviewCount = 0;  // Initialize counter if not present in localStorage
    }
  
    // Increment the review counter by 1
    reviewCount++;
    localStorage.setItem('reviewCount', reviewCount);  // Save updated count to localStorage
  
    // Display the review counter on the review confirmation page
    const reviewCounter = document.getElementById('reviewCounter');
    if (reviewCounter) {
      reviewCounter.textContent = `Total reviews submitted: ${reviewCount}`;
    }
  };
  