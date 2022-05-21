function success(n){
  if (n == 0){
    console.log("The player has not pressed the button")
    document.getElementById('Btn_game').style.opacity=0;
    document.getElementById('relo').style.opacity = 1;
  }
  if (n == 1){
    console.log("the player has pressed the button")
    document.getElementById('relo').style.opacity = 1;
  }
}
function reveal() {
  document.getElementById('Btn_game').style.opacity=1;
  document.getElementById('Btn_game_start').style.opacity=0;
  // Usage!
  sleep(10000).then(() => {
    document.write("The Player has not pressed the button and hence won the game! ")
    document.write("Reload the page to play again!")
    success(0)
  })

}
function press(){
  document.getElementById('Btn_game').style.opacity=0;
  a = Math.floor(Math.random() * 11);
  var random = ["You pressed it oops :)", "Oh no it's gone","Game Over :(", "Wait a little bit next time", "Wait a little bit next time", "Wait a little bit next time", "Better Luck next time", "So close yet so far","Whoopsie", "You pressed it oops :)"];
  var para = document.getElementById('para');
  var text = document.createTextNode(random[a]);
  para.appendChild(text);
  // reveal reload button
  document.getElementById('relo').style.opacity = 1;
  success(1)
}
function reload(){
  history.go(0)
}
// sleep time expects milliseconds
function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}
function sec(){
  document.write("<p>Ok You Found the Secret Secret Page. This Button will take you to the homepage. hope you enjoyed this.</p>")
  document.write("<button onclick=history.go(0) style = 'border-radius:6px; border:none;background-color:#2b7a9e;'>Reload</button>")
}
function secret(){
  document.write("<p style='color:#145665; font-size:16px;'>Created By Cyberfox863</p>")
  document.write("<p>This is the End Page There is nothing else here.</p>")
  document.write("<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><button style = 'opacity:0.21; border-radius:5px; border:none;' onclick = sec()>Secret Page 2</button>")
}