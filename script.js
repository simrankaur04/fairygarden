const quotes = [

"The stars have heard your wish.",

"Every dream begins with hope.",

"The universe is already working on it.",

"Magic grows where wishes are planted.",

"A fairy is carrying your wish tonight.",

"The moon smiled at your dream.",

"Believe, and wonderful things happen."

];

function saveWish(){

const wish =
document.getElementById("wishInput").value;

if(!wish) return;

const quote =
quotes[Math.floor(
Math.random()*quotes.length
)];

document.getElementById("quote")
.innerHTML = "✨ " + quote;

let wishes =
JSON.parse(
localStorage.getItem("wishes")
) || [];

wishes.push(wish);

localStorage.setItem(
"wishes",
JSON.stringify(wishes)
);

loadWishes();

speakGranted();

createMagicExplosion();
}

function loadWishes(){

const list =
document.getElementById("wishList");

if(!list) return;

list.innerHTML="";

let wishes =
JSON.parse(
localStorage.getItem("wishes")
) || [];

wishes.forEach(wish=>{

let li =
document.createElement("li");

li.innerHTML =
"🌸 " + wish;

list.appendChild(li);

});
}

function speakGranted(){

const speech =
new SpeechSynthesisUtterance(
"Your wish has been granted"
);

speech.pitch = 1.5;
speech.rate = 0.9;

speechSynthesis.speak(speech);
}

function createMagicExplosion(){

for(let i=0;i<300;i++){

let sparkle =
document.createElement("div");

sparkle.className =
"sparkle";

sparkle.style.left =
Math.random()*window.innerWidth+"px";

sparkle.style.top =
Math.random()*window.innerHeight+"px";

document.body.appendChild(sparkle);

setTimeout(()=>{
sparkle.remove();
},2000);

}
}

setInterval(()=>{

document
.querySelectorAll(".fairy")
.forEach(fairy=>{

const rect =
fairy.getBoundingClientRect();

let sparkle =
document.createElement("div");

sparkle.className =
"sparkle";

sparkle.style.left =
rect.left+"px";

sparkle.style.top =
rect.top+"px";

document.body.appendChild(sparkle);

setTimeout(()=>{
sparkle.remove();
},2000);

});

},200);

loadWishes();