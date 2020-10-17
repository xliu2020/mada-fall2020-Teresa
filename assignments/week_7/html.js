$(document).ready(function() {
    
  setTimeout(function(){
      $("body").append("<div id='content'></div>" );
      $("div#content").html("Hello")
      $("body").prepend("<h1>this webpage is dynamically changed.</h1>")
  },5000);





    var myFavColor="blue";

    var newHTMLCode = 
    `<ul>
        <li>${myFavColor}</li>
        <li>apple red</li>
        <li> </li>
    </ul>`;

    $("body").append(newHTMLCode);
    


    $("button#create-box").click(function(){
        $("h1").hide();

        $("body").append(`<div style='width:100px; height:100px; border:1px black solid></div>`);
    });


});
