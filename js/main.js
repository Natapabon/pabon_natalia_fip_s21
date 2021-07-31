(() => {
  const button = document.querySelector("#button"),
        burgerCon = document.querySelector("#burgerCon"),
        navLinks = burgerCon.querySelectorAll("a");

        videoPlay = document.querySelector(".bannerVideo")
        audioPlay = document.querySelector("#playAudio")

  //functions go in the middle (our app instructions)
  function showNavigation() {
    //turn the button for some UX microinteractivity
    button.classList.toggle("expanded");

    //show the mobile navigation manu classList
    burgerCon.classList.toggle("slideToggle");
  }

  //play video function in OUR BEER page
  function playAudio() {
    if (videoPlay.muted) {
      videoPlay.muted = false;
      audioPlay.textContent = "■ Mute audio"
    }
    else {
      videoPlay.muted = true;
      audioPlay.textContent = "▶ Play audio"
    }
  }


  //event handling goes at the bottom
  button.addEventListener("click", showNavigation);

  for (link of navLinks) {
    link.addEventListener("click", showNavigation);
  }

  //event listener for audioPlay
  audioPlay.addEventListener("click", playAudio);


})();
