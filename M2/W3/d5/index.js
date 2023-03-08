///so che non serviva, ma volevo allenarmi con gli oggetti:
//li costruisco solo con le proprietà che mi interessa appaiano in display 
class userProfile{
    constructor(firstName, lastName, email, img){
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.img = img;
    }
}
///prendo i dati dal file json
async function loadUsers() {
    const response = await fetch('users.json');
    var users = await response.json();
    console.log(users); 

///costruisco gli oggetti

   /*
   var first = users[0] = new userProfile(users[0].firstName, users[0].lastName, users[0].email, users[0].profileURL);
    console.log(first)
   var second = users[1] = new userProfile(users[1].firstName, users[1].lastName, users[1].email, users[1].profileURL);
    console.log(second)
    */ 

   //posso farlo con un ciclo:
///uso un ciclo forEach
    var u= [];
    users.forEach((el,i) => {u[i]= new userProfile(users[i].firstName, users[i].lastName, users[i].email, users[i].profileURL)})
    console.log(u)
    /*
    var it = document.querySelector('#it');
    u.forEach((el) => {write(el)})
    function write(user){
        it.innerHTML +=  
        `<div class="shadow p-3 mb-5 bg-body rounded" style="width: 18rem">`+
        `<div class="card-body">`+
        `<div><img src="${user.img}" alt="imgUser" class="rounded-circle bg-light p-3/></div>` +
        `<h3 class="m-2">${user.firstName} ${user.lastName}</h3>` +
        `<div><a href="mailto:${user.email}" class=" text-warning">${user.email}</a></div>` +
        `<div>`+
        `</div>`;
    }
    */

///inserisco nell'html

    var title = document.querySelector('.card-body');
    var title2 = document.querySelector('.card-body2');
    title.innerHTML = `<div><img class = 'rounded-circle bg-light p-3' src=${u[0].img}></img></div><h3>${u[0].firstName} ${u[0].lastName}</h3> <p class= 'text-warning'> ${u[0].email} </p>`;
    title2.innerHTML = `<div><img class = 'rounded-circle bg-light p-3' src=${u[1].img}></img></div><h3>${u[1].firstName} ${u[1].lastName}</h3> <p class= 'text-warning'> ${u[1].email} </p>`;
  }

  loadUsers();


  

