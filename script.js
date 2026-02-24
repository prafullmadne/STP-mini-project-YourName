function bookTable(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let date = document.getElementById("date").value;

    document.getElementById("msg").innerText =
        "✅ Table booked for " + name + " on " + date;
}

function showOffer() {
    alert("🔥 Today Offer: 20% OFF on Pizza!");
}