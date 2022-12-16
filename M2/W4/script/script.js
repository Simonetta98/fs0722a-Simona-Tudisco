var carlino = [];

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

    console.log(albums)

    for (let k = 0; k <= (albums.length)-1; k++) {
        const response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/album/${albums[k]}`);
        const album = await response.json();
       // console.log(album);

        var title = document.querySelector('#pls');
        
        var buonasera = document.querySelector('#buonasera_blocks');
         console.log(buonasera)
        var artist = album.contributors;

        //music
        //var music = album.tracks;
        //console.log(music);
        //var music2 = music.data;
        
        /*for (let i = 0; i <= music2.length-1; i++) {
            let preview = music2[i].preview;
            console.log(preview);
        }*/
        //finemusic


     //////////////////////// SIMONA ANDREA STILE ALBUM in HOME 
        title.innerHTML += `<div class= "mariello p-3 card mb-3 mb-lg-3  m-lg-1  m-xxl-2  text-white rounded-2 border-none hideMe" >
        <img class ="card-img-top rounded-2"  src="${album.cover_big}"></img>
        <div class="card-body p-0">
        <div>
            <h3 class="card-title fs-6 pt-3">${album.title}</h3>
            </div>
            <p class= "card-text text-white-50">${artist[0].name}</p>
        </div>
    </div>`;

   carlino.push(new Album(album.title, album.id, album.artist.name)) ///nuova istanza di Album (carlino riga 1)
  
   /**d-flex
 align-items-center */
       buonasera.innerHTML += `
     <div class="col-6 col-md-5 rounded-1 blocchetti " >
     <img class="immagini ms-0 rounded-start" src="${album.artist.picture_medium}" alt="album" style="width:50px">
     <p> ${album.artist.name}</p>
     <p class="artist_name" style="display: none"> ${album.id}</p>
     </div>`
              


   ///VISUALIZZA TUTTO
    var button = document.querySelector('#hide_divs');
    button.addEventListener('click', hide);
    function hide() {
        if (title.style.flexWrap === "wrap") {
            title.style.flexWrap = "nowrap";
        } else {
            title.style.flexWrap = "wrap";
        }
    } 
}
console.log(carlino)
   

///COLLEGAMENTO dei DATI

///ALBUMS
var mariello = document.querySelectorAll('.mariello')           //(riga 39) collego i div cards creati dinamicamente
//console.log(mariello[0])
for (let card of mariello){                                     //faccio un ciclo per tutti i div cards
    let titolino = card.querySelector('.card-title').innerHTML; //seleziono il titolo dell'album della rispettiva card
    //console.log(titolino)
    let album_corrente = carlino.find(e=>{                      //all'interno di carlino cerco tra i suoi elementi quelli con lo stesso titolo della card
      return e.titolo == titolino;
    })
    //console.log(album_corrente)
    card.addEventListener('click', load)                        //aggiungo eventlistener alle cards
    function load(){
        sessionStorage.setItem('id_album_corrente', album_corrente.id)  //salvo in sessionStorage l'id dell'album corrente
    }
  }
  
///ARTISTS
var mariella = document.querySelectorAll('.blocchetti');
//console.log(mariella[0])
for (let blocks of mariella){
    let ids = blocks.querySelector('.artist_name').innerHTML;
    //console.log(ids)
    let artistaCorrente = carlino.find(e=>{
        return e.id == ids;
    })
    //console.log(artistaCorrente)
    
    blocks.addEventListener('click', save)
    function save(){
      sessionStorage.setItem('id_artista_corrente', artistaCorrente.id)
    }
  }
}
aalbums();



class Album{
    constructor(titolo, id, artista){
  this.titolo = titolo,
  this.id = id,
  this.artista = artista
 }
}


///////JQUERY load asincrono album&artist page


$('body').on('click', '.card', function() {
    $("#jquery").load("albums.html")
});

$('body').on('click', '.blocchetti', function() {
    $("#jquery").load("artists.html")
});

$('body').on('click', '#cercami', function() {
    $("#jquery").load("search.html")
});
$('body').on('click', '#searchMob', function() {
    $("#jquery").load("search.html")
});
///////BOTTONI back&forward 
