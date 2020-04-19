const BTN = {
  AUDIO_PAUSE: "Escutar áudio",
  AUDIO_PLAY: "Pausar áudio",
  VIDEO_PAUSE: "Assistir",
  VIDEO_PLAY: "Pausar",
};

const slides = document.getElementsByClassName("news");
const thumbnails = document.getElementsByClassName("thumbnail");

const videos = document.querySelectorAll(".news-video");
const btnVideos = document.querySelectorAll(".btn-video-control");

const audios = document.querySelectorAll(".news-audio");
const btnAudios = document.querySelectorAll(".btn-audio-control");

currentSlide(1);

function currentSlide(position) {
  let i;

  stopVideosAndAudios();

  for (i = 0; i < slides.length; i++) {
    if (i === position - 1) {
      slides[i].style.display = "block";
      thumbnails[i].className += " active";
    } else {
      slides[i].style.display = "none";
      thumbnails[i].className = thumbnails[i].className.replace(" active", "");
    }
  }
}

function stopVideosAndAudios() {
  for (i = 0; i < videos.length; i++) {
    videos[i].load();
    btnVideos[i].innerHTML = BTN.VIDEO_PAUSE;
  }

  for (i = 0; i < audios.length; i++) {
    audios[i].load();
    btnAudios[i].innerHTML = BTN.AUDIO_PAUSE;
  }
}

function handleVideoControl(position) {
  let i = position - 1;
  let j;

  if (videos[i].paused) {
    videos[i].play();
    btnVideos[i].innerHTML = BTN.VIDEO_PLAY;
  } else {
    videos[i].pause();
    btnVideos[i].innerHTML = BTN.VIDEO_PAUSE;
  }
}

function handleAudioControl(position) {
  let i = position - 1;
  let j;

  if (audios[i].paused) {
    audios[i].play();
    btnAudios[i].innerHTML = BTN.AUDIO_PLAY;
  } else {
    audios[i].pause();
    btnAudios[i].innerHTML = BTN.AUDIO_PAUSE;
  }
}
