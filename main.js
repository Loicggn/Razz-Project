let menuShow = false

function openClose() {
  if (menuShow) {
    closeNav()
    menuShow = false
  } else {
    openNav()
    menuShow = true
  }
}

function openNav() {
  document.getElementById("mySidepanel").style.height = "250px";
  document.getElementById("mySidepanel").style.paddingTop = "60px";
}

/* Set the width of the sidebar to 0 (hide it) */
function closeNav() {
  document.getElementById("mySidepanel").style.height = "0px";
  document.getElementById("mySidepanel").style.paddingTop = "0px";
}

/*The scrollTop method is already existing, it is why it had not worked, but you can right a new method called scrolltop */
function scrolltop() {
  window.scrollTo(0, 0);
};

