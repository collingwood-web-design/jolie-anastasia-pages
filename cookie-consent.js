(function () {
  var KEY = "ja-cookie-consent";
  try {
    if (localStorage.getItem(KEY)) return;
  } catch (e) {
    return;
  }

  var banner = document.createElement("div");
  banner.className = "cookie-banner";
  banner.setAttribute("role", "dialog");
  banner.setAttribute("aria-label", "Cookie notice");
  banner.innerHTML =
    '<div class="cookie-banner-inner">' +
    '<p>This site uses cookies from embedded players like Spotify, YouTube and Instagram. See our <a href="privacy">Privacy Policy</a> for details.</p>' +
    '<button type="button" class="btn btn-solid">Got it</button>' +
    "</div>";
  document.body.appendChild(banner);
  requestAnimationFrame(function () {
    requestAnimationFrame(function () {
      banner.classList.add("is-visible");
    });
  });

  banner.querySelector("button").addEventListener("click", function () {
    try {
      localStorage.setItem(KEY, "1");
    } catch (e) {}
    banner.classList.remove("is-visible");
    setTimeout(function () {
      banner.remove();
    }, 360);
  });
})();
