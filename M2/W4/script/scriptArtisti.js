var arrayCanzoni = [];
var arrayRank = [];

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





    const response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/album/${sessionStorage.getItem('id_artista_corrente')}}`);
    const album = await response.json();


    var artist = album.artist;


    //top
    //////////////SIMONA ANDREA ARTISTI STILE
    let header = document.querySelector('#headArtisti')
    header.innerHTML += `
    <i class="bi bi-patch-check-fill d-inline text-info " style="font-size:1.5rem"></i>
        <p class="d-inline">Artista verificato</p>
        <h2>${artist.name}</h2>
        <p>${album.fans} ascoltatori mensili</p>`

    let header2 = document.querySelector('artistiHeader')
    header.style.backgroundImage = `url(${artist.picture_xl})`;







    //music
    var music = album.tracks;
    //console.log(music);
    var music2 = music.data;



    //canzoni più ascoltate
    for (let k = 0; k <= (music2.length) - 1; k++) {

        arrayRank.push(new Rank (music2[k].title,music2[k].rank,music2[k].duration))
        function compare(a, b) {
            if (a.rank > b.rank) {
                return -1;
            }
            if (a.rank < b.rank) {
                return 1;
            }
            return 0;
        }
        
    }
    let riproduzioni = arrayRank.sort(compare)
    console.log(riproduzioni)

    for (let i = 0; i <= 4; i++) {
        //console.log(preview);
        let titoli = arrayRank[i].nomeCanzone
        
        let preview = music2[i].preview;

        function secondsToTime(e) {
            const m = Math.floor(e % 3600 / 60).toString(),
                s = Math.floor(e % 60).toString().padStart(2, '0');

            return m + ':' + s;

        }

        //
        arrayCanzoni.push(new Songs(music2[i].title, music2[i].preview, music2[i].rank, album.cover))
        //

      


        var canzoni = document.querySelector('#popolariSong');
        canzoni.innerHTML += `
            <div class=" row">
            <div class="row col-1">    
                <p>${[(i + 1)]}</p>
                <a class="ancoreNascoste" href="${preview}"><i class="bi bi-play-fill text-secondary" style=""></i></a>
            </div>
            <img class="col-2 my-2" src="${album.cover_small}">
            <p class="col-4">${titoli}</p>
            <p class="col-3">${riproduzioni[i].rank}</p>
            <p class="col-2">${secondsToTime(arrayRank[i].durata)}</p>
            </div>`    //finemusic
        //da completare: MOSTRA/NASCONDI PLAY BUTTON
        // let anchor = document.querySelectorAll('.ancoreNascoste')
        // anchor.onmouseover = function(){
        //     if(anchor.style.display === 'none'){
        //         anchor.style.display = 'block';
        //     }else{
        //         anchor.style.display = 'none'
        //     }
        // }

    }
    console.log(arrayCanzoni)

    var social = document.querySelector('#social')
    social.innerHTML += `
            <img src="${artist.picture_small}" class="rounded-circle">
            <div>
                <p>hai messo Mi piace a 6 brani</p>
                <p>di ${artist.name}</p>
            </div>`
}





aalbums();

class Songs {
    constructor(titolo, preview, rank, img) {
        this.titolo = titolo;
        this.preview = preview;
        this.rank = rank;
        this.img = img
    }
}
class Rank {
    constructor(nomeCanzone,rank,durata) {
        this.rank = rank;
        this.nomeCanzone=nomeCanzone;
        this.durata=durata;
    }
}
