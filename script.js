document.addEventListener('DOMContentLoaded', buzzfeedQuiz, false);

function buzzfeedQuiz() {

  // task 4: declare variables for the html elements you'll use as selectors later. You need the submit button, display div, and all four inputs for your questions.

  let submitButton = document.querySelector(".submit");
  let displayResult = document.querySelector(".displayResult");
  let q1 = document.querySelector(".q1");
  let q2 = document.querySelector(".q2");
  let q3 = document.querySelector(".q3");
  let q4 = document.querySelector(".q4");


  // task 5: declare variables for values we'll set later. You'll need one for an image source, a result and a score for each question.
  let imgSrc;
  let qResult;
  let q1Score;
  let q2Score;
  let q3Score;
  let q4Score;


  button.onclick = function() {

    // task 6: Declare user input variables for each of your questions. If you have three questions, you should have three variables. These variables should equal the value of the user input for each question.
    userq1 = q1.value.toLowerCase();
    userq2 = q2.value.toLowerCase();
    userq3 = q3.value.toLowerCase();
    userq4 = q4.value.toLowerCase();

    // task 7: create a conditional statement for the responses to Question 1 based on the user input.
    //Question 1
    if (userq1 === "pc") {
      
      q1Score = 4
    } else if(userq1 === "laptop"){
      
      q1Score = 3
    }else if(userq1 === "mobile"){
     
      q1Score = 1
    }else if(userq1 === "steamdeck"){

      q1Score = 2
    }else if(userq1 === "other"){
     
      q1Score = 2
    }
    
    console.log(q1Score)
    
    // task 8: create a conditional statement for the responses to Question 2 based on the user input.
    //Question 2
    if (userq2 === "roblox") {
      
      q2Score = 4
    }else if(userq2 = "minecraft"){
      
      q2Score = 4
    }else if(userq2 === "valaront"){
     
      q2Score = 2.5
    }else if(userq2 === "call of duty"){

      q2Score = 3
    }else if(userq2 === "other"){
     
      q2Score = 3
    }

    console.log(q2Score)
    
    // task 9: create a conditional statement for the responses to Question 3 based on the user input.
    //Question 3
    if (userq3 === "barstool"){
      
      q3Score = 4
    } else if(userq3 === "dollar store chair"){
      
      q3Score = 4
    }else if(userq3 === "old office chair"){
     
      q3Score = 4
    }else if(userq3 === "regualar brand gaming chair"){

      q3Score = 2
    }else if(userq3 === "other"){
     
      q3Score = 2
    }

    console.log(q3Score)
    
    //Question 4

    if (userq4 === "regualar player") {
      
      q4Score = 4
    } else if(userq4 === "hacker"){
      
      q4Score = 4
    } else if(userq4 === "good player"){
     
      q4Score = 2.5
    } else if(userq4 === "tryhard"){
      
      q4Score = 2.5
    }else if(userq4 === "annoying"){

      q4Score = 3.5
    }else if(userq4 === "other"){
     
      q4Score = 3.5
    }

    console.log(q4Score)
    
    // task 10: declare a variable for the total score of the quiz and set it equal to the sum of each question score.
  
    let totalScore = q1Score + q2Score + q3Score + q4Score;

    // task 11: create a conditional statement for the result to the quiz based on the total score. Using string interpolation, display these to the page: the result, an image that corresponds and a message to go with it.

    if (totalScore === 16){ //Result 1
      
      displayResult.innerHTML = "W Regular Gamer";
    }else if(){ //Result 2
      
      displayResult.innerHTML = "Average kid on the family computer";
    }else if(){ //Result 3

      displayResult.innerHTML = "";
    }else if(){ //Result 4
      
      displayResult.innerHTML = "";
    }

  }

};