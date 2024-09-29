if (window.innerWidth <= 768) {
  alert(
    "This website is best viewed on a desktop. Please use a laptop or desktop for a better experience."
  );
}

document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.querySelector(".menu-icon");
  const navList = document.querySelector(".navlist");

  menuIcon.addEventListener("click", function () {
    navList.classList.toggle("open");
  });
});
document.getElementById("About_me").addEventListener("click", function () {
  alert("On developing mode, please be patience on navigation bar");
});
document.getElementById("Education_bgv").addEventListener("click", function () {
  alert("On developing mode, please be patience on navigation bar");
});
