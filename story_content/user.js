function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6Wpbto5IkV9":
        Script1();
        break;
      case "6ee27ccBR5R":
        Script2();
        break;
  }
}

function Script1()
{
  if(!window.bgMusic).{
window.bgMusic = new Audio("story_content/bgmusic.mp3");
window.bgMusic.loop =false;
window.bgMusic.volume = 0.3;
window.bgMusic.play();
}
}

function Script2()
{
  if (window.bgMusic) {
window.bgMusic.muted = !window.bgMusic.muted;
}
}

