/**/
const forbiddenWords = ["stupid", "dumb", "idiot", "hate", "kill", "killing", "die", "ugly", "fat", "suicide", "suicidal", 'self-harm']

// User question function
function getValue() {
    const answerElement = document.getElementById('answer');
    const value = document.querySelector('#question').value;
    document.getElementById('userQuestion').textContent = value;


    const containsForbiddenWord = forbiddenWords.some(word => value.toLowerCase().includes(word.toLowerCase())); //uusi forbidden

    if (containsForbiddenWord) {
        answerElement.innerHTML= "I do not answer to questions like that.";  //uusi forbidden, myös laittaa, poistaa ja laittaa animaten
        answerElement.classList.add("animate");
        document.getElementById('question').value = '';

        answerElement.classList.remove("animate");

    setTimeout (() => {
        answerElement.classList.add("animate");

    }, 10);

    }else if (value.trim() === '') {                                            //jos poistat forbiddem, laita tämä if
        document.getElementsByClassName('error')[0].style.display = 'block';
        answerElement.innerHTML = '';
    } else {
        document.getElementsByClassName('error')[0].style.display = 'none';

        document.getElementById('question').value = ''; //clears the question input after pressing "Ask" button
        answerElement.innerHTML = '';
        getAnswer(value); //calling this function inside getValue function triggers it when pressing Ask-button
    }
}

