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
