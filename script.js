/* OPENING OPTION CSS*/
let userOneDiv = document.querySelector('#user-one');
let openingDiv = document.querySelector('.opening');
let openingLeftOpt = document.querySelector('#opening-left-opt');
let openingRightOpt = document.querySelector('#opening-right-opt');

openingLeftOpt.onmouseover = function(){
    openingLeftOpt.style.backgroundColor = "pink";
}
openingLeftOpt.onmouseleave = function(){
    openingLeftOpt.style.backgroundColor = "white";
}
openingRightOpt.onmouseover = function(){
    openingRightOpt.style.backgroundColor = "pink";
}
openingRightOpt.onmouseleave = function(){
    openingRightOpt.style.backgroundColor = "white";
}



/*LEFT SCENE CHANGES*/
let userTwoDiv = document.querySelector('#user-two');
let leftScene = document.querySelector('.left-scene');
let winScene = document.querySelector('.win-scene');

let ghostDiv = document.querySelector('#ghost');
let serpentDiv = document.querySelector('#serpent')
let beetleDiv = document.querySelector('#beetle');

openingLeftOpt.onclick = function(){
    openingDiv.style.display = "none";
    leftScene.style.display = "flex";
}

ghostDiv.onclick = function(){
    ghostDiv.style.display = "none";
}
serpentDiv.onclick = function(){
    serpentDiv.style.display = "none";
    leftScene.style.display = "none";
    winScene.style.display = "flex";
}
beetleDiv.onclick = function(){
    beetleDiv.style.display = "none";
}



/*RIGHT SCENE CHANGES*/
let userThreeDiv = document.querySelector('#user-three');
let rightScene = document.querySelector('.right-scene');

let badChest = document.querySelector('#bad-chest');
let goodChest = document.querySelector('#good-chest');

let death = document.querySelector('#you-died');
let money = document.querySelector('#money');

openingRightOpt.onclick = function(){
    openingDiv.style.display = "none";
    rightScene.style.display = "flex";
}

badChest.onclick = function(){
    death.style.display = "flex";
}
goodChest.onclick = function(){
    money.style.display = "flex";
    document.getElementById('main-text').innerHTML = "WOAH YOU JUST FOUND A BILLION BUCKS";
    document.getElementById('sub-text').innerHTML = "Lucky you, since the other chest would have led to your death.";
}
