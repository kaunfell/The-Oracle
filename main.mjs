/**/

import {answers, specialWords}  from "./content.mjs";


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
    isStory = false; 


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


const bubble = document.querySelector('.bubble');
bubble.style.backgroundImage="url('./resurssit/kuvat/bubble_basic2.png')";


//SOUNDS
const meow1 = new Audio('./resurssit/sounds/meow1.mp3');
const meow2 = new Audio('./resurssit/sounds/meow2.mp3');

//Counters
let emptyCount = 0;
let mathjoke = 0;
let herbertCount = 0;
let isStory = true;

const numberObj = {
    1: "1",  //values not matter now
    3: "3",
    5: "5",
    7: "7",
    9: "9",
}; 

const questionTypes = Object.keys(answers);
const specialWordsKeys = Object.keys(specialWords);

let specialObj = {};
let answerObj = {};
let smallObj = {};

function isStoryFunction() {
    if(isStory === false){
        bubble.style.backgroundImage="url('./resurssit/kuvat/bubble_basic2.png')";
        
        setTimeout(() => {
            isStory = true;
        }, 10)
    }else{
       // bubble.style.backgroundColor = "rgb(200, 240, 245, .1)";
       oracleGif.src = './resurssit/kuvat/glow_fast_final.gif'
       bubble.style.backgroundImage="url('./resurssit/kuvat/bubble_special.png')";
       setTimeout(function() {
           
        oracleGif.src = './resurssit/kuvat/kauhumummo1.png';
    }, 1500);
    }
}
  //  





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

        setTimeout(function() {
           
           oracleGif.src = './resurssit/kuvat/oracle_no_eyes.png';
       }, 2000);



    firstBubble.style.display = 'flex';
    you.style.opacity = "1";
    const answerElement = document.getElementById('answer');
    


    const value = document.querySelector('#question').value;
    document.getElementById('userQuestion').textContent ='"' + value + '"';



    const containsForbiddenWord = forbiddenWords.some(word => value.toLowerCase().includes(word.toLowerCase())); 

    if (containsForbiddenWord) {
        isStory = false;
        isStoryFunction();
        answerElement.innerHTML= "I do not answer to questions like that.";  //uusi forbidden, myös laittaa, poistaa ja laittaa animaten
        answerElement.classList.add("animate");
        
        
        
        document.getElementById('userQuestion').textContent ='"' + 'A bad word.' + '"';
        document.getElementById('question').value = ''; //clears input

        answerElement.classList.remove("animate");
        

    setTimeout (() => {
        answerElement.classList.add("animate");
        
    }, 10);


    }else if (value.trim() === '') {                                          //jos poistat forbiddem, laita tämä if
       
        isStory = false;
        isStoryFunction();
        emptyCount +=1;
        answerElement.classList.add("animate");
        answerElement.innerHTML = 'Hey, are you here to ask some questions or not?';
        document.getElementById('userQuestion').textContent ='"... "';
            if(emptyCount === 2){
                answerElement.innerHTML = "COULD you STOP that and ask something!";
                emptyCount = 0;
            }

        
        answerElement.classList.remove("animate");

        setTimeout(function () {
            answerElement.classList.add("animate");
        }, 10);
        
    }else if(value === value.toUpperCase()){
        answerElement.innerHTML = "STOP yelling at me!";

        answerElement.classList.remove("animate");

        setTimeout(function () {
            answerElement.classList.add("animate");
        }, 10);

        document.getElementById('question').value = ''; //clears the question input after pressing "Ask" button

    } else { //not needed any more? 1.4.24
        //document.getElementsByClassName('error')[0].style.display = 'none';

        document.getElementById('question').value = ''; //clears the question input after pressing "Ask" button
       answerElement.innerHTML = '';
        getAnswer(value); //calling this function inside getValue function triggers it when pressing Ask-button
    }
}



