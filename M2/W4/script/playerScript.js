
/**************************************** 
 

function nextTrack() {
    if (track_index < track_list.length - 1)
        track_index += 1;
    else track_index = 0;

    // Load and play the new track
    loadTrack(track_index);
    playTrack();
}

function prevTrack() {
    // Go back to the last track if the
    // current one is the first in the track list
    if (track_index > 0)
        track_index -= 1;
    else track_index = track_list.length - 1;

    // Load and play the new track
    loadTrack(track_index);
    playTrack();
}
*/


async function aalbums() {

    //console.log(albums)

    const response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/album/${sessionStorage.getItem('id_album_corrente')}`);
    const album = await response.json();
    //console.log(album);


    /*********************************************************************************** */
    var player = document.querySelector('#player-left')
    var artist = album.tracks
    var artist1 = artist.data[sessionStorage.getItem('id_song_corrente')]

    var audio = new Audio(artist1.preview)

    var nextSong = document.querySelector('#avantiBtn')
    var playPause = document.querySelector('#playPauseBtn')
    var prevSong = document.querySelector('#indietroBtn')
    let isPlaying = false;




    let volume = document.querySelector("#volume");
    let currTime = document.querySelector(".song-progress");
    let totDuration = document.querySelector(".song-duration");

    // Specify globally used values
    let track_index = 0;
    let seek_slider = document.querySelector(".seek_slider");
    let updateTimer;

    // // Create the audio element for the player
    // let playedTrack = document.createElement('audio');

    // function loadTrack() {
    //     // Clear the previous seek timer
    //     clearInterval(updateTimer);
    //     resetValues();

    //     // Load a new track
    //     playedTrack.src = audio;
    //     playedTrack.load();

    //     updateTimer = setInterval(seekUpdate, 1000);

    //     // Move to the next track if the current finishes playing
    //     // using the 'ended' event
    //     playedTrack.addEventListener("ended", nextTrack);


    // }


    // function playpauseTrack() {
    //     if (!isPlaying) playTrack();
    //     else pauseTrack();
    // }

    // function playTrack() {
    //     audio.play();
    //     isPlaying = true;

    //     // Replace icon with the pause icon
    //     playPause.innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>';
    // }

    // function pauseTrack() {

    //     audio.pause();
    //     isPlaying = false;


    //     playPause.innerHTML = '<i class="fa fa-play-circle fa-5x"></i>';
    // }

    // function nextTrack() {
    //     // Go back to the first track if the
    //     // current one is the last in the track list
    //     if (track_index < track_list.length - 1)
    //         track_index += 1;
    //     else track_index = 0;

    //     // Load and play the new track
    //     loadTrack(track_index);
    //     playTrack();
    // }

    // function prevTrack() {
    //     // Go back to the last track if the
    //     // current one is the first in the track list
    //     if (track_index > 0)
    //         track_index -= 1;
    //     else track_index = track_list.length - 1;

    //     // Load and play the new track
    //     loadTrack(track_index);
    //     playTrack();
    // }

    // function seekTo() {
    //     // Calculate the seek position by the
    //     // percentage of the seek slider
    //     // and get the relative duration to the track
    //     seekto = curr_track.duration * (seek_slider.value / 100);

    //     // Set the current track position to the calculated seek position
    //     curr_track.currentTime = seekto;
    // }

    // function setVolume() {
    //     // Set the volume according to the
    //     // percentage of the volume slider set
    //     curr_track.volume = volume_slider.value / 100;
    // }

    // function seekUpdate() {
    //     let seekPosition = 0;

    //     // Check if the current track duration is a legible number
    //     if (!isNaN(curr_track.duration)) {
    //         seekPosition = curr_track.currentTime * (100 / curr_track.duration);
    //         seek_slider.value = seekPosition;

    //         // Calculate the time left and the total duration
    //         let currentMinutes = Math.floor(curr_track.currentTime / 60);
    //         let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60);
    //         let durationMinutes = Math.floor(curr_track.duration / 60);
    //         let durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60);

    //         // Add a zero to the single digit time values
    //         if (currentSeconds < 10) { currentSeconds = "0" + currentSeconds; }
    //         if (durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
    //         if (currentMinutes < 10) { currentMinutes = "0" + currentMinutes; }
    //         if (durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }

    //         // Display the updated duration
    //         curr_time.textContent = currentMinutes + ":" + currentSeconds;
    //         total_duration.textContent = durationMinutes + ":" + durationSeconds;
    //     }
    // }

    /********************************************************************* */

    var playerMob = document.querySelector('#player-mobile')
    playerMob.innerHTML =
    `<p>${artist1.title}</p>`

    player.innerHTML = `<img src="${album.cover_big}" alt="sinister" class="pointer">
    <div class="album-name">
        <a href="#">${artist1.title}</a>
        <a href="#">${album.title}</a>
    </div>
    <div class="album-icons">
        <a href="#"><i class="far fa-heart"></i></a>
        <a href="#"><i class="far fa-folder"></i></a>
        
    </div>
    `

    var button = document.querySelector('#playPauseBtn')
    console.log(audio)
    button.addEventListener('click', play)

    function play(){
if(isPlaying == false){
        audio.play();
        console.log('sta suonando')
        isPlaying = true;
}else{
 audio.pause();
 isPlaying = false;

}}
}

aalbums()


