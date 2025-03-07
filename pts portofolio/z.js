function hamburg(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform = "translateY(0px)"
}
function cancel(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform = "translateY(-500px)"
}
// Typewriter Effect
const texts = [
    "DEVELOPER",
    "DESIGNER",
    "STUDENT"
]
let speed  =100;
const textElements = document.querySelector(".typewriter-text");
let textIndex = 0;
let charcterIndex = 0;
function typeWriter(){
    if (charcterIndex < texts[textIndex].length){
        textElements.innerHTML += texts[textIndex].charAt(charcterIndex);
        charcterIndex++;
        setTimeout(typeWriter, speed);
    }
    else{
        setTimeout(eraseText, 1000)
    }
}
function eraseText(){
    if(textElements.innerHTML.length > 0){
        textElements.innerHTML = textElements.innerHTML.slice(0,-1);
        setTimeout(eraseText, 50)
    }
    else{
        textIndex = (textIndex + 1) % texts.length;
        charcterIndex = 0;
        setTimeout(typeWriter, 500)
    }
}
window.onload = typeWriter

function confirmDownload() { //Untuk membuat fungsi bernama confirmDownload
    const confirmation = confirm("lanjut dowload ga nih?"); //Menampilkan kotak dialog dengan pesan "Mau download CV ku nih?"
    if (confirmation) { //Jika pengguna klik  OK
      window.location.href = "fadhiltzy.png"; //Maka akan mendownload file cv 
      return true; //Mengembalikan nilai true untuk menandakan unduhan dilanjutkan
    }else{ //Jika user tidak klik tombol ok
        window.location.href = "index.html"; //Maka akan tetap di halaman awal/index 
        return false;
    }
  }