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
       EFECTO SUAVE IMAGEN BILLY
    ========================================== */

    const hero = document.querySelector(".hero");
    const imagenBilly = document.querySelector(".imagen-billy");

    if (hero && imagenBilly) {

        hero.addEventListener("mousemove", (e) => {

            const rect = hero.getBoundingClientRect();

            const porcentaje = (e.clientX - rect.left) / rect.width;

            const desplazamiento = (porcentaje - 0.5) * 8;

            imagenBilly.style.left = `calc(44% + ${desplazamiento}px)`;

        });

        hero.addEventListener("mouseleave", () => {

            imagenBilly.style.left = "44%";

        });

    }

});
