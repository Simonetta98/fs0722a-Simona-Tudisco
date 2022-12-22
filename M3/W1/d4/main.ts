
//Fetch
 async function fetchPlaces() {
   let response = await fetch(`./list.json`);
   let decoded = await response.json();
   console.log(decoded)

//Creo i singoli ogg.   
   interface IDentify {
    id: string,
    codprod: number
 }

   class MyObj implements IDentify{
    id: string;
    codprod: number;
    //
    collezione: string;
    capo: string;
    modello: number;
    quantita: number;
    colore: string;
    prezzoivaesclusa: number;
    prezzoivainclusa: number;
    disponibile: string;
    saldo: number;
    img: string;
    imgHover: string

    constructor(id: string, codprod: number, collezione: string, capo: string, modello: number, quantita: number, colore:string, prezzoivaesclusa: number, prezzoivainclusa: number, disponibile: string, saldo: number, img: string, imgHover: string){
        this.id = id;
        this.codprod = codprod;
        this.collezione = collezione;
        this.capo = capo;
        this.modello = modello;
        this.quantita = quantita;
        this.colore = colore;
        this.prezzoivaesclusa = prezzoivaesclusa;
        this.prezzoivainclusa = prezzoivainclusa; //prezzo utilizzato
        this.disponibile = disponibile;
        this.saldo = saldo;                      //sconto applicato in %
        this.img = img;
        this.imgHover = imgHover
    }

//Metodi ogg.
    getsaldocapo(): number{
       return Math.round(this.prezzoivainclusa - ((this.saldo * this.prezzoivainclusa)/100))
    }

    getacquistocapo(): number{
        return this.getsaldocapo()
    }
   }
  

//Nuovi ogg.
   for (var i in decoded){
   let obj = new MyObj(decoded[i].id, decoded[i].codprod, decoded[i].collezione, decoded[i].capo, decoded[i].modello, decoded[i].quantita, decoded[i].colore, decoded[i].prezzoivaesclusa, decoded[i].prezzoivainclusa, decoded[i].disponibile, decoded[i].saldo, decoded[i].img, decoded[i].imgHover);
   console.log(obj)
   //console.log(obj.getsaldocapo())

//DOM
   let container = (<HTMLDivElement>document.getElementById('container'));
    container.innerHTML += ` <div class="card mb-4 me-4 boh" style="width: 18rem;">
    <img onmouseover="this.src='${obj.imgHover}'" onmouseout="this.src='${obj.img}'" id="change" src="${obj.img}" class="card-img-top mt-2 img-thumbnail rounded" alt="...">
    <div class="card-body">
    <p class="d-none codprod">${obj.codprod}</p> 
      <h5 id="nome" class="card-title fw-semibold">${obj.capo.charAt(0).toUpperCase() + obj.capo.slice(1)}</h5> 
      <p class="card-text">Questo capo appartiene alla collezione <span>${obj.collezione}</span>.
      </p>
      <p>
      Affrettati, ne rimangolo solo <span>${obj.quantita}</span> in <span>${obj.disponibile}</span>!
       </p>
       <p>
       Colore: ${obj.colore} <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-palette2 mb-1" viewBox="0 0 16 16">
       <path d="M0 .5A.5.5 0 0 1 .5 0h5a.5.5 0 0 1 .5.5v5.277l4.147-4.131a.5.5 0 0 1 .707 0l3.535 3.536a.5.5 0 0 1 0 .708L10.261 10H15.5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5H3a2.99 2.99 0 0 1-2.121-.879A2.99 2.99 0 0 1 0 13.044m6-.21 7.328-7.3-2.829-2.828L6 7.188v5.647zM4.5 13a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0zM15 15v-4H9.258l-4.015 4H15zM0 .5v12.495V.5z"/>
       <path d="M0 12.995V13a3.07 3.07 0 0 0 0-.005z"/>
     </svg>
       </p>
       <hr>
       <p class="text-center">
       Prezzo: <span class="text-decoration-line-through">${Math.round(obj.prezzoivainclusa)} €</span> <span class="ms-4 fs-4 fw-semibold ">${obj.getacquistocapo()} €</span>
       </p>
       <div class="container text-center">
      <a id="${obj.capo}   , ${obj.collezione} ${obj.getacquistocapo()}" href="#b" class="btn  shadow bg-body rounded ">Mettilo in busta <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bag mb-1 ms-1" viewBox="0 0 16 16">
      <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
    </svg></a>
    </div>
    </div>
  </div>`

//Cart
var buttons = Array.from(document.querySelectorAll('.btn'))
console.log(buttons)
buttons.forEach(function(el) {
el.addEventListener('click', function() {
   let container2 = (<HTMLDivElement>document.getElementById('cart'));

   container2.innerHTML += ` 
   <div id="b" class="card mb-4 me-4" style="width: 18rem;">
   <div class="card-body">
   <a class="btn rounded mb-4 p-1 delete"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
   <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
 </svg></a>
     <h5 id="nome" class="card-title fw-semibold">${el.id.slice(0, 8).toUpperCase()} <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-bag-heart ms-2 mb-1" viewBox="0 0 16 16">
     <path fill-rule="evenodd" d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5v-.5Zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0ZM14 14V5H2v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1ZM8 7.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z"/>
   </svg></h5> 
     <p class="card-text"><span>${el.id.slice(0, -2)}</span>.
     </p>
      <hr>
      <p class="text-center">
      Prezzo: <span class="ms-4 fs-4 fw-semibold">${el.id.slice(-2)}€</span>
      </p>
   </div>
 </div>`
   });
  });
 }
}
 console.log(fetchPlaces())
 
  