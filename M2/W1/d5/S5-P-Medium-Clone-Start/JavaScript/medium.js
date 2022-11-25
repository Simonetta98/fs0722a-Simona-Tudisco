const navbar = document.querySelector(".flexContainer");
const button = document.querySelector(".navButton");
window.onscroll = ()=> {
    if(this.scrollY>=380){
        navbar.classList.add("colour");
        button.classList.add("green");
    }
    else{
        navbar.classList.remove("colour");
        button.classList.remove("green");
    }
  }