// Arrays to store products data
let products = [];

// Get DOM elements
const addProductButton = document.getElementById('add-product');
const sortByPriceButton = document.getElementById('sort-by-price');
const sortByRatingButton = document.getElementById('sort-by-rating');
const barGraphsContainer = document.getElementById('bar-graphs');

// Function to update the bar graphs based on products data
function updateBarGraphs() {
    barGraphsContainer.innerHTML = ''; // Clear previous bars

    // Create bars for each product
    products.forEach(product => {
        const priceBar = document.createElement('div');
        priceBar.classList.add('bar', 'price-bar');
        priceBar.style.height = `${product.price * 10}px`; // Multiply by 10 for visibility
        priceBar.textContent = `$${product.price}`;

        const ratingBar = document.createElement('div');
        ratingBar.classList.add('bar', 'rating-bar');
        ratingBar.style.height = `${product.rating * 50}px`; // Multiply by 50 for visibility
        ratingBar.textContent = `${product.rating}⭐`;

        barGraphsContainer.appendChild(priceBar);
        barGraphsContainer.appendChild(ratingBar);
    });
}

// Function to add product to the list
function addProduct() {
    const productName = document.getElementById('product-name').value;
    const productPrice = parseFloat(document.getElementById('product-price').value);
    const productRating = parseFloat(document.getElementById('product-rating').value);

    // Validation: Ensure all fields are filled and valid
    if (!productName || isNaN(productPrice) || isNaN(productRating) || productRating < 1 || productRating > 5) {
        alert("Please enter valid product data.");
        return;
    }

    const product = {
        name: productName,
        price: productPrice,
        rating: productRating
    };

    // Add the new product to the array
    products.push(product);
    updateBarGraphs();
}

// Function to sort products by price
function sortByPrice() {
    products.sort((a, b) => a.price - b.price);
    updateBarGraphs();
}

// Function to sort products by rating
function sortByRating() {
    products.sort((a, b) => b.rating - a.rating); // Sort by highest rating
    updateBarGraphs();
}

// Add event listeners
addProductButton.addEventListener('click', addProduct);
sortByPriceButton.addEventListener('click', sortByPrice);
sortByRatingButton.addEventListener('click', sortByRating);
