/*----BUSINESS LOGIC----*/
//move from panel to panel. There's gotta be a better way!!!!
var switchPanel = function (currentPanel, nextPanel){
  //hide current panel
  $(currentPanel).slideUp();
  //move to next one
  $(nextPanel).slideDown();
}

// Next panel
var nextPanel = function (thisButton) {
  var lastPanel = 4;
  var thisPanelID = $(thisButton).parent().parent().attr("id");
  //grab panel id and turn to number
  thisPanelID = parseInt(thisPanelID.charAt(thisPanelID.length-1));
  //add 1 to find next panel
  var nextPanelID = "#panel" + (thisPanelID + 1);
  //if panel doesn't equal last panel, then slide this panel up and next one down
  if (thisPanelID < lastPanel){
    //slide up this panel
    $($(thisButton).parent().parent()).slideUp();
    //move to next one
    $(nextPanelID).slideDown();
  }
  // console.log(thisPanelID, " ", nextPanelID);
}

//prev panel
var prevPanel = function (thisButton) {
  var thisPanelID = $(thisButton).parent().parent().attr("id");
  //grab panel id and turn to number
  thisPanelID = parseInt(thisPanelID.charAt(thisPanelID.length-1));
  //add 1 to find next panel
  var nextPanelID = "#panel" + (thisPanelID - 1);
  //if panel doesn't equal last panel, then slide this panel up and next one down
  if (thisPanelID > 1){
    //slide up this panel
    $($(thisButton).parent().parent()).slideUp();
    //move to next one
    console.log(thisPanelID)
    $(nextPanelID).slideDown();
  }
  // console.log(thisPanelID, " ", nextPanelID);
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
//Set values to 0
  var rails = 0;
  var cSharp = 0;
  var css = 0;
//Set messages for each Path
  var rubyMessage = "Great Ruby developers can use Ruby to build anything from the back-end of a web application to command line utilities on your computer. The language is dynamic, reflective, and object oriented.";
  var cSharpMessage = "C# developers create modern applications that run on desktop computers or sophisticated servers powering modern web applications. The frameworks .Net and Mono combined allow a wide range of platforms to be targeted by applications developed with C#.";
  var cssMessage = "Front End designers are primarily concerned with how the product feels. A given design problem has no single right answer. Front End designers explore many different approaches to solving specific user problems."

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
    $("#quizImage").attr('src','img/rubyRails.jpg');
    return "Ruby on Rails Path. " + rubyMessage;
  //Is it c#?
  } else if(cSharp > css){
    $("#quizImage").attr('src','img/cSharp.png');
    return "C# .Net Path. " + cSharpMessage;
  //Is it css?
  } else if(css > cSharp){
    $("#quizImage").attr('src','img/css.png');
    return "CSS Design Path. " + cssMessage;
   //You're all over the place. Flip a coin.
  } else{
    $("#quizImage").attr('src','img/undecided.jpg');
    return "Flip-A-Coin Path because you didn't show a preference for any one path.";
  }

}



/*----INTERFACE----*/
$(document).ready(function(){

  //Evaluate and display quiz results
   $("form#epicodusQuiz").submit(function (event){
  //move panel back to start of quiz

    switchPanel("#panel4", "#panel1");

  //Add results to modal, then trigger modal
    $(".name").text(visitorInput());
    $(".quizResults").text(evaluateResults());
    $("#myModal").modal('show');
     event.preventDefault();
   });

   //Quiz Button Takes User to Quiz Section
    // $("#takeQuiz").click(function (){
    //  //Take user to quiz section
    //   window.location.href = "#footer";
    //
    // });
    //scroll down to quiz
    $("#takeQuiz").click(function(event){
      event.preventDefault();
      $('html, body').animate({
          scrollTop: $("#footer").offset().top
      }, 1000);
    });

  //Start Quiz!!!!
  //next panel
   $(".next").click(function (){
     nextPanel(this);
   });
  //previous panel
   $(".previous").click(function (){
     prevPanel(this);
   });



});
