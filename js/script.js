// =====================================================
// MENÚ, IDIOMAS Y NAVEGACIÓN
// =====================================================


// =====================================================
// ELEMENTOS GENERALES
// =====================================================

// Menú móvil
const menuButton = document.querySelector(".menu-toggle");
const mainMenu = document.querySelector(".main-nav");

// Botones de idioma
const languageButtons =
    document.querySelectorAll(".language-button");

// Idioma guardado
let currentLanguage =
    localStorage.getItem("cecilia-language") || "es";


// =====================================================
// TRADUCCIONES
// =====================================================

const translations = {

    // =================================================
    // ESPAÑOL
    // =================================================

    es: {

        // GENERAL

        "meta.title":
            "Cecilia Estética | Marbella",

        "meta.description":
            "Cecilia Estética: micropigmentación y tratamientos faciales personalizados en Marbella.",


        // MARCA

        "brand.ariaLabel":
            "Cecilia Estética, inicio",

        "brand.detail":
            "Estética · Marbella",


        // NAVEGACIÓN

        "nav.ariaLabel":
            "Navegación principal",

        "nav.inicio":
            "Inicio",

        "nav.servicios":
            "Servicios",

        "nav.sobreMi":
            "Sobre mí",

        "nav.galeria":
            "Galería",

        "nav.contacto":
            "Contacto",


        // SELECTOR DE IDIOMA

        "language.ariaLabel":
            "Seleccionar idioma",


        // MENÚ MÓVIL

        "menu.abrir":
            "Abrir menú",

        "menu.cerrar":
            "Cerrar menú",


        // =================================================
        // INICIO
        // =================================================

        "hero.eyebrow":
            "Estética avanzada · Marbella",

        "hero.title":
            "Belleza y cuidado<br><em>en Marbella</em>",

        "hero.subtitle":
            "Tratamientos personalizados para realzar tu belleza natural",

        "hero.text":
            "Micropigmentación, tratamientos faciales y cuidados estéticos adaptados a cada persona.",

        "hero.button":
            'Pide tu cita <span aria-hidden="true">→</span>',

        "hero.imageAlt":
            "Cecilia, profesional de Cecilia Estética",

        "hero.imageNote":
            "Cuidado personal · Resultados naturales",


        // =================================================
        // SERVICIOS
        // =================================================

        "services.eyebrow":
            "Nuestros servicios",

        "services.title":
            "Tratamientos para cuidarte<br><em>y realzar tu belleza natural</em>",

        "services.intro":
            "Cada tratamiento se adapta de forma personalizada, buscando siempre resultados naturales y una experiencia de cuidado cercana y profesional.",


        // CORPORAL

        "services.body.title":
            "Tratamientos corporales",

        "services.body.description":
            "Cuidado corporal enfocado al bienestar, la relajación y la mejora del aspecto de la piel.",

        "services.body.massage":
            "Masaje corporal",

        "services.body.fullDrainage":
            "Drenaje corporal completo",

        "services.body.localDrainage":
            "Drenaje corporal localizado",

        "services.body.peeling":
            "Peeling corporal",

        "services.body.radiofrequency":
            "Radiofrecuencia corporal <span>(por zona)</span>",


        // FACIAL

        "services.facial.title":
            "Tratamientos faciales",

        "services.facial.description":
            "Tratamientos orientados al cuidado, renovación y mejora del aspecto de la piel.",

        "services.facial.cleaning":
            "Limpieza facial con microdermoabrasión",

        "services.facial.dermapen":
            "Dermapen",

        "services.facial.radiofrequency":
            "Radiofrecuencia facial",


        // MANOS Y PIES

        "services.handsFeet.title":
            "Manos y pies",

        "services.handsFeet.description":
            "Cuidado estético de manos y pies con acabados naturales y elegantes.",

        "services.handsFeet.manicure":
            "Manicura normal",

        "services.handsFeet.semiManicure":
            "Manicura semipermanente",

        "services.handsFeet.pedicure":
            "Pedicura normal",

        "services.handsFeet.semiPedicure":
            "Pedicura semipermanente",

        "services.handsFeet.removal":
            "Retiro de esmalte semipermanente",


        // MIRADA

        "services.eyes.title":
            "Mirada",

        "services.eyes.description":
            "Tratamientos pensados para potenciar la mirada conservando un resultado natural.",

        "services.eyes.lashLift":
            "Lifting + tinte de pestañas",


        // MICROPIGMENTACIÓN

        "services.micropigmentation.tag":
            "Especialidad",

        "services.micropigmentation.title":
            "Micropigmentación",

        "services.micropigmentation.description":
            "Técnicas diseñadas para realzar los rasgos respetando la armonía y expresión natural del rostro.",

        "services.micropigmentation.eyebrows":
            "Cejas",

        "services.micropigmentation.lips":
            "Labios",

        "services.micropigmentation.eyeliner":
            "Eye liner",

        "services.micropigmentation.touchUp":
            "Retoque",


        // CTA SERVICIOS

        "services.ctaText":
            "¿No sabes qué tratamiento es el más adecuado para ti?",

        "services.ctaButton":
            "Pide tu cita <span>→</span>",


        // =================================================
        // SOBRE MÍ
        // =================================================

        "about.eyebrow":
            "Sobre mí",

        "about.title":
            "Experiencia, formación<br><em>y atención personalizada</em>",

        "about.paragraph1":
            'Mi nombre es <strong>Cecilia Muñoz</strong> y llevo más de quince años dedicada al mundo de la estética y el cuidado personal.',

        "about.paragraph2":
            "Mi trayectoria profesional se ha desarrollado principalmente en Marbella, trabajando en centros de estética, spas y clínicas especializadas, donde he adquirido experiencia en tratamientos faciales y corporales, técnicas manuales y aparatología estética.",

        "about.paragraph3":
            'En 2024 amplié mi especialización realizando una <strong>mentoría de seis meses en micropigmentación</strong> impartida por Susana Morales Beauty Studio en Málaga. Esta formación incluyó micropigmentación de cejas con técnica <strong>Powder</strong> y <strong>pelo a pelo</strong>, micropigmentación de labios y micropigmentación de eyeliner.',

        "about.paragraph4":
            'En 2025 obtuve además el <strong>Certificado de Profesionalidad de Nivel 3 en Docencia para la Formación Profesional para el Empleo</strong>, mediante una formación de tres meses impartida por el Ayuntamiento de Fuengirola.',

        "about.paragraph5":
            "A lo largo de estos años he aprendido que cada persona, cada piel y cada rostro son diferentes. Por eso, mi forma de trabajar parte siempre de una atención cercana y personalizada, buscando resultados naturales y tratamientos adaptados a las necesidades de cada cliente.",

        "about.paragraph6":
            "Para mí, la estética no consiste únicamente en realizar un tratamiento. Se trata de escuchar, asesorar y cuidar cada detalle, creando un espacio donde sentirse cómodo, cuidado y en buenas manos.",


        // DATOS DESTACADOS

        "about.stats.experience":
            "años de experiencia",

        "about.stats.degreeTitle":
            "Grado Superior",

        "about.stats.degreeLabel":
            "en Estética",

        "about.stats.micropigmentationTitle":
            "Micropigmentación",

        "about.stats.micropigmentationLabel":
            "cejas · labios · eyeliner",

        "about.stats.levelTitle":
            "Nivel 3",

        "about.stats.levelLabel":
            "Docencia para la Formación Profesional para el Empleo",


        // =================================================
        // GALERÍA
        // =================================================

        "gallery.eyebrow":
            "Galería",

        "gallery.title":
            "Algunos de mis<br><em>trabajos</em>",

        "gallery.intro":
            "Una selección de trabajos realizados buscando siempre resultados naturales, equilibrados y adaptados a cada persona.",

        "gallery.before":
            "Antes",

        "gallery.after":
            "Después",

        "gallery.category":
            "Micropigmentación",


        // POWDER

        "gallery.powder.beforeAlt":
            "Cejas antes de micropigmentación Powder",

        "gallery.powder.afterAlt":
            "Resultado de micropigmentación de cejas Powder",

        "gallery.powder.title":
            "Cejas Powder",

        "gallery.powder.description":
            "Diseño y micropigmentación de cejas con técnica Powder, buscando definición y armonía manteniendo un resultado natural.",


        // EYELINER

        "gallery.eyeliner.imageAlt":
            "Micropigmentación de eyeliner",

        "gallery.eyeliner.title":
            "Eyeliner",

        "gallery.eyeliner.description":
            "Eyeliner semipermanente para definir y realzar la mirada de forma elegante.",


        // LABIOS

        "gallery.lips.imageAlt":
            "Micropigmentación de labios",

        "gallery.lips.title":
            "Labios",

        "gallery.lips.description":
            "Micropigmentación labial para aportar definición, uniformidad y realzar el tono natural de los labios.",


        // PELO A PELO

        "gallery.hairStroke.beforeAlt":
            "Cejas antes de micropigmentación pelo a pelo",

        "gallery.hairStroke.afterAlt":
            "Resultado de micropigmentación de cejas pelo a pelo",

        "gallery.hairStroke.title":
            "Cejas pelo a pelo",

        "gallery.hairStroke.description":
            "Técnica diseñada para reconstruir y definir la ceja imitando el crecimiento natural del vello.",


        // =================================================
        // CONTACTO
        // =================================================

        "contact.eyebrow":
            "Contacto",

        "contact.title":
            "Hablemos",

        "contact.text":
            "Si quieres más información sobre alguno de nuestros tratamientos o deseas solicitar una cita, puedes contactar directamente.",

        "contact.phone":
            "Teléfono",

        "contact.whatsapp":
            "Escríbenos",

        "contact.location":
            "Marbella · Málaga",

        "contact.whatsappMessage":
            "Hola Cecilia, me gustaría solicitar información sobre un tratamiento."

    },


    // =================================================
    // INGLÉS
    // =================================================

    en: {

        // GENERAL

        "meta.title":
            "Cecilia Beauty | Marbella",

        "meta.description":
            "Cecilia Beauty: micropigmentation and personalised facial treatments in Marbella.",


        // BRAND

        "brand.ariaLabel":
            "Cecilia Beauty, home",

        "brand.detail":
            "Beauty · Marbella",


        // NAVIGATION

        "nav.ariaLabel":
            "Main navigation",

        "nav.inicio":
            "Home",

        "nav.servicios":
            "Services",

        "nav.sobreMi":
            "About me",

        "nav.galeria":
            "Gallery",

        "nav.contacto":
            "Contact",


        // LANGUAGE

        "language.ariaLabel":
            "Select language",


        // MOBILE MENU

        "menu.abrir":
            "Open menu",

        "menu.cerrar":
            "Close menu",


        // =================================================
        // HOME
        // =================================================

        "hero.eyebrow":
            "Advanced beauty treatments · Marbella",

        "hero.title":
            "Beauty and care<br><em>in Marbella</em>",

        "hero.subtitle":
            "Personalised treatments to enhance your natural beauty",

        "hero.text":
            "Micropigmentation, facial treatments and beauty care tailored to each person.",

        "hero.button":
            'Book your appointment <span aria-hidden="true">→</span>',

        "hero.imageAlt":
            "Cecilia, beauty professional at Cecilia Beauty",

        "hero.imageNote":
            "Personal care · Natural results",


        // =================================================
        // SERVICES
        // =================================================

        "services.eyebrow":
            "Our services",

        "services.title":
            "Treatments designed for you<br><em>and your natural beauty</em>",

        "services.intro":
            "Every treatment is personalised, always aiming for natural results and a professional, caring experience.",


        // BODY

        "services.body.title":
            "Body treatments",

        "services.body.description":
            "Body care focused on well-being, relaxation and improving the appearance of the skin.",

        "services.body.massage":
            "Body massage",

        "services.body.fullDrainage":
            "Full body lymphatic drainage",

        "services.body.localDrainage":
            "Localised lymphatic drainage",

        "services.body.peeling":
            "Body peeling",

        "services.body.radiofrequency":
            "Body radiofrequency <span>(per area)</span>",


        // FACIAL

        "services.facial.title":
            "Facial treatments",

        "services.facial.description":
            "Treatments designed to care for, renew and improve the appearance of the skin.",

        "services.facial.cleaning":
            "Facial cleansing with microdermabrasion",

        "services.facial.dermapen":
            "Dermapen",

        "services.facial.radiofrequency":
            "Facial radiofrequency",


        // HANDS & FEET

        "services.handsFeet.title":
            "Hands & feet",

        "services.handsFeet.description":
            "Beauty care for hands and feet with natural and elegant finishes.",

        "services.handsFeet.manicure":
            "Classic manicure",

        "services.handsFeet.semiManicure":
            "Semi-permanent manicure",

        "services.handsFeet.pedicure":
            "Classic pedicure",

        "services.handsFeet.semiPedicure":
            "Semi-permanent pedicure",

        "services.handsFeet.removal":
            "Semi-permanent polish removal",


        // EYES

        "services.eyes.title":
            "Eyes & lashes",

        "services.eyes.description":
            "Treatments designed to enhance your eyes while maintaining a natural result.",

        "services.eyes.lashLift":
            "Lash lift + tint",


        // MICROPIGMENTATION

        "services.micropigmentation.tag":
            "Speciality",

        "services.micropigmentation.title":
            "Micropigmentation",

        "services.micropigmentation.description":
            "Techniques designed to enhance your features while respecting the natural harmony and expression of your face.",

        "services.micropigmentation.eyebrows":
            "Eyebrows",

        "services.micropigmentation.lips":
            "Lips",

        "services.micropigmentation.eyeliner":
            "Eyeliner",

        "services.micropigmentation.touchUp":
            "Touch-up",


        // SERVICES CTA

        "services.ctaText":
            "Not sure which treatment is right for you?",

        "services.ctaButton":
            "Book your appointment <span>→</span>",


        // =================================================
        // ABOUT ME
        // =================================================

        "about.eyebrow":
            "About me",

        "about.title":
            "Experience and training<br><em>with personalised care</em>",

        "about.paragraph1":
            'My name is <strong>Cecilia Muñoz</strong>, and I have dedicated more than fifteen years to the world of beauty and personal care.',

        "about.paragraph2":
            "My professional career has developed mainly in Marbella, working in beauty centres, spas and specialised clinics, where I have gained experience in facial and body treatments, manual techniques and professional beauty equipment.",

        "about.paragraph3":
            'In 2024, I further specialised through a <strong>six-month micropigmentation mentorship</strong> at Susana Morales Beauty Studio in Málaga. The training included eyebrow micropigmentation using <strong>Powder</strong> and <strong>hair-stroke</strong> techniques, as well as lip and eyeliner micropigmentation.',

        "about.paragraph4":
            'In 2025, I also obtained a <strong>Level 3 Professional Certificate in Vocational Training for Employment</strong> after completing a three-month training programme provided by Fuengirola Town Council.',

        "about.paragraph5":
            "Over the years, I have learned that every person, every skin type and every face is different. That is why my approach is always personal and attentive, focusing on natural results and treatments tailored to each client's individual needs.",

        "about.paragraph6":
            "For me, beauty care is about much more than performing a treatment. It is about listening, advising and taking care of every detail, creating a space where you can feel comfortable, cared for and in good hands.",


        // HIGHLIGHTS

        "about.stats.experience":
            "years of experience",

        "about.stats.degreeTitle":
            "Advanced Diploma",

        "about.stats.degreeLabel":
            "in Beauty Therapy",

        "about.stats.micropigmentationTitle":
            "Micropigmentation",

        "about.stats.micropigmentationLabel":
            "eyebrows · lips · eyeliner",

        "about.stats.levelTitle":
            "Level 3",

        "about.stats.levelLabel":
            "Vocational Training for Employment",


        // =================================================
        // GALLERY
        // =================================================

        "gallery.eyebrow":
            "Gallery",

        "gallery.title":
            "Some of my<br><em>work</em>",

        "gallery.intro":
            "A selection of my work, always focused on achieving natural, balanced results tailored to each person.",

        "gallery.before":
            "Before",

        "gallery.after":
            "After",

        "gallery.category":
            "Micropigmentation",


        // POWDER

        "gallery.powder.beforeAlt":
            "Eyebrows before Powder micropigmentation",

        "gallery.powder.afterAlt":
            "Result of Powder eyebrow micropigmentation",

        "gallery.powder.title":
            "Powder Brows",

        "gallery.powder.description":
            "Eyebrow design and micropigmentation using the Powder technique, creating definition and harmony while maintaining a natural result.",


        // EYELINER

        "gallery.eyeliner.imageAlt":
            "Eyeliner micropigmentation",

        "gallery.eyeliner.title":
            "Eyeliner",

        "gallery.eyeliner.description":
            "Semi-permanent eyeliner designed to define and enhance the eyes with an elegant finish.",


        // LIPS

        "gallery.lips.imageAlt":
            "Lip micropigmentation",

        "gallery.lips.title":
            "Lips",

        "gallery.lips.description":
            "Lip micropigmentation designed to add definition, improve uniformity and enhance the natural tone of the lips.",


        // HAIR-STROKE BROWS

        "gallery.hairStroke.beforeAlt":
            "Eyebrows before hair-stroke micropigmentation",

        "gallery.hairStroke.afterAlt":
            "Result of hair-stroke eyebrow micropigmentation",

        "gallery.hairStroke.title":
            "Hair-stroke Brows",

        "gallery.hairStroke.description":
            "A technique designed to reconstruct and define the eyebrows by imitating the natural growth of eyebrow hair.",


        // =================================================
        // CONTACT
        // =================================================

        "contact.eyebrow":
            "Contact",

        "contact.title":
            "Let's talk",

        "contact.text":
            "If you would like more information about any of our treatments or would like to book an appointment, feel free to contact us.",

        "contact.phone":
            "Phone",

        "contact.whatsapp":
            "Message us",

        "contact.location":
            "Marbella · Málaga",

        "contact.whatsappMessage":
            "Hello Cecilia, I would like some information about a treatment."

    }

};


