const loginForm = document.getElementById('login');
const loginContainer = document.getElementById('loginForm');
const mainContent = document.getElementById('mainContent');
const imageContent = document.getElementById('imageContent');
const userImage = document.getElementById('userImage');
const loginGif = document.getElementById('loginGif');
const errorMessage = document.getElementById('errorMessage');

const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const resetButton = document.getElementById('resetButton');
const resetButton2 = document.getElementById('resetButton2');
const gif = document.getElementById('gif');

// Menghitung berapa kali tombol "Yes" dan "No" ditekan
let yesClickCount = 0;
let noClickCount = 0;

// Data statis untuk login
const users = {
    "me_nyiau": "Ch1k@Ci4u",
    "me_ciau": "Ch1k@Ci4u",
    "chika": "Ch1k@Ci4u",
    "udang": "udang",
    "asan": "asan",
    "neko": "neko",
    "admin": "admin",
};

// Variabel untuk menghitung jumlah kesalahan
let wrongAttempts = 0;

// Fungsi untuk menghasilkan clue dengan menghilangkan 80% karakter
function generateClue(username) {
    const characters = username.split('');
    const totalChars = characters.length;
    const charsToHide = Math.floor(totalChars * 0.8); // 80% karakter dihilangkan

    // Acak indeks karakter yang akan dihilangkan
    const hiddenIndices = new Set();
    while (hiddenIndices.size < charsToHide) {
        const randomIndex = Math.floor(Math.random() * totalChars);
        hiddenIndices.add(randomIndex);
    }

    // Ganti karakter yang dipilih dengan '?'
    const clue = characters.map((char, index) => (hiddenIndices.has(index) ? '?' : char)).join('');
    return clue;
}

// Fungsi untuk menampilkan clue (1 username acak)
function showClue() {
    const usernames = Object.keys(users);
    const randomUsername = usernames[Math.floor(Math.random() * usernames.length)]; // Pilih username acak
    const clue = generateClue(randomUsername); // Generate clue untuk username yang dipilih
    alert(`Clue Username:\n\nUsername: ${clue}\n\nTERDAPAT 5 USERNAME MIYAWWW`);
}

// Fungsi untuk menangani login
loginForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Mencegah form submit

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (users[username] && users[username] === password) {
        // Reset jumlah kesalahan
        wrongAttempts = 0;

        loginContainer.style.display = 'none'; // Sembunyikan form login
        errorMessage.style.display = 'none'; // Sembunyikan pesan error

        if (username === "me_nyiau" || username === "me_ciau" || username === "chika" || username === "admin") {
            mainContent.style.display = 'block'; // Tampilkan konten utama
        } else if (username === "udang" || username === "asan" || username === "neko") {
            userImage.src = `${username}.jpg`; // Set gambar sesuai username
            imageContent.style.display = 'block'; // Tampilkan gambar
            resetButton.style.display = 'block'; // Tampilkan tombol reset
        }
    } else {
        // Tambahkan jumlah kesalahan
        wrongAttempts++;

        // Tampilkan pesan error dan ganti GIF
        errorMessage.style.display = 'block';
        loginGif.src = "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExczE1YmVpNHl5MWFyMnFnZWV6dnIyeHBlOXkxNWhvNnJmeTUxd2ZiOCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/JsVlBMEaHdOEGQKLXB/giphy.gif";

        // Tampilkan clue setelah 2 kali salah
        if (wrongAttempts >= 2) {
            showClue();
            wrongAttempts = 0; // Reset jumlah kesalahan setelah menampilkan clue
        }
    }
});


// Daftar GIF untuk setiap kali tombol "No" ditekan
const noGifs = [
    "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHdzenl6dWZ1aXZ4YWRtOTNxa2NpcTZhbmVmZTI2emNwdWtvdnpseSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/W4zO9PSNXYMiYefZ4T/giphy.gif",
    "https://media.giphy.com/media/dnSDhYT5Y9a7yvtwmU/giphy.gif",
    "https://64.media.tumblr.com/b19c806a9ea3159850bc23e8db34b0b7/8e123b3a96f2ca6f-a7/s400x600/f34508d778ca6d0215902cb70f4e4aa49f81fed1.gifv",
    "https://gifdb.com/images/high/rejected-370-x-244-gif-60x5afsyf9xakv4b.webp",
    "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHA0bTY5Z3ZoeHNvMmtwanphb2ZybWl5eGlvaTh2c2ZleTd1d2ZociZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/VM1fcpu2bKs1e2Kdbj/giphy.gif"
];

