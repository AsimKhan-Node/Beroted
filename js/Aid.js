

setTimeout(() => {
  document.querySelector(".loader").style.transform = "translateY(-100%)";
  document.querySelector(".loader").style.opacity = ".6";
}, 2000); 


const buttons = document.querySelectorAll('.faq-toggle');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    buttons.forEach(btn => {
      if (btn !== button) {
        btn.parentNode.classList.remove('active');
      }
    });
    button.parentNode.classList.toggle('active');
  });
});


var sidemenu = document.getElementById("sidemenu");

function openmenu(){
  sidemenu.style.left = "0";
}
function closemenu(){
  sidemenu.style.left = "-100%";
}

