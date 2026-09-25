/* =====================================================
   GORAKHMUNDI ENTERPRISES
   FINAL SCRIPT.JS
===================================================== */


/* ================= PRODUCTS ================= */

const products = [

    {
        name: "Cement",
        category: "Cement",
        image: "cement.png",
        description:
            "Quality cement for strong and durable construction."
    },

    {
        name: "Aggregate 20mm",
        category: "Aggregate",
        image: "aggeate.png",
        description:
            "Quality aggregate for concrete and construction work."
    },

    {
        name: "M-Sand Black",
        category: "Sand",
        image: "msandb.png",
        description:
            "Black manufactured sand for construction applications."
    },

    {
        name: "M-Sand",
        category: "Sand",
        image: "msand.png",
        description:
            "Manufactured sand for masonry and construction work."
    },

    {
        name: "Loha / Sariya",
        category: "Steel",
        image: "sariya.png",
        description:
            "Steel reinforcement material for strong construction."
    },

    {
        name: "Sand",
        category: "Sand",
        image: "sent.png",
        description:
            "Quality sand for masonry and construction requirements."
    },

    {
        name: "Muram",
        category: "Road Material",
        image: "muram.png",
        description:
            "Muram material for filling and construction work."
    },

    {
        name: "Eent / Bricks",
        category: "Bricks",
        image: "et.png",
        description:
            "Quality bricks for residential and commercial construction."
    },

    {
        name: "GSB",
        category: "Road Material",
        image: "gsb.png",
        description:
            "Granular Sub Base material for road and foundation work."
    },

    {
        name: "Dust",
        category: "Aggregate",
        image: "dust.png",
        description:
            "Stone dust for construction and filling applications."
    },

    {
        name: "Jeera",
        category: "Aggregate",
        image: "jeera.png",
        description:
            "Fine construction aggregate for different project requirements."
    },

    {
        name: "Gitti 40mm",
        category: "Aggregate",
        image: "gitti.png",
        description:
            "Quality stone aggregate for concrete and construction."
    }

];


const productsGrid =
    document.getElementById(
        "productsGrid"
    );



/* ================= DISPLAY PRODUCTS ================= */

function displayProducts(productList) {

    if (!productsGrid) {
        return;
    }


    productsGrid.innerHTML = "";


    productList.forEach(
        function(product, index) {


            const whatsappMessage =

                `Hello Gorakhmundi Enterprises, I want to enquire about ${product.name}.`;


            const whatsappURL =

                `https://wa.me/919424474791?text=${encodeURIComponent(whatsappMessage)}`;


            const card =

                document.createElement(
                    "div"
                );


            card.className =

                "product-card material-hidden";


            card.style.animationDelay =

                `${index * 80}ms`;


            card.innerHTML = `

                <div class="product-image">

                    <img
                        src="${product.image}"
                        alt="${product.name}"
                        loading="lazy"
                    >

                </div>


                <div class="product-body">

                    <span class="product-category">
                        ${product.category}
                    </span>


                    <h3>
                        ${product.name}
                    </h3>


                    <p>
                        ${product.description}
                    </p>


                    <a
                        href="${whatsappURL}"
                        target="_blank"
                        rel="noopener"
                        class="product-whatsapp click-btn"
                    >
                        WhatsApp Enquiry
                    </a>

                </div>

            `;


            /* MATERIAL CLICK POP */

            card.addEventListener(
                "click",
                function(event) {


                    if (

                        event.target.closest(
                            ".product-whatsapp"
                        )

                    ) {

                        return;

                    }


                    card.classList.remove(
                        "material-click-pop"
                    );


                    void card.offsetWidth;


                    card.classList.add(
                        "material-click-pop"
                    );


                    setTimeout(
                        function() {

                            card.classList.remove(
                                "material-click-pop"
                            );

                        },
                        470
                    );

                }
            );


            productsGrid.appendChild(
                card
            );

        }
    );


    startMaterialObserver();

}



/* ================= MATERIAL SCROLL ANIMATION ================= */

