document.addEventListener("DOMContentLoaded", () => {

    console.log("Billy Pagán · Sitio Oficial");

    /* ==========================================
       MENÚ MÓVIL
    ========================================== */

    const hamburguesa = document.getElementById("hamburguesa");
    const menuMovil = document.getElementById("menuMovil");

    if (hamburguesa && menuMovil) {

        hamburguesa.addEventListener("click", () => {

            menuMovil.classList.toggle("abierto");

            hamburguesa.textContent =
                menuMovil.classList.contains("abierto") ? "✕" : "☰";

        });

        menuMovil.querySelectorAll("a").forEach(enlace => {

            enlace.addEventListener("click", () => {

                menuMovil.classList.remove("abierto");

                hamburguesa.textContent = "☰";

            });

        });

    }


    /* ==========================================
       EFECTO PREMIUM IMAGEN BILLY
    ========================================== */

    const hero = document.querySelector(".hero");
    const imagenBilly = document.querySelector(".imagen-billy");

    if (!hero || !imagenBilly) return;

    let objetivoX = 0;
    let objetivoY = 0;

    let actualX = 0;
    let actualY = 0;

    hero.addEventListener("mousemove", e => {

        const rect = hero.getBoundingClientRect();

        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;

        objetivoX = x * 10;
        objetivoY = y * 6;

    });

    hero.addEventListener("mouseleave", () => {

        objetivoX = 0;
        objetivoY = 0;

    });

    function animar(){

        actualX += (objetivoX - actualX) * 0.08;
        actualY += (objetivoY - actualY) * 0.08;

        imagenBilly.style.transform =
            `translateX(calc(-50% + ${actualX}px)) translateY(${actualY}px) scale(1.01)`;

        requestAnimationFrame(animar);

    }

    animar();

});});
