var n=document.querySelectorAll("button").length;
for(var i=0;i<n;i++)
{
  document.querySelectorAll("button")[i].addEventListener("click",function(){

    var btn=(this.innerHTML);
    switch(btn)
    {
      case "w":
      var audio=new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
      case "a":
      var audio=new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
      case "s":
      var audio=new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
      case "d":
      var audio=new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
      case "j":
      var audio=new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
      case "k":
      var audio=new Audio("sounds/snare.mp3");
      audio.play();
      break;
      case "l":
      var audio=new Audio("sounds/tom-1.mp3");
      audio.play();
      break;

    }
  });
}
document.addEventListener("keypress",function()
{
  switch(event.key) 
  {
    case "w":
    var audio=new Audio("sounds/tom-1.mp3");
    audio.play();
    break;
    case "a":
    var audio=new Audio("sounds/tom-2.mp3");
    audio.play();
    break;
    case "s":
    var audio=new Audio("sounds/tom-3.mp3");
    audio.play();
    break;
    case "d":
    var audio=new Audio("sounds/tom-4.mp3");
    audio.play();
    break;
    case "j":
    var audio=new Audio("sounds/kick-bass.mp3");
    audio.play();
    break;
    case "k":
    var audio=new Audio("sounds/snare.mp3");
    audio.play();
    break;
    case "l":
    var audio=new Audio("sounds/tom-1.mp3");
    audio.play();
    break;

  }

});
