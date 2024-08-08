document.addEventListener("DOMContentLoaded", function () {
    const checkoutTableBody = document.querySelector("#checkout-table tbody");
    const checkoutTotalPrice = document.getElementById("checkout-total-price");
    const checkoutForm = document.getElementById("checkout-form");

    // Retrieve cart items from localStorage
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Function to update checkout table
    function updateCheckoutTable() {
        checkoutTableBody.innerHTML = ""; // Clear existing rows

        let totalPrice = 0;
        cart.forEach((item) => {
            totalPrice += item.price;
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${item.name}</td>
                <td>${item.quantity}</td>
                <td>Rs${item.price.toFixed(2)}</td>
            `;
            checkoutTableBody.appendChild(row);
        });

        checkoutTotalPrice.textContent = `Rs${totalPrice.toFixed(2)}`;
    }

    // Function to handle form submission
    checkoutForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const formData = new FormData(checkoutForm);
        const customerDetails = {
            name: formData.get("name"),
            email: formData.get("email"),
            address: formData.get("address"),
            paymentMethod: formData.get("payment-method"),
        };

        // Process the order (you can add your logic here)
        alert(`Thank you for your order, ${customerDetails.name}! Your order is being processed.`);

        // Clear the cart and localStorage
        localStorage.removeItem("cart");

        // Redirect to a thank you page or clear the form
        checkoutForm.reset();
    });

    // Initialize the checkout table with cart items
    updateCheckoutTable();
});


