//Sidebar
const icons = document.querySelectorAll('.icon');

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

let i = 0;

function clickNavBtn() {
  icons.forEach (icon => {
    icon.addEventListener('click', () => {
      icon.classList.toggle("open");
      if (i==0){
        openNav();
        i = 1;
      }
      else{
        closeNav();
        i = 0;
      }

  });
  });
}

//button from footer
let nameEmail = document.getElementById('exampleFormControlInput1');
let btn = document.getElementById('button_send');


function buttonClick(){

if (nameEmail.value == ""){
  buttonMouseout();
  var audio_error = new Audio('sound/sound_error.wav')
  audio_error.play();
  document.querySelector('#danger').style.visibility = 'visible';
  setTimeout(function() {
  document.querySelector('#danger').style.visibility = "hidden"; }, 2000);

}
else{
    nameEmail.value="";
    var audio_send = new Audio('sound/sound_send.wav')
    audio_send.play();
    document.getElementById('exampleFormControlTextarea1').value="";
    document.querySelector('#success').style.visibility = 'visible';
    setTimeout(function() {
    document.querySelector('#success').style.visibility = "hidden";}, 2000);

}
}

function buttonMouseover(){
    if (nameEmail.value == ""){
      document.querySelector('#warning').style.visibility = 'visible';}
}
function buttonMouseout(){
      document.querySelector('#warning').style.visibility = 'hidden';
}
btn.addEventListener('click', buttonClick);
btn.addEventListener('mouseover', buttonMouseover);
btn.addEventListener('mouseout', buttonMouseout);


document.addEventListener('keypress', (e) => {
  switch (e.key) {
    case "#":
      document.location.href = "index.html";
      break;
    case "$":
      document.location.href = "index_news.html";
      break;
    case "%":
      document.location.href = "index_dev.html";
      break;
    case "^":
      document.location.href = "index_games.html";
      break;
    case "&":
      document.location.href = "index_movie.html";
      break;
    case "*":
      document.location.href = "index_creators.html";
      break;
  }
});
