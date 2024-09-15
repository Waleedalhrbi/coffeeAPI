setInterval(() => 
fetch('https://coffee.alexflipnote.dev/random.json')
.then((res) => res.json())
.then((date) => {
    let continer = document.getElementById("continer");
        let imgAPI = document.createElement('img');
        
        imgAPI.src = date.file
        continer.textContent = " "
        continer.appendChild(imgAPI)
    }),1000);
    