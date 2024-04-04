/**/

import answers  from "./content.mjs";

//click and enter triggers this, html button onClick wont work on modules
document.querySelector('button').addEventListener('click', getValue);
document.addEventListener('keydown', handleKeyPress);
function handleKeyPress(event) {
    
    if (event.key === 'Enter') {
        getValue();
    }


    
}

const forbiddenWords = ["stupid", "fuck", "fucking", "dumb", "idiot", "hate", "kill", "killing", "die", "ugly", "fat", "suicide", "suicidal", 'self-harm', "sex", "sexy", "masturbate",
"boobs", "dick", "penis"] //get API for this?

document.querySelector(".yesButton").addEventListener('click', dragonTrigger);
document.querySelector(".noButton").addEventListener('click', noDragon);

//dragon trigger
function dragonTrigger() {
    const answerElement = document.getElementById('answer');
    answerElement.innerHTML = "I warned you!";

    // Display the dragon image
    const dragonImage = document.querySelector('.dragon');
    const yesNoContainer = document.getElementsByClassName('yesnocontainer')[0];
    const flamesContainer = document.getElementsByClassName('flamescontainer')[0];

   dragonImage.style.display = 'block';
   yesNoContainer.style.display = 'block';
   flamesContainer.style.display = 'block';
    setTimeout(() => {
        dragonImage.style = 'none';
        yesNoContainer.style.display = 'none';
        flamesContainer.style.display = 'none';
    }, 4000);
}


//no dragon
function noDragon() {
    const answerElement = document.getElementById('answer');
    answerElement.innerHTML = "Good.";
    const yesNoContainer = document.getElementsByClassName('yesnocontainer')[0];
    yesNoContainer.style.display = "none";
}

//firstly you and bubble are invisible
const you = document.querySelector('.you');
you.style.opacity = '0';

const firstBubble = document.querySelector('.bubble');
firstBubble.style.display= 'none';

const oracleGif = document.querySelector('.oracle');
//oracleGif.src = './resurssit/kuvat/oracle_gif2.gif';

//const bubble = document.querySelector('.bubble');
//bubble.style.backgroundImage="url('./resurssit/kuvat/bubble_story.png')";


//SOUNDS
const meow1 = new Audio('./resurssit/sounds/meow1.mp3');
const meow2 = new Audio('./resurssit/sounds/meow2.mp3');

let count = 0;
let mathjoke = 0;

// User question function
function getValue() {

    //defined again... but eyes look the user and when moving mouse they follow it again
    const leftEye = document.querySelectorAll('.leftEye')
    leftEye.forEach(eye => {
        eye.style.transform = `rotate(${90}deg)`;
    })

    const rigthEye = document.querySelectorAll('.rightEye')
    rigthEye.forEach(eye => {
        eye.style.transform = `rotate(${90}deg)`;
    })
    

    //oracle gif
    oracleGif.src = './resurssit/kuvat/oracle_gif_fast.gif'
    //let length = answer.length;
    //if(length >= 5){
    
        setTimeout(function() {
           
           oracleGif.src = './resurssit/kuvat/oracle_no_eyes.png';
       }, 2000);
      // }


    firstBubble.style.display = 'flex';
    you.style.opacity = "1";
    const answerElement = document.getElementById('answer');
    


    const value = document.querySelector('#question').value;
    document.getElementById('userQuestion').textContent ='"' + value + '"';



    const containsForbiddenWord = forbiddenWords.some(word => value.toLowerCase().includes(word.toLowerCase())); 

    if (containsForbiddenWord) {
        answerElement.innerHTML= "I do not answer to questions like that.";  //uusi forbidden, myös laittaa, poistaa ja laittaa animaten
        answerElement.classList.add("animate");
        
        
        
        document.getElementById('userQuestion').textContent ='"' + 'A bad word.' + '"';
        document.getElementById('question').value = ''; //clears input

        answerElement.classList.remove("animate");
        

    setTimeout (() => {
        answerElement.classList.add("animate");
        
    }, 10);


    }else if (value.trim() === '') {                                          //jos poistat forbiddem, laita tämä if
        //document.getElementsByClassName('error')[0].style.display = 'block';
        
        count ++;
        answerElement.classList.add("animate");
        answerElement.innerHTML = 'Hey, are you here to ask some questions or not?';
        document.getElementById('userQuestion').textContent ='"... "';
            if(count === 2){
                answerElement.innerHTML = "COULD you STOP that and ask something!";
                count = 0;
            }

        
        answerElement.classList.remove("animate");

        setTimeout(function () {
            answerElement.classList.add("animate");
        }, 10);
        


    } else { //not needed any more? 1.4.24
        document.getElementsByClassName('error')[0].style.display = 'none';

        document.getElementById('question').value = ''; //clears the question input after pressing "Ask" button
        answerElement.innerHTML = '';
        getAnswer(value); //calling this function inside getValue function triggers it when pressing Ask-button
    }
}




