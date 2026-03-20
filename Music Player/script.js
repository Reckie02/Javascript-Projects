let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrlIcon = document.getElementById("ctrlIcon");

const timeDisplay = document.querySelector('.time')

song.onloadedmetadata = function(){
    progress.max = song.duration;
    progress.value = song.currentTime;
}

function playPause(){
    if(ctrlIcon.classList.contains("fa-pause")){
        song.pause();
        ctrlIcon.classList.remove("fa-pause");
        ctrlIcon.classList.add("fa-play");
    }
    else{
        song.play();
        ctrlIcon.classList.remove("fa-play");
        ctrlIcon.classList.add("fa-pause");
    }
}

if (song.play()){
    setInterval(() => {
        progress.value = song.currentTime;
    }, 500);
}

progress.onchange = function(){
    song.play();
    song.currentTime = progress.value;
    ctrlIcon.classList.remove("fa-pause");
        ctrlIcon.classList.add("fa-play");
}

// Audio.addEventListener('timeupdate', () => (
//     const progressValue = (song.currentTime / song.duration) * 100%;
//     progress.style.width = '$progressValue%';
    
//     if (progress.value > 0){
//         progress.style.backgroundColor = '#90764a';
//     } else {
//         progress.style.backgroundColor = '#281900';
//     });
// )