/*----BUSINESS LOGIC----*/
//move from panel to panel.
var switchPanel = function (currentPanel, nextPanel){
  $(currentPanel).hide();
  $(nextPanel).fadeIn();
}

// Next panel
var nextPanel = function (thisButton) {
  var lastPanel = 5;
  var thisPanelID = $(thisButton).parent().parent().attr("id");
  thisPanelID = parseInt(thisPanelID.charAt(thisPanelID.length-1));
  var nextPanelID = "#panel" + (thisPanelID + 1);



  if (thisPanelID < lastPanel){
    $($(thisButton).parent().parent()).hide();
    $(nextPanelID).fadeIn();
  }
}


var prevPanel = function (thisButton) {
  var thisPanelID = $(thisButton).parent().parent().attr("id");
  thisPanelID = parseInt(thisPanelID.charAt(thisPanelID.length-1));
  var nextPanelID = "#panel" + (thisPanelID - 1);



  if (thisPanelID > 1){
    $($(thisButton).parent().parent()).hide();
    $(nextPanelID).fadeIn();
  }
}

var visitorInput = function (){
    var visitor = $("#visitor").val();
    if(!visitor.match(/^[A-Za-z]+$/)){
      return visitor = "Silly Goose";
    }
    return visitor;
}


var evaluateResults = function () {

  var q1Response = $("#question1").val();
  var q2Response = $("#question2").val();
  var q3Response = $("#question3").val();

  var rails = 0;
  var cSharp = 0;
  var css = 0;

  var rubyMessage = "Great Ruby developers can use Ruby to build anything from the back-end of a web application to command line utilities on your computer. The language is dynamic, reflective, and object oriented.";
  var cSharpMessage = "C# developers create modern applications that run on desktop computers or sophisticated servers powering modern web applications. The frameworks .Net and Mono combined allow a wide range of platforms to be targeted by applications developed with C#.";
  var cssMessage = "Front End designers are primarily concerned with how the product feels. A given design problem has no single right answer. Front End designers explore many different approaches to solving specific user problems."


  if (q1Response === "rails"){
     rails++;
  }else if (q1Response === "c#"){
    cSharp++;
  }else{
    css++;
  }

  if (q2Response === "rails"){
     rails++;
  }else if (q2Response === "c#"){
    cSharp++;
  }else{
    css++;
  }

  if (q3Response === "rails"){
     rails++;
  }else if (q3Response === "c#"){
    cSharp++;
  }else{
    css++;
  }


  if (rails > cSharp && rails > css){
    $("#quizImage").attr('src','img/rubyRails.jpg');
    return "Ruby on Rails Path. " + rubyMessage;
  } else if(cSharp > css){
    $("#quizImage").attr('src','img/cSharp.png');
    return "C# .Net Path. " + cSharpMessage;
  } else if(css > cSharp){
    $("#quizImage").attr('src','img/css.png');
    return "CSS Design Path. " + cssMessage;
  } else{
    $("#quizImage").attr('src','img/undecided.jpg');
    return "Flip-A-Coin Path because you didn't show a preference for any one path.";
  }

}



/*----INTERFACE----*/
$(document).ready(function(){
   $("form#epicodusQuiz").submit(function (event){

    switchPanel("#panel5", "#panel1");
    $(".name").text(visitorInput());
    $(".quizResults").text(evaluateResults());
    $("#myModal").modal('show');
     event.preventDefault();

   });


  $("#takeQuiz").click(function(event){

    event.preventDefault();
    $('html, body').animate({
        scrollTop: $("#footer").offset().top
    }, 1000);

  });

  $(".next").click(function (){
   nextPanel(this);
  });

 $(".previous").click(function (){
   prevPanel(this);
 });



});
