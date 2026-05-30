const WHATSAPP_NUMBER = "355696666601";

function makeProduct(brand, name, badge, imageName) {
    return {
        brand: brand,
        name: name,
        price: "Pyet për çmim",
        badge: badge,
        desc: name + ".",
        image: "images/products/" + imageName + ".png"
    };
}

const PRODUCTS = {
    telefonat: [
        makeProduct("Apple", "iPhone 11 Pro", "Apple", "iphone11pro"),
        makeProduct("Apple", "iPhone 11 Pro Max", "Apple", "iphone11promax"),
        makeProduct("Apple", "iPhone 12 Pro", "Apple", "iphone12pro"),
        makeProduct("Apple", "iPhone 12 Pro Max", "Apple", "iphone12promax"),
        makeProduct("Apple", "iPhone 13 Pro", "Apple", "iphone13pro"),
        makeProduct("Apple", "iPhone 13 Pro Max", "Apple", "iphone13promax"),
        makeProduct("Apple", "iPhone 14 Pro", "Apple", "iphone14pro"),
        makeProduct("Apple", "iPhone 14 Pro Max", "Apple", "iphone14promax"),
        makeProduct("Apple", "iPhone 15 Pro", "Apple", "iphone15pro"),
        makeProduct("Apple", "iPhone 15 Pro Max", "Apple", "iphone15promax"),
        makeProduct("Apple", "iPhone 16 Pro", "Apple", "iphone16pro"),
        makeProduct("Apple", "iPhone 16 Pro Max", "Apple", "iphone16promax"),
        makeProduct("Apple", "iPhone 17 Pro", "Apple", "iphone17pro"),
        makeProduct("Apple", "iPhone 17 Pro Max", "Apple", "iphone17promax"),

        makeProduct("Samsung", "Samsung Galaxy A16 4/64GB", "A Series", "samsunggalaxya16"),
        makeProduct("Samsung", "Samsung Galaxy A16 4/128GB", "A Series", "samsunggalaxya16"),
        makeProduct("Samsung", "Samsung Galaxy A17 4/64GB", "A Series", "samsunggalaxya17"),
        makeProduct("Samsung", "Samsung Galaxy A17 4/128GB", "A Series", "samsunggalaxya17"),
        makeProduct("Samsung", "Samsung Galaxy A26 6/128GB", "A Series", "samsunggalaxya26"),
        makeProduct("Samsung", "Samsung Galaxy A36 8/128GB", "A Series", "samsunggalaxya36"),
        makeProduct("Samsung", "Samsung Galaxy A56 8/256GB", "A Series", "samsunggalaxya56"),
        makeProduct("Samsung", "Samsung Galaxy S24 8/256GB", "S Series", "samsunggalaxys24"),
        makeProduct("Samsung", "Samsung Galaxy S24 FE 8/128GB", "FE", "samsunggalaxys24fe"),
        makeProduct("Samsung", "Samsung Galaxy S25 FE 8/256GB", "FE", "samsunggalaxys25fe"),
        makeProduct("Samsung", "Samsung Galaxy S25 Plus 12/256GB", "S Series", "samsunggalaxys25plus"),
        makeProduct("Samsung", "Samsung Galaxy S25 Ultra 12/256GB", "Ultra", "samsunggalaxys25ultra"),

        makeProduct("Redmi", "Redmi Note 14 8/256GB", "Redmi", "redminote14"),
        makeProduct("Redmi", "Redmi Note 14 Pro Plus 5G 12/512GB", "Redmi", "redminote14proplus5g"),
        makeProduct("Poco", "Poco C71 3/64GB", "Poco", "pococ71"),
        makeProduct("Poco", "Poco M8 8/256GB", "Poco", "pocom8"),
        makeProduct("Google", "Pixel 10A 128GB", "Pixel", "pixel10a"),
        makeProduct("Google", "Pixel 10 Pro XL 256GB", "Pixel", "pixel10proxl")
    ],

    skuterat: [
        makeProduct("KuKirin", "KuKirin S1 Max", "KuKirin", "kukirins1max"),
        makeProduct("KuKirin", "KuKirin S3 Pro", "KuKirin", "kukirins3pro"),
        makeProduct("KuKirin", "KuKirin M4", "KuKirin", "kukirinm4"),
        makeProduct("KuKirin", "KuKirin M4 Pro", "KuKirin", "kukirinm4pro"),
        makeProduct("KuKirin", "KuKirin M4 Max", "KuKirin", "kukirinm4max"),
        makeProduct("KuKirin", "KuKirin G2", "KuKirin", "kukiring2"),
        makeProduct("KuKirin", "KuKirin G2 Pro", "KuKirin", "kukiring2pro"),
        makeProduct("KuKirin", "KuKirin G2 Max", "KuKirin", "kukiring2max"),
        makeProduct("KuKirin", "KuKirin G2 Master", "KuKirin", "kukiring2master"),
        makeProduct("KuKirin", "KuKirin G2 Ultra", "KuKirin", "kukiring2ultra"),
        makeProduct("KuKirin", "KuKirin G3", "KuKirin", "kukiring3"),
        makeProduct("KuKirin", "KuKirin G3 Pro", "KuKirin", "kukiring3pro"),
        makeProduct("KuKirin", "KuKirin G4", "KuKirin", "kukiring4"),
        makeProduct("KuKirin", "KuKirin G4 Max", "KuKirin", "kukiring4max"),
        makeProduct("KuKirin", "KuKirin T3", "KuKirin", "kukirint3"),

        makeProduct("Kugoo", "Kugoo Kirin S1 Pro", "Kugoo", "kugookirins1pro"),
        makeProduct("Kugoo", "Kugoo Kirin S2 Pro", "Kugoo", "kugookirins2pro"),
        makeProduct("Kugoo", "Kugoo Kirin M2 Pro", "Kugoo", "kugookirinm2pro"),
        makeProduct("Kugoo", "Kugoo Kirin M3", "Kugoo", "kugookirinm3"),
        makeProduct("Kugoo", "Kugoo Kirin M4", "Kugoo", "kugookirinm4"),
        makeProduct("Kugoo", "Kugoo M4 Pro", "Kugoo", "kugoom4pro"),
        makeProduct("Kugoo", "Kugoo G2 Pro", "Kugoo", "kugoog2pro"),
        makeProduct("Kugoo", "Kugoo G-Booster", "Kugoo", "kugoogbooster"),
        makeProduct("Kugoo", "Kugoo Kirin G1", "Kugoo", "kugookiring1"),
        makeProduct("Kugoo", "Kugoo Kirin G2 Max", "Kugoo", "kugookiring2max"),
        makeProduct("Kugoo", "Kugoo Kirin G3", "Kugoo", "kugookiring3"),
        makeProduct("Kugoo", "Kugoo Kirin G3 Pro", "Kugoo", "kugookiring3pro"),

        makeProduct("Segway", "Segway Ninebot ZT3 Pro", "Segway", "segwayninebotzt3pro"),
        makeProduct("Segway", "Segway Ninebot Max G2", "Segway", "segwayninebotmaxg2"),
        makeProduct("Segway", "Segway Ninebot E3 Pro", "Segway", "segwayninebote3pro"),
        makeProduct("Segway", "Segway Ninebot E3", "Segway", "segwayninebote3"),
        makeProduct("Segway", "Segway Ninebot F3", "Segway", "segwayninebotf3"),
        makeProduct("Segway", "Segway Ninebot F3 Pro", "Segway", "segwayninebotf3pro")
    ],

    bicikletat: [
        makeProduct("OUXI", "OUXI V8", "E-Bike", "ouxiv8"),
        makeProduct("OUXI", "OUXI V8 Pro", "E-Bike", "ouxiv8pro"),
        makeProduct("OUXI", "OUXI V8 Ultra", "E-Bike", "ouxiv8ultra"),
        makeProduct("OUXI", "OUXI V8 Max", "E-Bike", "ouxiv8max"),
        makeProduct("OUXI", "OUXI V10", "E-Bike", "ouxiv10"),
        makeProduct("Mangosteen", "Mangosteen FT08", "E-Bike", "mangosteenft08")
    ],

    aksesoret: [
        makeProduct("Apple", "AirPods Pro 2 Type-C", "Kufje", "airpodspro2typec"),
        makeProduct("Apple", "AirPods 4 No ANC", "Kufje", "airpods4noanc"),
        makeProduct("Apple", "AirPods 4 ANC", "Kufje", "airpods4anc"),
        makeProduct("Apple", "AirPods Pro 3 Type-C", "Kufje", "airpodspro3typec"),
        makeProduct("Apple", "AirPods Max 2", "Kufje", "airpodsmax2"),
        makeProduct("Samsung", "Samsung Buds 3", "Kufje", "samsungbuds3"),
        makeProduct("Samsung", "Samsung Buds 3 Pro", "Kufje", "samsungbuds3pro"),
        makeProduct("Samsung", "Samsung Buds 4 Pro", "Kufje", "samsungbuds4pro"),
        makeProduct("Generic", "Kufje Bluetooth", "Kufje", "kufjebluetooth"),
        makeProduct("Generic", "Kufje Type-C", "Kufje", "kufjetypec"),
        makeProduct("Generic", "Kufje Lightning", "Kufje", "kufjelightning"),

        makeProduct("Apple", "Kasa iPhone 11 Pro", "Kasa", "kasaiphone11pro"),
        makeProduct("Apple", "Kasa iPhone 11 Pro Max", "Kasa", "kasaiphone11promax"),
        makeProduct("Apple", "Kasa iPhone 12 Pro", "Kasa", "kasaiphone12pro"),
        makeProduct("Apple", "Kasa iPhone 12 Pro Max", "Kasa", "kasaiphone12promax"),
        makeProduct("Apple", "Kasa iPhone 13 Pro", "Kasa", "kasaiphone13pro"),
        makeProduct("Apple", "Kasa iPhone 13 Pro Max", "Kasa", "kasaiphone13promax"),
        makeProduct("Apple", "Kasa iPhone 14 Pro", "Kasa", "kasaiphone14pro"),
        makeProduct("Apple", "Kasa iPhone 14 Pro Max", "Kasa", "kasaiphone14promax"),
        makeProduct("Apple", "Kasa iPhone 15 Pro", "Kasa", "kasaiphone15pro"),
        makeProduct("Apple", "Kasa iPhone 15 Pro Max", "Kasa", "kasaiphone15promax"),
        makeProduct("Apple", "Kasa iPhone 16 Pro", "Kasa", "kasaiphone16pro"),
        makeProduct("Apple", "Kasa iPhone 16 Pro Max", "Kasa", "kasaiphone16promax"),
        makeProduct("Apple", "Kasa iPhone 17 Pro", "Kasa", "kasaiphone17pro"),
        makeProduct("Apple", "Kasa iPhone 17 Pro Max", "Kasa", "kasaiphone17promax"),
        makeProduct("Samsung", "Kasa Samsung Galaxy A16", "Kasa", "kasasamsunggalaxya16"),
        makeProduct("Samsung", "Kasa Samsung Galaxy A17", "Kasa", "kasasamsunggalaxya17"),
        makeProduct("Samsung", "Kasa Samsung Galaxy A26", "Kasa", "kasasamsunggalaxya26"),
        makeProduct("Samsung", "Kasa Samsung Galaxy A36", "Kasa", "kasasamsunggalaxya36"),
        makeProduct("Samsung", "Kasa Samsung Galaxy A56", "Kasa", "kasasamsunggalaxya56"),
        makeProduct("Samsung", "Kasa Samsung Galaxy S24", "Kasa", "kasasamsunggalaxys24"),
        makeProduct("Samsung", "Kasa Samsung Galaxy S25 Ultra", "Kasa", "kasasamsunggalaxys25ultra"),

        makeProduct("Apple", "Xham Mbrojtës iPhone", "Xham", "xhammbrojtesiphone"),
        makeProduct("Samsung", "Xham Mbrojtës Samsung", "Xham", "xhammbrojtessamsung"),
        makeProduct("Generic", "Xham Privacy", "Xham", "xhamprivacy"),
        makeProduct("Generic", "Xham Ceramic", "Xham", "xhamceramic"),
        makeProduct("Generic", "Xham Kamera iPhone", "Xham", "xhamkameraiphone"),
        makeProduct("Generic", "Xham Kamera Samsung", "Xham", "xhamkamerasamsung"),

        makeProduct("Apple", "Karikues iPhone USB-C 20W", "Karikues", "karikuesiphoneusbc20w"),
        makeProduct("Samsung", "Karikues Samsung Type-C 25W", "Karikues", "karikuessamsungtypec25w"),
        makeProduct("Generic", "Karikues Fast Charger 30W", "Karikues", "karikuesfastcharger30w"),
        makeProduct("Generic", "Karikues Makine", "Karikues", "karikuesmakine"),
        makeProduct("Generic", "Kabllo Type-C", "Kabllo", "kabllotypec"),
        makeProduct("Generic", "Kabllo Lightning", "Kabllo", "kabllolightning"),
        makeProduct("Generic", "Kabllo USB-C to USB-C", "Kabllo", "kabllousbctousbc"),
        makeProduct("Generic", "Wireless Charger", "Karikues", "wirelesscharger"),
        makeProduct("Generic", "Power Bank", "Power Bank", "powerbank"),

        makeProduct("Generic", "Mbajtëse Telefoni Makine", "Aksesor", "mbajtesetelefonimakine"),
        makeProduct("Generic", "Mbajtëse Telefoni Tavoline", "Aksesor", "mbajtesetelefonitavoline"),
        makeProduct("Generic", "Pop Socket", "Aksesor", "popsocket"),
        makeProduct("Generic", "Adapter Type-C to AUX", "Adapter", "adaptertypectoaux"),
        makeProduct("Generic", "Adapter Lightning to AUX", "Adapter", "adapterlightningtoaux"),
        makeProduct("Generic", "Adapter Type-C to Lightning", "Adapter", "adaptertypectolightning"),

        makeProduct("Skuter", "Kaskë për Skuter", "Skuter", "kaskepperskuter"),
        makeProduct("Skuter", "Drita për Skuter", "Skuter", "dritaperskuter"),
        makeProduct("Skuter", "Mbajtëse Telefoni për Skuter", "Skuter", "mbajtesetelefoniperskuter"),
        makeProduct("Skuter", "Çantë për Skuter", "Skuter", "canteperskuter"),
        makeProduct("Skuter", "Dry për Skuter", "Skuter", "dryperskuter"),
        makeProduct("Skuter", "Gomë për Skuter", "Skuter", "gomeperskuter"),
        makeProduct("Skuter", "Frena për Skuter", "Skuter", "frenaperskuter"),
        makeProduct("Skuter", "Disk Frene për Skuter", "Skuter", "diskfreneperskuter"),
        makeProduct("Skuter", "Kavo Frene për Skuter", "Skuter", "kavofreneperskuter"),
        makeProduct("Skuter", "Zile për Skuter", "Skuter", "zileperskuter"),
        makeProduct("Skuter", "Pasqyrë për Skuter", "Skuter", "pasqyreperskuter"),
        makeProduct("Skuter", "Karikues për Skuter", "Skuter", "karikuesperskuter"),

        makeProduct("Biçikletë", "Kaskë për Biçikletë", "Biçikletë", "kaskeperbiciklete"),
        makeProduct("Biçikletë", "Drita për Biçikletë", "Biçikletë", "dritaperbiciklete"),
        makeProduct("Biçikletë", "Dry për Biçikletë", "Biçikletë", "dryperbiciklete"),
        makeProduct("Biçikletë", "Mbajtëse Telefoni për Biçikletë", "Biçikletë", "mbajtesetelefoniperbiciklete"),
        makeProduct("Biçikletë", "Çantë për Biçikletë", "Biçikletë", "canteperbiciklete"),
        makeProduct("Biçikletë", "Gomë për Biçikletë", "Biçikletë", "gomeperbiciklete"),
        makeProduct("Biçikletë", "Frena për Biçikletë", "Biçikletë", "frenaperbiciklete"),
        makeProduct("Biçikletë", "Kavo Frene për Biçikletë", "Biçikletë", "kavofreneperbiciklete"),
        makeProduct("Biçikletë", "Pedale për Biçikletë", "Biçikletë", "pedaleperbiciklete")
    ],

    tableta: [
        makeProduct("Apple", "iPad 11 A16 128GB WiFi", "iPad", "ipad11a16128gbwifi"),
        makeProduct("Apple", "iPad Air 11 M4 128GB WiFi", "iPad", "ipadair11m4128gbwifi"),
        makeProduct("Samsung", "Galaxy Tab S8 Ultra 256GB", "Tablet", "galaxytabs8ultra"),
        makeProduct("Samsung", "Galaxy Tab S9 Ultra 256GB", "Tablet", "galaxytabs9ultra"),
        makeProduct("Apple", "iPad Pro 13 M4 256GB", "iPad", "ipadpro13m4"),
        makeProduct("Apple", "iPad 12.9 Gen 3 64GB", "iPad", "ipad129gen3")
    ]
};