// Answer function
function getAnswer(value) {
    emptyCount = 0;

 //const objLength = Object.values(answers).length; //how to get objs in answers
//const randomNumber = rando(25) //rando.jsw

//const randomNumber = Math.floor(Math.random() * objLength); //second



const randomNumber = Math.floor(Math.random() * 15); //first

  const randomNumSmall = Math.floor(Math.random() * 5);

  const lowercasedValue = value.toLowerCase();

  
    let answer = '';
    
    //answers used to be here
    


    const magicWords = ['hocus pocus', 'hocuspocus', 'abracadabra', 'alakazam', 'shazam', 'presto', 'sim sala bim', 'simsalabim', 'open sesame', 'pff duh'];
  
    
  //Herbert the Wise
  if (lowercasedValue.includes('missing') && lowercasedValue.includes('cat')) {
    answer = "Yes, he is missing. Do you know his name?"; 
}else if (lowercasedValue.includes('ask')  && lowercasedValue.includes('cat')){
    answer = "You can ask when you find him. You should call him by his name."; //////////////////
}else if(lowercasedValue.includes('where')  && lowercasedValue.includes('cat') && lowercasedValue.includes('your')){
    answer = "In the library, perhaps.";
}else  if(document.getElementById('herbert').style.display === 'block' && herbertCount > 0 &&lowercasedValue.includes('herbert')) {
    answer = "Now listen to this wise answer!";
    document.getElementsByClassName('herbertBubble')[0].style.display = 'block';
    meow2.play();
    herbertCount = 0;
            setTimeout(() => {
                
                document.getElementById('herbert').style.display = 'none';
                document.getElementsByClassName('herbertBubble')[0].style.display = 'none';
            
            }, 6000);
            


}else if ((lowercasedValue.includes('cat') || lowercasedValue.includes("cat's") ) && (lowercasedValue.includes('name') && lowercasedValue.includes('your'))) {
    answer = "His name is Herbert the Wise.";
}else if(lowercasedValue.includes('cat') && lowercasedValue.includes('my') ){
    answer = "You have a cat? I was thinking you are a goat person."
}else if(lowercasedValue.includes( 'cat')  && lowercasedValue.includes('your') && lowercasedValue.includes('library') ){   
    answer = "Yes, he might be there."
}else if(lowercasedValue.includes('cat') && lowercasedValue.includes('you') ) {
    answer = "Yes, I have a cat. Do you know his name?"

} else if (lowercasedValue.includes('herbert')) {
    answer = "Yes, he is my cat, but he is missing. Could you help me to find him?"; 
     if(lowercasedValue.includes('herbert') && lowercasedValue.includes('where')) {
    answer = "Last time I saw him, he was in the library.";
    } else if (lowercasedValue.includes( 'herbert')  && lowercasedValue.includes('library')) {
    answer = "Yes, I think he might be there...";


    }else if (lowercasedValue.includes('herbert') && magicWords.some(word => lowercasedValue.includes(word))) {
        answer = "WOOW! You found him! Now you can ask a question from him!"; 
        herbertCount +=1; 
        document.getElementById('herbert').style.display = 'block'; //shows the hidden image of Herbert
        meow1.play();

    }

}else if ((lowercasedValue.includes('where') || lowercasedValue.includes('how')) && lowercasedValue.includes('library')) {
    answer = "It is a secret place. But you can use magic words to call Herbert.";
}else if(magicWords.some(word => lowercasedValue.includes(word)) && !lowercasedValue.includes('herbert')) {
    answer = "I think something is missing, my friend.";
}else if ((lowercasedValue.includes('magic words') && lowercasedValue.includes('list') || (lowercasedValue.includes('magic words') || lowercasedValue.includes('give')))) {
    answer = 'Pff duh!';
    isStory = false;
}else if (lowercasedValue.includes('magic words')) {
    answer = 'There are many magic words! Do you know any?';




 //Dragon
}else if(lowercasedValue.includes('dragon') || lowercasedValue.includes("dragon's") && lowercasedValue.includes('lair')) {
    answer = "I would not go there, but if you really want to, press yes.";
    document.getElementsByClassName('yesnocontainer')[0].style.display = 'block';
        


//math
}else if( lowercasedValue.includes('+') || lowercasedValue.includes ('-') || lowercasedValue.includes('*') || lowercasedValue.includes ('/')){
    mathjoke +=1;
    answer = "Not interested of these hieroglyphs. But do you know what's odd?";

        
    }else if ( mathjoke > 0 && lowercasedValue.includes('no') || mathjoke > 0 && lowercasedValue.includes('what')){
            answer= "Every other number.";
            mathjoke = 0;
             
    }else if(mathjoke > 0 && lowercasedValue.includes('odd number') || mathjoke > 0 && lowercasedValue in numberObj) {   
            answer = "You ruined the joke."
            mathjoke = 0;
        
//Oracle
}else if(lowercasedValue.includes('oracle')){
    answer = "I am the Oracle."
    isStory = false;


//Midas
}else if(lowercasedValue.includes('midas touch')){
    answer = "Oh, what happened? Gold everywhere?"
    isStory = false;
    document.body.style.backgroundColor = "rgb(255, 255, 153)";
    setTimeout(() => {
        document.body.style.backgroundColor = "rgb(145, 22, 22)";
    }, 3000)



//special words object

}else if (specialWordsKeys.some(word => lowercasedValue.includes(word)) && questionTypes.some(word => lowercasedValue.includes(word)) || specialWordsKeys.some(word => lowercasedValue.includes(word))) {
    const random = Math.floor(Math.random() * specialWordsKeys.length);
    const specialWord = specialWordsKeys.find(word => lowercasedValue.includes(word));
    const valueTest = specialWords[specialWord][random];

    answer = valueTest;
    isStory = false;






//question type how and short

   
   }else if (lowercasedValue.includes('why')) {
        isStory= false;
        answer = answers.why[randomNumber];
        

        
    }else if (lowercasedValue.includes('how many')) {
        isStory= false;
       answer = answers.how["how many"][randomNumSmall];
    }else if (lowercasedValue.includes('how much')) {
        isStory = false;
        answer = answers.how["how much"][randomNumSmall];
    }else if (lowercasedValue.includes('how are you') || lowercasedValue.includes('you doing'))  {
        isStory = false;
        answer = answers.how["how are you"][randomNumSmall];
    }else if (lowercasedValue.includes('how old')) {
        isStory = false;
        answer = answers.how["how old"][randomNumSmall];
    }else if (lowercasedValue.includes('how often')) { 
        isStory = false;
        answer = answers.how["how often"][randomNumSmall];
    }else if (lowercasedValue.includes('how about')) { 
        isStory = false;
        answer = answers.how["how about"][randomNumSmall];
    }else if (lowercasedValue.includes('how dare you')) { 
        isStory = false;
        answer = answers.how["how dare you"][randomNumSmall];
    }else if(lowercasedValue.includes('how long')) {
        isStory = false;
        answer = answers.how["how long"][randomNumSmall];
  }else if (lowercasedValue.includes('how')) {
        isStory = false;
        answer = answers.how.general[randomNumber];
    }else if (lowercasedValue.includes('who')) {
        isStory = false;
        answer = answers["who"][randomNumber];
    } else if (lowercasedValue.includes('what')) {
        isStory = false;
        answer = answers.what[randomNumber];
    } else if (lowercasedValue.includes('when')) {
        isStory = false;
        answer = answers.when[randomNumber];
    } else if (lowercasedValue.includes('where')) {
        isStory = false;
       answer = answers.where[randomNumber]; 
   } else if (lowercasedValue.includes("am i")) {  
       isStory = false;  
      answer = answers["am i"][randomNumber];
    } else if (lowercasedValue.includes('if')) {
        isStory = false;
        answer = answers.if[randomNumber];
    }else if (lowercasedValue.includes('should')) {
        isStory = false;
        answer = answers.should[randomNumber];
    }else if (lowercasedValue.includes('do you')) {
        isStory = false;
        answer = answers["do you"][randomNumber];
    }else if (lowercasedValue.includes('are you')) {
        isStory = false;
        answer = answers["are you"][randomNumber];
     } else {
        isStory = false;
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



    isStoryFunction();
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

   