// =====================================================
// PREPARAMOS LA SECCIÓN CONTACTO PARA TRADUCIRLA
// =====================================================

function prepararContacto() {

    const contactoEyebrow =
        document.querySelector(".contacto-subtitulo");

    const contactoTitulo =
        document.querySelector(".contacto h2");

    const contactoTexto =
        document.querySelector(".contacto-texto");

    const contactoTelefono =
        document.querySelector(
            '.contacto-item[href^="tel:"] span'
        );

    const contactoWhatsapp =
        document.querySelector(
            '.contacto-item[href^="https://wa.me/"] strong'
        );

    const contactoUbicacion =
        document.querySelector(".contacto-ubicacion");


    if (contactoEyebrow) {

        contactoEyebrow.setAttribute(
            "data-i18n",
            "contact.eyebrow"
        );

    }


    if (contactoTitulo) {

        contactoTitulo.setAttribute(
            "data-i18n",
            "contact.title"
        );

    }


    if (contactoTexto) {

        contactoTexto.setAttribute(
            "data-i18n",
            "contact.text"
        );

    }


    if (contactoTelefono) {

        contactoTelefono.setAttribute(
            "data-i18n",
            "contact.phone"
        );

    }


    if (contactoWhatsapp) {

        contactoWhatsapp.setAttribute(
            "data-i18n",
            "contact.whatsapp"
        );

    }


    if (contactoUbicacion) {

        contactoUbicacion.setAttribute(
            "data-i18n",
            "contact.location"
        );

    }

}


