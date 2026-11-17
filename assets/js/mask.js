(function () {
  document.querySelectorAll(".mask").forEach(function (mask) {
    if (mask.hasAttribute("tabindex") || mask.closest("a")) {
      return;
    }

    mask.setAttribute("tabindex", "0");
  });
})();
