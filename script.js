
// =========================
// ELEMENTOS
// =========================

const bienvenida = document.getElementById("bienvenida");
const pregunta = document.getElementById("pregunta");
const paginaPrincipal = document.getElementById("paginaPrincipal");

const botonComenzar = document.getElementById("botonComenzar");
const botonSi = document.getElementById("botonSi");
const botonNo = document.getElementById("botonNo");

const mensajeNo = document.getElementById("mensajeNo");


// =========================
// ENTRADA A LA PREGUNTA
// =========================

botonComenzar.addEventListener("click", () => {

    bienvenida.classList.add("oculta");

    pregunta.classList.remove("oculta");

});


// =========================
// BOTÓN SÍ
// =========================

botonSi.addEventListener("click", () => {

    pregunta.classList.add("oculta");

    paginaPrincipal.classList.remove("oculta");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    lluviaDeCorazones();

});


// =========================
// BOTÓN NO TRAVIESO
// =========================

let intentosNo = 0;

const mensajes = [
    "¿Segura? ",
    "Pero si lo hice con mucho amor 😭",
    "Cielo, le conviene 🌻",
    "Ese botón no quiere funcionar jajaja ",
    "Mi vida, el botón correcto es el amarillo ",
    "Te tengo una sorpresa "
];

botonNo.addEventListener("click", () => {

    intentosNo++;

    mensajeNo.textContent =
        mensajes[(intentosNo - 1) % mensajes.length];

    // El botón se mueve un poquito
    // después de varios intentos.

    if (intentosNo >= 3) {

        const movimientoX =
            Math.random() * 100 - 50;

        const movimientoY =
            Math.random() * 60 - 30;

        botonNo.style.transform =
            `translate(${movimientoX}px, ${movimientoY}px)`;

    }

});


// =========================
// CONTADOR
// =========================

// IMPORTANTE:
// Cambia esta fecha por el día
// en que comenzaron su relación.
//
// Formato:
// "AÑO-MES-DÍA HORA:MINUTOS:SEGUNDOS"

const fechaInicio = new Date("2024-03-31T20:00:00");

function actualizarContador() {

    const ahora = new Date();

    const diferencia =
        ahora - fechaInicio;

    const segundosTotales =
        Math.floor(diferencia / 1000);

    const dias =
        Math.floor(segundosTotales / 86400);

    const horas =
        Math.floor((segundosTotales % 86400) / 3600);

    const minutos =
        Math.floor((segundosTotales % 3600) / 60);

    const segundos =
        segundosTotales % 60;

    document.getElementById("dias").textContent =
        dias;

    document.getElementById("horas").textContent =
        horas;

    document.getElementById("minutos").textContent =
        minutos;

    document.getElementById("segundos").textContent =
        segundos;

}

actualizarContador();

setInterval(actualizarContador, 1000);



// =========================
// 24 VUELTAS AL SOL
// =========================

// Deseos de cumpleaños.
// Puedes cambiarlos por frases más personales.

const deseos = [

    [
        "🌻",
        "Salud",
        "Que nunca te falten salud y energía para disfrutar cada día, cumplir tus metas y vivir todas las cosas bonitas que todavía te esperan."
    ],

    [
        "✨",
        "Sueños",
        "Que todos esos sueños que tienes encuentren poco a poco el camino para convertirse en realidad."
    ],

    [
        "✈️",
        "Aventuras",
        "Que nunca te falten lugares por conocer, historias por contar y aventuras que algún día podamos recordar con una sonrisa."
    ],

    [
        "💛",
        "Felicidad",
        "Que encuentres felicidad incluso en las cosas pequeñas y que siempre tengas motivos para sonreír."
    ],

    [
        "🌙",
        "Tranquilidad",
        "Que tengas días tranquilos, momentos para descansar y la paz necesaria para disfrutar todo lo que has construido."
    ],

    [
        "🎓",
        "Metas",
        "Que cada meta que te propongas te acerque un poquito más a la persona y profesional que sueñas ser."
    ],

    [
        "🌸",
        "Nuevas experiencias",
        "Que esta nueva etapa venga acompañada de experiencias que te hagan crecer, aprender y disfrutar."
    ],

    [
        "🎁",
        "Sorpresas",
        "Que la vida te sorprenda muchas veces, pero siempre de esas maneras bonitas que uno no se espera."
    ],

    [
        "⭐",
        "Personas bonitas",
        "Que siempre estés rodeada de personas que te quieran, te respeten y sepan valorar la persona que eres."
    ],

    [
        "🌅",
        "Nuevos comienzos",
        "Que cada nuevo comienzo llegue con ilusión y que nunca tengas miedo de empezar algo que realmente quieres."
    ],

    [
        "🎶",
        "Momentos inolvidables",
        "Que nunca te falten canciones, risas, viajes y momentos que después recuerdes con muchísimo cariño."
    ],

    [
        "🍀",
        "Buena suerte",
        "Que la suerte te acompañe en esos momentos en los que un poquito de ayuda del universo nunca viene mal."
    ],

    [
        "☀️",
        "Días felices",
        "Que tengas muchos días de esos que terminan con una sonrisa y la sensación de que todo valió la pena."
    ],

    [
        "📸",
        "Recuerdos",
        "Que sigamos acumulando recuerdos que algún día podamos mirar atrás y decir: qué buenos tiempos."
    ],

    [
        "💫",
        "Motivos para sonreír",
        "Que incluso en los días difíciles siempre encuentres alguna pequeña razón para seguir sonriendo."
    ],

    [
        "🌈",
        "Días mejores",
        "Que después de cualquier momento difícil siempre llegue algo que te recuerde que las cosas pueden mejorar."
    ],

    [
        "🏆",
        "Logros",
        "Que algún día puedas mirar todo lo que has conseguido y sentirte orgullosa de la persona que llegaste a ser."
    ],

    [
        "🎨",
        "Creatividad",
        "Que nunca pierdas esa capacidad de imaginar cosas nuevas y convertir tus ideas en algo real."
    ],

    [
        "🌷",
        "Detalles bonitos",
        "Que la vida siempre encuentre pequeñas maneras de recordarte lo especial que eres."
    ],

    [
        "🥂",
        "Nuevas etapas",
        "Que esta nueva vuelta al sol sea el comienzo de una etapa llena de experiencias que valga la pena celebrar."
    ],

    [
        "🦋",
        "Libertad",
        "Que siempre tengas la libertad de ser tú misma, perseguir lo que quieres y tomar tu propio camino."
    ],

    [
        "💌",
        "Amor",
        "Que nunca te falte amor sincero, de ese que se demuestra en los pequeños detalles y permanece en los momentos importantes."
    ],

    [
        "🌟",
        "Brillar",
        "Que nunca dejes de perseguir aquello que te hace feliz y que sigas brillando a tu manera."
    ],

    [
        "🎂",
        "Tus 24 años",
        "Que estos 24 años sean solamente el comienzo de muchas historias, aprendizajes, sueños cumplidos y momentos increíbles."
    ]

];

