//Text Adventure Game - Jack Massey//

console.log("Testing Link")

const start = `Welcome to the Text Adventure Game. In this game, you work in a large facility which contains many interesting (and dangerous) monsters, Click 'OK' to start the game.`;

const enter1 = "Please enter 1 or 2 for your answer:";

const enter2 = "Please enter 1, 2, or 3 for your answer: "

const gameOver = "Sorry, game over!";

const notFound = `That answer doesn't work here. ${gameOver}`

const q1 = `The facility is undergoing a catastrophic containment breach! Should you...
1. Try to get out of there
OR
2. Sit here and wait
${enter1}`;

const gameOver1 = `Maybe sitting still in a building full of terrifying monsters wasn't the best plan... ${gameOver}`;

const q2 = `You decide to try and escape. As you start walking, you run into a dark hallway, the only light coming from many golden eyes shining at the end of the hall. Should you...
1. Approach the eyes
2. Quickly run up the stairs
OR
3. Run back to where you came from
${enter2}`;

const gameOver2_1 = `The eyes belonged to a very big (and hungry) bird, who decided it was time for a snack. ${gameOver}`;
const gameOver2_2 = `As you run back into the hall you were just in, you realize you're getting nowhere and give up. ${gameOver}`;

const q3 = `You dash up the stairs and spot someone in dark armor, detailed with orange. Large bunny ears extend from the top of their helmet. Should you...
1. Call out for help
OR
2. Run away from them
${enter1}`;

const gameOver3 = `That didn't go as planned. Let's just say this Rabbit prefers to make swiss cheese over making friends. ${gameOver}`;

const q4 = `After running for a while, you spot a vending machine, large humanoid shrimp standing on either side. They offer you a drink, and you're too thirsty to refuse. Should you...
1. Take a Regular Soda
2. Take a Cherry Soda
OR
3. Take a Grape Soda
${enter2}`;

const gameOver4 = `As you take a sip of your Grape Soda, you begin to feel very tired. When you wake up, you find yourself on a fishing boat. You get to peacefully live out your days as a fisherman on a boat that never seems to dock. ${gameOver}`;

const q5 = `After a nice, refreshing beverage, you continue running, and you spot the exit! Flying circles in front of it is a tiny, white bird with a little red spot on its stomach. Should you...
1. Try to scare it away
2. Try to hit it to make it leave
OR
3. Try to walk past it
${enter2}`;

const gameOver5_1 = `You start yelling and waving your arms. This doesn't scare the bird, but it does attract some unwanted attention. ${gameOver}`;
const gameOver5_2 = `As you try to hit the bird, the red spot on its stomach opens, revealing massive jaws lined with teeth. Let's just say you received some well-deserved punishment. ${gameOver}`;

const q6 = `As you reach the exit, you can hear someone shouting behind you "Hello? Help!" The exit is right there, but they sound like they need help! Should you...
1. Just leave, let them handle it on their own
OR
2. Run back and try to help
${enter1}`

const gameOver6 = `You decide it's better to try and help someone in need. Sadly, turns out this "someone in need" was actually just a giant monster, trying to trick people like you into coming right to it. ${gameOver}`

const win = `You decide it's better to just leave than continue to risk your own life. You escaped!`;

//Alerts user to start game
alert(start)

//Sets the value of "ans" to user's response to the first question
let ans = prompt(q1)
//If user answers "1" to q1, continues the game
if (ans == 1) {
    ans = prompt(q2)
    //If user answers "1" to q2, continues the game
    if (ans == 2) {
        ans = prompt(q3)
        //If user answers "2" to q3, continues the game
        if (ans == 2) {
            ans = prompt(q4)
            //If user answers "1" to q4, continues the game
            if (ans == 1 || ans == 2) {
                ans = prompt(q5)
                //If user answers "2" to q5, tells them they win!
                if (ans == 3) {
                    ans = prompt(q6)
                    if (ans == 1) {
                        alert(win)
                    } else if (ans == 2) {
                        alert(gameOver6)
                    } else {
                        alert(notFound)
                    }
                //If user doesn't answer q5 correctly, gives them a game over message
                } else if (ans == 1) {
                    alert(gameOver5_1)
                } else if (ans == 2) {
                    alert(gameOver5_2)
                } else {
                    alert(notFound)
                }
            //If user doesn't answer q4 correctly, gives them a game over message
            } else if (ans == 3) {
                alert(gameOver4)
            } else {
                alert(notFound)
            }
        //If user doesn't answer q3 correctly, gives them a game over message
        } else if (ans == 1) {
            alert(gameOver3)
        } else {
            alert(notFound)
        }
    //If user doesn't answer q2 correctly, gives them a game over message
    } else if (ans == 1){
        alert(gameOver2_1)
    } else if (ans == 3) {
        alert(gameOver2_2)
    } else {
        alert(notFound)
    }
//If user doesn't answer q1 correctly, gives them a game over message
} else if (ans == 2) {
    alert(gameOver1)
} else {
    alert(notFound)
}