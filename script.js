const WHATSAPP_NUMBER = "355696666601";

function makeProduct(brand, name, badge, imageName, status = "Pyet për gjendjen") {
    return {
        brand: brand,
        name: name,
        price: "Pyet për çmim",
        badge: badge,
        status: status,
        desc: name + ".",
        image: "images/products/" + imageName + ".png"
    };
}

const PRODUCTS = {
    telefonat: [
        makeProduct("Apple", "iPhone 11 Pro", "Apple", "iphone11pro", "Pyet për gjendjen"),
        makeProduct("Apple", "iPhone 11 Pro Max", "Apple", "iphone11promax", "Me porosi"),
        makeProduct("Apple", "iPhone 12 Pro", "Apple", "iphone12pro", "Në gjendje"),
        makeProduct("Apple", "iPhone 12 Pro Max", "Apple", "iphone12promax", "Në gjendje"),
        makeProduct("Apple", "iPhone 13 Pro", "Apple", "iphone13pro", "Në gjendje"),
        makeProduct("Apple", "iPhone 13 Pro Max", "Apple", "iphone13promax", "Në gjendje"),
        makeProduct("Apple", "iPhone 14 Pro", "Apple", "iphone14pro", "Pyet për gjendjen"),
        makeProduct("Apple", "iPhone 14 Pro Max", "Apple", "iphone14promax", "Në gjendje"),
        makeProduct("Apple", "iPhone 15 Pro", "Apple", "iphone15pro", "Në gjendje"),
        makeProduct("Apple", "iPhone 15 Pro Max", "Apple", "iphone15promax", "Në gjendje"),
        makeProduct("Apple", "iPhone 16 Pro", "Apple", "iphone16pro", "Me porosi"),
        makeProduct("Apple", "iPhone 16 Pro Max", "Apple", "iphone16promax", "Me porosi"),
        makeProduct("Apple", "iPhone 17 Pro", "Apple", "iphone17pro", "Me porosi"),
        makeProduct("Apple", "iPhone 17 Pro Max", "Apple", "iphone17promax", "Me porosi"),

        makeProduct("Samsung", "Samsung Galaxy A16 4/64GB", "A Series", "samsunggalaxya16", "Në gjendje"),
        makeProduct("Samsung", "Samsung Galaxy A16 4/128GB", "A Series", "samsunggalaxya16", "Në gjendje"),
        makeProduct("Samsung", "Samsung Galaxy A17 4/64GB", "A Series", "samsunggalaxya17", "Pyet për gjendjen"),
        makeProduct("Samsung", "Samsung Galaxy A17 4/128GB", "A Series", "samsunggalaxya17", "Pyet për gjendjen"),
        makeProduct("Samsung", "Samsung Galaxy A26 6/128GB", "A Series", "samsunggalaxya26", "Në gjendje"),
        makeProduct("Samsung", "Samsung Galaxy A36 8/128GB", "A Series", "samsunggalaxya36", "Në gjendje"),
        makeProduct("Samsung", "Samsung Galaxy A56 8/256GB", "A Series", "samsunggalaxya56", "Në gjendje"),
        makeProduct("Samsung", "Samsung Galaxy S24 8/256GB", "S Series", "samsunggalaxys24", "Në gjendje"),
        makeProduct("Samsung", "Samsung Galaxy S24 FE 8/128GB", "FE", "samsunggalaxys24fe", "Pyet për gjendjen"),
        makeProduct("Samsung", "Samsung Galaxy S25 FE 8/256GB", "FE", "samsunggalaxys25fe", "Me porosi"),
        makeProduct("Samsung", "Samsung Galaxy S25 Plus 12/256GB", "S Series", "samsunggalaxys25plus", "Me porosi"),
        makeProduct("Samsung", "Samsung Galaxy S25 Ultra 12/256GB", "Ultra", "samsunggalaxys25ultra", "Në gjendje"),

        makeProduct("Redmi", "Redmi Note 14 8/256GB", "Redmi", "redminote14", "Në gjendje"),
        makeProduct("Redmi", "Redmi Note 14 Pro Plus 5G 12/512GB", "Redmi", "redminote14proplus5g", "Me porosi"),
        makeProduct("Poco", "Poco C71 3/64GB", "Poco", "pococ71", "Në gjendje"),
        makeProduct("Poco", "Poco M8 8/256GB", "Poco", "pocom8", "Pyet për gjendjen"),
        makeProduct("Google", "Pixel 10A 128GB", "Pixel", "pixel10a", "Me porosi"),
        makeProduct("Google", "Pixel 10 Pro XL 256GB", "Pixel", "pixel10proxl", "Me porosi")
    ],

    skuterat: [
        makeProduct("KuKirin", "KuKirin S1 Max", "KuKirin", "kukirins1max", "Në gjendje"),
        makeProduct("KuKirin", "KuKirin S3 Pro", "KuKirin", "kukirins3pro", "Në gjendje"),
        makeProduct("KuKirin", "KuKirin M4", "KuKirin", "kukirinm4", "Pyet për gjendjen"),
        makeProduct("KuKirin", "KuKirin M4 Pro", "KuKirin", "kukirinm4pro", "Në gjendje"),
        makeProduct("KuKirin", "KuKirin M4 Max", "KuKirin", "kukirinm4max", "Me porosi"),
        makeProduct("KuKirin", "KuKirin G2", "KuKirin", "kukiring2", "Në gjendje"),
        makeProduct("KuKirin", "KuKirin G2 Pro", "KuKirin", "kukiring2pro", "Në gjendje"),
        makeProduct("KuKirin", "KuKirin G2 Max", "KuKirin", "kukiring2max", "Në gjendje"),
        makeProduct("KuKirin", "KuKirin G2 Master", "KuKirin", "kukiring2master", "Me porosi"),
        makeProduct("KuKirin", "KuKirin G2 Ultra", "KuKirin", "kukiring2ultra", "Me porosi"),
        makeProduct("KuKirin", "KuKirin G3", "KuKirin", "kukiring3", "Pyet për gjendjen"),
        makeProduct("KuKirin", "KuKirin G3 Pro", "KuKirin", "kukiring3pro", "Në gjendje"),
        makeProduct("KuKirin", "KuKirin G4", "KuKirin", "kukiring4", "Në gjendje"),
        makeProduct("KuKirin", "KuKirin G4 Max", "KuKirin", "kukiring4max", "Me porosi"),
        makeProduct("KuKirin", "KuKirin T3", "KuKirin", "kukirint3", "Pyet për gjendjen"),

        makeProduct("Kugoo", "Kugoo Kirin S1 Pro", "Kugoo", "kugookirins1pro", "Pyet për gjendjen"),
        makeProduct("Kugoo", "Kugoo Kirin S2 Pro", "Kugoo", "kugookirins2pro", "Pyet për gjendjen"),
        makeProduct("Kugoo", "Kugoo Kirin M2 Pro", "Kugoo", "kugookirinm2pro", "Pyet për gjendjen"),
        makeProduct("Kugoo", "Kugoo Kirin M3", "Kugoo", "kugookirinm3", "Pyet për gjendjen"),
        makeProduct("Kugoo", "Kugoo Kirin M4", "Kugoo", "kugookirinm4", "Në gjendje"),
        makeProduct("Kugoo", "Kugoo M4 Pro", "Kugoo", "kugoom4pro", "Në gjendje"),
        makeProduct("Kugoo", "Kugoo G2 Pro", "Kugoo", "kugoog2pro", "Në gjendje"),
        makeProduct("Kugoo", "Kugoo G-Booster", "Kugoo", "kugoogbooster", "Me porosi"),
        makeProduct("Kugoo", "Kugoo Kirin G1", "Kugoo", "kugookiring1", "Pyet për gjendjen"),
        makeProduct("Kugoo", "Kugoo Kirin G2 Max", "Kugoo", "kugookiring2max", "Me porosi"),
        makeProduct("Kugoo", "Kugoo Kirin G3", "Kugoo", "kugookiring3", "Me porosi"),
        makeProduct("Kugoo", "Kugoo Kirin G3 Pro", "Kugoo", "kugookiring3pro", "Me porosi"),

        makeProduct("Segway", "Segway Ninebot ZT3 Pro", "Segway", "segwayninebotzt3pro", "Në gjendje"),
        makeProduct("Segway", "Segway Ninebot Max G2", "Segway", "segwayninebotmaxg2", "Në gjendje"),
        makeProduct("Segway", "Segway Ninebot E3 Pro", "Segway", "segwayninebote3pro", "Me porosi"),
        makeProduct("Segway", "Segway Ninebot E3", "Segway", "segwayninebote3", "Pyet për gjendjen"),
        makeProduct("Segway", "Segway Ninebot F3", "Segway", "segwayninebotf3", "Pyet për gjendjen"),
        makeProduct("Segway", "Segway Ninebot F3 Pro", "Segway", "segwayninebotf3pro", "Me porosi")
    ],

    bicikletat: [
        makeProduct("OUXI", "OUXI V8", "E-Bike", "ouxiv8", "Në gjendje"),
        makeProduct("OUXI", "OUXI V8 Pro", "E-Bike", "ouxiv8pro", "Në gjendje"),
        makeProduct("OUXI", "OUXI V8 Ultra", "E-Bike", "ouxiv8ultra", "Me porosi"),
        makeProduct("OUXI", "OUXI V8 Max", "E-Bike", "ouxiv8max", "Me porosi"),
        makeProduct("OUXI", "OUXI V10", "E-Bike", "ouxiv10", "Pyet për gjendjen"),
        makeProduct("Mangosteen", "Mangosteen FT08", "E-Bike", "mangosteenft08", "Në gjendje")
    ],

    aksesoret: [
        makeProduct("Apple", "AirPods Pro 2 Type-C", "Kufje", "airpodspro2typec", "Në gjendje"),
        makeProduct("Apple", "AirPods 4 No ANC", "Kufje", "airpods4noanc", "Në gjendje"),
        makeProduct("Apple", "AirPods 4 ANC", "Kufje", "airpods4anc", "Në gjendje"),
        makeProduct("Apple", "AirPods Pro 3 Type-C", "Kufje", "airpodspro3typec", "Me porosi"),
        makeProduct("Apple", "AirPods Max 2", "Kufje", "airpodsmax2", "Me porosi"),
        makeProduct("Samsung", "Samsung Buds 3", "Kufje", "samsungbuds3", "Në gjendje"),
        makeProduct("Samsung", "Samsung Buds 3 Pro", "Kufje", "samsungbuds3pro", "Në gjendje"),
        makeProduct("Samsung", "Samsung Buds 4 Pro", "Kufje", "samsungbuds4pro", "Me porosi"),
        makeProduct("Generic", "Kufje Bluetooth", "Kufje", "kufjebluetooth", "Në gjendje"),
        makeProduct("Generic", "Kufje Type-C", "Kufje", "kufjetypec", "Në gjendje"),
        makeProduct("Generic", "Kufje Lightning", "Kufje", "kufjelightning", "Në gjendje"),

        makeProduct("Apple", "Kasa iPhone 11 Pro", "Kasa", "kasaiphone11pro", "Në gjendje"),
        makeProduct("Apple", "Kasa iPhone 11 Pro Max", "Kasa", "kasaiphone11promax", "Në gjendje"),
        makeProduct("Apple", "Kasa iPhone 12 Pro", "Kasa", "kasaiphone12pro", "Në gjendje"),
        makeProduct("Apple", "Kasa iPhone 12 Pro Max", "Kasa", "kasaiphone12promax", "Në gjendje"),
        makeProduct("Apple", "Kasa iPhone 13 Pro", "Kasa", "kasaiphone13pro", "Në gjendje"),
        makeProduct("Apple", "Kasa iPhone 13 Pro Max", "Kasa", "kasaiphone13promax", "Në gjendje"),
        makeProduct("Apple", "Kasa iPhone 14 Pro", "Kasa", "kasaiphone14pro", "Në gjendje"),
        makeProduct("Apple", "Kasa iPhone 14 Pro Max", "Kasa", "kasaiphone14promax", "Në gjendje"),
        makeProduct("Apple", "Kasa iPhone 15 Pro", "Kasa", "kasaiphone15pro", "Në gjendje"),
        makeProduct("Apple", "Kasa iPhone 15 Pro Max", "Kasa", "kasaiphone15promax", "Në gjendje"),
        makeProduct("Apple", "Kasa iPhone 16 Pro", "Kasa", "kasaiphone16pro", "Në gjendje"),
        makeProduct("Apple", "Kasa iPhone 16 Pro Max", "Kasa", "kasaiphone16promax", "Në gjendje"),
        makeProduct("Apple", "Kasa iPhone 17 Pro", "Kasa", "kasaiphone17pro", "Me porosi"),
        makeProduct("Apple", "Kasa iPhone 17 Pro Max", "Kasa", "kasaiphone17promax", "Me porosi"),

        makeProduct("Samsung", "Kasa Samsung Galaxy A16", "Kasa", "kasasamsunggalaxya16", "Në gjendje"),
        makeProduct("Samsung", "Kasa Samsung Galaxy A17", "Kasa", "kasasamsunggalaxya17", "Në gjendje"),
        makeProduct("Samsung", "Kasa Samsung Galaxy A26", "Kasa", "kasasamsunggalaxya26", "Në gjendje"),
        makeProduct("Samsung", "Kasa Samsung Galaxy A36", "Kasa", "kasasamsunggalaxya36", "Në gjendje"),
        makeProduct("Samsung", "Kasa Samsung Galaxy A56", "Kasa", "kasasamsunggalaxya56", "Në gjendje"),
        makeProduct("Samsung", "Kasa Samsung Galaxy S24", "Kasa", "kasasamsunggalaxys24", "Në gjendje"),
        makeProduct("Samsung", "Kasa Samsung Galaxy S25 Ultra", "Kasa", "kasasamsunggalaxys25ultra", "Në gjendje"),

        makeProduct("Apple", "Xham Mbrojtës iPhone", "Xham", "xhammbrojtesiphone", "Në gjendje"),
        makeProduct("Samsung", "Xham Mbrojtës Samsung", "Xham", "xhammbrojtessamsung", "Në gjendje"),
        makeProduct("Generic", "Xham Privacy", "Xham", "xhamprivacy", "Në gjendje"),
        makeProduct("Generic", "Xham Ceramic", "Xham", "xhamceramic", "Në gjendje"),
        makeProduct("Generic", "Xham Kamera iPhone", "Xham", "xhamkameraiphone", "Në gjendje"),
        makeProduct("Generic", "Xham Kamera Samsung", "Xham", "xhamkamerasamsung", "Në gjendje"),

        makeProduct("Apple", "Karikues iPhone USB-C 20W", "Karikues", "karikuesiphoneusbc20w", "Në gjendje"),
        makeProduct("Samsung", "Karikues Samsung Type-C 25W", "Karikues", "karikuessamsungtypec25w", "Në gjendje"),
        makeProduct("Generic", "Karikues Fast Charger 30W", "Karikues", "karikuesfastcharger30w", "Në gjendje"),
        makeProduct("Generic", "Karikues Makine", "Karikues", "karikuesmakine", "Në gjendje"),
        makeProduct("Generic", "Kabllo Type-C", "Kabllo", "kabllotypec", "Në gjendje"),
        makeProduct("Generic", "Kabllo Lightning", "Kabllo", "kabllolightning", "Në gjendje"),
        makeProduct("Generic", "Kabllo USB-C to USB-C", "Kabllo", "kabllousbctousbc", "Në gjendje"),
        makeProduct("Generic", "Wireless Charger", "Karikues", "wirelesscharger", "Pyet për gjendjen"),
        makeProduct("Generic", "Power Bank", "Power Bank", "powerbank", "Pyet për gjendjen"),

        makeProduct("Generic", "Mbajtëse Telefoni Makine", "Aksesor", "mbajtesetelefonimakine", "Në gjendje"),
        makeProduct("Generic", "Mbajtëse Telefoni Tavoline", "Aksesor", "mbajtesetelefonitavoline", "Në gjendje"),
        makeProduct("Generic", "Pop Socket", "Aksesor", "popsocket", "Në gjendje"),
        makeProduct("Generic", "Adapter Type-C to AUX", "Adapter", "adaptertypectoaux", "Në gjendje"),
        makeProduct("Generic", "Adapter Lightning to AUX", "Adapter", "adapterlightningtoaux", "Në gjendje"),
        makeProduct("Generic", "Adapter Type-C to Lightning", "Adapter", "adaptertypectolightning", "Në gjendje"),

        makeProduct("Skuter", "Kaskë për Skuter", "Skuter", "kaskepperskuter", "Në gjendje"),
        makeProduct("Skuter", "Drita për Skuter", "Skuter", "dritaperskuter", "Në gjendje"),
        makeProduct("Skuter", "Mbajtëse Telefoni për Skuter", "Skuter", "mbajtesetelefoniperskuter", "Në gjendje"),
        makeProduct("Skuter", "Çantë për Skuter", "Skuter", "canteperskuter", "Në gjendje"),
        makeProduct("Skuter", "Dry për Skuter", "Skuter", "dryperskuter", "Në gjendje"),
        makeProduct("Skuter", "Gomë për Skuter", "Skuter", "gomeperskuter", "Pyet për gjendjen"),
        makeProduct("Skuter", "Frena për Skuter", "Skuter", "frenaperskuter", "Pyet për gjendjen"),
        makeProduct("Skuter", "Disk Frene për Skuter", "Skuter", "diskfreneperskuter", "Pyet për gjendjen"),
        makeProduct("Skuter", "Kavo Frene për Skuter", "Skuter", "kavofreneperskuter", "Pyet për gjendjen"),
        makeProduct("Skuter", "Zile për Skuter", "Skuter", "zileperskuter", "Në gjendje"),
        makeProduct("Skuter", "Pasqyrë për Skuter", "Skuter", "pasqyreperskuter", "Në gjendje"),
        makeProduct("Skuter", "Karikues për Skuter", "Skuter", "karikuesperskuter", "Me porosi"),

        makeProduct("Biçikletë", "Kaskë për Biçikletë", "Biçikletë", "kaskeperbiciklete", "Në gjendje"),
        makeProduct("Biçikletë", "Drita për Biçikletë", "Biçikletë", "dritaperbiciklete", "Në gjendje"),
        makeProduct("Biçikletë", "Dry për Biçikletë", "Biçikletë", "dryperbiciklete", "Në gjendje"),
        makeProduct("Biçikletë", "Mbajtëse Telefoni për Biçikletë", "Biçikletë", "mbajtesetelefoniperbiciklete", "Në gjendje"),
        makeProduct("Biçikletë", "Çantë për Biçikletë", "Biçikletë", "canteperbiciklete", "Në gjendje"),
        makeProduct("Biçikletë", "Gomë për Biçikletë", "Biçikletë", "gomeperbiciklete", "Pyet për gjendjen"),
        makeProduct("Biçikletë", "Frena për Biçikletë", "Biçikletë", "frenaperbiciklete", "Pyet për gjendjen"),
        makeProduct("Biçikletë", "Kavo Frene për Biçikletë", "Biçikletë", "kavofreneperbiciklete", "Pyet për gjendjen"),
        makeProduct("Biçikletë", "Pedale për Biçikletë", "Biçikletë", "pedaleperbiciklete", "Pyet për gjendjen")
    ],

    tableta: [
        makeProduct("Apple", "iPad 11 A16 128GB WiFi", "iPad", "ipad11a16128gbwifi", "Në gjendje"),
        makeProduct("Apple", "iPad Air 11 M4 128GB WiFi", "iPad", "ipadair11m4128gbwifi", "Me porosi"),
        makeProduct("Samsung", "Galaxy Tab S8 Ultra 256GB", "Tablet", "galaxytabs8ultra", "Pyet për gjendjen"),
        makeProduct("Samsung", "Galaxy Tab S9 Ultra 256GB", "Tablet", "galaxytabs9ultra", "Me porosi"),
        makeProduct("Apple", "iPad Pro 13 M4 256GB", "iPad", "ipadpro13m4", "Me porosi"),
        makeProduct("Apple", "iPad 12.9 Gen 3 64GB", "iPad", "ipad129gen3", "Pyet për gjendjen")
    ]
};

