///so che non c'era bisogno ma volevo allenarmi con gli oggetti
//li costruisco solo con le proprietà che mi interessano 
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
   var first = users[0] = new userProfile(users[0].firstName, users[0].lastName, users[0].email, users[0].profileURL);
    console.log(first)
   var second = users[1] = new userProfile(users[1].firstName, users[1].lastName, users[1].email, users[1].profileURL);
    console.log(second)
    for(i=0; i<users.lenght; i++){
        users[i]= new userProfile(users[i].firstName, users[i].lastName, users[i].email, users[i].profileURL);
      console.log(users)
    }


///inserisco nell'html
    var title = document.querySelector('.card-body');
    var title2 = document.querySelector('.card-body2');
    title.innerHTML = `<div><img class = 'rounded-circle bg-light p-3' src=${first.img}></img></div><h3>${first.firstName} ${first.lastName}</h3> <p class= 'text-warning'> ${first.email} </p>`;
    title2.innerHTML = `<div><img class = 'rounded-circle bg-light p-3' src=${second.img}></img></div><h3>${second.firstName} ${second.lastName}</h3> <p class= 'text-warning'> ${second.email} </p>`;
  }

  loadUsers();


  

