const slides = document.querySelectorAll(".slide");
const bar = document.getElementById("bar");
const noBtn = document.getElementById("noBtn");

let index = 0;
let startX = 0;
let kaburCount = 0;
let sudahUbah = false;

/* Show slide */
function showSlide(i) {
  slides.forEach(s => s.classList.remove("active"));
  slides[i].classList.add("active");
  bar.style.width = ((i + 1) / slides.length) * 100 + "%";
}

showSlide(index);

/* Swipe Mobile */
document.addEventListener("touchstart", e => {
  startX = e.touches[0].clientX;
});

document.addEventListener("touchend", e => {
  const endX = e.changedTouches[0].clientX;
  if (startX - endX > 50 && index < slides.length - 1) {
    index++;
  } else if (endX - startX > 50 && index > 0) {
    index--;
  }
  showSlide(index);
});

/* Klik Desktop */
document.addEventListener("click", e => {
  if (index >= slides.length - 1) return;
  if (e.clientX > window.innerWidth / 2) index++;
  else if (index > 0) index--;
  showSlide(index);
});

/* Tombol YES */
function yes() {
  document.body.innerHTML = `
    <div class="ending">
      <h1>❤️ Aku Bahagia ❤️</h1>
      <p>Terima kasih sudah memilih aku 🤍</p>
    </div>
  `;
}

/* Tombol NO kabur */
noBtn.addEventListener("mouseenter", kabur);
noBtn.addEventListener("touchstart", kabur);

function kabur() {
  kaburCount++;

  const x = Math.random() * 240 - 120;
  const y = Math.random() * 240 - 120;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;

  if (!sudahUbah) {
    noBtn.innerText = "Yakin mau nolak?";
    sudahUbah = true;
  }

  if (kaburCount >= 5) {
    autoJadian();
  }
}

/* AUTO ENDING */
function autoJadian() {
  document.body.innerHTML = `
    <div class="ending auto">
      <h1>💍 Berarti kita jadian ya 💍</h1>
      <p>
        Karena kamu nggak jadi nolak 😏<br>
        Mulai sekarang aku milik kamu,<br>
        dan kamu milik aku 🤍
      </p>
    </div>
  `;
}
