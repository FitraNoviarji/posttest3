var icon =  document.getElementById("icon");
icon.onclick = function(){
    document.body.classList.toggle("light-theme");
}

alert("Hanya Pesan");

const button = document.getElementById("press");
button.addEventListener("click",function showinfo(){
    const x  = document.getElementById('info')
    if (x.style.display == 'none'){
        x.style.display = 'block';
    }else{
        x.style.display = 'none';
    }
});

const bigtext = document.getElementById("teks");
bigtext.addEventListener('click', function handleClick(){
    if(this.textContent == "Featured"){
        bigtext.textContent = "pilihan"
    }else{
        bigtext.textContent = "tess"
    }
});