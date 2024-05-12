var arr = [
    { songName: "Jale 2", url: "jale 2.mp3", img: "jale.jpg" },
    { songName: "Arjan Vailley", url: "Arjan Vailly Ne.mp3", img: "animal.jpg" },
    { songName: "Ram Siya Ram", url: "Ram Siya Ram.mp3", img: "ram.jpg" },
    { songName: "Pahle Bhi main", url: "Pehle Bhi Main.mp3", img: "jale.jpg" }
]

var allsongs = document.querySelector("#all-songs");
var poster = document.querySelector("#left");
var play = document.querySelector("#play");
var backward = document.querySelector("#backward");
var forward = document.querySelector("#forward");


var audio = new Audio();

var selectedSong = 0;


function mainFunc() {

    var clutter = "";
    arr.forEach(function (elem, index) {
        clutter += `<div class="song-card" id="${index}">
    <div class="part1">
        <img src="${elem.img}" alt="" />
        <h2>${elem.songName}</h2>
    </div>
    <h6>3:56</h6>
</div>`
    })
    allsongs.innerHTML = clutter
    audio.src = arr[selectedSong].url;
    poster.style.backgroundImage = `url(${arr[selectedSong].img})`
}
mainFunc();


allsongs.addEventListener('click', function (dets) {
    selectedSong = dets.target.id
    mainFunc();
    audio.play()
})
var flag = 0;
play.addEventListener("click", function () {
    if (flag == 0) {
        play.innerHTML = `<i class="ri-pause-mini-line"></i>`
        mainFunc()
        audio.play()

        flag = 1
    } else {
        play.innerHTML = `<i class="ri-play-mini-line"></i>`
        mainFunc()
        audio.pause()
        flag = 0;
    }
})

forward.addEventListener("click", function(){
    if(selectedSong < arr.length -1){
        selectedSong++
        mainFunc()
        audio.play()
    }
    else{
        forward.style.opacity = 0.4
    }
})
backward.addEventListener("click", function(){
    if(selectedSong > 0){
        selectedSong--
        mainFunc()
        audio.play()
    }
    else{
        backward.style.opacity = 0.4
    }
})