const BEST_SELLERS = [
    makeProduct("Apple", "iPhone 15 Pro Max", "Best Seller", "iphone15promax", "Në gjendje"),
    makeProduct("Samsung", "Samsung Galaxy S25 Ultra", "Best Seller", "samsunggalaxys25ultra", "Në gjendje"),
    makeProduct("KuKirin", "KuKirin G2 Pro", "Best Seller", "kukiring2pro", "Në gjendje"),
    makeProduct("OUXI", "OUXI V8", "Best Seller", "ouxiv8", "Në gjendje"),
    makeProduct("Apple", "AirPods Pro 2 Type-C", "Best Seller", "airpodspro2typec", "Në gjendje"),
    makeProduct("Apple", "iPad 11 A16 128GB WiFi", "Best Seller", "ipad11a16128gbwifi", "Në gjendje")
];

const WEEKLY_OFFERS = [
    makeProduct("Apple", "iPhone 14 Pro Max", "Ofertë", "iphone14promax", "Në gjendje"),
    makeProduct("Samsung", "Samsung Galaxy A56 8/256GB", "Ofertë", "samsunggalaxya56", "Në gjendje"),
    makeProduct("Kugoo", "Kugoo M4 Pro", "Ofertë", "kugoom4pro", "Në gjendje"),
    makeProduct("Segway", "Segway Ninebot Max G2", "Ofertë", "segwayninebotmaxg2", "Në gjendje"),
    makeProduct("Mangosteen", "Mangosteen FT08", "Ofertë", "mangosteenft08", "Në gjendje"),
    makeProduct("Samsung", "Samsung Buds 3 Pro", "Ofertë", "samsungbuds3pro", "Në gjendje")
];

