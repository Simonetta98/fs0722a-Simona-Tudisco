window.addEventListener("load", function(){
    this.fetch('https://handlers.education.launchcode.org/static/planets.json')
    .then((response)=> response.json()) //fetch call returns a promise that resolves with a response obj, I need to turn this response into JSON format to read it's body.
    .then((data)=> {                   //also response.json returns a promise, so i have to re-do a console.log to read that response.
    console.log(data);
    const destination = document.getElementById("destination");
    destination.innerHTML = `<h3>Planet ${data[0].name}</h3>`;
    })
    .catch((err)=> console.log('Not Found, '+ err))
 });
 