(function () {
  var list = document.getElementById("article-list");
  if (!list) return;
  var buttons = document.querySelectorAll("[data-filter]");
  var cards = list.querySelectorAll("[data-verdict]");
  var empty = document.getElementById("filter-empty");

  function apply(value) {
    var visible = 0;
    cards.forEach(function (card) {
      var show = value === "tous" || card.getAttribute("data-verdict") === value;
      card.classList.toggle("is-hidden", !show);
      if (show) visible += 1;
    });
    buttons.forEach(function (btn) {
      btn.setAttribute("aria-pressed", btn.getAttribute("data-filter") === value ? "true" : "false");
    });
    if (empty) empty.style.display = visible ? "none" : "block";
  }

  buttons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      apply(btn.getAttribute("data-filter"));
    });
  });
})();