function normalizeText(value) {
    return String(value || "")
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
}

function createProductCard(product) {
    return `
        <article class="product-card reveal" data-brand="${product.brand}">
            <span class="product-badge">${product.badge}</span>

            <div class="product-image-wrapper">
                <img
                    src="${product.image}"
                    alt="${product.name}"
                    loading="lazy"
                    onerror="this.onerror=null; this.src='images/logo.svg'; this.classList.add('fallback-logo');"
                >
            </div>

            <h3>${product.name}</h3>
            <p class="product-desc">${product.desc}</p>
            <p class="price">${product.price}</p>

            <button class="buy-btn" data-product="${product.name}">
                Pyet në WhatsApp
            </button>
        </article>
    `;
}

function createEmptyState() {
    return `
        <div class="empty-state reveal">
            <h3>Nuk ka produkte për momentin</h3>
            <p>Kjo kategori do të përditësohet së shpejti.</p>
        </div>
    `;
}

function getCurrentProducts() {
    const grid = document.getElementById("catalogGrid");

    if (!grid) {
        return [];
    }

    return PRODUCTS[grid.dataset.category] || [];
}

function renderBrandFilter(products) {
    const filter = document.getElementById("brandFilter");

    if (!filter) {
        return;
    }

    const brands = [...new Set(products.map(product => product.brand))].sort();

    filter.innerHTML = `<option value="all">Të gjitha markat</option>`;

    brands.forEach(brand => {
        filter.innerHTML += `<option value="${brand}">${brand}</option>`;
    });
}