function startMaterialObserver() {

    const cards =

        document.querySelectorAll(
            ".product-card.material-hidden"
        );


    if (
        !(
            "IntersectionObserver"
            in window
        )
    ) {

        cards.forEach(
            function(card) {

                card.classList.remove(
                    "material-hidden"
                );

            }
        );

        return;

    }


    const observer =

        new IntersectionObserver(

            function(entries, obs) {


                entries.forEach(

                    function(entry) {


                        if (
                            entry.isIntersecting
                        ) {


                            entry.target
                                .classList
                                .remove(
                                    "material-hidden"
                                );


                            entry.target
                                .classList
                                .add(
                                    "material-show"
                                );


                            obs.unobserve(
                                entry.target
                            );

                        }

                    }

                );

            },

            {
                threshold: 0.12
            }

        );


    cards.forEach(
        function(card) {

            observer.observe(
                card
            );

        }
    );

}


/* INITIAL PRODUCTS */

displayProducts(
    products
);



/* ================= FILTER BUTTONS ================= */

const filterButtons =

    document.querySelectorAll(
        ".filter-btn"
    );


filterButtons.forEach(
    function(button) {


        button.addEventListener(
            "click",
            function() {


                filterButtons.forEach(
                    function(btn) {

                        btn.classList.remove(
                            "active"
                        );

                    }
                );


                button.classList.add(
                    "active"
                );


                const selected =

                    button.dataset.filter;


                if (
                    selected === "All"
                ) {

                    displayProducts(
                        products
                    );

                    return;

                }


                const filteredProducts =

                    products.filter(

                        function(product) {

                            return (

                                product.category ===
                                selected

                            );

                        }

                    );


                displayProducts(
                    filteredProducts
                );

            }
        );

    }
);



/* ================= WHATSAPP BUTTON COLOR ================= */

document.addEventListener(

    "click",

    function(event) {


        const whatsappButton =

            event.target.closest(
                ".product-whatsapp"
            );


        if (!whatsappButton) {

            return;

        }


        whatsappButton.classList.remove(
            "whatsapp-clicked"
        );


        void whatsappButton.offsetWidth;


        whatsappButton.classList.add(
            "whatsapp-clicked"
        );


        setTimeout(

            function() {

                whatsappButton.classList.remove(
                    "whatsapp-clicked"
                );

            },

            600

        );

    }

);



/* ================= ALL BUTTON CLICK ANIMATION ================= */

document.addEventListener(

    "click",

    function(event) {


        const button =

            event.target.closest(
                ".click-btn"
            );


        if (!button) {

            return;

        }


        button.classList.remove(
            "button-clicked"
        );


        void button.offsetWidth;


        button.classList.add(
            "button-clicked"
        );


        setTimeout(

            function() {

                button.classList.remove(
                    "button-clicked"
                );

            },

            450

        );

    }

);



/* ================= THREE DOT MENU ================= */

const threeDotBtn =

    document.getElementById(
        "threeDotBtn"
    );


const threeDotDropdown =

    document.getElementById(
        "threeDotDropdown"
    );


if (
    threeDotBtn &&
    threeDotDropdown
) {


    threeDotBtn.addEventListener(

        "click",

        function(event) {


            event.stopPropagation();


            threeDotDropdown
                .classList
                .toggle(
                    "active"
                );

        }

    );


    threeDotDropdown.addEventListener(

        "click",

        function(event) {

            event.stopPropagation();

        }

    );


    document.addEventListener(

        "click",

        function() {


            threeDotDropdown
                .classList
                .remove(
                    "active"
                );

        }

    );


    document
        .querySelectorAll(
            ".three-dot-dropdown a"
        )
        .forEach(

            function(link) {


                link.addEventListener(

                    "click",

                    function() {


                        threeDotDropdown
                            .classList
                            .remove(
                                "active"
                            );

                    }

                );

            }

        );

}



/* ================= MOBILE MENU ================= */

const menuBtn =

    document.getElementById(
        "menuBtn"
    );


const navLinks =

    document.getElementById(
        "navLinks"
    );


