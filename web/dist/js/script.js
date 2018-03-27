const landing = $('#landing');
const about = $('#about');
const aboutinfo = $('#about-info');
const work = $('#work');
const workinfo = $('#work-info');
const skills = $('#skills');
const skillsinfo = $('#skills-info');
const contact = $('#contact');

const facebook = $('.fa-facebook');
const linkedin = $('.fa-linkedin');
const github = $('.fa-github-square');
const instagram = $('.fa-instagram');

const controller = new ScrollMagic.Controller();

function createSceneAbout() {
  return new ScrollMagic.Scene({
    offset: landing.height(),
    duration: aboutinfo.height() - landing.height()
  }).setPin("#about", { pushFollowers: false }).addTo(controller);
}

function createHexagonScene() {
  return new ScrollMagic.Scene({
    offset: landing.height(),
    duration: aboutinfo.height() - landing.height()
  }).setPin(".hexagon", { pushFollowers: false }).addTo(controller);
}

function createSceneWork() {
  return new ScrollMagic.Scene({
    offset: landing.height() + aboutinfo.height(),
    duration: workinfo.height() - landing.height()
  }).setPin("#work", { pushFollowers: false }).addTo(controller);
}

function createSceneSkills() {
  return new ScrollMagic.Scene({
    offset: landing.height() + aboutinfo.height() + workinfo.height(),
    duration: skillsinfo.height() - landing.height()
  }).setPin("#skills", { pushFollowers: false }).addTo(controller);
}

$(document).ready(function () {
  let sceneAbout = createSceneAbout();
  let sceneHex = createHexagonScene();
  let sceneWork = createSceneWork();
  let sceneSkills = createSceneSkills();

  $(window).on('resize', function () {
    sceneAbout.destroy(true);
    sceneAbout = createSceneAbout();
    sceneHex.destroy(true);
    sceneHex = createHexagonScene();
    sceneWork.destroy(true);
    sceneWork = createSceneWork();
    sceneSkills.destroy(true);
    sceneSkills = createSceneSkills();
  });

  //handle links
  $('.about-link').click(function () {
    $('html, body').animate({ scrollTop: about.offset().top }, 'slow');
  });

  $('.work-link').click(function () {
    $('html, body').animate({ scrollTop: work.offset().top }, 'slow');
  });

  $('.skills-link').click(function () {
    $('html, body').animate({ scrollTop: skills.offset().top }, 'slow');
  });

  $('.contact-link').click(function () {
    $('html, body').animate({ scrollTop: contact.offset().top }, 'slow');
  });
});