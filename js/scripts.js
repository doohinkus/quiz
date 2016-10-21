/*----BUSINESS LOGIC----*/
//move from panel to panel. There's gotta be a better way!!!!
var switchPanel = function (currentPanel, nextPanel){
  //hide current panel
  $(currentPanel).slideUp();
  //move to next one
  $(nextPanel).slideDown();
}
var visitorInput = function (){
  //Make sure first input only contains letters.
  //If it doesn't, call visitor silly Goose
    var visitor = $("#visitor").val();
    if(!visitor.match(/^[A-Za-z]+$/)){
      return visitor = "Silly Goose";
    }
    return visitor;
}
var evaluateResults = function () {
//Get data from form
  var q1Response = $("#question1").val();
  var q2Response = $("#question2").val();
  var q3Response = $("#question3").val();

  var rails = 0;
  var cSharp = 0;
  var css = 0;

//Weight responses
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
//Use values to determine which track to suggest
  //Is it rails?
  if (rails > cSharp && rails > css){
    return "Ruby on Rails Path";
  //Is it c#?
  } else if(cSharp > css){
    return "C# .Net Path";
  //Is it css?
  } else if(css > cSharp){
    return "CSS Design Path";
   //You're fullstack, but was rails higher or cSharp
  } else{
    return "Flip-A-Coin Path because you didn't show a preference for any one path";
  }

}



/*----INTERFACE----*/
$(document).ready(function(){

  //Evaluate and display quiz results
   $("form#epicodusQuiz").submit(function (event){
  //move panel back to startQuiz
  console.log(visitorInput());
    switchPanel("#panel4", "#panel1");
  //Add results to modal, then trigger modal

    $(".name").text(visitorInput());
    console.log(visitorInput());
    $(".quizResults").text(evaluateResults());
    $("#myModal").modal('show');
     event.preventDefault();
   });

   //Quiz Button Takes User to Quiz Section
    $("#takeQuiz").click(function (){
     //Take user to quiz section
      window.location.href = "#footer";
    });

  //Start Quiz!!!!
   $("#startQuiz").click(function (){
     switchPanel("#panel1", "#panel2");
   });

  //There's gotta be a better way!!!!
   $("#p2prev").click(function(){
    switchPanel($(this).parent().parent(), "#panel1");
   });

   $("#p2next").click(function(){
    switchPanel($(this).parent().parent(), "#panel3");
   });

   $("#p3prev").click(function(){
    switchPanel($(this).parent().parent(), "#panel2");
   });

   $("#p3next").click(function(){
    switchPanel($(this).parent().parent(), "#panel4");
   });



});
/*
bits about ruby
Great Ruby developers can use Ruby to build anything from the back-end of a web application to command line utilities on your computer. The language is dynamic, reflective, and object oriented.

bits about c#
 C# developers are capable of handling many aspects of developing an application, including but not limited to performance, scalability, security, testing, and more. C# developers can develop modern applications that run on desktop computers, or even sophisticated back-end processes powering modern web applications. The frameworks .Net and Mono combined allow a wide range of platforms to be targeted by applications developed with C#.

 bits about css
 Front End designers are primarily concerned with how the product feels. A given design problem has no single right answer. Front End designers explore many different approaches to solving specific user problems. 

*/