// Preparamos Contacto antes de cargar el idioma.
prepararContacto();


// =====================================================
// CAMBIAR IDIOMA
// =====================================================

function cambiarIdioma(language) {

    // Si el idioma no existe, usamos español.

    if (!translations[language]) {

        language = "es";

    }


    currentLanguage = language;


    // Idioma del documento

    document.documentElement.lang =
        language;


    // =================================================
    // TEXTO NORMAL
    // =================================================

    document
        .querySelectorAll("[data-i18n]")
        .forEach((element) => {

            const key =
                element.dataset.i18n;

            const translation =
                translations[language][key];


            if (translation !== undefined) {

                element.textContent =
                    translation;

            }

        });


    // =================================================
    // TEXTO QUE CONTIENE HTML
    // =================================================

    document
        .querySelectorAll("[data-i18n-html]")
        .forEach((element) => {

            const key =
                element.dataset.i18nHtml;

            const translation =
                translations[language][key];


            if (translation !== undefined) {

                element.innerHTML =
                    translation;

            }

        });


    // =================================================
    // ALT DE IMÁGENES
    // =================================================

    document
        .querySelectorAll("[data-i18n-alt]")
        .forEach((element) => {

            const key =
                element.dataset.i18nAlt;

            const translation =
                translations[language][key];


            if (translation !== undefined) {

                element.setAttribute(
                    "alt",
                    translation
                );

            }

        });


    // =================================================
    // ARIA-LABEL
    // =================================================

    document
        .querySelectorAll("[data-i18n-aria-label]")
        .forEach((element) => {

            const key =
                element.dataset.i18nAriaLabel;

            const translation =
                translations[language][key];


            if (translation !== undefined) {

                element.setAttribute(
                    "aria-label",
                    translation
                );

            }

        });


    // =================================================
    // META DESCRIPTION
    // =================================================

    document
        .querySelectorAll("[data-i18n-content]")
        .forEach((element) => {

            const key =
                element.dataset.i18nContent;

            const translation =
                translations[language][key];


            if (translation !== undefined) {

                element.setAttribute(
                    "content",
                    translation
                );

            }

        });


    // =================================================
    // TÍTULO DE LA PÁGINA
    // =================================================

    document.title =
        translations[language]["meta.title"];


    // =================================================
    // MENSAJE DE WHATSAPP
    // =================================================

    const whatsappLink =
        document.querySelector(
            '.contacto-item[href^="https://wa.me/"]'
        );


    if (whatsappLink) {

        const whatsappMessage =
            translations[language][
                "contact.whatsappMessage"
            ];


        whatsappLink.href =
            "https://wa.me/34614842802?text=" +
            encodeURIComponent(whatsappMessage);

    }


    // =================================================
    // BANDERA ACTIVA
    // =================================================

    languageButtons.forEach((button) => {

        const isActive =
            button.dataset.lang === language;


        button.classList.toggle(
            "is-active",
            isActive
        );


        button.setAttribute(
            "aria-pressed",
            isActive
        );

    });


    // Guardamos el idioma

    localStorage.setItem(
        "cecilia-language",
        language
    );


    // Actualizamos botón del menú móvil

    actualizarEtiquetaMenu(
        mainMenu.classList.contains("is-open")
    );

}


