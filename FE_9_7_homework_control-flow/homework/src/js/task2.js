let attempts;
let number_enter;
let total_max_prize = 0;
let max_number = 5;
let max_attempt = 3;
let max_prize = 10;
let prize = 0;
let ten = 10;
let one = 1;
if (confirm('Do you want to play a game?') === false) {
    alert('You did not become a millionaire, but can.');
} else {
    for (attempts = 3; attempts > 0; attempts--) {
        total_max_prize = Math.floor(max_prize / Math.pow(2, max_attempt - attempts));
        let window = prompt('enter a number from 0 to ' + max_number + '\n' +
            'Attempts left :' + attempts + '\n' +
            'Total prize :' + prize + '$' + '\n' +
            'Possible prize on current attempt :' + total_max_prize + '$' + '\n' +
            '', 'number'
        );
        number_enter = parseInt(window);
        let random_number = Math.floor(Math.random() * max_number);
        if (number_enter === random_number) {
            if (attempts === one) {
                attempts -= 3;
                prize += total_max_prize;
                if (confirm('Congratulation!   Your prize is: ' + prize + '$' + '\n' +
                    ' Do you want to continue?') === true) {
                    max_prize *= 3;
                    attempts = 4;
                    max_number *= 2;
                } else {
                    alert('Thank you for a game. Your prize is: ' + prize + '$');
                    max_prize = ten;
                    if (confirm(' Do you want to continue?') === true) {
                        attempts = '4';
                        max_number = '5';
                        max_prize = ten;
                        prize = 0;
                    }
                }
            }
            if (attempts === 2) {
                attempts -= 3;
                prize += total_max_prize;
                if (confirm('Congratulation!   Your prize is: ' + prize + '$' + '\n' +
                    ' Do you want to continue?') === true) {
                    max_prize *= 3;
                    attempts = 4;
                    max_number *= 2;
                } else {
                    alert('Thank you for a game. Your prize is: ' + prize + '$');
                    max_prize = ten;
                    if (confirm(' Do you want to continue?') === true) {
                        attempts = '4';
                        max_number = '5';
                        max_prize = ten;
                        prize = 0;
                    }
                }
            }
            if (attempts === 3) {
                attempts -= 3;
                prize += total_max_prize;
                if (confirm('Congratulation!   Your prize is: ' + prize + '$' + '\n' +
                    ' Do you want to continue?') === true) {
                    max_prize *= 3;
                    attempts = 4;
                    max_number *= 2;
                } else {
                    alert('Thank you for a game. Your prize is: ' + prize + '$');
                    max_prize = ten;
                    if (confirm(' Do you want to continue?') === true) {
                        attempts = '4';
                        max_number = '5';
                        max_prize = ten;
                        prize = 0;
                    }
                }
            }
        } else if (attempts === one) {
            alert('Thank you for a game. Your prize is: 0 $');
            if (confirm('Do you want to play again?') === true) {
                attempts = '4';
                max_number = '5';
                max_prize = '10';
                prize = 0;
            }
        }
    }
}





