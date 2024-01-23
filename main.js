/**/


// User question function
function getValue(){


  const answerElement = document.getElementById('answer');

    const value = document.querySelector('#question').value;
    
    document.getElementById('userQuestion').textContent = value;

      if(value.trim() === '') {
        document.getElementsByClassName('error')[0].style.display = 'block';
        answerElement.innerHTML = '';
      } else {
        document.getElementsByClassName('error')[0].style.display = 'none';
      

    document.getElementById('question').value=''; //clears the question input after pressing "Ask" button
    answerElement.innerHTML = '';
    getAnswer(); //calling this function inside getValue function triggers it when pressing Ask-button
      }
  
  }
  
  
  // Answer function
  function getAnswer() {
  
  const randomNumber = Math.floor(Math.random() * 51);
  
  let answer = '';
  
  switch(randomNumber) {
    case 0:
      answer = 'It is certain.';
      break;
    case 1:
      answer = 'It is decidedly so.';
      break;
    case 2:
      answer = 'Ask your neighbour.';
      break;
    case 3:
      answer = 'You may rely on it.';
      break;
    case 4:
      answer = 'Outlook good.';
      break;
    case 5:
      answer = 'Most likely.';
      break;
    case 6:
      answer = 'Trust your intuition.';
      break;
    case 7:
      answer = 'Without a doubt.';
          break;
    case 8:
      answer = 'Yes - definitely.';
      break;
    case 9:
      answer = 'Sure.';
      break;
    case 11:
      answer = 'Not so sure.';
      break;
    case 12:
      answer = 'Well... I would think about it.';
      break;
    case 13:
      answer = "It could be 'yes' if you had a healthy breakfast.";
      break;
    case 14:
      answer = 'Not at this moment.';
       break;
    case 15:
      answer = "Yes, if we are very precise, but we don't have to be.";
      break;
    case 16:
      answer = 'Ask again later.';
      break;
    case 17:
      answer = 'If I say "yes" do you believe me?';
      break;
    case 18:
      answer = 'If I say "no", do you believe me?';
      break;
    case 19:
      answer = 'Better to be optimistic.';
      break;
    case 20:
      answer = 'Let me see... I will tell you later.';
      break;
    case 21:
      answer = 'Are you sure you want to ask that?';
      break;
    case 22:
      answer = 'I am not sure, ask again later.';
      break;
    case 23:
      answer = 'The stars shall give you the answer.';
      break;
    case 24:
      answer ='Reply hazy, try again';
      break;
    case 25:
      answer ='Better not tell you now.';
      break;
    case 26:
      answer = 'Theoretically, it could work.';
      break;
    case 27:
      answer = 'The answer you seek is next to you.';
      break;
    case 28:
      answer = 'Yes, now leave me alone.';
      break;
    case 29:
      answer = "It won't work, but it will be very funny.";
      break;
    case 30:
      answer = 'I might know some magic but how would I ever know that?';
      break;
    case 31:
      answer = 'Try a direct approach.';
      break;
    case 32:
      answer = 'There is no answer.';
      break;
    case 33:
      answer = "You'll know when you know.";
      break;
    case 34:
      answer = 'You will succeed.';
      break;
    case 35:
      answer = "No, but I know you're going to try anyway.";
      break;
    case 36:
      answer = 'The question will be answered... eventually.';
      break;
    case 37:
      answer = 'Nice try, you already know the answer.';
      break;
    case 38:
      answer = 'I will let this one speak for itself.';
      break;
    case 39:
      answer = 'Do I look like an old witch to you? ';
      break;
    case 40:
      answer = 'Could be 42.';
      break;
    case 41:
      answer = 'The Glass is Half Full. ';
      break;
    case 42:
      answer = 'That sounds like a question for a crystal ball.';
      break;
    case 43:
      answer = 'Oh, the magic ball just flew away.';
      break;
    case 44:
      answer = " I would not recommend it.";
      break;
    case 45:
      answer = 'Trust the woman.';
      break;
    case 46:
      answer = 'Perhaps, with great power of will.';
      break;
    case 47:
      answer = 'The answer is... umm, how should I read this?';
      break;
    case 48:
      answer = 'Get yourself together and ask again.';
      break;
    case 49:
      answer = "Ask later, I'm writing a novel and I feel very inspired right now.";
    case 50:
      answer = 'Sorry, I am baking right now, I cannot answer.';
      break;
    default:
      answer = "You don't want to know, trust me.";
      break;
  }
  const answerElement = document.getElementById("answer");
  answerElement.innerHTML = answer;
  
  // Remove the existing "animate" class
  answerElement.classList.remove("animate");
  
  // Trigger animation by adding the "animate" class again after a short delay
  setTimeout(function () {
    answerElement.classList.add("animate");
  }, 10); 
  }