const PASSWORD="sayang"; // GANTI
const lock=document.getElementById("lock");
const story=document.querySelector(".story");
const progress=document.querySelector(".progress");
const bar=document.getElementById("bar");
const music=document.getElementById("music");
const slides=document.querySelectorAll(".slide");
const noBtn=document.getElementById("noBtn");
const wa=document.getElementById("waNotif");
const countdown=document.getElementById("countdown");
const timerEl=document.getElementById("timer");

let index=0,startX=0,kaburCount=0,ubah=false;

/* UNLOCK */
function unlock(){
  if(password.value===PASSWORD){
    lock.style.display="none";
    story.classList.remove("hidden");
    progress.classList.remove("hidden");
    music.play();
    fakeWA();
    startCountdown();
    showSlide(0);
  }else error.innerText="Password salah 😏";
}

/* SLIDE */
function showSlide(i){
  slides.forEach(s=>s.classList.remove("active"));
  slides[i].classList.add("active");
  bar.style.width=((i+1)/slides.length)*100+"%";
}

/* SWIPE */
document.addEventListener("touchstart",e=>startX=e.touches[0].clientX);
document.addEventListener("touchend",e=>{
  let endX=e.changedTouches[0].clientX;
  if(startX-endX>50 && index<slides.length-1) index++;
  else if(endX-startX>50 && index>0) index--;
  showSlide(index);
});

/* YES */
function yes(){ ending(); }

/* NO KABUR */
noBtn.addEventListener("mouseenter",kabur);
noBtn.addEventListener("touchstart",kabur);

function kabur(){
  kaburCount++;
  noBtn.style.transform=`translate(${Math.random()*240-120}px,${Math.random()*240-120}px)`;
  if(!ubah){noBtn.innerText="Yakin mau nolak?";ubah=true;}
  if(kaburCount>=5) ending();
}

/* FAKE WA */
function fakeWA(){
  setTimeout(()=>wa.classList.remove("hidden"),1200);
  setTimeout(()=>wa.classList.add("hidden"),4500);
}

/* COUNTDOWN */
function startCountdown(){
  countdown.classList.remove("hidden");
  let t=5;
  const int=setInterval(()=>{
    t--;
    timerEl.innerText=t;
    if(t<=0){
      clearInterval(int);
      countdown.classList.add("hidden");
      ending();
    }
  },1000);
}

/* ENDING + CONFETTI + SCREENSHOT */
function ending(){
  document.body.innerHTML=`
  <div class="ending">
    <h1>💍 Berarti kita jadian ya 💍</h1>
    <p class="proposal">
      🌹 Mau nggak…<br>
      jadi orang yang aku perjuangkan<br>
      seumur hidup?
    </p>
    <button onclick="download()">📸 Simpan Moment</button>
  </div>`;
  confetti();
}

/* CONFETTI */
function confetti(){
  for(let i=0;i<40;i++){
    const c=document.createElement("div");
    c.innerText="🎉";
    c.style.position="fixed";
    c.style.left=Math.random()*100+"vw";
    c.style.top="-20px";
    c.style.fontSize="24px";
    c.style.animation="fall 3s linear";
    document.body.appendChild(c);
    setTimeout(()=>c.remove(),3000);
  }
}

/* FAKE SCREENSHOT DOWNLOAD */
function download(){
  const a=document.createElement("a");
  a.href="data:text/plain,Moment Jadian ❤️";
  a.download="moment-jadian.txt";
  a.click();
}

/* CONFETTI FALL */
const s=document.createElement("style");
s.innerHTML="@keyframes fall{to{transform:translateY(110vh)}}";
document.head.appendChild(s);
