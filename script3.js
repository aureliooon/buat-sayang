// Ambil semua section dengan class "letter"
const letters = document.querySelectorAll('.letter');

// Ambil tombol panah
const leftArrow = document.querySelector('.bx-left-arrow-alt');
const rightArrow = document.querySelector('.bx-right-arrow-alt');

// Indeks awal (mulai dari section pertama)
let currentIndex = 0;

// Fungsi untuk menampilkan section berdasarkan indeks
function showSection(index) {
  letters.forEach((letter, i) => {
    if (i === index) {
      letter.style.display = 'block';
    } else {
      letter.style.display = 'none';
    }
  });
}

// Navigasi ke section sebelumnya
leftArrow.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    showSection(currentIndex);
  }
});

// Navigasi ke section berikutnya
rightArrow.addEventListener('click', () => {
  if (currentIndex < letters.length - 1) {
    currentIndex++;
    showSection(currentIndex);
  }
});

// Tampilkan section pertama saat halaman dimuat
showSection(currentIndex);
