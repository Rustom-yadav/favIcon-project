const btns = document.querySelectorAll(".favorite-icon");

btns.forEach(btn => {
  btn.addEventListener("click", () => {

    if (btn.classList.contains("filled")) {
      // already filled → remove
      btn.classList.remove("filled");
      btn.innerHTML = "&#9825;";
    } else {
      // not filled → add
      btn.classList.add("filled");
      btn.innerHTML = "&#10084;";
    }

  });
});

