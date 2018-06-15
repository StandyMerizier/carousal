//clicks two buttons
//click next and they go forward
//click on back and they go back
//img source is cycling based on clicks
//img changes

//event listner 1
//event listner 2

//function Next
//move to the next img src
//update the img with that source

//function back
//move to the previous img src
//update the img with that src

var naruto = ["kakashi.jpeg", "gaara.png", "naruto.jpeg", "hinata_hyuga.png", "neji.jpeg", "orochimaru.png", "sakura.jpeg", "sasuke.jpeg", "zabuza.png"];
var count = 0;

$(document).ready(function(){
  $('#next').on('click', forward)
  $('#previous').on('click', previous)

  function forward (){
    count++;
    if (count == naruto.length){
      count = 0;
    }
    $('img').attr('src', naruto[count])
  }

  function previous (){
    count--;
    if (count == -1){
      count = naruto.length-1;
    }
    $('img').attr('src', naruto[count])
  }

})
