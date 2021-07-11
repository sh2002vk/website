let count = 0;
let index = 0;
let currentText = 'Shubhankar Vakde.';
let currentLetter = '';

(function type(){

    letter = currentText.slice(0, ++index);
    document.querySelector('.animation').textContent = letter;
    
    setTimeout(type, 350);

}());

/**
 * const text = document.querySelector(".animation");
const strText = text.textContent;
const splitText = strText.split("");
text.textContent = "";

for(let i = 0; i < splitText.length; i++)
{
    text.innerHTML += "<span>" + splitText[i] + "</span>";
}

let char = 0;
let timer = setInterval(onTick, 50);

function onTick()
{
    const span = text.querySelectorAll('span')[char];
    span.classList.add('fade');
    char++;
    if(char === splitText.length)
    {
        complete();
        return;
    }
}

function complete()
{
    clearInterval(timer);
    timer = null;
}
 */