if (
    menuBtn &&
    navLinks
) {


    menuBtn.addEventListener(

        "click",

        function() {


            navLinks
                .classList
                .toggle(
                    "active"
                );


            if (
                navLinks
                    .classList
                    .contains(
                        "active"
                    )
            ) {

                menuBtn.textContent =
                    "✕";

            }

            else {

                menuBtn.textContent =
                    "☰";

            }

        }

    );


    document
        .querySelectorAll(
            ".nav-links a"
        )
        .forEach(

            function(link) {


                link.addEventListener(

                    "click",

                    function() {


                        navLinks
                            .classList
                            .remove(
                                "active"
                            );


                        menuBtn.textContent =
                            "☰";

                    }

                );

            }

        );

}



/* ================= HEADER SCROLL ================= */

const header =

    document.getElementById(
        "header"
    );


function headerScroll() {


    if (!header) {

        return;

    }


    if (
        window.scrollY > 30
    ) {

        header.classList.add(
            "scrolled"
        );

    }

    else {

        header.classList.remove(
            "scrolled"
        );

    }

}


window.addEventListener(
    "scroll",
    headerScroll
);


headerScroll();



/* ================= REVEAL ANIMATION ================= */

const revealElements =

    document.querySelectorAll(
        ".reveal"
    );


if (
    "IntersectionObserver"
    in window
) {


    const revealObserver =

        new IntersectionObserver(

            function(entries, observer) {


                entries.forEach(

                    function(entry) {


                        if (
                            entry.isIntersecting
                        ) {


                            entry.target
                                .classList
                                .add(
                                    "reveal-active"
                                );


                            observer.unobserve(
                                entry.target
                            );

                        }

                    }

                );

            },

            {
                threshold: 0.10
            }

        );


    revealElements.forEach(

        function(element) {


            revealObserver.observe(
                element
            );

        }

    );

}

else {


    revealElements.forEach(

        function(element) {


            element.classList.add(
                "reveal-active"
            );

        }

    );

}



/* ================= ACTIVE NAVIGATION ================= */

const sections =

    document.querySelectorAll(
        "section[id]"
    );


const navigationLinks =

    document.querySelectorAll(
        ".nav-links a"
    );


function activeNavigation() {


    let current = "";


    sections.forEach(

        function(section) {


            const sectionTop =

                section.offsetTop - 150;


            if (
                window.scrollY >=
                sectionTop
            ) {


                current =

                    section.getAttribute(
                        "id"
                    );

            }

        }

    );


    navigationLinks.forEach(

        function(link) {


            link.classList.remove(
                "active-link"
            );


            if (

                link.getAttribute(
                    "href"
                ) ===
                "#" + current

            ) {


                link.classList.add(
                    "active-link"
                );

            }

        }

    );

}


window.addEventListener(
    "scroll",
    activeNavigation
);


activeNavigation();



/* ================= WHATSAPP FORM ================= */

const enquiryForm =

    document.getElementById(
        "enquiryForm"
    );


if (enquiryForm) {


    enquiryForm.addEventListener(

        "submit",

        function(event) {


            event.preventDefault();


            const name =

                document
                    .getElementById(
                        "name"
                    )
                    .value
                    .trim();


            const phone =

                document
                    .getElementById(
                        "phone"
                    )
                    .value
                    .trim();


            const material =

                document
                    .getElementById(
                        "material"
                    )
                    .value;


            const quantity =

                document
                    .getElementById(
                        "quantity"
                    )
                    .value
                    .trim();


            const location =

                document
                    .getElementById(
                        "location"
                    )
                    .value
                    .trim();


            const extraMessage =

                document
                    .getElementById(
                        "message"
                    )
                    .value
                    .trim();


            if (
                !name ||
                !phone ||
                !material ||
                !location
            ) {


                alert(
                    "Please fill all required fields."
                );


                return;

            }


            const message =

`Hello Gorakhmundi Enterprises,

I want to enquire about construction material.

Name: ${name}
Phone: ${phone}
Material: ${material}
Quantity: ${quantity || "Not specified"}
Delivery Location: ${location}
Message: ${extraMessage || "No additional message"}

Please contact me regarding this requirement.`;


            const whatsappURL =

                "https://wa.me/919424474791?text=" +

                encodeURIComponent(
                    message
                );


            window.open(
                whatsappURL,
                "_blank"
            );

        }

    );

}


console.log(
    "Gorakhmundi Enterprises website loaded successfully."
);