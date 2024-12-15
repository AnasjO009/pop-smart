(function () {
  var popupContainer = document.getElementById("popup-container");
  var closePopup = document.getElementById("close-popup");
  var sizeSelect = document.getElementById("size-select");
  var priceDisplay = document.getElementById("product-price");
  var addButton = document.querySelector("salla-add-product-button");

  sizeSelect.addEventListener("change", function () {
    var selectedOption = sizeSelect.options[sizeSelect.selectedIndex];
    if (selectedOption.value) {
      priceDisplay.textContent =
        "السعر: " + selectedOption.getAttribute("data-price") + " ر.س";
      addButton.setAttribute("amount", selectedOption.getAttribute("data-price"));
    }
  });

  closePopup.addEventListener("click", function () {
    popupContainer.style.display = "none";
  });

  setTimeout(function () {
    popupContainer.style.display = "block";
  }, 5000);
})();
