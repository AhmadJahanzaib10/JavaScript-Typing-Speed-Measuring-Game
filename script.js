const start = document.querySelector('#start')
let text = document.querySelector('#text')
let myText = document.querySelector('#mytext')
let tWords = document.querySelector('#twords')
let wpm = document.querySelector('#wpm')
let errors = document.querySelector('#errors')
let time = document.querySelector('#time')
let startTime, endTime, randomNumber;
console.log(myText.value)
const paragraphs = [
    "A computer is an electronic device that manipulates information, or data. It has the ability to store, retrieve, and process data.",
    "A mobile device is a small hand-held device that has a display screen with touch input.",
    "Internet is a network of networks and has different types of internet. It consists of public, private networks of local to global scope",
    "JavaScript is a scripting or programming language that allows you to implement complex features on web pages"
];
function countErr(str, index){
    let err = 0;
    let actualPara = paragraphs[index].split(" ");
    let typedPara = str.split(" ");
    // console.log(actualPara, typedPara)
    for(let i = 0; i< actualPara.length; i++){
        if(actualPara[i] !== typedPara[i])
            err++;
    }
    return err;
}

function wordCounter(str){
    let result = str.split(" ").length;
    return result;
    
}

function playGame(){
    randomNumber = Math.floor(Math.random() * paragraphs.length);
    text.innerText = paragraphs[randomNumber]; 
    let date = new Date();
    startTime = date.getTime(); // gives in miliseconds
    console.log(startTime);
    start.innerText = "Done";
    tWords.innerText = "";
    wpm.innerText = "";
    errors.innerText = "";
    time.innerText = "";
}

function endPlay(){
    let date = new Date();
    endTime = date.getTime();
    let totalTime = Math.round((endTime - startTime)/1000);
    let totalStr = myText.value;
    console.log(totalStr)
    let wordCount = wordCounter(totalStr);
    let speed = Math.floor((wordCount / totalTime) * 60);
    let tErrors = countErr(totalStr,randomNumber);
    // console.log("Words " + wordCount + "WPM" + speed + "Errors" + tErrors + "Time" + time);
    tWords.innerText = wordCount;
    wpm.innerText = speed + " WPM";
    errors.innerText = tErrors;
    time.innerText = totalTime + " sec";
}

start.addEventListener('click',(e)=>{
    if(e.target.innerText == "Start"){
        myText.disabled = false;
        playGame();
    }
    else{
        myText.disabled = true;
        start.innerText = "Start";
        endPlay();
        myText.value = "";
    }
})