const tarjetasDeseos =
    document.getElementById("tarjetasDeseos");


// Crear las 24 tarjetas

deseos.forEach((deseo, index) => {

    const tarjeta =
        document.createElement("div");

    tarjeta.classList.add("deseo");

    tarjeta.innerHTML = `

        <div class="deseo-numero">
            ${String(index + 1).padStart(2, "0")}
        </div>

        <div class="deseo-icono">
            ${deseo[0]}
        </div>

        <h4>
            ${deseo[1]}
        </h4>

        <div class="deseo-mensaje">
            <p>
                ${deseo[2]}
            </p>
        </div>

        <small class="deseo-indicador">
            Toca para descubrir ✨
        </small>

    `;

    tarjeta.addEventListener("click", () => {

        tarjeta.classList.toggle("abierto");

    });

    tarjetasDeseos.appendChild(tarjeta);

});

// =========================
// LAS 24 VELAS
// =========================

const velas =
    document.getElementById("velas");

const botonVelas =
    document.getElementById("botonVelas");

const mensajeVelas =
    document.getElementById("mensajeVelas");


// Crear 24 velitas

for (let i = 0; i < 24; i++) {

    const vela =
        document.createElement("div");

    vela.classList.add("vela");

    velas.appendChild(vela);

}


// =========================
// APAGAR LAS VELAS
// =========================

botonVelas.addEventListener("click", () => {

    const todasLasVelas =
        document.querySelectorAll(".vela");

    todasLasVelas.forEach((vela, index) => {

        setTimeout(() => {

            vela.classList.add("apagada");

        }, index * 60);

    });

    botonVelas.textContent =
        "Velitas apagadas ✨";

    botonVelas.disabled = true;

    mensajeVelas.textContent =
        "Que tus dias esten llenos de muchos logros y cosas bonitas, te amo y estoy muy orgulloso de ti 🌻❤️";

    lluviaDeCorazones();

});

// =========================
// LLUVIA DE CORAZONES
// =========================

function lluviaDeCorazones() {

    const corazones = [
        "❤️",
        "💛",
        "🌻",
        "✨"
    ];

    for (let i = 0; i < 25; i++) {

        const corazon =
            document.createElement("div");

        corazon.textContent =
            corazones[
                Math.floor(
                    Math.random() * corazones.length
                )
            ];

        corazon.style.position = "fixed";
        corazon.style.left =
            Math.random() * 100 + "vw";

        corazon.style.top = "-30px";

        corazon.style.fontSize =
            Math.random() * 20 + 15 + "px";

        corazon.style.zIndex = "9999";
        corazon.style.pointerEvents = "none";

        corazon.style.transition =
            "transform 4s linear, opacity 4s linear";

        document.body.appendChild(corazon);

        setTimeout(() => {

            corazon.style.transform =
                `translateY(${window.innerHeight + 100}px) rotate(360deg)`;

            corazon.style.opacity = "0";

        }, 50);

        setTimeout(() => {

            corazon.remove();

        }, 4500);

    }

}

// =========================
// ANIMACIÓN AL LLEGAR AL RECUERDO
// =========================

const recuerdoPapa =
    document.getElementById("recuerdoPapa");

const observadorRecuerdo =
    new IntersectionObserver((entradas) => {

        entradas.forEach((entrada) => {

            if (entrada.isIntersecting) {

                recuerdoPapa.classList.add("recuerdo-visible");

                observadorRecuerdo.unobserve(
                    recuerdoPapa
                );

            }

        });

    }, {
        threshold: 0.25
    });

observadorRecuerdo.observe(recuerdoPapa);