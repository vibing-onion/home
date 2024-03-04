const path = "https://vibing-onion.github.io/home/SecretGarden/word_game/storage.json";
let target;
let missPool = [];
let wordDeck = [];

function setCard(){
    let cardDeck = document.getElementById("cardDeck");
    let l = wordDeck.length;
    let w = window.innerWidth;
    m = w*0.2;
    w = w*0.8/l - 4 - 12;
    for (let i=0; i<l; i++){
        let card = document.createElement("div");
        card.className = "inactiveCard";
        card.setAttribute("id", "card"+i);
        card.style.minWidth = w + "px";
        card.style.minHeight = w*1.2 + "px";
        card.style.fontSize = w*0.6 + "px";
        card.style.paddingTop = w*0.3 + "px";
        card.innerHTML = "&#x1F340";
        cardDeck.appendChild(card);
    }
    cardDeck.style.marginLeft = m/2 + "px";
    cardDeck.style.marginBottom = "10px";
    cardDeck.style.visibility = "visible";
}

function missHandle(missWord){
    let l;
    (missWord.length > target.length)? l = target.length : l = missWord.length;
    for(let i=0; i<l; i++){
        if (missWord[i] === target[i]){
            let card = document.getElementById("card"+i);
            card.innerHTML = missWord[i];
            card.className = "activeCard";
        }
    }
    if (!missPool.includes(missWord)){
        missPool.push(missWord);
        let missPool_ = document.getElementById("missPool");
        let word = document.createElement("p");
        word.innerHTML = missWord;
        missPool_.appendChild(word);
    }
}

function winGame(target){
    let result = document.getElementById("result");
    result.innerHTML = "Correct";
    let l = target.length;
    for(let i=0; i<l; i++){
        let card = document.getElementById("card"+i);
        card.innerHTML = target[i];
        card.className = "activeCard";
    }
}

function notWin(missWord){
    let result = document.getElementById("result");
    result.innerHTML = "Incorrect";
    missHandle(missWord);
}

function check(){
    let userInput = document.getElementById("userInput");
    //console.log("User Input: " + `${userInput.value}`);
    if (userInput.value === target){
        winGame(target);
    }
    else{
        notWin(userInput.value);
    }
}

function encrpytDate(){
    const tdy = new Date();
    return tdy.getMonth()*(tdy.getMonth()+1)+tdy.getDate();
}

function setValueById(id, value){
    let ele = document.getElementById(id);
    ele.value = value;
    //console.log(`${id}` + "'s value has been changed to " + `${value}`);
}

function main(){
    fetch(path)
        .then(response => response.json())
        .then(data => {
            target = data[encrpytDate()%data.length];
            setValueById("answer", target);
            
            Array.from(target).forEach (() => {
                wordDeck.push("_");
            })
            setCard();
            
        })
        .catch(error => {
            console.log('Error fetching the JSON file:', error);
        });
}

main()