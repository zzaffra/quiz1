$(document).ready(function () {
  // Auto-rotate overlay warna transparan di atas background motif
  const overlayColors = ['rgba(0,0,0,0.2)', 'rgba(255,255,255,0.1)', 'rgba(255,165,0,0.2)'];
  let index = 0;

  // Tambahkan div overlay jika belum ada
  if ($('#bg-overlay').length === 0) {
    $('body').append('<div id="bg-overlay"></div>');
  }

  // Styling overlay via jQuery
  $('#bg-overlay').css({
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: -1,
    pointerEvents: 'none',
    transition: 'background-color 1s ease'
  });

  // Ganti warna overlay setiap 5 detik
  setInterval(() => {
    $('#bg-overlay').css('background-color', overlayColors[index]);
    index = (index + 1) % overlayColors.length;
  }, 5000);
});