// Answer function
function getAnswer(value) {
  count = 0;
  const randomNumber = Math.floor(Math.random() * 15);
  const randomNumSmall = Math.floor(Math.random() * 5);

  const lowercasedValue = value.toLowerCase();

  
    let answer = '';
    
    //answers used to be here
    


    const magicWords = ['hocus pocus', 'hocuspocus', 'abracadabra', 'alakazam', 'shazam', 'presto', 'sim sala bim', 'simsalabim', 'open sesame'];
  
    
  //Herbert the Wise
  if (lowercasedValue.includes('missing') && lowercasedValue.includes('cat')) {
    answer = "Yes, he is missing. Do you know his name?"; 
}else if (lowercasedValue.includes('ask')  && lowercasedValue.includes('cat')){
    answer = "You can ask when you find him. You should call him by his name."; //////////////////

}else  if(document.getElementById('herbert').style.display === 'block' && lowercasedValue.includes('ask')  && lowercasedValue.includes('herbert')) {
    answer = "Now listen to this wise answer!";
    document.getElementsByClassName('herbertBubble')[0].style.display = 'block';
    meow2.play();
            setTimeout(() => {
                
                document.getElementById('herbert').style.display = 'none';
                document.getElementsByClassName('herbertBubble')[0].style.display = 'none';
            
            }, 6000);
            


}else if ((lowercasedValue.includes('cat') || lowercasedValue.includes("cat's") ) && (lowercasedValue.includes('name') && lowercasedValue.includes('your'))) {
    answer = "His name is Herbert the Wise.";
}else if(lowercasedValue.includes('cat') && lowercasedValue.includes('my') ){
    answer = "You have a cat? I was thinking you are a goat person."
}else if(lowercasedValue.includes('cat') && lowercasedValue.includes('you') ) {
    answer = "Yes, I have a cat. Do you know his name?"
} else if (lowercasedValue.includes('herbert')) {
    answer = "Yes, he is my cat, but he is missing. Could you help me to find him?"; 
     if(lowercasedValue.includes('herbert') && lowercasedValue.includes('where')) {
    answer = "Last time I saw him, he was in the library.";
    } else if (lowercasedValue.includes( 'herbert')  && lowercasedValue.includes('library')) {
    answer = "Yes, I think he might be there...";


    }else if (lowercasedValue.includes('herbert') && magicWords.some(word => lowercasedValue.includes(word))) {
        answer = "WOOOW! You found him! Now you can ask a question from him!";  
        document.getElementById('herbert').style.display = 'block'; //shows the hidden image of Herbert
        meow1.play();

    }

}else if ((lowercasedValue.includes('where') || lowercasedValue.includes('how')) && lowercasedValue.includes('library')) {
    answer = "It is a secret place. But you can use magic words to call Herbert.";
}else if(magicWords.some(word => lowercasedValue.includes(word)) && !lowercasedValue.includes('herbert')) {
    answer = "I think something is missing, my friend.";
}else if (lowercasedValue.includes('magic words')) {
    answer = 'Yes, there are many! Do you know any?';


 //Dragon
}else if(lowercasedValue.includes('dragon') || lowercasedValue.includes("dragon's") && lowercasedValue.includes('lair')) {
    answer = "I would not go there, but if you really want to, press yes.";
    document.getElementsByClassName('yesnocontainer')[0].style.display = 'block';
        



}else if( lowercasedValue.includes('+') || lowercasedValue.includes ('-') || lowercasedValue.includes('*') || lowercasedValue.includes ('/')){
    mathjoke +=1;
    answer = "I do not do math. But do you know what's odd?";
//a hint that certain answers lead to different results that cannot accessed from other way?
        
    }else if ( mathjoke > 0 && lowercasedValue.includes('no') || mathjoke > 0 && lowercasedValue.includes('what')){
            answer= "Every other number.";
            mathjoke = 0;
            
    }else if(mathjoke > 0 && lowercasedValue.includes('odd number')) {   
            answer = "You ruined the joke."
            mathjoke = 0;
        

        



    
     


    //question type
    }else if (lowercasedValue.includes('why')) {
        answer = answers.why[randomNumber];



    }else if (lowercasedValue.includes('how many')) {
        answer = answers.how["how many"][randomNumSmall];
    }else if (lowercasedValue.includes('how much')) {
        answer = answers.how["how much"][randomNumSmall];
    }else if (lowercasedValue.includes('how are you') || lowercasedValue.includes('you doing'))  {
        answer = answers.how["how are you"][randomNumSmall];
    }else if (lowercasedValue.includes('how old')) {
        answer = answers.how["how old"][randomNumSmall];
    }else if (lowercasedValue.includes('how often')) { //
        answer = answers.how["how often"][randomNumSmall];
    }else if (lowercasedValue.includes('how about')) { //
        answer = answers.how["how about"][randomNumSmall];
    }else if (lowercasedValue.includes('how dare you')) { //
        answer = answers.how["how dare you"][randomNumSmall];
    }else if(lowercasedValue.includes('how long')) {
        answer = answers.how["how long"][randomNumSmall];
    }else if (lowercasedValue.includes('how')) {
        answer = answers.how.general[randomNumber];
    }else if (lowercasedValue.includes('who')) {
        answer = answers["who"][randomNumSmall];
    } else if (lowercasedValue.includes('what')) {
        answer = answers.what[randomNumber];
    } else if (lowercasedValue.includes('when')) {
        answer = answers.when[randomNumber];
    } else if (lowercasedValue.includes('where')) {
        answer = answers.where[randomNumber];
    } else if (lowercasedValue.includes('am I')) {    //AM I test
        answer = ['am I'][randomNumber];
    } else if (lowercasedValue.includes('if')) {
        answer = answers.if[randomNumber];
    }else if (lowercasedValue.includes('should')) {
        answer = answers.should[randomNumber];
    }else if (lowercasedValue.includes('do you')) {
        answer = answers["do you"][randomNumber];
    }else if (lowercasedValue.includes('who')) {
        answer = answers["who"][randomNumber];
    } else {
        answer = answers["general"][randomNumber];
    }




    const answerElement = document.getElementById("answer");
    answerElement.innerHTML = answer;
    
    // Remove the existing "animate" class
    answerElement.classList.remove("animate");
    
    
    // Trigger animation by adding the "animate" class again after a short delay
    setTimeout(function () {
        answerElement.classList.add("animate");
        
    }, 10);




};






    //mouse eyes
    document.addEventListener('mousemove', (e) => {

        console.log(e);
    
        const mouseX = e.clientX;
        const mouseY = e.clientY;
    
        const anchor = document.querySelector('.oracle');
        const rekt = anchor.getBoundingClientRect();
        const anchorX = rekt.left + rekt.width / 2;
        const anchorY = rekt.top + rekt.height / 2;
    
        const angleDeg = angle(mouseX, mouseY, anchorX, anchorY);
        console.log(angleDeg);
    
        const leftEye = document.querySelectorAll('.leftEye')
        leftEye.forEach(eye => {
            eye.style.transform = `rotate(${90 + angleDeg}deg)`;
        })

        const rigthEye = document.querySelectorAll('.rightEye')
        rigthEye.forEach(eye => {
            eye.style.transform = `rotate(${90 + angleDeg}deg)`;
        })
    
    })
    
    
    function angle(cx, cy, ex, ey) {
        const dy = ey - cy;
        const dx = ex - cx;
        const rad = Math.atan2(dy, dx);
        const deg = rad * 180 / Math.PI;
        return deg;
    }

   