/*----BUSINESS LOGIC----*/

var switchPanel = function (currentPanel, nextPanel){
  //hide current panel
  $(currentPanel).slideUp();
  //move to next one
  $(nextPanel).slideDown();
}



/*----INTERFACE----*/

$(document).ready(function(){
  //Take Quiz Button Takes User to Quiz
   $("#takeQuiz").click(function (){
     //Take user to main content area
     window.location.href = "#footer";

   });
   //Evaluate and display quiz results
   $("form#epicodusQuiz").submit(function (event){
     event.preventDefault();
   });

   //Start Quiz!!!!
   $("#startQuiz").click(function (){
     switchPanel("#panel1", "#panel2");

   });

   $("#p2prev").click(function(){
    switchPanel($(this).parent().parent(), "#panel1");
   });

   $("#p2next").click(function(){
    switchPanel($(this).parent().parent(), "#panel3");
   });

   $("#p3prev").click(function(){
    switchPanel($(this).parent().parent(), "#panel2");
   });


    // $("#myModal").modal('show');
    //.modal content

});
