const landing = $('#landing');
const about = $('#about');
const aboutinfo = $('#about-info');
const work = $('#work');
const workinfo = $('#work-info');

const controller = new ScrollMagic.Controller();

function createSceneAbout() {
  return new ScrollMagic.Scene({
    offset: landing.height(),
    duration: aboutinfo.height() - landing.height()
  })
  .setPin("#about", {pushFollowers: false})
  .addTo(controller);
}

function createSceneWork() {
  return new ScrollMagic.Scene({
    offset: landing.height() + aboutinfo.height(),
    duration: workinfo.height() - landing.height()
  })
  .setPin("#work", {pushFollowers: false})
  .addTo(controller);
}

$(document).ready(function() {
  let sceneAbout = createSceneAbout();
  let sceneWork = createSceneWork();

  $(window).on('resize', function() {
      sceneAbout.destroy(true);
      sceneAbout = createSceneAbout();
      sceneWork.destroy(true);
      sceneWork = createSceneWork();
  });

  //handle links
  $('.about-link').click(function() {
    $('html, body').animate({scrollTop: about.offset().top}, 'slow');
  });

  $('.work-link').click(function() {
    $('html, body').animate({scrollTop: work.offset().top}, 'slow');
  });
});
