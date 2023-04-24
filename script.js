const form = document.getElementById("form");
const text = document.getElementById("text");
const btn = document.getElementById("btn");
const img = document.getElementById("qr-code");

async function generateQR() {
    event.preventDefault();

    btn.setAttribute("disabled", true);
    btn.innerHTML = "Generating...";

    img.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${text.value.trim()}`;
    img.classList.remove("hidden");

    form.reset();

    btn.removeAttribute("disabled");
    btn.innerHTML = "Generate";
}
