let words = ['каракатица',
    'машина',
    'велосипед',
    'гора',
    'дом'];
let word = words[Math.floor(Math.random() * words.length)]
let answerArr = [];
for (let i = 0; i < word.length; i++) {
    answerArr.push('_')
}
console.log(word);
let unsolvedLetters = word.length;
let numberAttempts = word.length * 2;
let condition = true;
while (unsolvedLetters > 0 && numberAttempts > 0) {
    alert(answerArr.join(''))
    let letter = prompt('Введите букву русского алфавита, у Вас ' + numberAttempts + ' попыток или нажмите Отмена для выхода из игры').toLowerCase()
    if (letter === null) {
        break;
    } else if (letter.length != 1) {
        alert('Введите одну букву')
    } else {
        for (let i = 0; i < word.length; i++) {
            if (letter === word[i] && answerArr[i] === letter) {
                condition = false
                break;
            }
            else if (letter === word[i] && answerArr[i] != letter) {
                answerArr[i] = letter;
                unsolvedLetters--;
            }
        }
        if (condition) {
            numberAttempts--;
        }
        condition = true;
    }
}
if (unsolvedLetters == 0 && numberAttempts >= 0) {
    alert('Вы победили, было загадано слово ' + '- ' + word)
} else {
    alert('Вы проиграли(((')
}
