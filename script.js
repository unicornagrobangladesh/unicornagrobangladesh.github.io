const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    }

    )
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    }

    )
}

// script.js

document.addEventListener("DOMContentLoaded", function () {
    const featureBoxes = document.querySelectorAll(".fe-box h6");
    const products = document.querySelectorAll(".product");

    featureBoxes.forEach(box => {
        box.addEventListener("click", function () {
            let category = this.getAttribute("data-category");

            products.forEach(product => {
                if (category === "all") {
                    product.style.display = "block"; // Show all products
                } else {
                    let productCategory = product.getAttribute("data-category");
                    if (productCategory === category) {
                        product.style.display = "block"; // Show matching category
                    } else {
                        product.style.display = "none"; // Hide non-matching category
                    }
                }
            });
        });
    });
});
