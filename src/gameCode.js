//После игры необходимо спросить номер вопроса. 
//По номеру вопроса нужно вывести текст вопроса и текст выбранного ответа

var event, ok;

var answers = [];

function round(question, answer1, answer2, check){
    do {
        ok = false;
        event = +prompt(question + answer1 + answer2 + '-1 - Выход из игры');
        if (event == -1) {
            break;
        }
        else {
            ok = isAnswer(check, event);
        }
        var a = (event == 1 ? answer1 : answer2);
        
        answers.push(question + "Ваш ответ - " + a);
    } while (!ok);
}

//Выводим первый вопрос
round(works.a00, works.a1, works.a2, works.a0)
switch (event) {
    case 1: // Первое действие  - если в первом окне ввели 1 то открываем серию окон - окно 2
        round(works.b00, works.b1, works.b2, works.b0);
        switch (event) {
            case 1: // Второе действие, если во 2 окне ввели 1 то переходим на 4 окно
            
            case 2: // Второе действие   Если ввели 2 то также переходим на 4 окно
                round(works.d00, works.d1, works.d2, works.d0)

                break;
            case -1: // Второе действие
                break;
            default:
                alert('Ошибка');
        }
        break;
    case 2: // Первое действие    Если в 1 окне ввели 2 то переходим к 3 окну
        round(works.c00, works.c1, works.c2, works.c0)
        switch (event) {
            case 1: // Второе действие
                
            case 2: // Второе действие
                round(works.d00, works.d1, works.d2, works.d0)

                break;
            case -1: // Второе действие
                break;
            default:
                alert('Ошибка');
        }
        break;
    case -1: // Первое действие
        break;
    default:
        alert('Ошибка');
}
var x = +prompt("Введите номер вопроса, чтобы увидеть текст вопроса и Ваш ответ на него");
alert(answers[x-1]);
alert('Спасибо за игру');


//------------------------------------------
function isAnswer(q, event) {
    if (isNaN(event) || !isFinite(event)) {
        alert('Вы ввели недопустимый символ');
        return false;
    }
    else if (event < 1 || event > q) {
        alert('Ваше число выходит из допустимого диапозона');
        return false;
    }
	return true; 
}