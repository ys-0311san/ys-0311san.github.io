// 触る画面（スマホ・タブレット）では、店先の中が画面に 6 割入った時にシャッターを上げる。一度上げたら下ろさない。
(function () {
  if (!window.matchMedia || !window.matchMedia("(hover: none)").matches) return;
  if (!("IntersectionObserver" in window)) return;
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      var store = entry.target.closest(".storefront");
      if (store) store.classList.add("is-open");
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.6 });
  document.querySelectorAll(".storefront__interior").forEach(function (interior) {
    observer.observe(interior);
  });
})();
