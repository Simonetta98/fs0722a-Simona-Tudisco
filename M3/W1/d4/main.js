"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
//Fetch
function fetchPlaces() {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield fetch(`./list.json`);
        let decoded = yield response.json();
        console.log(decoded);
        class MyObj {
            constructor(id, codprod, collezione, capo, modello, quantita, colore, prezzoivaesclusa, prezzoivainclusa, disponibile, saldo, img) {
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
                this.saldo = saldo; //sconto applicato in %
                this.img = img;
            }
            //Metodi ogg.
            getsaldocapo() {
                return Math.round(this.prezzoivainclusa - ((this.saldo * this.prezzoivainclusa) / 100));
            }
            getacquistocapo() {
                return this.getsaldocapo();
            }
        }
        //Nuovi ogg.
        for (var i in decoded) {
            let obj = new MyObj(decoded[i].id, decoded[i].codprod, decoded[i].collezione, decoded[i].capo, decoded[i].modello, decoded[i].quantita, decoded[i].colore, decoded[i].prezzoivaesclusa, decoded[i].prezzoivainclusa, decoded[i].disponibile, decoded[i].saldo, decoded[i].img);
            console.log(obj);
            //console.log(obj.getsaldocapo())
            var m = Array.from(decoded);
            console.log(m);
            //DOM
            let container = document.getElementById('container');
            container.innerHTML += ` <div class="card mb-4 me-4 boh" style="width: 18rem;">
    <img src="${obj.img}" class="card-img-top mt-2 img-thumbnail rounded" alt="...">
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
       Prezzo: <span class="text-decoration-line-through">${Math.round(obj.prezzoivainclusa)} €</span> <span class="ms-4 fs-4 fw-semibold">${obj.getacquistocapo()} €</span>
       </p>
       <div class="container text-center">
      <a id="${obj.id, obj.img, obj.capo}" href="#" class="btn  shadow bg-body rounded">Mettilo in busta <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bag mb-1 ms-1" viewBox="0 0 16 16">
      <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
    </svg></a>
    </div>
    </div>
  </div>`;
            //Cart
            var buttons = Array.from(document.querySelectorAll('.btn'));
            console.log(buttons);
            buttons.forEach(function (el) {
                el.addEventListener('click', function () {
                    sessionStorage.setItem('id', el.id);
                    let container2 = document.getElementById('cart');
                    container2.innerHTML += ` <div class="card mb-4 me-4 boh" style="width: 18rem;">
   <div class="card-body">
   <p class="d-none codprod">${el.id}</p> 
     <h5 id="nome" class="card-title fw-semibold">${el.id}</h5> 
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
      Prezzo: <span class="text-decoration-line-through">${Math.round(obj.prezzoivainclusa)} €</span> <span class="ms-4 fs-4 fw-semibold">${obj.getacquistocapo()} €</span>
      </p>
      <div class="container text-center">
     <a id="${obj.id}" href="#" class="btn  shadow bg-body rounded">Mettilo in busta <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bag mb-1 ms-1" viewBox="0 0 16 16">
     <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
   </svg></a>
   </div>
   </div>
 </div>`;
                });
            });
        }
    });
}
console.log(fetchPlaces());
