window.addEventListener("scroll", function () {
  var header = document.querySelector("nav");
  header.classList.toggle("sticky", window.scrollY > 0);
});

// // Change Bg

// function ChangeBg() {
//   const section = document.querySelector(".hero");
//   const images = ['url("./images/bg0.jpg")', 'url("./images/bg1.jpg")', 'url("./images/bg2.jpg")'];
//   let i = 0;
//   i = (i + 1) % images.length;
//   const bg = images[Math.floor(Math.random() * images.length)];

//   section.style.backgroundImage = bg;
// }

// // Pemanggilan ChangeBg() untuk pertama kali saat halaman dimuat
// ChangeBg();

// // Menggunakan setInterval untuk mengubah gambar setiap detik
// setInterval(ChangeBg, 800);

let headerBg = document.querySelectorAll(".background");
let imageIndex = 0;

function ChangeBg() {
  // remove showing
  headerBg[imageIndex].classList.remove("showing");

  // increment
  imageIndex++;
  // Mulai ulang dari awal
  if (imageIndex >= headerBg.length) {
    imageIndex = 0;
  }

  headerBg[imageIndex].classList.add("showing");
}

setInterval(ChangeBg, 3000);
