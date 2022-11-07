window.onscroll = () => {
  if (window.pageYOffset > 100) {
    document.getElementById("header").classList.add("fixed");
    document.getElementById("header").classList.remove("reverseFixed");
  } else {
    document.getElementById("header").classList.add("reverseFixed");
    document.getElementById("header").classList.remove("fixed");
  }
};
