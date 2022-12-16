async function aalbums() {

    const albums = [
        "5327691",
        "363906907",
        "217489292",
        "359324967",
        "313482367",
        "65373012",
        "75621062%27%27",
    ]

    console.log(albums)

    const response = await fetch(`https://api.deezer.com/album/${albums[0]}`);
        const album = await response.json();
        console.log(album);

        let track1 = album.tracks
        console.log(track1)
        let track2 = track1.data
        console.log(track2)
       

    
}
aalbums()

let player = document.querySelector('#music')
player.setAttribute('src','https://cdns-preview-2.dzcdn.net/stream/c-2d60d523ed4d6551154a48bc419e5eed-5.mp3')
player.volume=0.02
player.play()




// albums.tracks.data...link o preview

/***
 * 
 * 
 const playButton = document.querySelector('.play');
const pauseButton = document.querySelector('.pause');

// By default make pause button disabled
pauseButton.disabled = true;


playButton.addEventListener('click', () => {
  pauseButton.disabled = false;
  playButton.disabled = true;
});


pauseButton.addEventListener('click', () => {
  playButton.disabled = false;
  pauseButton.disabled = true;
});
 * 
 * 
 */