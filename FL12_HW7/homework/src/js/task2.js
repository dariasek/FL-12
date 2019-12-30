let firstConfirm = confirm('Do you want to play a game?');

if (firstConfirm === false){
    alert('You did not become a billionaire, but can');
} else{
   let lastConfirm = true;
   while (lastConfirm){
        let defNumber = Math.trunc(Math.random()*9);
        let totalPrize = 0;
        let prize = 0;
        let possiblePrize;
        let possiblePrizeNested;
        let prizeNested = 0;
        for (let i=0;i<3;i++){
            let attempt = 3-i;

            if (i===0){
                possiblePrize = 100;
            } else if (i === 1){
                possiblePrize = 50;
            } else {
                possiblePrize = 25;
            }
            let userNumber1 = Math.trunc(prompt('Choose a roulette pocket number from 0 to 8\nAttempts left:'+
                                                    attempt+'\nTotal prize:0\n'+
                                                    'Possible prize on current attempt: '+
                                                    possiblePrize+'$'));
            
            if (userNumber1 === defNumber){
                if (i===0){
                    prize = 100;
                } else if (i === 1){
                    prize = 50;
                } else {
                    prize = 25;
                }

                alert('Congratulation, you won!\nYour prize is: '+prize+'$');
                let continueConfirm = confirm('Do you want to continue');
                if (continueConfirm){

                    let continueConfirmNested = true;
                    while (continueConfirmNested){
                        let defNumberNested = Math.trunc(Math.random()*12);
                        for (let count=0; count<3; count++){
                            let attempt1 = 3-count;

                            if (count === 0){
                                possiblePrizeNested = 200;
                            } else if (count === 1){
                                possiblePrizeNested = 100;
                            } else {
                                possiblePrizeNested = 50;
                            }
                            let userNumber2 = Math.trunc(prompt('Choose a roulette pocket number'+
                                                                    'from 0 to 12\nAttempts left:'
                                                                    +attempt1+'\nTotal prize: '+ prize+
                                                                    '\nPossible prize on current attempt:  '+
                                                                    possiblePrizeNested));
                            if (userNumber2 === defNumberNested){
                                if (count===0){
                                    prizeNested = 200;
                                } else if (count === 1){
                                    prizeNested = 100;
                                } else {
                                    prizeNested = 50;
                                }
                                let allMoney = prize + prizeNested;
                                alert('Thank you for your participation.\nYour prize is: '+allMoney+'$');
                                continueConfirmNested = false;
                                break;
                            } 
                            if (count ===2 && userNumber2 !== defNumberNested){
                                console.log('work');
                                continueConfirmNested = false;
                            }
                        }
                    }
                } else {
                    break;
                }
            }
        }
        totalPrize = prize + prizeNested;
        alert('Thank you for your participation.\nYour prize is: '+totalPrize+'$');
        lastConfirm = confirm('Do you want to continue');
    }
}
