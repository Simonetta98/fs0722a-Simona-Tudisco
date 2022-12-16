var cercaAlbum = []

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


    for (let k = 0; k <= (albums.length) - 1; k++) {
        const response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/album/${albums[k]}`);
        const album = await response.json();

        var artist = album.artist;

        //console.log(music);
        cercaAlbum.push(new CercaAlbum(album.title, album.cover_medium, artist.name, album.id))
    }

    /************************************************ */


    console.table(cercaAlbum)

    let input = document.querySelector('#input')
    let cerca = document.querySelector('#cerca')
    var list = document.querySelector('#results-container')

    function setList(results) {


        for (const person of results) {

            list.innerHTML +=
                `<div class="marielli mt-2"><div class="col-md-4">
                    <img src="${person.img}" class="img-fluid rounded imgClick" alt="cover">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">${person.titolo}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${person.artista}</h6>
                        <p class="idNumb" style="display: none"> ${person.id}</p>
                    </div>
                </div></div>`
        }
    }

    cerca.addEventListener('click', () => {
        list.innerHTML = '';
        let value = input.value

        if (value && value.trim().length > 0) {
            value = value.trim().toLowerCase()

            setList(cercaAlbum.filter(person => {

                return person.titolo.toLowerCase().includes(value) || person.artista.toLowerCase().includes(value)

            }))

        }
        
    })

    ///ALBUMS
    var marielloSearch = document.querySelectorAll('.marielli')           //(riga 39) collego i div cards creati dinamicamente

    for (let div of marielloSearch) {                                     //faccio un ciclo per tutti i div cards
        let titolino = div.querySelector('.idNumb').innerHTML; //seleziono il titolo dell'album della rispettiva card
        //console.log(titolino)
        let album_corrent = cercaAlbum.find(e => {                      //all'interno di carlino cerco tra i suoi elementi quelli con lo stesso titolo della card
            return e.id == titolino;
        })
        //console.log(album_corrente)
        div.addEventListener('click', load)                        //aggiungo eventlistener alle cards
        function load() {
            sessionStorage.setItem('id_album_corrente', album_corrent.id)  //salvo in sessionStorage l'id dell'album corrente
        }
    }

    ///ARTISTS

    //console.log(mariella[0])
    for (let h6 of marielloSearch) {
        let ids = h6.querySelector('.idNumb').innerHTML;
        //console.log(ids)
        let artistaClick = cercaAlbum.find(e => {
            return e.id == ids;
        })
        //console.log(artistaCorrente)

        ids.addEventListener('click', save)
        function save() {
            sessionStorage.setItem('id_artista_corrente', artistaClick.id)
        }
    }

}
aalbums()

class CercaAlbum {
    constructor(titolo, img, artista, id) {
        this.titolo = titolo;
        this.img = img;
        this.artista = artista;
        this.id=id;
    }
}

$('body').on('click', '.imgClick', function() {
    $("#jquery").load("albums.html")
});

$('body').on('click', '.card-subtitle', function() {
    $("#jquery").load("artists.html")
});