// Fungsi untuk mengubah ukuran tombol
function resizeButtons() {
    const noButton = document.getElementById('noButton');
    const yesButton = document.getElementById('yesButton');

    // Ukuran awal tombol "No" dan "Yes"
    const noButtonSize = parseFloat(window.getComputedStyle(noButton).fontSize);
    const yesButtonSize = parseFloat(window.getComputedStyle(yesButton).fontSize);

    // Kecilkan tombol "No" sebanyak 20%
    noButton.style.fontSize = `${noButtonSize * 0.8}px`;
    noButton.style.padding = `${parseFloat(window.getComputedStyle(noButton).paddingTop) * 0.8}px ${parseFloat(window.getComputedStyle(noButton).paddingRight) * 0.8}px`;

    // Besarkan tombol "Yes" secara bertahap
    yesButton.style.fontSize = `${yesButtonSize * 1.2}px`;
    yesButton.style.padding = `${parseFloat(window.getComputedStyle(yesButton).paddingTop) * 1.2}px ${parseFloat(window.getComputedStyle(yesButton).paddingRight) * 1.2}px`;

    // Jika tombol "Yes" sudah cukup besar, isi layar
    if (noClickCount >= 5) {
        yesButton.style.width = "100%";
        yesButton.style.height = "100vh";
        yesButton.style.borderRadius = "0";
        yesButton.style.position = "fixed";
        yesButton.style.top = "0";
        yesButton.style.left = "0";
        yesButton.style.zIndex = "1000";
        yesButton.innerText = "YES! 💖"; // Tambahkan teks khusus
    }
}

// Event listener untuk tombol "No"
noButton.addEventListener('click', () => {
    yesClickCount = 0;
    document.querySelector("#main_text").innerText = "Will You be My Valentine"; // Change title
    if (noClickCount < noGifs.length) {
        // Ubah GIF sesuai dengan jumlah klik
        gif.src = noGifs[noClickCount];
        noClickCount++;
    }

    // Ubah ukuran tombol
    resizeButtons();
});

// Event listener untuk tombol "Yes"
yesButton.addEventListener('click', () => {
    yesClickCount++;  // Meningkatkan jumlah klik "Yes"
    noClickCount = 0;  // Reset penghitung klik "No"
    resetButtonSize();

    const h1Text = document.querySelector("h1").innerText.trim(); // Get the h1 text and remove extra spaces

    if (yesClickCount === 1) {
        // First click, change the title and update GIF
        document.querySelector("#main_text").innerText = "Are You Sure?"; // Change title
        gif.src = "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExanN2Y3VrdDQ2c3Vjb3hkdHZ5dnAzd2h0OXAzY3JoZWo2ZjBkZWUzaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/s5pqEUOsNQISDw6Eu7/giphy.gif"; // Change GIF
    } else if (yesClickCount === 2) {
        // Second click, change title, update GIF, and hide the button
        document.querySelector("#main_text").innerText = "Yay! Thank you! 💖"; // Change title
        gif.src = "https://i.pinimg.com/originals/c2/bf/95/c2bf954e420e6afb23bf15b587d2f101.gif"; // Change GIF

        // Hide the button
        yesButton.style.display = 'none'; // Hide the "Yes" button
        noButton.style.display = 'none'; // Hide the "No" button

        resetButton.style.display = 'block'; // Tampilkan tombol reset
    }
});

function resetButtonSize() {
    const noButton = document.getElementById('noButton');
    const yesButton = document.getElementById('yesButton');

    noButton.style.fontSize = "16px";
    yesButton.style.fontSize = "16px";
    yesButton.style.padding = "10px 20px";
    noButton.style.padding = "10px 20px";

      // Reset if "Yes" button was full screen
    if (yesButton.style.width === "100%") {
        yesButton.style.width = "";
        yesButton.style.height = "";
        yesButton.style.position = "";
        yesButton.style.borderRadius = "";
        yesButton.style.zIndex = "";
        yesButton.innerText = "YES"; // Reset text
    }
}

// Fungsi reset halaman
resetButton.addEventListener('click', () => {
    location.reload(); // Refresh halaman
});

resetButton2.addEventListener('click', () => {
    location.reload(); // Refresh halaman
});

