
document.addEventListener("DOMContentLoaded", function () {

    /* ================= BOOKING ================= */

    const bookingForm = document.getElementById("bookingForm");
    const bookingMessage = document.getElementById("bookingMessage");

    bookingForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const checkin = document.getElementById("checkin").value;
        const checkout = document.getElementById("checkout").value;
        const guests = document.getElementById("guests").value;

        if (!checkin || !checkout || !guests) {

            bookingMessage.innerText =
                "Please fill all booking details.";

            return;
        }

        if (checkout <= checkin) {

            bookingMessage.innerText =
                "Check-out date must be after check-in date.";

            return;
        }

        bookingMessage.innerText =
            "✓ Rooms are available! Your booking request has been received.";

        bookingForm.reset();

    });


});


/* ================= ROOM POPUP ================= */

function showRoom(name, price, description) {

    document.getElementById("modalRoomName").innerText = name;

    document.getElementById("modalRoomPrice").innerText = price;

    document.getElementById("modalRoomDescription").innerText = description;

    document.getElementById("roomModal").style.display = "flex";
}


/* ================= CLOSE POPUP ================= */

function closeRoom() {

    document.getElementById("roomModal").style.display = "none";
}

/* ================= CONTACT FORM ================= */

const contactForm = document.getElementById("contactForm");

const contactResponse =
    document.getElementById("contactResponse");


contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    contactResponse.innerText =
        "✓ Thank you! Your message has been received.";

    contactForm.reset();

});

/* ================= NAVIGATION BUTTONS ================= */

function goToBooking() {

    document.querySelector(".booking").scrollIntoView({
        behavior: "smooth"
    });

}


function goToRooms() {

    document.getElementById("rooms").scrollIntoView({
        behavior: "smooth"
    });

}
function toggleMenu() {
    const navLinks = document.getElementById("navLinks");

    navLinks.classList.toggle("active");
}
/* SCROLL REVEAL ANIMATION */

const revealElements = document.querySelectorAll(
    ".intro, .room-card, .gallery-item, .dining, .spa, .contact"
);

function revealOnScroll() {
    revealElements.forEach(function (element) {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight - 100) {
            element.classList.add("show");
        }
    });
}

revealElements.forEach(function (element) {
    element.classList.add("reveal");
});

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();
/* ROOM RESERVATION */

let selectedRoom = "";

function showRoom(name, price, description) {

    selectedRoom = name;

    document.getElementById("modalRoomName").innerText = name;
    document.getElementById("modalRoomPrice").innerText = price;
    document.getElementById("modalRoomDescription").innerText = description;

    document.getElementById("roomModal").style.display = "flex";
}

function closeRoom() {
    document.getElementById("roomModal").style.display = "none";
}

function bookSelectedRoom() {

    closeRoom();

    const roomSelect = document.getElementById("roomType");

    roomSelect.value = selectedRoom;

    document.querySelector(".booking").scrollIntoView({
        behavior: "smooth"
    });
}
/* THEME TOGGLE */

function toggleTheme() {

    document.body.classList.toggle("light-theme");

    const themeButton = document.getElementById("themeButton");

    if (document.body.classList.contains("light-theme")) {
        themeButton.innerText = "🌙";
        localStorage.setItem("theme", "light");
    } else {
        themeButton.innerText = "☀️";
        localStorage.setItem("theme", "dark");
    }
}
if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light-theme");
    document.getElementById("themeButton").innerText = "🌙";
}




