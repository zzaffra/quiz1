$(document).ready(function () {
  const overlayColors = ['rgba(0,0,0,0.2)', 'rgba(255,255,255,0.1)', 'rgba(255,165,0,0.2)'];
  let index = 0;

  if ($('#bg-overlay').length === 0) {
    $('body').append('<div id="bg-overlay"></div>');
  }

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

  setInterval(() => {
    $('#bg-overlay').css('background-color', overlayColors[index]);
    index = (index + 1) % overlayColors.length;
  }, 1000);

<script>
  setInterval(() => {
    document.body.classList.add("glow");
    document.body.style.backgroundColor = pastelColors[currentIndex];
    currentIndex = (currentIndex + 1) % pastelColors.length;

    setTimeout(() => {
      document.body.classList.remove("glow");
    }, 500);
  }, 1000);
</script>

});
