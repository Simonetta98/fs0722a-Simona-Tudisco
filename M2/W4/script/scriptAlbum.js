var carlini = [];
async function aalbums() {

    const albums = [
        "5327691",
        "363906907",
        "217489292",
        "359324967",
        "313482367",
        "65373012",
        "75621062%27%27",
    ];

    //console.log(albums)

    const response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/album/${sessionStorage.getItem('id_album_corrente')}`);
    const album = await response.json();
    //console.log(album);

    var artist = album.artist;

    //top
    function secondsToTime2(e) {
        const h = Math.floor(e / 3600).toString(),
            m = Math.floor(e % 3600 / 60).toString(),
            s = Math.floor(e % 60).toString().padStart(2, '0');
        if (e <= 3600) {
            return m + ' min ' + s + ' sec';
        } else {
            return h + ' ora ' + m + ' min ' + s + ' sec';
        }
    }
    let header = document.querySelector('#head')

    ////////////////////////////////ALBUM PAGE SIMONA ANDREA STILE header con titolo album ecc.

    header.innerHTML += `
    <img src="${album.cover_big}" class="col-3" >
    <div class="column col-8 align-items-center">
        <p class="">Album</p>
        <p class="display-4" id="nomeAlbum">${album.title}</p>
        <div class="d-flex align-items-center">
            <img src="${artist.picture_small}" class="rounded-circle mx-1" style="width:35px">
            <p class="m-0">${artist.name} · ${album.release_date} · ${album.nb_tracks} brani,</p>
            <p class="mx-1 my-0 text-secondary" id="durata">${secondsToTime2(album.duration)}</p>
        </div>
    </div>`


    var title = document.querySelector('#canzoni');

    //music
    var music = album.tracks;
    //console.log(music);
    var music2 = music.data;

    for (let i = 0; i <= music2.length - 1; i++) {
        let preview = music2[i].preview;
        //console.log(preview);
        let titoli = music2[i].title;
        let riproduzioni = music2[i].rank;

        function secondsToTime(e) {
            const m = Math.floor(e % 3600 / 60).toString(),
                s = Math.floor(e % 60).toString().padStart(2, '0');

            return m + ':' + s;

        }

        carlini.push(new AlbumSong(music2[i].title, album.id, album.artist.name))
        console.log(carlini)
        //finemusic


        /////////////////////////////ALBUM PAGE SIMONA ANDREA STILE lista di canzoni 
        title.innerHTML += `
        <div class="row marielli">
        <p class="col-1 grigi">${[(i + 1)]}</p>
        <div  class="col-4">
            <p class="name-song">${titoli}</p>
            <p class="grigi">${artist.name}</p>
        </div>
        <p class="col-3 grigi">${riproduzioni}</p>
        <p class="col-3 grigi">${secondsToTime(music2[i].duration)}</p>
        <a class="col-1" href="${preview}" onclick="play()" target="_blank"><i class="bi bi-play-circle-fill text-success" style="font-size:2em"></i></a>
        <hr>
    </div>`;

    }


    ///SONGS
    var marielli = document.querySelectorAll('.marielli')           //(riga 39) collego i div cards creati dinamicamente
    //console.log(marielli[0])
    for (let songs of marielli) {                                     //faccio un ciclo per tutti i div cards
        let xsong = songs.querySelector('.name-song').innerHTML; //seleziono il titolo dell'album della rispettiva card
        //console.log(xsong)
        let song_corrente = carlini.find(e => {                      //all'interno di carlino cerco tra i suoi elementi quelli con lo stesso titolo della card
            return e.titolo == xsong;
        })
        //console.log(album_corrente)
        songs.addEventListener('click', load)                        //aggiungo eventlistener alle cards
        function load() {
            sessionStorage.setItem('id_song_corrente', carlini.indexOf(song_corrente))  //salvo in sessionStorage l'id dell'album corrente


            async function aalbumss() {

                //console.log(albums)

                const response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/album/${sessionStorage.getItem('id_album_corrente')}`);
                const album = await response.json();
                console.log(album);

                var player = document.querySelector('#player-left')
                var music = album.tracks
                var music2 = music.data[sessionStorage.getItem('id_song_corrente')]
                console.log(music2)


                var playerMob = document.querySelector('#player-mobile')
                playerMob.innerHTML =
                `<p>${music2.title}</p>`

                
                    player.innerHTML = `<img src="${album.cover_big}" alt="sinister" class="pointer">
            <div class="album-name">
                <a href="#">${music2.title}</a>
                <a href="#">${album.title}</a>
            </div>
            `}
            
            aalbumss()

        }
        console.log(album)
    }
}

aalbums();



class AlbumSong {
    constructor(titolo, id, artista) {
        this.titolo = titolo,
            this.id = id,
            this.artista = artista
    }
}