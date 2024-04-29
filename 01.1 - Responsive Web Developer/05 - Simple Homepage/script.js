document.addEventListener('DOMContentLoaded', function() {
    var switchElement = document.getElementById('switch');
    var body = document.body;
    var logo = document.getElementById('logo');
  
    switchElement.addEventListener('click', function() {
      if (body.classList.contains('dark')) {
        body.classList.remove('dark');
        switchElement.classList.remove('dark');
        switchElement.firstElementChild.src = "./images/moon_fill_light.svg";
        switchElement.lastElementChild.src = "./images/sun_fill.svg";
        logo.src = "./images/alarado-icon-homepage.svg";
        console.log('light');
      } else {
        body.classList.add('dark');
        switchElement.classList.add('dark');
        switchElement.firstElementChild.src = "./images/moon_fill.svg";
        switchElement.lastElementChild.src = "./images/sun_fill_light.svg";
        logo.src = "./images/alarado-icon-homepage-dark.svg";
        console.log('dark');
      }
    });
  });
  