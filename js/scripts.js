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

var message = function (answer){
  var rubyMessage = "Great Ruby developers can use Ruby to build anything from the back-end of a web application to command line utilities on your computer. The language is dynamic, reflective, and object oriented.";
  var cSharpMessage = "C# developers create modern applications that run on desktop computers or sophisticated servers powering modern web applications. The frameworks .Net and Mono combined allow a wide range of platforms to be targeted by applications developed with C#.";
  var cssMessage = "Front End designers are primarily concerned with how the product feels. A given design problem has no single right answer. Front End designers explore many different approaches to solving specific user problems.";
  var coinMessage = "Flip-A-Coin Path because you didn't show a preference for any one path.";

  if (answer === "ruby"){
    return rubyMessage;
  }else if (answer === "c#"){
    return cSharpMessage;
  } else if (answer === "css"){
    return cssMessage;
  }else{
    return coinMessage;
  }



}

var evaluateResults = function () {

  var numberOfQuestions = 4;
  var rails = 0;
  var cSharp = 0;
  var css = 0;


//get values from radio buttons
  for (var i =1 ; i < numberOfQuestions; i++){
    var name = "question" + i;
    var response = $("input:radio[name=" + name + "]:checked").val();

    if (response === "rails"){
       rails++;
    }else if (response === "c#"){
      cSharp++;
    }else{
      css++;
    }
  }




//evaluate responses
  if (rails > cSharp && rails > css){
    $("#quizImage").attr('src','img/rubyRails.jpg');
    return "ruby";
  } else if(cSharp > css){
    $("#quizImage").attr('src','img/cSharp.png');
    return "c#"
  } else if(css > cSharp){
    $("#quizImage").attr('src','img/css.png');
    return "css";
  } else{
    $("#quizImage").attr('src','img/undecided.jpg');
    return "coin";
  }

}



/*----INTERFACE----*/
$(document).ready(function(){
   $("form#epicodusQuiz").submit(function (event){

    switchPanel("#panel5", "#panel1");
    $(".name").text(visitorInput());
    $(".quizResults").text(message(evaluateResults()));
    $("#myModal").modal('show');
     event.preventDefault();

   });


  $("#takeQuiz").click(function(){

    $('html, body').animate({
        scrollTop: $("#targetScroll").offset().top
    }, 1000);

  });

  $(".next").click(function (){
   nextPanel(this);
  });

 $(".previous").click(function (){
   prevPanel(this);
 });



});
