const WHATSAPP_NUMBER = "355696666601";

function makeProduct(brand, name, badge, imageName, status = "Pyet për gjendjen", price = "Pyet për çmim") {
    return {
        brand: brand,
        name: name,
        slug: imageName,
        price: price,
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

const WEEKLY_OFFERS = [
    makeProduct("Apple", "iPhone 14 Pro Max", "Ofertë", "iphone14promax", "Në gjendje"),
    makeProduct("Samsung", "Samsung Galaxy A56 8/256GB", "Ofertë", "samsunggalaxya56", "Në gjendje"),
    makeProduct("KuKirin", "KuKirin G2 Max", "Ofertë", "kukiring2max", "Në gjendje"),
    makeProduct("Segway", "Segway Ninebot Max G2", "Ofertë", "segwayninebotmaxg2", "Në gjendje"),
    makeProduct("Mangosteen", "Mangosteen FT08", "Ofertë", "mangosteenft08", "Në gjendje"),
    makeProduct("Samsung", "Samsung Buds 3 Pro", "Ofertë", "samsungbuds3pro", "Në gjendje")
];

const SHOWROOM_PRODUCTS = [
    {
        badge: "Apple",
        title: "iPhone 15 Pro Max",
        text: "Model premium, shumë i kërkuar dhe ideal për përdorim të përditshëm.",
        image: "images/products/iphone15promax.png",
        spec1: "Premium",
        spec2: "Në gjendje"
    },
    {
        badge: "Samsung",
        title: "Samsung Galaxy S25 Ultra 12/256GB",
        text: "Performancë e lartë, ekran fantastik dhe dizajn flagship.",
        image: "images/products/samsunggalaxys25ultra.png",
        spec1: "Flagship",
        spec2: "Në gjendje"
    },
    {
        badge: "KuKirin",
        title: "KuKirin G2 Pro",
        text: "Skuter elektrik i fortë për përdorim urban dhe lëvizje të shpejtë.",
        image: "images/products/kukiring2pro.png",
        spec1: "Electric",
        spec2: "Në gjendje"
    },
    {
        badge: "OUXI",
        title: "OUXI V8",
        text: "Biçikletë elektrike shumë e kërkuar, me look sportiv dhe praktik.",
        image: "images/products/ouxiv8.png",
        spec1: "E-Bike",
        spec2: "Në gjendje"
    }
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

function getAllProducts() {
    const allProducts = [];

    Object.keys(PRODUCTS).forEach(category => {
        PRODUCTS[category].forEach(product => {
            allProducts.push({
                ...product,
                category: category
            });
        });
    });

    return allProducts;
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
    const category = product.category;

    if (category === "telefonat") {
        return `${product.name} është model telefoni i disponueshëm te iShop Mobile. Për ngjyrën, memorien, gjendjen dhe çmimin final, klienti mund të na shkruajë direkt në WhatsApp.`;
    }

    if (category === "skuterat") {
        return `${product.name} është skuter elektrik për lëvizje urbane dhe përdorim të përditshëm. Për autonominë, gjendjen, garancinë dhe çmimin final, na shkruaj në WhatsApp.`;
    }

    if (category === "bicikletat") {
        return `${product.name} është biçikletë elektrike praktike për qytet dhe përdorim të përditshëm. Për gjendjen, ngjyrën dhe çmimin final, porosia bëhet direkt në WhatsApp.`;
    }

    if (category === "aksesoret") {
        return `${product.name} është aksesor i disponueshëm te iShop Mobile. Për përputhshmërinë me pajisjen tënde dhe çmimin final, na shkruaj në WhatsApp.`;
    }

    if (category === "tableta") {
        return `${product.name} është tablet për punë, shkollë, video dhe përdorim të përditshëm. Për gjendjen, memorien dhe çmimin final, na kontakto në WhatsApp.`;
    }

    return `${product.name} është produkt i disponueshëm te iShop Mobile.`;
}
function getProductSpecs(product) {
    const category = product.category;

    if (category === "telefonat") {
        return [
            ["Marka", product.brand],
            ["Modeli", product.name],
            ["Memoria", getMemoryFromName(product.name)],
            ["Gjendja", product.status],
            ["Përdorimi", "Telefon për përdorim të përditshëm"],
            ["Çmimi", product.price]
        ];
    }

    if (category === "skuterat") {
        return [
            ["Marka", product.brand],
            ["Modeli", product.name],
            ["Tipi", "Skuter elektrik"],
            ["Përdorimi", "Lëvizje urbane"],
            ["Gjendja", product.status],
            ["Çmimi", product.price]
        ];
    }

    if (category === "bicikletat") {
        return [
            ["Marka", product.brand],
            ["Modeli", product.name],
            ["Tipi", "Biçikletë elektrike"],
            ["Përdorimi", "Qytet / përditshëm"],
            ["Gjendja", product.status],
            ["Çmimi", product.price]
        ];
    }

    if (category === "aksesoret") {
        return [
            ["Marka", product.brand],
            ["Produkti", product.name],
            ["Tipi", product.badge],
            ["Përdorimi", "Aksesor telefoni/skuteri/biçiklete"],
            ["Gjendja", product.status],
            ["Çmimi", product.price]
        ];
    }

    if (category === "tableta") {
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
        ["Kategoria", getCategoryLabel(category)],
        ["Statusi", product.status],
        ["Çmimi", product.price]
    ];
}

function getProductHighlights(product) {
    const category = product.category;

    if (category === "telefonat") {
        return [
            "I përshtatshëm për përdorim të përditshëm, rrjete sociale, foto dhe video.",
            "Mund të pyesësh për ngjyrën, memorien dhe gjendjen reale në WhatsApp.",
            "Porosia bëhet shpejt pa pagesë online, direkt me komunikim në WhatsApp."
        ];
    }

    if (category === "skuterat") {
        return [
            "Zgjidhje praktike për lëvizje në qytet.",
            "Mund të pyesësh për baterinë, gjendjen dhe disponueshmërinë.",
            "Porosia dërgohet direkt në WhatsApp pa pagesë online."
        ];
    }

    if (category === "bicikletat") {
        return [
            "E përshtatshme për qytet dhe lëvizje të përditshme.",
            "Mund të pyesësh për ngjyrën, gjendjen dhe modelin e disponueshëm.",
            "Komunikim i shpejtë direkt me iShop Mobile."
        ];
    }

    if (category === "aksesoret") {
        return [
            "Aksesor praktik për pajisjen ose mjetin tënd.",
            "Mund të pyesësh në WhatsApp nëse përshtatet me modelin tënd.",
            "Porosi e shpejtë pa pagesë online."
        ];
    }

    if (category === "tableta") {
        return [
            "I përshtatshëm për punë, shkollë dhe argëtim.",
            "Mund të pyesësh për memorien, gjendjen dhe disponueshmërinë.",
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

            <a href="${productUrl}" class="details-btn">
                Shiko detajet
            </a>

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

    const category = grid.dataset.category;

    return (PRODUCTS[category] || []).map(product => ({
        ...product,
        category: category
    }));
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

    if (allProducts.length === 0 || products.length === 0) {
        grid.innerHTML = createEmptyState();
        updateCatalogSummary(products.length, allProducts.length);
        setupScrollAnimations();
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

function findProductCategory(slug) {
    const category = Object.keys(PRODUCTS).find(key => {
        return PRODUCTS[key].some(product => product.slug === slug);
    });

    return category || "telefonat";
}

function renderFeaturedProducts() {
    const bestSellersGrid = document.getElementById("bestSellersGrid");
    const weeklyOffersGrid = document.getElementById("weeklyOffersGrid");

    const bestSellers = BEST_SELLERS.map(product => ({
        ...product,
        category: findProductCategory(product.slug)
    }));

    const weeklyOffers = WEEKLY_OFFERS.map(product => ({
        ...product,
        category: findProductCategory(product.slug)
    }));

    if (bestSellersGrid) {
        bestSellersGrid.innerHTML = bestSellers.map(createProductCard).join("");
    }

    if (weeklyOffersGrid) {
        weeklyOffersGrid.innerHTML = weeklyOffers.map(createProductCard).join("");
    }

    setupWhatsAppButtons();
    setupScrollAnimations();
    setupInteractiveCards();
}

function findProductBySlug(slug) {
    return getAllProducts().find(product => product.slug === slug);
}

function renderProductDetailPage() {
    const detailPage = document.getElementById("productDetailPage");

    if (!detailPage) {
        return;
    }

    const params = new URLSearchParams(window.location.search);
    const slug = params.get("id");
    const product = findProductBySlug(slug);

    if (!product) {
        detailPage.innerHTML = `
            <div class="not-found-box glass-panel">
                <div>
                    <h1>Produkti nuk u gjet</h1>
                    <p>Produkti që kërkove nuk ekziston ose është hequr nga katalogu.</p>
                    <a href="index.html" class="primary-btn">Kthehu në faqe</a>
                </div>
            </div>
        `;
        return;
    }

    const title = document.getElementById("detailTitle");
    const image = document.getElementById("detailImage");
    const brand = document.getElementById("detailBrand");
    const category = document.getElementById("detailCategory");
    const status = document.getElementById("detailStatus");
    const description = document.getElementById("detailDescription");
    const price = document.getElementById("detailPrice");
    const specs = document.getElementById("detailSpecs");
    const highlights = document.getElementById("detailHighlights");
    const whatsappBtn = document.getElementById("detailWhatsAppBtn");

    document.title = `${product.name} | iShop Mobile`;

    document.body.classList.add(`product-category-${product.category}`);

    setTimeout(() => {
        document.body.classList.add("product-scene-finished");
    }, 1650);

    title.textContent = product.name;
    title.setAttribute("data-text", product.name);

    image.src = product.image;
    image.alt = product.name;
    image.onerror = () => {
        image.src = "images/logo.svg";
    };

    brand.textContent = product.brand;
    category.textContent = getCategoryLabel(product.category);
    status.textContent = product.status;
    price.textContent = product.price;
    description.textContent = getProductDescription(product);

    specs.innerHTML = getProductSpecs(product).map(([label, value]) => `
        <div class="detail-spec-item">
            <span>${label}</span>
            <strong>${value}</strong>
        </div>
    `).join("");

    highlights.innerHTML = getProductHighlights(product).map(item => `
        <li>${item}</li>
    `).join("");

    whatsappBtn.addEventListener("click", () => {
        const message = encodeURIComponent(
            `Pershendetje iShop Mobile, dua te porosis kete produkt:\n\n${product.name}\nKategoria: ${getCategoryLabel(product.category)}\nStatusi: ${product.status}\nCmimi: ${product.price}\n\nA eshte i disponueshem?`
        );

        window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
    });

    renderRelatedProducts(product);
}

function renderRelatedProducts(currentProduct) {
    const grid = document.getElementById("relatedProductsGrid");

    if (!grid) {
        return;
    }

    const related = getAllProducts()
        .filter(product => product.category === currentProduct.category && product.slug !== currentProduct.slug)
        .slice(0, 4);

    grid.innerHTML = related.map(createProductCard).join("");

    setupWhatsAppButtons();
    setupScrollAnimations();
    setupInteractiveCards();
}

function setupShowroom() {
    const card = document.getElementById("showroomCard");
    const image = document.getElementById("showroomImage");
    const badge = document.getElementById("showroomBadge");
    const title = document.getElementById("showroomTitle");
    const text = document.getElementById("showroomText");
    const spec1 = document.getElementById("showroomSpec1");
    const spec2 = document.getElementById("showroomSpec2");
    const whatsapp = document.getElementById("showroomWhatsapp");
    const buttons = document.querySelectorAll(".showroom-btn");

    if (!card || !image || !badge || !title || !text || !spec1 || !spec2 || !whatsapp) {
        return;
    }

    let activeIndex = 0;
    let intervalId = null;

    function updateShowroom(index) {
        const product = SHOWROOM_PRODUCTS[index];

        activeIndex = index;

        card.style.transform = "scale(0.97)";
        image.style.opacity = "0";
        image.style.transform = "translateY(25px) scale(0.9)";

        setTimeout(() => {
            image.src = product.image;
            image.alt = product.title;
            badge.textContent = product.badge;
            title.textContent = product.title;
            text.textContent = product.text;
            spec1.textContent = product.spec1;
            spec2.textContent = product.spec2;

            buttons.forEach(button => {
                button.classList.toggle(
                    "active",
                    Number(button.dataset.showroomIndex) === index
                );
            });

            image.style.opacity = "1";
            image.style.transform = "";
            card.style.transform = "";
        }, 220);
    }

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const index = Number(button.dataset.showroomIndex);

            updateShowroom(index);

            if (intervalId) {
                clearInterval(intervalId);
            }

            intervalId = setInterval(() => {
                const nextIndex = (activeIndex + 1) % SHOWROOM_PRODUCTS.length;
                updateShowroom(nextIndex);
            }, 4200);
        });
    });

    whatsapp.addEventListener("click", () => {
        const product = SHOWROOM_PRODUCTS[activeIndex];

        const message = encodeURIComponent(
            `Pershendetje iShop Mobile, jam i interesuar per: ${product.title}. A eshte i disponueshem dhe sa kushton?`
        );

        window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
    });

    intervalId = setInterval(() => {
        const nextIndex = (activeIndex + 1) % SHOWROOM_PRODUCTS.length;
        updateShowroom(nextIndex);
    }, 4200);
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
            const bg = section.querySelector(".cinematic-bg");
            const content = section.querySelector(".cinematic-content");

            if (!bg || !content) {
                return;
            }

            const rect = section.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            const total = rect.height - windowHeight;
            const progress = total > 0 ? clamp(-rect.top / total, 0, 1) : 0;

            bg.style.transform = `scale(${1.12 + progress * 0.18}) translateY(${progress * -65}px)`;
            bg.style.opacity = 0.68 + progress * 0.12;
            content.style.opacity = 1;
            content.style.visibility = "visible";
            content.style.transform = `translateY(${progress * -80}px) scale(${1 - progress * 0.08})`;
        });

        requestAnimationFrame(update);
    }

    requestAnimationFrame(update);
}

