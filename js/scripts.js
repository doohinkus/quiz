/*----BUSINESS LOGIC----*/

/*----INTERFACE----*/

$(document).ready(function(){
  //Take Quiz Button Takes User to Quiz
   $("#takeQuiz").click(function (){
     //Take user to main content area
     window.location.href = "#mainContent";
    
   });

   $("form#triInput").submit(function (event){
     event.preventDefault();
   });

});
