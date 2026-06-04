const WHATSAPP_NUMBER = "355696666601";

function makeProduct(brand, name, badge, imageName, status = "Pyet për gjendjen", price = "Pyet për çmim") {
    return {
        brand,
        name,
        slug: imageName,
        price,
        badge,
        status,
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

        makeProduct("Samsung", "Samsung Galaxy A16 4/64GB", "A Series", "samsunggalaxya16", "Në gjendje"),
        makeProduct("Samsung", "Samsung Galaxy A16 4/128GB", "A Series", "samsunggalaxya16-128", "Në gjendje"),
        makeProduct("Samsung", "Samsung Galaxy A26 6/128GB", "A Series", "samsunggalaxya26", "Në gjendje"),
        makeProduct("Samsung", "Samsung Galaxy A36 8/128GB", "A Series", "samsunggalaxya36", "Në gjendje"),
        makeProduct("Samsung", "Samsung Galaxy A56 8/256GB", "A Series", "samsunggalaxya56", "Në gjendje"),
        makeProduct("Samsung", "Samsung Galaxy S24 8/256GB", "S Series", "samsunggalaxys24", "Në gjendje"),
        makeProduct("Samsung", "Samsung Galaxy S24 FE 8/128GB", "FE", "samsunggalaxys24fe", "Pyet për gjendjen"),
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
        makeProduct("KuKirin", "KuKirin M4", "KuKirin", "kukirinm4", "Pyet për gjendjen"),
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

        makeProduct("Segway", "Segway Ninebot ZT3 Pro", "Segway", "segwayninebotzt3pro", "Në gjendje"),
        makeProduct("Segway", "Segway Ninebot Max G2", "Segway", "segwayninebotmaxg2", "Në gjendje"),
        makeProduct("Segway", "Segway Ninebot E3 Pro", "Segway", "segwayninebote3pro", "Me porosi"),
        makeProduct("Segway", "Segway Ninebot E3", "Segway", "segwayninebote3", "Pyet për gjendjen"),
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
        makeProduct("Apple", "AirPods Max 2", "Kufje", "airpodsmax2", "Me porosi"),
        makeProduct("Samsung", "Samsung Buds 3", "Kufje", "samsungbuds3", "Në gjendje"),
        makeProduct("Samsung", "Samsung Buds 3 Pro", "Kufje", "samsungbuds3pro", "Në gjendje"),
        makeProduct("Generic", "Kufje Bluetooth", "Kufje", "kufjebluetooth", "Në gjendje"),
        makeProduct("Generic", "Kufje Type-C", "Kufje", "kufjetypec", "Në gjendje"),
        makeProduct("Generic", "Kufje Lightning", "Kufje", "kufjelightning", "Në gjendje"),

        makeProduct("Apple", "Kasa iPhone 11 Pro", "Kasa", "kasaiphone11pro", "Në gjendje"),
        makeProduct("Apple", "Kasa iPhone 12 Pro Max", "Kasa", "kasaiphone12promax", "Në gjendje"),
        makeProduct("Apple", "Kasa iPhone 13 Pro Max", "Kasa", "kasaiphone13promax", "Në gjendje"),
        makeProduct("Apple", "Kasa iPhone 14 Pro Max", "Kasa", "kasaiphone14promax", "Në gjendje"),
        makeProduct("Apple", "Kasa iPhone 15 Pro Max", "Kasa", "kasaiphone15promax", "Në gjendje"),
        makeProduct("Apple", "Kasa iPhone 16 Pro Max", "Kasa", "kasaiphone16promax", "Në gjendje"),

        makeProduct("Samsung", "Kasa Samsung Galaxy A16", "Kasa", "kasasamsunggalaxya16", "Në gjendje"),
        makeProduct("Samsung", "Kasa Samsung Galaxy A56", "Kasa", "kasasamsunggalaxya56", "Në gjendje"),
        makeProduct("Samsung", "Kasa Samsung Galaxy S25 Ultra", "Kasa", "kasasamsunggalaxys25ultra", "Në gjendje"),

        makeProduct("Apple", "Xham Mbrojtës iPhone", "Xham", "xhammbrojtesiphone", "Në gjendje"),
        makeProduct("Samsung", "Xham Mbrojtës Samsung", "Xham", "xhammbrojtessamsung", "Në gjendje"),
        makeProduct("Generic", "Xham Privacy", "Xham", "xhamprivacy", "Në gjendje"),
        makeProduct("Generic", "Xham Kamera iPhone", "Xham", "xhamkameraiphone", "Në gjendje"),

        makeProduct("Apple", "Karikues iPhone USB-C 20W", "Karikues", "karikuesiphoneusbc20w", "Në gjendje"),
        makeProduct("Samsung", "Karikues Samsung Type-C 25W", "Karikues", "karikuessamsungtypec25w", "Në gjendje"),
        makeProduct("Generic", "Karikues Fast Charger 30W", "Karikues", "karikuesfastcharger30w", "Në gjendje"),
        makeProduct("Generic", "Kabllo Type-C", "Kabllo", "kabllotypec", "Në gjendje"),
        makeProduct("Generic", "Kabllo Lightning", "Kabllo", "kabllolightning", "Në gjendje"),
        makeProduct("Generic", "Wireless Charger", "Karikues", "wirelesscharger", "Pyet për gjendjen"),
        makeProduct("Generic", "Power Bank", "Power Bank", "powerbank", "Pyet për gjendjen"),

        makeProduct("Skuter", "Kaskë për Skuter", "Skuter", "kaskepperskuter", "Në gjendje"),
        makeProduct("Skuter", "Drita për Skuter", "Skuter", "dritaperskuter", "Në gjendje"),
        makeProduct("Skuter", "Mbajtëse Telefoni për Skuter", "Skuter", "mbajtesetelefoniperskuter", "Në gjendje"),
        makeProduct("Skuter", "Çantë për Skuter", "Skuter", "canteperskuter", "Në gjendje"),
        makeProduct("Skuter", "Dry për Skuter", "Skuter", "dryperskuter", "Në gjendje"),
        makeProduct("Skuter", "Gomë për Skuter", "Skuter", "gomeperskuter", "Pyet për gjendjen"),
        makeProduct("Skuter", "Frena për Skuter", "Skuter", "frenaperskuter", "Pyet për gjendjen"),

        makeProduct("Biçikletë", "Kaskë për Biçikletë", "Biçikletë", "kaskeperbiciklete", "Në gjendje"),
        makeProduct("Biçikletë", "Drita për Biçikletë", "Biçikletë", "dritaperbiciklete", "Në gjendje"),
        makeProduct("Biçikletë", "Dry për Biçikletë", "Biçikletë", "dryperbiciklete", "Në gjendje"),
        makeProduct("Biçikletë", "Mbajtëse Telefoni për Biçikletë", "Biçikletë", "mbajtesetelefoniperbiciklete", "Në gjendje"),
        makeProduct("Biçikletë", "Çantë për Biçikletë", "Biçikletë", "canteperbiciklete", "Në gjendje")
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
    makeProduct("Samsung", "Samsung Galaxy S25 Ultra 12/256GB", "Best Seller", "samsunggalaxys25ultra", "Në gjendje"),
    makeProduct("KuKirin", "KuKirin G2 Pro", "Best Seller", "kukiring2pro", "Në gjendje"),
    makeProduct("OUXI", "OUXI V8", "Best Seller", "ouxiv8", "Në gjendje"),
    makeProduct("Apple", "AirPods Pro 2 Type-C", "Best Seller", "airpodspro2typec", "Në gjendje"),
    makeProduct("Apple", "iPad 11 A16 128GB WiFi", "Best Seller", "ipad11a16128gbwifi", "Në gjendje")
];

const STORY_SLIDES = [
    {
        label: "New Arrivals",
        title: "TELEFONAT",
        text: "Modele Apple, Samsung, Redmi, Poco dhe Pixel.",
        product: "images/products/iphone15promax.png",
        specs: ["Apple", "Samsung", "WhatsApp Order"],
        bg: 0
    },
    {
        label: "Electric Ride",
        title: "SKUTERAT",
        text: "KuKirin dhe Segway për lëvizje urbane me stil cinematic.",
        product: "images/products/kukiring2pro.png",
        specs: ["KuKirin", "Segway", "Electric"],
        bg: 1
    },
    {
        label: "E-Bike Zone",
        title: "BIÇIKLETAT",
        text: "OUXI dhe Mangosteen për lëvizje të përditshme në qytet.",
        product: "images/products/ouxiv8.png",
        specs: ["OUXI", "Mangosteen", "E-Bike"],
        bg: 2
    },
    {
        label: "Accessories",
        title: "AKSESORËT",
        text: "Kufje, kasa, karikues, xhama dhe aksesorë për skuter/biçikletë.",
        product: "images/products/airpodspro2typec.png",
        specs: ["AirPods", "Kasa", "Karikues"],
        bg: 3
    }
];

function normalizeText(value) {
    return String(value || "")
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
}

function getStatusClass(status) {
    if (status === "Në gjendje") return "stock-in";
    if (status === "Me porosi") return "stock-order";
    return "stock-ask";
}

function getAllProducts() {
    const allProducts = [];

    Object.keys(PRODUCTS).forEach(category => {
        PRODUCTS[category].forEach(product => {
            allProducts.push({
                ...product,
                category
            });
        });
    });

    return allProducts;
}

function findProductCategory(slug) {
    const category = Object.keys(PRODUCTS).find(key => {
        return PRODUCTS[key].some(product => product.slug === slug);
    });

    return category || "telefonat";
}

function getCategoryLabel(category) {
    const labels = {
        telefonat: "Telefon",
        skuterat: "Skuter elektrik",
        bicikletat: "Biçikletë elektrike",
        aksesoret: "Aksesor",
        tableta: "Tablet"
    };

    return labels[category] || "Produkt";
}

function getMemoryFromName(name) {
    const match = name.match(/(\d+\/\d+GB|\d+GB|\d+\/\d+|\d+TB)/i);
    return match ? match[0] : "Sipas modelit";
}

function getProductDescription(product) {
    if (product.category === "telefonat") {
        return `${product.name} është model telefoni te iShop Mobile. Pyet në WhatsApp për ngjyrën, memorien, gjendjen dhe çmimin final.`;
    }

    if (product.category === "skuterat") {
        return `${product.name} është skuter elektrik për lëvizje urbane. Pyet në WhatsApp për gjendjen, baterinë dhe çmimin final.`;
    }

    if (product.category === "bicikletat") {
        return `${product.name} është biçikletë elektrike praktike për qytet dhe përdorim të përditshëm.`;
    }

    if (product.category === "aksesoret") {
        return `${product.name} është aksesor i disponueshëm te iShop Mobile. Pyet në WhatsApp për përputhshmërinë me pajisjen tënde.`;
    }

    if (product.category === "tableta") {
        return `${product.name} është tablet për punë, shkollë dhe argëtim. Pyet në WhatsApp për gjendjen dhe çmimin final.`;
    }

    return `${product.name} është produkt te iShop Mobile.`;
}

function getProductSpecs(product) {
    if (product.category === "telefonat") {
        return [
            ["Marka", product.brand],
            ["Modeli", product.name],
            ["Memoria", getMemoryFromName(product.name)],
            ["Gjendja", product.status],
            ["Përdorimi", "Telefon për përdorim të përditshëm"],
            ["Çmimi", product.price]
        ];
    }

    if (product.category === "skuterat") {
        return [
            ["Marka", product.brand],
            ["Modeli", product.name],
            ["Tipi", "Skuter elektrik"],
            ["Përdorimi", "Lëvizje urbane"],
            ["Gjendja", product.status],
            ["Çmimi", product.price]
        ];
    }

    if (product.category === "bicikletat") {
        return [
            ["Marka", product.brand],
            ["Modeli", product.name],
            ["Tipi", "Biçikletë elektrike"],
            ["Përdorimi", "Qytet / përditshëm"],
            ["Gjendja", product.status],
            ["Çmimi", product.price]
        ];
    }

    if (product.category === "aksesoret") {
        return [
            ["Marka", product.brand],
            ["Produkti", product.name],
            ["Tipi", product.badge],
            ["Përdorimi", "Aksesor telefoni/skuteri/biçiklete"],
            ["Gjendja", product.status],
            ["Çmimi", product.price]
        ];
    }

    if (product.category === "tableta") {
        return [
            ["Marka", product.brand],
            ["Modeli", product.name],
            ["Memoria", getMemoryFromName(product.name)],
            ["Tipi", "Tablet"],
            ["Gjendja", product.status],
            ["Çmimi", product.price]
        ];
    }

    return [
        ["Marka", product.brand],
        ["Modeli", product.name],
        ["Statusi", product.status],
        ["Çmimi", product.price]
    ];
}
function getProductHighlights(product) {
    if (product.category === "telefonat") {
        return [
            "I përshtatshëm për përdorim të përditshëm, rrjete sociale, foto dhe video.",
            "Pyet direkt në WhatsApp për ngjyrën, memorien dhe gjendjen reale.",
            "Porosia bëhet shpejt pa pagesë online, direkt me komunikim."
        ];
    }

    if (product.category === "skuterat") {
        return [
            "Zgjidhje praktike për lëvizje në qytet.",
            "Mund të pyesësh për baterinë, gjendjen dhe disponueshmërinë.",
            "Porosia dërgohet direkt në WhatsApp pa pagesë online."
        ];
    }

    if (product.category === "bicikletat") {
        return [
            "E përshtatshme për qytet dhe lëvizje të përditshme.",
            "Pyet për ngjyrën, gjendjen dhe modelin e disponueshëm.",
            "Komunikim i shpejtë direkt me iShop Mobile."
        ];
    }

    if (product.category === "aksesoret") {
        return [
            "Aksesor praktik për pajisjen ose mjetin tënd.",
            "Mund të pyesësh në WhatsApp nëse përshtatet me modelin tënd.",
            "Porosi e shpejtë pa pagesë online."
        ];
    }

    if (product.category === "tableta") {
        return [
            "I përshtatshëm për punë, shkollë dhe argëtim.",
            "Pyet për memorien, gjendjen dhe disponueshmërinë.",
            "Porosi direkte në WhatsApp pa pagesë online."
        ];
    }

    return [
        "Produkt i disponueshëm te iShop Mobile.",
        "Pyet direkt në WhatsApp për gjendjen.",
        "Komunikim i shpejtë dhe i thjeshtë."
    ];
}

function createProductCard(product) {
    const productUrl = `product.html?id=${encodeURIComponent(product.slug)}`;

    return `
        <article class="product-card reveal" data-brand="${product.brand}">
            <span class="product-badge">${product.badge}</span>
            <span class="stock-status ${getStatusClass(product.status)}">${product.status}</span>

            <a href="${productUrl}" class="product-card-click">
                <div class="product-image-wrapper">
                    <img
                        src="${product.image}"
                        alt="${product.name}"
                        loading="lazy"
                        onerror="this.onerror=null; this.src='images/logo.svg'; this.classList.add('fallback-logo');"
                    >
                </div>

                <h3>${product.name}</h3>
            </a>

            <p class="product-desc">${product.desc}</p>
            <p class="price">${product.price}</p>

            <a href="${productUrl}" class="details-btn">Shiko Trailer</a>

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

    if (!grid) return [];

    const category = grid.dataset.category;

    return (PRODUCTS[category] || []).map(product => ({
        ...product,
        category
    }));
}

function renderBrandFilter(products) {
    const filter = document.getElementById("brandFilter");

    if (!filter) return;

    const brands = [...new Set(products.map(product => product.brand))].sort();

    filter.innerHTML = `<option value="all">Të gjitha markat</option>`;

    brands.forEach(brand => {
        filter.innerHTML += `<option value="${brand}">${brand}</option>`;
    });
}

function updateCatalogSummary(visibleCount, totalCount) {
    const summary = document.getElementById("catalogSummary");

    if (!summary) return;

    summary.innerHTML = `
        <span><strong>${visibleCount}</strong> produkte të shfaqura</span>
        <span><strong>${totalCount}</strong> produkte gjithsej</span>
    `;
}

function renderCatalog(productsToRender = null) {
    const grid = document.getElementById("catalogGrid");

    if (!grid) return;

    const allProducts = getCurrentProducts();
    const products = productsToRender || allProducts;

    if (!products.length) {
        grid.innerHTML = createEmptyState();
        updateCatalogSummary(0, allProducts.length);
        setupRevealAnimations();
        return;
    }

    grid.innerHTML = products.map(createProductCard).join("");

    updateCatalogSummary(products.length, allProducts.length);
    setupWhatsAppButtons();
    setupRevealAnimations();
    setupInteractiveCards();
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

    if (search) search.addEventListener("input", applyCatalogFilters);
    if (filter) filter.addEventListener("change", applyCatalogFilters);
}

function renderFeaturedProducts() {
    const grid = document.getElementById("bestSellersGrid");

    if (!grid) return;

    const products = BEST_SELLERS.map(product => ({
        ...product,
        category: findProductCategory(product.slug)
    }));

    grid.innerHTML = products.map(createProductCard).join("");

    setupWhatsAppButtons();
    setupRevealAnimations();
    setupInteractiveCards();
}

function findProductBySlug(slug) {
    return getAllProducts().find(product => product.slug === slug);
}

function renderProductDetailPage() {
    const detailPage = document.getElementById("productDetailPage");

    if (!detailPage) return;

    const params = new URLSearchParams(window.location.search);
    const slug = params.get("id");
    const product = findProductBySlug(slug);

    if (!product) {
        detailPage.innerHTML = `
            <section class="product-final-cta">
                <div class="final-product-card">
                    <div class="final-product-info">
                        <p class="eyebrow">Error</p>
                        <h2>Produkti nuk u gjet</h2>
                        <p>Produkti që kërkove nuk ekziston ose është hequr nga katalogu.</p>
                        <br>
                        <a href="index.html" class="cinematic-btn primary">Kthehu në faqe</a>
                    </div>
                </div>
            </section>
        `;
        return;
    }

    document.title = `${product.name} | iShop Mobile`;
    document.body.classList.add(`product-category-${product.category}`);

    const productBgLayer = document.getElementById("productBgLayer");
    const detailImage = document.getElementById("detailImage");
    const finalProductImage = document.getElementById("finalProductImage");
    const detailBrand = document.getElementById("detailBrand");
    const detailTitle = document.getElementById("detailTitle");
    const detailDescription = document.getElementById("detailDescription");
    const detailCategory = document.getElementById("detailCategory");
    const detailSpecs = document.getElementById("detailSpecs");
    const detailStatus = document.getElementById("detailStatus");
    const finalProductTitle = document.getElementById("finalProductTitle");
    const detailPrice = document.getElementById("detailPrice");
    const detailHighlights = document.getElementById("detailHighlights");
    const detailWhatsAppBtn = document.getElementById("detailWhatsAppBtn");

    if (productBgLayer) {
        productBgLayer.style.setProperty("--product-bg-image", `url("${product.image}")`);
    }

    if (detailImage) {
        detailImage.src = product.image;
        detailImage.alt = product.name;
        detailImage.onerror = () => {
            detailImage.src = "images/logo.svg";
        };
    }

    if (finalProductImage) {
        finalProductImage.src = product.image;
        finalProductImage.alt = product.name;
        finalProductImage.onerror = () => {
            finalProductImage.src = "images/logo.svg";
        };
    }

    if (detailBrand) detailBrand.textContent = product.brand;

    if (detailTitle) {
        detailTitle.textContent = product.name;
        detailTitle.setAttribute("data-text", product.name);
    }

    if (detailDescription) detailDescription.textContent = getProductDescription(product);
    if (detailCategory) detailCategory.textContent = getCategoryLabel(product.category);
    if (detailStatus) detailStatus.textContent = product.status;
    if (finalProductTitle) finalProductTitle.textContent = product.name;
    if (detailPrice) detailPrice.textContent = product.price;

    if (detailSpecs) {
        detailSpecs.innerHTML = getProductSpecs(product).map(([label, value]) => `
            <div class="detail-spec-item">
                <span>${label}</span>
                <strong>${value}</strong>
            </div>
        `).join("");
    }

    if (detailHighlights) {
        detailHighlights.innerHTML = getProductHighlights(product).map(item => `
            <li>${item}</li>
        `).join("");
    }

    if (detailWhatsAppBtn) {
        detailWhatsAppBtn.addEventListener("click", () => {
            const message = encodeURIComponent(
                `Pershendetje iShop Mobile, dua te porosis kete produkt:\n\n${product.name}\nKategoria: ${getCategoryLabel(product.category)}\nStatusi: ${product.status}\nCmimi: ${product.price}\n\nA eshte i disponueshem?`
            );

            window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
        });
    }

    renderRelatedProducts(product);
    setupProductSpecsReveal();
}

function renderRelatedProducts(currentProduct) {
    const grid = document.getElementById("relatedProductsGrid");

    if (!grid) return;

    const related = getAllProducts()
        .filter(product => product.category === currentProduct.category && product.slug !== currentProduct.slug)
        .slice(0, 4);

    grid.innerHTML = related.map(createProductCard).join("");

    setupWhatsAppButtons();
    setupRevealAnimations();
    setupInteractiveCards();
}

function setupStoryTrailer() {
    const section = document.getElementById("trailerStory");
    const productFrame = document.querySelector(".story-product-frame");
    const productImage = document.getElementById("storyProduct");
    const label = document.getElementById("storyLabel");
    const title = document.getElementById("storyTitle");
    const text = document.getElementById("storyText");
    const specs = document.getElementById("storySpecs");
    const dots = document.querySelectorAll("[data-story-dot]");
    const backgrounds = document.querySelectorAll("[data-story-bg]");

    if (!section || !productImage || !label || !title || !text || !specs) return;

    let activeIndex = 0;

    function setSlide(index) {
        if (index === activeIndex) return;

        activeIndex = index;
        const slide = STORY_SLIDES[index];

        productFrame.classList.add("switching");

        setTimeout(() => {
            productImage.src = slide.product;
            productImage.alt = slide.title;
            productImage.onerror = () => {
                productImage.src = "images/logo.svg";
            };

            label.textContent = slide.label;
            title.textContent = slide.title;
            title.setAttribute("data-text", slide.title);
            text.textContent = slide.text;

            specs.innerHTML = slide.specs.map(item => `<span>${item}</span>`).join("");

            backgrounds.forEach(bg => {
                bg.classList.toggle("active", Number(bg.dataset.storyBg) === slide.bg);
            });

            dots.forEach(dot => {
                dot.classList.toggle("active", Number(dot.dataset.storyDot) === index);
            });

            productFrame.classList.remove("switching");
        }, 220);
    }

    function updateOnScroll() {
        const rect = section.getBoundingClientRect();
        const total = section.offsetHeight - window.innerHeight;
        const progress = total > 0 ? Math.min(Math.max(-rect.top / total, 0), 0.999) : 0;
        const index = Math.floor(progress * STORY_SLIDES.length);

        setSlide(Math.min(index, STORY_SLIDES.length - 1));
    }

    dots.forEach(dot => {
        dot.addEventListener("click", () => {
            const index = Number(dot.dataset.storyDot);
            const targetY = section.offsetTop + index * window.innerHeight;

            window.scrollTo({
                top: targetY,
                behavior: "smooth"
            });
        });
    });

    window.addEventListener("scroll", updateOnScroll);
    updateOnScroll();
}

function setupProductSpecsReveal() {
    const section = document.querySelector(".product-specs-story");
    const cards = document.querySelectorAll(".detail-spec-item");

    if (!section || !cards.length) return;

    function updateSpecs() {
        const rect = section.getBoundingClientRect();
        const total = section.offsetHeight - window.innerHeight;
        const progress = total > 0 ? Math.min(Math.max(-rect.top / total, 0), 1) : 1;

        cards.forEach((card, index) => {
            const trigger = (index + 1) / (cards.length + 1);

            if (progress >= trigger || window.innerWidth <= 980) {
                card.classList.add("is-visible");
            }
        });
    }

    window.addEventListener("scroll", updateSpecs);
    setTimeout(updateSpecs, 300);
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
    const menuToggle = document.getElementById("menuToggle");
    const nav = document.getElementById("trailerNav");

    if (!menuToggle || !nav) return;

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

let revealObserver = null;

function setupRevealAnimations() {
    const elements = document.querySelectorAll(".reveal, .product-card, .poster-card, .map-frame, .catalog-summary");

    if (revealObserver) {
        revealObserver.disconnect();
    }

    if (!("IntersectionObserver" in window)) {
        elements.forEach(element => element.classList.add("is-visible"));
        return;
    }

    revealObserver = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    revealObserver.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.08,
            rootMargin: "0px 0px -30px 0px"
        }
    );

    elements.forEach((element, index) => {
        if (!element.classList.contains("is-visible")) {
            element.style.transitionDelay = `${Math.min(index * 35, 220)}ms`;
        }

        revealObserver.observe(element);
    });
}

function setupInteractiveCards() {
    const cards = document.querySelectorAll(".poster-card, .product-card, .final-product-card, .map-frame");

    cards.forEach(card => {
        card.onmousemove = event => {
            const rect = card.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;

            card.style.setProperty("--mouse-x", `${x}px`);
            card.style.setProperty("--mouse-y", `${y}px`);
        };

        card.onmouseleave = () => {
            card.style.setProperty("--mouse-x", "50%");
            card.style.setProperty("--mouse-y", "50%");
        };
    });
}

function setupPreloader() {
    const preloader = document.getElementById("preloader");

    if (!preloader) return;

    window.addEventListener("load", () => {
        setTimeout(() => {
            preloader.classList.add("hide");
        }, 450);
    });
}

function setupCursorGlow() {
    const glow = document.getElementById("cursorGlow");

    if (!glow) return;

    window.addEventListener("mousemove", event => {
        glow.style.left = event.clientX + "px";
        glow.style.top = event.clientY + "px";
    });
}

function updateScrollProgress() {
    const progress = document.getElementById("scrollProgress");

    if (!progress) return;

    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const percent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

    progress.style.width = `${percent}%`;
}

function setupBackToTop() {
    const button = document.getElementById("backToTop");

    if (!button) return;

    window.addEventListener("scroll", () => {
        button.classList.toggle("show", window.scrollY > 560);
        updateScrollProgress();
    });

    button.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}

function setupHeroParallax() {
    const hero = document.querySelector(".trailer-hero");
    const bg = document.querySelector(".hero-bg img");
    const title = document.querySelector(".mega-title");

    if (!hero || !bg || !title) return;

    window.addEventListener("mousemove", event => {
        const x = (event.clientX / window.innerWidth - 0.5) * 2;
        const y = (event.clientY / window.innerHeight - 0.5) * 2;

        bg.style.transform = `scale(1.12) translate(${x * 12}px, ${y * 8}px)`;
        title.style.transform = `translate(${x * 8}px, ${y * 5}px)`;
    });
}

function setupMarqueeDuplicate() {
    const track = document.querySelector(".marquee-track");

    if (!track || track.dataset.duplicated === "true") return;

    track.innerHTML += track.innerHTML;
    track.dataset.duplicated = "true";
}

document.addEventListener("DOMContentLoaded", () => {
    setupPreloader();
    setupCursorGlow();
    setupMenu();

    setupCatalog();
    renderFeaturedProducts();
    renderProductDetailPage();

    setupStoryTrailer();
    setupProductSpecsReveal();

    setupRevealAnimations();
    setupInteractiveCards();
    setupWhatsAppButtons();

    setupBackToTop();
    setupHeroParallax();
    setupMarqueeDuplicate();
    updateScrollProgress();
});