// =====================================================
// ETIQUETA DEL MENÚ MÓVIL
// =====================================================

function actualizarEtiquetaMenu(menuIsOpen) {

    const key =
        menuIsOpen
            ? "menu.cerrar"
            : "menu.abrir";


    menuButton.setAttribute(
        "aria-label",
        translations[currentLanguage][key]
    );

}


// =====================================================
// MENÚ MÓVIL
// =====================================================

menuButton.addEventListener(
    "click",
    () => {

        const menuIsOpen =
            mainMenu.classList.toggle("is-open");


        menuButton.setAttribute(
            "aria-expanded",
            menuIsOpen
        );


        actualizarEtiquetaMenu(
            menuIsOpen
        );

    }
);


// Cerramos el menú móvil
// cuando se pulsa un enlace.

mainMenu.addEventListener(
    "click",
    (event) => {

        if (event.target.closest("a")) {

            mainMenu.classList.remove(
                "is-open"
            );


            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );


            actualizarEtiquetaMenu(false);

        }

    }
);


// =====================================================
// BOTONES DE IDIOMA
// =====================================================

languageButtons.forEach(
    (button) => {

        button.addEventListener(
            "click",
            () => {

                const language =
                    button.dataset.lang;


                cambiarIdioma(
                    language
                );

            }
        );

    }
);


