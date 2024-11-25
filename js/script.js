/*funcao de ocultar menu*/
function togglehiddenBar() {
    var hiddenBar = document.getElementById("hiddenBar");
   if (hiddenBar.style.display === "none") {
        hiddenBar.style.display = "block";
    } else {
        hiddenBar.style.display = "none";
    }
}
/*funcao de trocar imagem*/
var imageArray = ["../svg/eye.svg", "../svg/eye-slash.svg"];
var currentImage = 0;

function changeImage() {
  var image = document.getElementById("eye");
  currentImage++;
  if (currentImage >= imageArray.length) {
    currentImage = 0;
  }
  image.setAttribute("src", imageArray[currentImage]);
}