(function () {
  // Impede gestos de zoom (iOS)
  function preventGesture(e) {
    if (e.preventDefault) e.preventDefault();
  }
  document.addEventListener('gesturestart', preventGesture, { passive: false });
  document.addEventListener('gesturechange', preventGesture, { passive: false });
  document.addEventListener('gestureend', preventGesture, { passive: false });

  // Impede pinch (multi-touch)
  window.addEventListener('touchstart', function (e) {
    if (e.touches && e.touches.length > 1) {
      e.preventDefault();
    }
  }, { passive: false });

  window.addEventListener('touchmove', function (e) {
    if ((e.scale && e.scale !== 1) || (e.touches && e.touches.length > 1)) {
      e.preventDefault();
    }
  }, { passive: false });

  // Impede zoom por Ctrl + scroll
  window.addEventListener('wheel', function (e) {
    if (e.ctrlKey || e.metaKey) {
      e.preventDefault();
    }
  }, { passive: false });

  // Impede zoom por Ctrl/Cmd + + - 0
  document.addEventListener('keydown', function (e) {
    var key = e.key;
    if ((e.ctrlKey || e.metaKey) && (key === '+' || key === '-' || key === '=' || key === '0')) {
      e.preventDefault();
    }
  });

  // Mantém touch responsivo sem zoom
  var style = document.createElement('style');
  style.innerHTML = "html, body { touch-action: manipulation; -ms-touch-action: manipulation; }";
  document.head.appendChild(style);
})();