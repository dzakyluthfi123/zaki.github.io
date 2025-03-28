// /navbar fixed
window.onscroll = function () {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if (window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
    }
};

function topFunction() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


//hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});



document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("nav a");

    links.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 80, 
                    behavior: "smooth"
                });
            }
        });
    });
});


document.getElementById("whatsapp-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Mencegah reload halaman

    // Ambil nilai dari inputan
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    // Nomor WhatsApp tujuan (ganti dengan nomor kamu)
    var phoneNumber = "6281226804248"; // Gunakan format internasional tanpa "+"

    // Format pesan WhatsApp
    var whatsappMessage = `Halo, saya ${name} %0AEmail: ${email} %0A%0A${message}`;

    // Buat link WhatsApp
    var whatsappLink = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;

    // Arahkan pengguna ke WhatsApp
    window.open(whatsappLink, "_blank");
});


document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll('.fade-in');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show'); // Agar animasi bisa terulang saat scroll
            }
        });
    }, { threshold: 0.2 }); // Elemen akan aktif saat 20% dari elemennya masuk viewport

    elements.forEach(el => observer.observe(el));
});


document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".scroll-trigger");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("opacity-100", "translate-y-0");
            }
        });
    }, { threshold: 0.1 });

    elements.forEach(el => observer.observe(el));
});


