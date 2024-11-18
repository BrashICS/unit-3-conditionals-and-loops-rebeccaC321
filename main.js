/**
 * Unit 3 - Conditionals and Loops
 * ICS3 - Mr. Brash 🐿️
 * 
 * For this unit, Mr. Brash is trying something different. Each lesson will
 * be in this one repository, separated in the Lessons folder.
 * 
 * If you run into Git or Github issues, call Mr. Brash over.
 **/ 


'use strict';

/*** Event Listeners ***/



/*** Functions ***/

// A very accurate rounding function
function round(value, decimals) {
    let multiplier = 10**decimals;
    return Math.round((value + Number.EPSILON) * multiplier) / multiplier;
}

// Get a random number from min to max
function randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function user() {
    let user_input = prompt("what is your age?")

    let user_name = prompt("what is your name?")

    let user_guess = prompt("how long do you think your name is?")


    if (user_input >=60) {
        console.log("you qualify for the senior discount!")
    }

    if (user_input <= 16) {
        console.log("You're not old enough to drive yet")
    }

    if (user_input == 44) {
        console.log("So is Mr. Squirrel!")
    }

    if (user_name == "Mr.Sqirrel") {
        console.log("🐿️")
    }


    if (user_name.length >= "7") {
        console.log("you have a long name!")
    }

    if (user_guess == user_name.length) {
        console.log("that is correct!!! ✔️")
    }

    if (user_guess >= user_name.length) {
        console.log("that is too high ✖️")
    }

    if (user_guess <= user_name.length) {
        console.log("that is too low ✖️")
    }

}



// else if

// Setup the menu




function menu() {

    let message = `Hi! Please make a selection:
    value    output
    1  -  Play
    2  -  Options
    3  -  DLC
    4  -  Check for Updates
    5  -  Exit`

    let selection = Number(prompt(message));

    if (selection == 1) {
        alert("Let's play!")
        let level = prompt("what difficulty do you want? 1 - Easy, 2 - Medium, or 3 - Hard")

        console.log(level)
        if (level == 1) {
            alert("You selected the easy route.")

        } else if (level == 2) {
            alert("Most people select medium.")

        } else if (level == 3) {
            alert("I see you like a challenge!")
        }

    } else if (selection == 2) {
        alert("You selected Options")

    } else if (selection == 3) {
        alert("No new DLC at this time.")

    } else if (selection == 4) {
        alert("Everything is up to date.")

    } else if (selection == 5) {
        alert("Bye!")

    } else if (selection >= 6) {
        alert("this is not one of the options given, please try again.")
    }
}

function is_number (num) {
    if (typeof num == "number") {
        alert("true")
    } else {
        alert("false")
    }
}

function which_day(n) {
    console.log(is_number())

    let selection = Number(n)
    
    if (is_number == "false") {
        return("Invalid type")
    } else {
        if (selection == 1) {
            alert("it is saturday!")
        } else if (selection == 2) {
            alert("it is sunday!") 
        } else if (selection == 3) {
            alert("it is monday") 
        } else if (selection == 4) {
            alert("it is tuesday") 
        } else if (selection == 5) {
            alert("it is wednesday") 
        } else if (selection == 6) {
            alert("it is thursday") 
        } else if (selection == 7) {
            alert("it is friday!") 
        } 
    }
}





















