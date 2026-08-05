document.addEventListener("DOMContentLoaded", () => {

    /* ==========================================
       MENÚ MÓVIL (accesible)
    ========================================== */

    const hamburguesa = document.getElementById("hamburguesa");
    const menuMovil = document.getElementById("menuMovil");

    if (hamburguesa && menuMovil) {

        // atributos ARIA iniciales
        hamburguesa.setAttribute("aria-controls", "menuMovil");
        hamburguesa.setAttribute("aria-expanded", "false");
        hamburguesa.setAttribute("aria-label", "Abrir menú");

        hamburguesa.addEventListener("click", () => {

            const abierto = menuMovil.classList.toggle("abierto");

            hamburguesa.textContent = abierto ? "✕" : "☰";
            hamburguesa.setAttribute("aria-expanded", String(abierto));

        });

        menuMovil.querySelectorAll("a").forEach(enlace => {

            enlace.addEventListener("click", () => {

                menuMovil.classList.remove("abierto");

                hamburguesa.textContent = "☰";
                hamburguesa.setAttribute("aria-expanded", "false");

            });

        });

    }


    /* ==========================================
       EFECTO PREMIUM IMAGEN BILLY (respetando prefers-reduced-motion)
    ========================================== */

    const hero = document.querySelector(".hero");
    const imagenBilly = document.querySelector(".imagen-billy");

    if (!hero || !imagenBilly) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
        imagenBilly.style.transform = 'translateX(-50%) translateY(0) scale(1)';
        return;
    }

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

    }, { passive: true });

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

});