// Answer function
function getAnswer(value) {
  const randomNumber = Math.floor(Math.random() * 15);
  
  const lowercasedValue = value.toLowerCase();

    let answer = '';

    const answers = {
        why:  [
            'Because my cat has a wonderful name.', //CAT
            'Because of reasons.',
            'Because of my cat.',   //CAT
            'Because I am the Oracle.',
            'Because of one hairy gnome.',          //5
            'Whatever reason.',
            'Why you, why me, why anything?',
            'Because you are curious.',
            'Because you are excited.',
            'In the dance of possibilities: Why not?',                 //10
            'Because of the weather.',
            'Because the ancient scrolls foretell it so.',
            'You sure alredy know why.',
            'Because it is just awesome.',
            'It is not always so simple.',           //15



    ],
        how:  [
            'Like my cat does.',           //CAT
            'No idea, but do you know the name of my cat?', //CAT
            'Like the wizard looking guy next door.',
            'Like Gandalf would.',
            'Like a boss dragon.',             //5
            'Like the witch looking woman next door.',
            'With a great attitude.',
            'With an akward smile on your face.',
            'Like hairy gnomes do.',
            'With a little help from your friends.',           //10
            'Try the direct approach and the indirect approach after that.',
            'With the magic of positivity.',
            'Too shy to tell you.',
            'With strong arms and a brave heart.',
            'I might know some magic but how would I ever know that?',
            'Just push it through.', //15'


        ],
        what: [
            'You know what? My cat might know.', //CAT
            'No idea. But do you know the name of my cat?', //CAT
            'What?',
            'It is a mystery...',
            'You already know the answer.', //5
            'What?',
            'Explore and you will find out.',
            'The answer is in your heart.',
            'I will let this one speak for itself.',
            'Could be anything.', //10
            'Could be 42',
            'Do I look like I know? Ok, I know. Hehe.',
            'This and that.',
            'That is for you to discover.',
            'There is not easy anwer to "what".', //15



        ],
        when: [
            'When you know the name of my cat.', //CAT
            'When my cat is back.', //CAT
            'When you hear my cat purring.',
            'When the time is right.',
            'When the night falls.', //5
            'When you are least expecting it.',
            'When you are giving your best.',
            'when you are not giving up.',
            'When you are not afraid.',
            'When you are being confident.', //10
            'When you hear a hairy gnome singing by the river.',
            'When the unicorns meet.', //UNICORN
            'After you have finished your vegetables.',
            'When you are being positive.',
            'When you are being optimistic.', //15
        ],
        where: [
            'Ask your hairy friend or my cat.', //CAT
            'Where the light touches the ground.',
            'I do not know, but do you know where this is: "second star to the right, and straight on till morning.',
            'Hmm... under the rainbow?',
            'Your dog sure knows the answer.', //5
            'Just try to remember.',
            'Under the sea. No, just follow the fairy lights.',  //musicnotes?
            "Search anywhere, just don't go to the dragon's lair.",
            'In the land of possibilities.',
            'Right here.', //10
            'Sorry, I do not have a map.',
            'In the land of the fairies.',
            'In the next village.',
            'In the next festival, ask the fortune teller.',
            'Here and there, who knows?', //15



    ],
        "am I": [  //ottaakin tavun mukaan, esim. "name" johti tänne, siksi "am I"
            'My cat likes you, so you must be ok.', //15 //CAT
            'Nobody is perfect, except the name of my cat.', //CAT
            'We think you are doing great.',
            'You are awesome, like a fancy glitter unicorn.',  //UNICORN
            'Get yourself together and you will be fine.', //5
            'Yes, in a positive way.',
            'Am I?',
            'I would change my perspective to more positive if I were you.',
            'Yes, like a phoenix.',
            'Good job, you are getting better every day.', //10 
            'Things are getting better.',
            'Too personal question, I do not want to think about it.',
            'If you mean the opposite of negative, then yes.',
            'If you mean the opposite of positive, then no.',
            'Yes you are, in a positive way.', //15

        ],
        if: [
            'Then do not worry. My cat does not either.', //CAT   
            'Then you should also know the name of my cat.', //CAT
            'It is ok, it will go well.',
            'In any case, you have to trust your intuition.',
            'If this happens, you will figure it out.', //5
            'Do not worry, you just have to trust yourself.',
            'Well, then it is not meant to be.',
            'In this case, bring your umbrella.',
            'You have to trust the journey.',
            'That will not happen.', //10
            'Have you ever heard the sentence:"Hakuna Matata"?',
            'Then double check your sources.',
            'In that case, remember to buy some cookies.',
            'If that would be the case, I would be very surprised.',
            'In that case, KEEP CALM AND TROLL ON.', //15
        ],
        should: [
            'I am not sure, but I think my cat should.', //CAT
            'No, but you should know the name of my cat.', //CAT
            'Maybe you should, maybe you should not.',
            'Is it a recommendation or is it optional?',
            "'Should' is a strong word.",               //5
            "There are not many 'shoulds' in the world.",
            "Should you? Should I?",
            "Maybe. I am not sure about the outcome, but it will be fun!",
            "If it's going to improve your or someone else's life, then you should.",
            'If it is going to help someone, then you should.', //10
            'But does it help anyone?',
            'So many shoulds, so little time.',
            'Only if it is a morally right thing to do.',
            'You know, backwards "should" is "dluohs".',
            'What do you think? Should you?', //15

        ],

        "do you": [
            'Not me, but my cat is a great listener.', //CAT
            'I am not sure, but I think my cat does.', //CAT 
            'Thanks for asking, but I am not sure.',
            'Me? I am just a simple Oracle.',
            'Yes, yes, very funny. Next question.', //5
            'Haha, you are so funny.',
            'Let me ask: do you?',
            'Is there anybody who does not?',
            'Occasionally.',
            'Who? Me? Pffft.',  //10
            'I know all the answers ecxept this one.',
            'No, but do you know the name of my cat?', //CAT
            'Better not tell my personal secrets.',
            'Do I what? I did not understand.',
            'I would not advise anyone to admit that.', //15


        ],

        1: 'Yes - definitely. Like my cat would say.', //CAT
        2: 'The answer is... umm, how should I read this?.',
        3: 'Not so sure, but my cat might know.', //CAT
        4: 'Well... I would think about it.',
        5: "It could be 'yes' if you had a healthy breakfast.",
        6:  'Oh, the magic ball just flew out of the window.',
        7: "Yes, if we are very precise, but we don't have to be.",
        8: 'Ask the wizard looking guy next door.',
        9: 'If I say "yes" do you believe me?',
        10: 'If I say "no", do you believe me?',
        11: 'Do I look like I know? Ok, I know. Hehe.',
        12: 'Let me see... I will tell you later.',
        13: 'Are you sure you want to ask that?',
        14: 'I am feeling very inspired now, ask later.',
        15: 'I am baking right now, ask later.',



    };

    const amI = answers["am I"];
    const magicWords = ['hocus pocus', 'hocuspocus', 'abracadabra', 'alakazam', 'shazam', 'presto', 'sim sala bim', 'simsalabim', 'open sesame'];
  
    
    //Herbert the Wise
    if (lowercasedValue.includes('cat' || "cat's") && lowercasedValue.includes('name')) {
        answer = "His name is Herbert the Wise.";
    } else if (lowercasedValue.includes('herbert')) {
        answer = "Yes, he is my cat, but he is missing. Could you help me to find him?"; 
         if(lowercasedValue.includes('herbert') && lowercasedValue.includes('where')) {
        answer = "Last time I saw him, he was in the library. I think he was looking for something.; ";
        } else if (lowercasedValue.includes( 'herbert')  && lowercasedValue.includes('library')) {
        answer = "Yes, I think he might be there...";

   
        }else if (lowercasedValue.includes('herbert') && magicWords.some(word => lowercasedValue.includes(word))) {
            answer = "WOOOW.";  
            document.getElementById('herbert').style.display = 'block'; //shows the hidden image of Herbert

          
         
        }

    }else if (lowercasedValue.includes( 'how')  && lowercasedValue.includes('library')) {
        answer = "You cannot go there, it is a secret place. But you can use magic words to call Herbert.";     
    }else if(magicWords.some(word => lowercasedValue.includes(word)) && !lowercasedValue.includes('herbert')) {
        answer = "I think something is missing, my friend.";
  

        


    //question type
    }else if (lowercasedValue.includes('why')) {
        answer = answers.why[randomNumber];

    } else if (lowercasedValue.includes('how')) {
        answer = answers.how[randomNumber];
    } else if (lowercasedValue.includes('what')) {
        answer = answers.what[randomNumber];
    } else if (lowercasedValue.includes('when')) {
        answer = answers.when[randomNumber];
    } else if (lowercasedValue.includes('where')) {
        answer = answers.where[randomNumber];
    } else if (lowercasedValue.includes('am I')) {    //AM I test
        answer = amI[randomNumber];
    } else if (lowercasedValue.includes('if')) {
        answer = answers.if[randomNumber];
    }else if (lowercasedValue.includes('should')) {
        answer = answers.should[randomNumber];
    }else if (lowercasedValue.includes('do you')) {
        answer = answers["do you"][randomNumber];
    } else {
        answer = answers[randomNumber];
    }




    const answerElement = document.getElementById("answer");
    answerElement.innerHTML = answer;
    
    // Remove the existing "animate" class
    answerElement.classList.remove("animate");
    
    // Trigger animation by adding the "animate" class again after a short delay
    setTimeout(function () {
        answerElement.classList.add("animate");
    }, 10);


//for things to trigger when pressing enter
}
function handleKeyPress(event) {
    if (event.key === 'Enter') {
        getValue();
    }
}