// =====================================================
// ELEMENTOS DE NAVEGACIÓN
// =====================================================

// Botones del menú

const btnInicio =
    document.getElementById("btn-inicio");

const btnServicios =
    document.getElementById("btn-servicios");

const btnSobreMi =
    document.getElementById("btn-sobre-mi");

const btnGaleria =
    document.getElementById("btn-galeria");


// Contacto funciona tanto si tiene id="btn-contacto"
// como si todavía tienes href="#contacto".

const botonesContacto =
    document.querySelectorAll(
        'a[href="#contacto"]'
    );


const brandInicio =
    document.getElementById("brand-inicio");


// =====================================================
// SECCIONES
// =====================================================

const inicio =
    document.getElementById("inicio");

const servicios =
    document.getElementById("servicios");

const sobreMi =
    document.getElementById("sobre-mi");

const galeria =
    document.getElementById("galeria");

const contacto =
    document.getElementById("contacto");


// =====================================================
// MOSTRAR UNA SECCIÓN
// =====================================================

function mostrarSeccion(
    seccion,
    hacerScroll = true
) {

    // Ocultamos todas las secciones.

    if (inicio) {

        inicio.style.display =
            "none";

    }


    if (servicios) {

        servicios.style.display =
            "none";

    }


    if (sobreMi) {

        sobreMi.style.display =
            "none";

    }


    if (galeria) {

        galeria.style.display =
            "none";

    }


    if (contacto) {

        contacto.style.display =
            "none";

    }


    // Mostramos únicamente
    // la sección seleccionada.

    if (seccion === "inicio") {

        inicio.style.display = "";

    }


    else if (seccion === "servicios") {

        servicios.style.display =
            "block";

    }


    else if (seccion === "sobre-mi") {

        sobreMi.style.display =
            "block";

    }


    else if (seccion === "galeria") {

        galeria.style.display =
            "block";

    }


    else if (seccion === "contacto") {

        contacto.style.display =
            "block";

    }


    // Subimos arriba cuando cambiamos
    // de sección.

    if (hacerScroll) {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    }

}


