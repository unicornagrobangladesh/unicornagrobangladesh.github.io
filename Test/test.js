// script.js

document.addEventListener('DOMContentLoaded', function () {
    const categoryLinks = document.querySelectorAll('.category');
    const products = document.querySelectorAll('.product');

    categoryLinks.forEach(link => {
        link.addEventListener('click', function () {
            const category = link.getAttribute('data-category');

            // Show all products if "all" is clicked
            if (category === 'all') {
                products.forEach(product => {
                    product.style.display = 'block';
                });
            } else {
                // Filter products by category
                products.forEach(product => {
                    if (product.getAttribute('data-category') === category) {
                        product.style.display = 'block';
                    } else {
                        product.style.display = 'none';
                    }
                });
            }

            // Highlight the active category
            categoryLinks.forEach(link => {
                link.classList.remove('active');
            });
            link.classList.add('active');
        });
    });
});
