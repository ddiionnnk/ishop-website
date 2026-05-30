const WHATSAPP_NUMBER = "355690000000";

const PRODUCTS = {
    telefonat: [
        {
            brand: "Apple",
            name: "iPhone 11 Pro",
            price: "Pyet për çmim",
            badge: "Apple",
            desc: "iPhone 11 Pro me ekran Super Retina XDR dhe kamerë triple.",
            image: "images/products/iphone11pro.png"
        },
        {
            brand: "Apple",
            name: "iPhone 11 Pro Max",
            price: "Pyet për çmim",
            badge: "Apple",
            desc: "iPhone 11 Pro Max me ekran të madh dhe bateri shumë të mirë.",
            image: "images/products/iphone11promax.png"
        },
        {
            brand: "Apple",
            name: "iPhone 12 Pro",
            price: "Pyet për çmim",
            badge: "Apple",
            desc: "iPhone 12 Pro me dizajn modern, 5G dhe kamera Pro.",
            image: "images/products/iphone12pro.png"
        },
        {
            brand: "Apple",
            name: "iPhone 12 Pro Max",
            price: "Pyet për çmim",
            badge: "Apple",
            desc: "iPhone 12 Pro Max me ekran të madh dhe performancë të fortë.",
            image: "images/products/iphone12promax.png"
        },
        {
            brand: "Apple",
            name: "iPhone 13 Pro",
            price: "Pyet për çmim",
            badge: "Apple",
            desc: "iPhone 13 Pro me ekran 120Hz dhe kamera Pro.",
            image: "images/products/iphone13pro.png"
        },
        {
            brand: "Apple",
            name: "iPhone 13 Pro Max",
            price: "Pyet për çmim",
            badge: "Apple",
            desc: "iPhone 13 Pro Max me bateri shumë të mirë dhe ekran ProMotion.",
            image: "images/products/iphone13promax.png"
        },
        {
            brand: "Apple",
            name: "iPhone 14 Pro",
            price: "Pyet për çmim",
            badge: "Apple",
            desc: "iPhone 14 Pro me Dynamic Island dhe kamera të avancuara.",
            image: "images/products/iphone14pro.png"
        },
        {
            brand: "Apple",
            name: "iPhone 14 Pro Max",
            price: "Pyet për çmim",
            badge: "Apple",
            desc: "iPhone 14 Pro Max me ekran të madh, Dynamic Island dhe performancë premium.",
            image: "images/products/iphone14promax.png"
        },
        {
            brand: "Apple",
            name: "iPhone 15 Pro",
            price: "Pyet për çmim",
            badge: "Apple",
            desc: "iPhone 15 Pro me trup titanium dhe USB-C.",
            image: "images/products/iphone15pro.png"
        },
        {
            brand: "Apple",
            name: "iPhone 15 Pro Max",
            price: "Pyet për çmim",
            badge: "Apple",
            desc: "iPhone 15 Pro Max me kamera Pro dhe performancë shumë të lartë.",
            image: "images/products/iphone15promax.png"
        },
        {
            brand: "Apple",
            name: "iPhone 16 Pro",
            price: "Pyet për çmim",
            badge: "Apple",
            desc: "iPhone 16 Pro me performancë të lartë dhe kamera premium.",
            image: "images/products/iphone16pro.png"
        },
        {
            brand: "Apple",
            name: "iPhone 16 Pro Max",
            price: "Pyet për çmim",
            badge: "Apple",
            desc: "iPhone 16 Pro Max me ekran të madh dhe eksperiencë flagship.",
            image: "images/products/iphone16promax.png"
        },
        {
            brand: "Apple",
            name: "iPhone 17 Pro",
            price: "Pyet për çmim",
            badge: "Apple",
            desc: "iPhone 17 Pro, model premium Apple.",
            image: "images/products/iphone17pro.png"
        },
        {
            brand: "Apple",
            name: "iPhone 17 Pro Max",
            price: "Pyet për çmim",
            badge: "Apple",
            desc: "iPhone 17 Pro Max, modeli më i lartë i serisë Pro Max.",
            image: "images/products/iphone17promax.png"
        }
    ],

    skuterat: [],

    bicikletat: [],

    aksesoret: []
};

function normalizeText(value) {
    return String(value || "")
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
}

function createProductCard(product) {
    const imageUrl = product.image || "images/logo.svg";

    return `
        <article class="product-card" data-brand="${product.brand}">
            <span class="product-badge">${product.badge}</span>

            <div class="product-image-wrapper">
                <img
                    src="${imageUrl}"
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
        <div class="empty-state">
            <h3>Nuk ka produkte për momentin</h3>
            <p>Kjo kategori do të përditësohet sapo të shtohen produktet në gjendje.</p>
        </div>
    `;
}

function getCurrentProducts() {
    const grid = document.getElementById("catalogGrid");

    if (!grid) {
        return [];
    }

    const category = grid.dataset.category;

    return PRODUCTS[category] || [];
}

function renderBrandFilter(products) {
    const filter = document.getElementById("brandFilter");

    if (!filter) {
        return;
    }

    const brands = [...new Set(products.map(product => product.brand))];

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
        return;
    }

    if (products.length === 0) {
        grid.innerHTML = createEmptyState();
        updateCatalogSummary(0, allProducts.length);
        return;
    }

    grid.innerHTML = products.map(createProductCard).join("");

    updateCatalogSummary(products.length, allProducts.length);
    setupWhatsAppButtons();
}

function applyCatalogFilters() {
    const search = document.getElementById("productSearch");
    const filter = document.getElementById("brandFilter");
    const products = getCurrentProducts();

    const query = normalizeText(search ? search.value : "");
    const selectedBrand = filter ? filter.value : "all";

    const filteredProducts = products.filter(product => {
        const searchableText = normalizeText(`
            ${product.brand}
            ${product.name}
            ${product.badge}
            ${product.desc}
            ${product.price}
        `);

        const matchesSearch = !query || searchableText.includes(query);
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

        if (nav.classList.contains("open")) {
            menuToggle.textContent = "×";
        } else {
            menuToggle.textContent = "☰";
        }
    });

    nav.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            nav.classList.remove("open");
            menuToggle.textContent = "☰";
        });
    });
}

document.addEventListener("DOMContentLoaded", () => {
    setupMenu();
    setupCatalog();
});