let scrollObserver = null;

function setupScrollAnimations() {
    const animatedElements = document.querySelectorAll(
        ".reveal, .rockstar-reveal, .page-hero, .catalog-summary, .product-card, .category-card, .map-box, .social-card, .step-card, .showroom-card, .showroom-left, .bento-card, .product-detail-layout"
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
        animatedElements.forEach(element => element.classList.add("is-visible"));
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
            threshold: 0.08,
            rootMargin: "0px 0px -25px 0px"
        }
    );

    animatedElements.forEach(element => scrollObserver.observe(element));
}

function setupInteractiveCards() {
    const cards = document.querySelectorAll(".category-card, .product-card, .social-card, .step-card, .showroom-card, .bento-card");

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
        wrapper.onclick = event => {
            if (event.target.closest("a")) {
                return;
            }

            lightboxImage.src = wrapper.dataset.lightboxSrc;
            lightboxImage.alt = wrapper.dataset.lightboxAlt || "Produkt";
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

        updateScrollProgress();
    });

    button.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}

function updateScrollProgress() {
    const progress = document.getElementById("scrollProgress");

    if (!progress) {
        return;
    }

    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const percent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

    progress.style.width = `${percent}%`;
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

    if (!container || container.children.length > 0) {
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
    renderProductDetailPage();
    setupShowroom();
    setupScrollAnimations();
    setupCinematicScroll();
    setupInteractiveCards();
    setupWhatsAppButtons();
    setupLightbox();
    setupBackToTop();
    setupRockstarParallax();
    updateScrollProgress();
});