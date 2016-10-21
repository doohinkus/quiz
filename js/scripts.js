/*----BUSINESS LOGIC----*/
//move from panel to panel. There's gotta be a better way!!!!
var switchPanel = function (currentPanel, nextPanel){
  //hide current panel
  $(currentPanel).slideUp();
  //move to next one
  $(nextPanel).slideDown();
}

var evaluateResults = function () {
//Get data from form
  var visitor = $("#visitor").val();
  var q1Response = $("#question1").val();
  var q2Response = $("#question2").val();
  var q3Response = $("#question3").val();

  var rails = 0;
  var cSharp = 0;
  var css = 0;
//Make sure first input only contains letters.
//If it doesn't, call visitor silly Goose
  if(!visitor.match(/^[A-Za-z]+$/)){
     visitor = "Silly Goose";
  }

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

  console.log(visitor, " ", rails, " ", cSharp, " ", css);


}



/*----INTERFACE----*/
$(document).ready(function(){

  //Evaluate and display quiz results
   $("form#epicodusQuiz").submit(function (event){
     evaluateResults();
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


    // $("#myModal").modal('show');
    //.modal content

});