function normalizeText(value) {
    return String(value || "")
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
}

function getStatusClass(status) {
    if (status === "Në gjendje") {
        return "stock-in";
    }

    if (status === "Me porosi") {
        return "stock-order";
    }

    return "stock-ask";
}

function createProductCard(product) {
    return `
        <article class="product-card reveal" data-brand="${product.brand}">
            <span class="product-badge">${product.badge}</span>
            <span class="stock-status ${getStatusClass(product.status)}">${product.status}</span>

            <div class="product-image-wrapper" data-lightbox-src="${product.image}" data-lightbox-alt="${product.name}">
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
        setupLightbox();
        return;
    }

    if (products.length === 0) {
        grid.innerHTML = createEmptyState();
        updateCatalogSummary(0, allProducts.length);
        setupScrollAnimations();
        setupInteractiveCards();
        setupLightbox();
        return;
    }

    grid.innerHTML = products.map(createProductCard).join("");

    updateCatalogSummary(products.length, allProducts.length);
    setupWhatsAppButtons();
    setupScrollAnimations();
    setupInteractiveCards();
    setupLightbox();
}

function applyCatalogFilters() {
    const search = document.getElementById("productSearch");
    const filter = document.getElementById("brandFilter");
    const products = getCurrentProducts();

    const query = normalizeText(search ? search.value : "");
    const selectedBrand = filter ? filter.value : "all";

    const filteredProducts = products.filter(product => {
        const text = normalizeText(`${product.brand} ${product.name} ${product.badge} ${product.status}`);
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

function renderFeaturedProducts() {
    const bestSellersGrid = document.getElementById("bestSellersGrid");
    const weeklyOffersGrid = document.getElementById("weeklyOffersGrid");

    if (bestSellersGrid) {
        bestSellersGrid.innerHTML = BEST_SELLERS.map(createProductCard).join("");
    }

    if (weeklyOffersGrid) {
        weeklyOffersGrid.innerHTML = WEEKLY_OFFERS.map(createProductCard).join("");
    }

    setupWhatsAppButtons();
    setupScrollAnimations();
    setupInteractiveCards();
    setupLightbox();
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
        ".reveal, .rockstar-reveal, .page-hero, .catalog-summary, .product-card, .category-card, .map-box, .social-card, .step-card"
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
    const cards = document.querySelectorAll(".category-card, .product-card, .social-card, .step-card");

    cards.forEach(card => {
        card.onmousemove = event => {
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
        };

        card.onmouseleave = () => {
            card.style.setProperty("--mouse-x", "50%");
            card.style.setProperty("--mouse-y", "50%");
            card.style.transform = "";
        };
    });
}

function setupLightbox() {
    const lightbox = document.getElementById("imageLightbox");
    const lightboxImage = document.getElementById("lightboxImage");
    const closeButton = document.getElementById("lightboxClose");

    if (!lightbox || !lightboxImage || !closeButton) {
        return;
    }

    document.querySelectorAll("[data-lightbox-src]").forEach(wrapper => {
        wrapper.onclick = () => {
            const imageSrc = wrapper.dataset.lightboxSrc;
            const imageAlt = wrapper.dataset.lightboxAlt || "Produkt";

            lightboxImage.src = imageSrc;
            lightboxImage.alt = imageAlt;
            lightbox.classList.add("open");
            document.body.style.overflow = "hidden";
        };
    });

    function closeLightbox() {
        lightbox.classList.remove("open");
        lightboxImage.src = "";
        document.body.style.overflow = "";
    }

    closeButton.onclick = closeLightbox;

    lightbox.onclick = event => {
        if (event.target === lightbox) {
            closeLightbox();
        }
    };

    document.addEventListener("keydown", event => {
        if (event.key === "Escape" && lightbox.classList.contains("open")) {
            closeLightbox();
        }
    });
}

function setupBackToTop() {
    const button = document.getElementById("backToTop");

    if (!button) {
        return;
    }

    window.addEventListener("scroll", () => {
        if (window.scrollY > 550) {
            button.classList.add("show");
        } else {
            button.classList.remove("show");
        }
    });

    button.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}

function setupPreloader() {
    const preloader = document.getElementById("preloader");

    if (!preloader) {
        return;
    }

    window.addEventListener("load", () => {
        setTimeout(() => {
            preloader.classList.add("hide");
        }, 500);
    });
}

function setupCursorGlow() {
    const glow = document.getElementById("cursorGlow");

    if (!glow) {
        return;
    }

    window.addEventListener("mousemove", event => {
        glow.style.left = event.clientX + "px";
        glow.style.top = event.clientY + "px";
    });
}

function setupParticles() {
    const container = document.getElementById("particlesBg");

    if (!container) {
        return;
    }

    if (container.children.length > 0) {
        return;
    }

    for (let i = 0; i < 34; i++) {
        const particle = document.createElement("span");

        particle.className = "particle";
        particle.style.left = Math.random() * 100 + "%";
        particle.style.animationDuration = 5 + Math.random() * 8 + "s";
        particle.style.animationDelay = Math.random() * 5 + "s";
        particle.style.opacity = 0.35 + Math.random() * 0.65;

        container.appendChild(particle);
    }
}

function setupTypingText() {
    const typingText = document.getElementById("typingText");

    if (!typingText) {
        return;
    }

    const text = "Telefona, skutera elektrikë, biçikleta elektrike, tableta dhe aksesorë me shërbim të shpejtë.";
    let index = 0;

    function type() {
        if (index <= text.length) {
            typingText.textContent = text.slice(0, index);
            index++;
            setTimeout(type, 32);
        }
    }

    type();
}

function setupRockstarParallax() {
    const hero = document.querySelector(".hero-cinematic");
    const title = document.querySelector(".cinematic-content h1");
    const bg = document.querySelector(".cinematic-bg");

    if (!hero || !title || !bg) {
        return;
    }

    window.addEventListener("mousemove", event => {
        const x = (event.clientX / window.innerWidth - 0.5) * 2;
        const y = (event.clientY / window.innerHeight - 0.5) * 2;

        title.style.textShadow = `
            ${8 + x * 6}px ${8 + y * 6}px 0 rgba(255, 0, 60, 0.12),
            0 0 18px rgba(255, 0, 60, 0.75),
            0 0 48px rgba(255, 0, 60, 0.34)
        `;

        bg.style.backgroundPosition = `${50 + x * 2}% ${50 + y * 2}%`;
    });
}

document.addEventListener("DOMContentLoaded", () => {
    setupPreloader();
    setupCursorGlow();
    setupParticles();
    setupTypingText();

    setupMenu();
    setupCatalog();
    renderFeaturedProducts();
    setupScrollAnimations();
    setupCinematicScroll();
    setupInteractiveCards();
    setupWhatsAppButtons();
    setupLightbox();
    setupBackToTop();
    setupRockstarParallax();
});