function updateCatalogSummary(visibleCount, totalCount) {
    const summary = document.getElementById("catalogSummary");

    if (!summary) {
        return;
    }

    summary.innerHTML = `
        <span><strong>${visibleCount}</strong> produkte të shfaqura</span>
        <span><strong>${totalCount}</strong> produkte gjithsej</span>
    `;
}

function renderCatalog(productsToRender = null) {
    const grid = document.getElementById("catalogGrid");

    if (!grid) {
        return;
    }

    const allProducts = getCurrentProducts();
    const products = productsToRender || allProducts;

    if (allProducts.length === 0) {
        grid.innerHTML = createEmptyState();
        updateCatalogSummary(0, 0);
        setupScrollAnimations();
        setupInteractiveCards();
        return;
    }

    if (products.length === 0) {
        grid.innerHTML = createEmptyState();
        updateCatalogSummary(0, allProducts.length);
        setupScrollAnimations();
        setupInteractiveCards();
        return;
    }

    grid.innerHTML = products.map(createProductCard).join("");

    updateCatalogSummary(products.length, allProducts.length);
    setupWhatsAppButtons();
    setupScrollAnimations();
    setupInteractiveCards();
}

function applyCatalogFilters() {
    const search = document.getElementById("productSearch");
    const filter = document.getElementById("brandFilter");
    const products = getCurrentProducts();

    const query = normalizeText(search ? search.value : "");
    const selectedBrand = filter ? filter.value : "all";

    const filteredProducts = products.filter(product => {
        const text = normalizeText(`${product.brand} ${product.name} ${product.badge}`);
        const matchesSearch = !query || text.includes(query);
        const matchesBrand = selectedBrand === "all" || product.brand === selectedBrand;

        return matchesSearch && matchesBrand;
    });

    renderCatalog(filteredProducts);
}