// =====================================================
// INICIO
// =====================================================

btnInicio.addEventListener(
    "click",
    function (event) {

        event.preventDefault();


        mostrarSeccion(
            "inicio"
        );

    }
);


// También vuelve a Inicio al pulsar
// el nombre/logo de Cecilia.

brandInicio.addEventListener(
    "click",
    function (event) {

        event.preventDefault();


        mostrarSeccion(
            "inicio"
        );

    }
);


// =====================================================
// SERVICIOS
// =====================================================

btnServicios.addEventListener(
    "click",
    function (event) {

        event.preventDefault();


        mostrarSeccion(
            "servicios"
        );

    }
);


// =====================================================
// SOBRE MÍ
// =====================================================

btnSobreMi.addEventListener(
    "click",
    function (event) {

        event.preventDefault();


        mostrarSeccion(
            "sobre-mi"
        );

    }
);


// =====================================================
// GALERÍA
// =====================================================

btnGaleria.addEventListener(
    "click",
    function (event) {

        event.preventDefault();


        mostrarSeccion(
            "galeria"
        );

    }
);


// =====================================================
// CONTACTO Y BOTONES "PIDE TU CITA"
// =====================================================

botonesContacto.forEach(
    (boton) => {

        boton.addEventListener(
            "click",
            function (event) {

                event.preventDefault();


                mostrarSeccion(
                    "contacto"
                );

            }
        );

    }
);


// =====================================================
// CARGA INICIAL DE LA WEB
// =====================================================

// Al entrar en la página mostramos
// únicamente Inicio.
// Esto evita que Contacto aparezca debajo.

mostrarSeccion(
    "inicio",
    false
);


// Cargamos el idioma guardado
// después de preparar toda la página.

cambiarIdioma(
    currentLanguage
);