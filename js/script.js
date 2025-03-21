document.addEventListener("DOMContentLoaded", function () {
  const imageElements = document.querySelectorAll(".bg-image img");
  const modalImage = document.getElementById("zoomImage");

  imageElements.forEach((img) => {
    img.addEventListener("click", function () {
      const highResImage = img.getAttribute("data-bs-img");
      modalImage.src = highResImage;
    });
  });
});

const contactFormElement = document.getElementById("contact-form");

contactFormElement.addEventListener("submit", function (e) {
  e.preventDefault();

  alert("Thank you for reaching out! We will get back to you shortly.");
  document.getElementById("contact-form").reset();
});