function setupCatalog() {
    const products = getCurrentProducts();

    renderBrandFilter(products);
    renderCatalog(products);

    const search = document.getElementById("productSearch");
    const filter = document.getElementById("brandFilter");

    if (search) {
        search.addEventListener("input", applyCatalogFilters);
    }

    if (filter) {
        filter.addEventListener("change", applyCatalogFilters);
    }
}

function setupWhatsAppButtons() {
    document.querySelectorAll(".buy-btn[data-product]").forEach(button => {
        button.onclick = () => {
            const product = button.dataset.product;

            const message = encodeURIComponent(
                `Pershendetje iShop Mobile, jam i interesuar per: ${product}. A eshte i disponueshem dhe sa kushton?`
            );

            window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
        };
    });
}

function setupMenu() {
    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector(".main-nav");

    if (!menuToggle || !nav) {
        return;
    }

    menuToggle.addEventListener("click", () => {
        nav.classList.toggle("open");
        menuToggle.textContent = nav.classList.contains("open") ? "×" : "☰";
    });

    nav.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            nav.classList.remove("open");
            menuToggle.textContent = "☰";
        });
    });
}

function setupCinematicScroll() {
    const sections = document.querySelectorAll(".cinematic-section");

    if (!sections.length) {
        return;
    }

    function clamp(value, min, max) {
        return Math.min(Math.max(value, min), max);
    }

    function update() {
        sections.forEach(section => {
            const sticky = section.querySelector(".cinematic-sticky");
            const bg = section.querySelector(".cinematic-bg");
            const content = section.querySelector(".cinematic-content");

            if (!sticky || !bg || !content) {
                return;
            }

            const rect = section.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            const total = rect.height - windowHeight;
            const progress = total > 0 ? clamp(-rect.top / total, 0, 1) : 0;

            const bgScale = 1.12 + progress * 0.18;
            const bgMove = progress * -65;
            const contentMove = progress * -80;
            const contentScale = 1 - progress * 0.08;

            bg.style.transform = `scale(${bgScale}) translateY(${bgMove}px)`;
            bg.style.opacity = 0.68 + progress * 0.12;
            bg.style.filter = `contrast(${1.08 + progress * 0.08}) saturate(${1.1 + progress * 0.2})`;

            content.style.opacity = 1;
            content.style.visibility = "visible";
            content.style.transform = `translateY(${contentMove}px) scale(${contentScale})`;
        });

        requestAnimationFrame(update);
    }

    requestAnimationFrame(update);
}

