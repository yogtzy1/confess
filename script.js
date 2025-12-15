const music = document.getElementById("music");
const noBtn = document.getElementById("noBtn");
const container = document.getElementById("confess");

let kaburCount = 0;

/* === JIKA YA === */
function terima(){
  music.currentTime = 0;
  music.play();

  container.innerHTML = `
    <h1>❤️ AKU BAHAGIA ❤️</h1>
    <p>
      Terima kasih sudah memilih aku.<br>
      Aku janji bakal jaga kamu,<br>
      nemenin kamu,<br>
      dan jatuh cinta berkali-kali sama orang yang sama 🤍
    </p>
  `;
}

/* === JIKA TIDAK = KABUR === */
noBtn.addEventListener("mouseenter", kabur);
noBtn.addEventListener("touchstart", kabur);

function kabur(){
  kaburCount++;

  const x = Math.random() * 220 - 110;
  const y = Math.random() * 180 - 90;

  noBtn.style.transform = `translate(${x}px, ${y}px)`;

  if(kaburCount === 1){
    noBtn.innerText = "Yakin? 😏";
  }
}

