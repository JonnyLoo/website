const block1 = $('#block1');
const block2 = $('#block2');
const block3 = $('#block3');

const controller = new ScrollMagic.Controller();

function createScene() {
  return new ScrollMagic.Scene({
    offset: block1.height(),
    duration: block3.height() - block1.height()
  })
  .setPin("#block2", {pushFollowers: false})
  .addTo(controller);
}

$(document).ready(function() {
  let scene = createScene();

  $(window).on('resize', function() {
      scene.destroy(true);
      scene = createScene();
  });

  //handle links
});