let scrollObserver = null;

function setupScrollAnimations() {
    const animatedElements = document.querySelectorAll(
        ".reveal, .rockstar-reveal, .page-hero, .catalog-summary, .product-card, .category-card, .map-box, .social-card"
    );

    if (scrollObserver) {
        scrollObserver.disconnect();
    }

    animatedElements.forEach((element, index) => {
        if (!element.classList.contains("is-visible")) {
            element.style.transitionDelay = `${Math.min(index * 35, 220)}ms`;
        }
    });

    if (!("IntersectionObserver" in window)) {
        animatedElements.forEach(element => {
            element.classList.add("is-visible");
        });
        return;
    }

    scrollObserver = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    scrollObserver.unobserve(entry.target);
                }
            });
        },
        {
            root: null,
            threshold: 0.08,
            rootMargin: "0px 0px -25px 0px"
        }
    );

    animatedElements.forEach(element => {
        scrollObserver.observe(element);
    });
}

function setupInteractiveCards() {
    const cards = document.querySelectorAll(".category-card, .product-card, .social-card");

    cards.forEach(card => {
        card.addEventListener("mousemove", event => {
            const rect = card.getBoundingClientRect();

            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = ((y - centerY) / centerY) * -7;
            const rotateY = ((x - centerX) / centerX) * 7;

            card.style.setProperty("--mouse-x", `${x}px`);
            card.style.setProperty("--mouse-y", `${y}px`);
            card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px) scale(1.025)`;
        });

        card.addEventListener("mouseleave", () => {
            card.style.setProperty("--mouse-x", "50%");
            card.style.setProperty("--mouse-y", "50%");
            card.style.transform = "";
        });
    });
}

document.addEventListener("DOMContentLoaded", () => {
    setupMenu();
    setupCatalog();
    setupScrollAnimations();
    setupCinematicScroll();
    setupInteractiveCards();
});
