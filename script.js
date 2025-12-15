const music = document.getElementById("music");
const noBtn = document.getElementById("noBtn");
const container = document.getElementById("confess");

let kaburCount = 0;

/* === BACA SELENGKAPNYA === */
function baca(){
  document.getElementById("fullText").classList.remove("hidden");
  document.getElementById("choice").classList.remove("hidden");
  document.getElementById("readBtn").style.display = "none";
}

/* === JIKA YA === */
function terima(){
  music.currentTime = 0;
  music.play().catch(()=>{});

  container.innerHTML = `
    <h1>TIMAA ACII UDA NEIMA</h1>
    <p>
      akuuu janji ga bakal sia' in kesempatan ini<br>
      akuuu bakal usahain apapun buat kamu,<br>
      akuuu bakal selalu ada buat kamu,<br>
      dan akuu bakal selalu sayangg samaa kamuu,<br>
      SEKALI LAGI AKU MAU BILA TERIMAA KASIII YAA
    </p>
  `;
}

/* === JIKA TIDAK = KABUR === */
if(noBtn){
  noBtn.addEventListener("mouseenter", kabur);
  noBtn.addEventListener("touchstart", kabur);
}

function kabur(){
  kaburCount++;

  const x = Math.random() * 220 - 110;
  const y = Math.random() * 180 - 90;

  noBtn.style.transform = `translate(${x}px, ${y}px)`;

  if(kaburCount === 1){
    noBtn.innerText = "Yakin? 😏";
  }
}
