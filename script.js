
let cartCount = 0;
let cartTotal = 0;

// Add to Cart
function addToCart(name, price) {
    cartCount++;
    cartTotal += price;

    document.getElementById("cartCount").innerText = cartCount;
    document.getElementById("cartTotal").innerText = cartTotal;

    alert(name + " added to your cart!");
}

// Mobile Navigation
function toggleMenu() {
    document.getElementById("navLinks").classList.toggle("show");
}

// Close mobile menu after clicking a link
document.querySelectorAll("#navLinks a").forEach(link => {
    link.addEventListener("click", () => {
        document.getElementById("navLinks").classList.remove("show");
    });
});

// Reservation Form
document.getElementById("bookingForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let guests = document.getElementById("guests").value;

    document.getElementById("bookingMessage").innerText =
        "Thank you " + name + "! Your table request for " +
        guests + " guests has been received.";

    this.reset();
});
