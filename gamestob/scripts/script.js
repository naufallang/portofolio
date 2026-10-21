const PRODUCTS = [
  {
    id: "cyberpunk-2077",
    title: "Cyberpunk 2077",
    category: "Action RPG",
    tags: "all action rpg openworld scifi story",
    price: 59.99,
    platform: "PC, PlayStation, Xbox",
    image: "cyberpunk2077.jpg",
    desc: "Explore Night City through cinematic missions, cyber upgrades, branching choices, and high-impact combat.",
    genreTags: ["Open World", "Sci-Fi", "Story"]
  },
  {
    id: "elden-ring",
    title: "Elden Ring",
    category: "Fantasy RPG",
    tags: "all rpg action adventure soulslike fantasy",
    price: 59.99,
    platform: "PC, PlayStation, Xbox",
    image: "eldenring.jpg",
    desc: "Enter a dark fantasy world with memorable bosses, deep exploration, build variety, and challenging combat.",
    genreTags: ["Fantasy", "Adventure", "Soulslike"]
  },
  {
    id: "hitman-world-of-assassination",
    title: "Hitman World of Assassination",
    category: "Stealth Action",
    tags: "all action stealth sandbox strategy",
    price: 69.99,
    platform: "PC, PlayStation, Xbox",
    image: "hitman.jpg",
    desc: "Plan each mission carefully using disguises, timing, stealth routes, and creative assassination methods.",
    genreTags: ["Stealth", "Sandbox", "Tactical"]
  },
  {
    id: "forza-horizon-5",
    title: "Forza Horizon 5",
    category: "Open-World Racing",
    tags: "all racing sports multiplayer openworld bestseller",
    price: 59.99,
    platform: "PC, Xbox",
    image: "forzahorizon5.jpg",
    desc: "Race through beautiful roads, collect performance cars, join seasonal events, and compete online.",
    genreTags: ["Racing", "Open World", "Multiplayer"]
  },
  {
    id: "dota-2",
    title: "Dota 2",
    category: "MOBA",
    tags: "all moba strategy multiplayer esports free",
    price: 0,
    platform: "PC",
    image: "dota2.jpg",
    desc: "Compete in deep 5v5 matches with hero roles, team coordination, item builds, and esports-level strategy.",
    genreTags: ["MOBA", "Esports", "Free"]
  },
  {
    id: "civilization-vi",
    title: "Sid Meier's Civilization VI",
    category: "Grand Strategy",
    tags: "all strategy turnbased simulation bestseller",
    price: 29.99,
    platform: "PC, PlayStation, Xbox, Switch",
    image: "civilizationvi.jpg",
    desc: "Build an empire, research technology, manage cities, negotiate diplomacy, and lead history your way.",
    genreTags: ["Strategy", "Turn-Based", "4X"]
  },
  {
    id: "shadow-of-the-erdtree",
    title: "Elden Ring: Shadow of the Erdtree",
    category: "DLC Expansion",
    tags: "all dlc rpg expansion fantasy",
    price: 39.99,
    platform: "PC, PlayStation, Xbox",
    image: "shadowoftheerdtree.jpg",
    desc: "A major expansion with a new land to explore, powerful bosses, weapons, mysteries, and deeper lore.",
    genreTags: ["DLC", "Expansion", "RPG"]
  },
  {
    id: "xcom-2-war-of-the-chosen",
    title: "XCOM 2: War of the Chosen",
    category: "Tactical DLC",
    tags: "all dlc strategy tactical turnbased",
    price: 39.99,
    platform: "PC, PlayStation, Xbox",
    image: "xcom2warofthechosen.jpg",
    desc: "Expand the tactical campaign with new factions, enemy threats, squad upgrades, and strategic pressure.",
    genreTags: ["DLC", "Tactical", "Strategy"]
  },
  {
    id: "forza-hot-wheels",
    title: "Forza Horizon 5: Hot Wheels",
    category: "Racing DLC",
    tags: "all dlc racing arcade sports",
    price: 19.99,
    platform: "PC, Xbox",
    image: "forzahotwheels.jpg",
    desc: "Race across extreme Hot Wheels tracks with loops, boosts, aerial circuits, and high-speed stunts.",
    genreTags: ["DLC", "Racing", "Arcade"]
  },
  {
    id: "resident-evil-4",
    title: "Resident Evil 4",
    category: "Survival Horror",
    tags: "all horror action survival adventure",
    price: 49.99,
    platform: "PC, PlayStation, Xbox",
    image: "re4.jpg",
    desc: "Survive tense encounters, manage resources carefully, and experience a cinematic action-horror campaign.",
    genreTags: ["Horror", "Survival", "Action"]
  },
  {
    id: "monster-hunter-rise",
    title: "Monster Hunter Rise",
    category: "Action Co-op",
    tags: "all action coop multiplayer rpg hunting",
    price: 39.99,
    platform: "PC, PlayStation, Xbox, Switch",
    image: "monsterhunterrise.jpg",
    desc: "Hunt massive monsters, craft equipment, master weapon styles, and team up in fast co-op quests.",
    genreTags: ["Action", "Co-op", "Hunting"]
  },
  {
    id: "dead-cells",
    title: "Dead Cells",
    category: "Action Platformer",
    tags: "all indie action roguelike platformer",
    price: 24.99,
    platform: "PC, PlayStation, Xbox, Switch",
    image: "deadcells.jpg",
    desc: "Move quickly through dangerous levels with tight combat, branching paths, upgrades, and rogue-like replayability.",
    genreTags: ["Indie", "Rogue-like", "Platformer"]
  },
  {
    id: "tekken-8",
    title: "Tekken 8",
    category: "Fighting",
    tags: "all fighting multiplayer esports action",
    price: 69.99,
    platform: "PC, PlayStation, Xbox",
    image: "tekken8.jpg",
    desc: "Fight in cinematic one-on-one battles with a strong roster, aggressive mechanics, and online competition.",
    genreTags: ["Fighting", "Competitive", "Online"]
  },
  {
    id: "no-mans-sky",
    title: "No Man's Sky",
    category: "Exploration Survival",
    tags: "all adventure survival scifi exploration",
    price: 39.99,
    platform: "PC, PlayStation, Xbox, Switch",
    image: "nomanssky.jpg",
    desc: "Travel across procedural planets, gather resources, build bases, upgrade ships, and explore space freely.",
    genreTags: ["Exploration", "Survival", "Sci-Fi"]
  },
  {
    id: "hades",
    title: "Hades",
    category: "Rogue-like Action",
    tags: "all indie action roguelike mythology",
    price: 24.99,
    platform: "PC, PlayStation, Xbox, Switch",
    image: "hades.jpg",
    desc: "Fight your way out of the underworld with responsive combat, meaningful upgrades, and stylish storytelling.",
    genreTags: ["Rogue-like", "Action", "Indie"]
  },
  {
    id: "ea-sports-fc-25",
    title: "EA Sports FC 25",
    category: "Sports",
    tags: "all sports football multiplayer",
    price: 69.99,
    platform: "PC, PlayStation, Xbox, Switch",
    image: "easportsfc25.jpg",
    desc: "Play modern football matches with licensed teams, quick modes, competitive play, and career progression.",
    genreTags: ["Sports", "Football", "Multiplayer"]
  },
  {
    id: "portal-2",
    title: "Portal 2",
    category: "Puzzle Adventure",
    tags: "all puzzle adventure coop comedy",
    price: 9.99,
    platform: "PC",
    image: "portal2.jpg",
    desc: "Solve clever portal-based puzzles through a memorable campaign with sharp writing and co-op challenges.",
    genreTags: ["Puzzle", "Co-op", "Adventure"]
  },
  {
    id: "diablo-iv",
    title: "Diablo IV",
    category: "Action RPG",
    tags: "all action rpg coop darkfantasy loot",
    price: 69.99,
    platform: "PC, PlayStation, Xbox",
    image: "diablo4.jpg",
    desc: "Enter a dark fantasy world focused on loot, dungeons, character builds, and shared-world events.",
    genreTags: ["Action RPG", "Loot", "Co-op"]
  },
  {
    id: "sekiro-shadows-die-twice",
    title: "Sekiro: Shadows Die Twice",
    category: "Action Adventure",
    tags: "all action adventure soulslike stealth",
    price: 59.99,
    platform: "PC, PlayStation, Xbox",
    image: "sekiro.jpg",
    desc: "Master precision sword combat, stealth movement, vertical exploration, and demanding boss encounters.",
    genreTags: ["Action", "Adventure", "Soulslike"]
  },
  {
    id: "it-takes-two",
    title: "It Takes Two",
    category: "Co-op Adventure",
    tags: "all coop adventure platformer multiplayer",
    price: 39.99,
    platform: "PC, PlayStation, Xbox, Switch",
    image: "ittakestwo.jpg",
    desc: "Play a creative co-op adventure built around teamwork, imaginative worlds, puzzles, and platforming.",
    genreTags: ["Co-op", "Adventure", "Platformer"]
  },
  {
    id: "stardew-valley",
    title: "Stardew Valley",
    category: "Indie Simulation",
    tags: "all indie simulation cozy farming",
    price: 14.99,
    platform: "PC, PlayStation, Xbox, Switch",
    image: "stardewvalley.jpg",
    desc: "Build a farm, meet villagers, explore mines, craft items, fish, and enjoy a relaxed life-simulation loop.",
    genreTags: ["Indie", "Cozy", "Simulation"]
  },
  {
    id: "street-fighter-6",
    title: "Street Fighter 6",
    category: "Fighting",
    tags: "all fighting multiplayer esports arcade",
    price: 59.99,
    platform: "PC, PlayStation, Xbox",
    image: "streetfighter6.jpg",
    desc: "A stylish modern fighting game with strong training tools, arcade energy, and competitive online matches.",
    genreTags: ["Fighting", "Arcade", "Esports"]
  }
];

const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => Array.from(scope.querySelectorAll(selector));
function getProduct(id) { return PRODUCTS.find((item) => item.id === id); }
function formatPrice(price) { return price === 0 ? 'Free to Play' : '$' + price.toFixed(2); }
function onlyDigits(value) { let output = ''; for (const char of value) { if (char >= '0' && char <= '9') output += char; } return output; }
function slugTitle(title) { return title.replace(/\s+/g, '<br>'); }

function setupMobileMenu() {
  const menu = $('[data-mobile-menu]'); const backdrop = $('[data-mobile-backdrop]'); const openBtn = $('[data-menu-open]'); const closeBtn = $('[data-menu-close]');
  if (!menu || !backdrop || !openBtn || !closeBtn) return;
  const open = () => { menu.classList.add('is-open'); backdrop.classList.add('is-open'); document.body.classList.add('menu-open'); };
  const close = () => { menu.classList.remove('is-open'); backdrop.classList.remove('is-open'); document.body.classList.remove('menu-open'); };
  openBtn.addEventListener('click', open); closeBtn.addEventListener('click', close); backdrop.addEventListener('click', close);
}
function setupReveal() {
  const items = $$('.reveal'); if (!items.length) return;
  if (!('IntersectionObserver' in window)) { items.forEach((item) => item.classList.add('is-visible')); return; }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); } });
  }, { threshold: 0.13 });
  items.forEach((item) => observer.observe(item));
}
function setupHeroSlider() {
  const track = $('[data-hero-slider-track]'); if (!track) return;
  const slides = $$('.hero-slide', track); const prev = $('[data-hero-prev]'); const next = $('[data-hero-next]'); let index = 0;
  function show(nextIndex) { index = (nextIndex + slides.length) % slides.length; track.style.transform = `translateX(${index * -100}%)`; }
  if (prev) prev.addEventListener('click', () => show(index - 1));
  if (next) next.addEventListener('click', () => show(index + 1));
  if (slides.length > 1) setInterval(() => show(index + 1), 6000);
}
function createProductCard(item) {
  const visual = item.image
    ? `<img src="assets/covers/${item.image}" alt="${item.title} cover art" />`
    : `<div class="poster-fallback poster-style-${item.style || 'action'}"><div><span>${item.category}</span><strong>${slugTitle(item.title)}</strong></div></div>`;
  const tags = (item.genreTags || []).slice(0, 3).map((tag) => `<span class="mini-tag">${tag}</span>`).join('');
  return `
    <article class="game-tile reveal is-visible" data-tags="${item.tags}">
      <figure>${visual}</figure>
      <div class="tile-body">
        <span class="tile-kicker">${item.category}</span>
        <h3 class="card-title">${item.title}</h3>
        <p class="product-copy">${item.desc}</p>
        <div class="tile-tags">${tags}</div>
        <p class="platform-line">${item.platform}</p>
        <div class="tile-footer"><span>${formatPrice(item.price)}</span><a href="purchase.html?product=${item.id}">Buy Now</a></div>
      </div>
    </article>`;
}
function setupCatalog() {
  const grids = $$('[data-product-grid]'); if (!grids.length) return;
  const filterButtons = $$('[data-filter]'); const search = $('#catalogSearch'); const sort = $('#catalogSort'); const empty = $('[data-empty]'); let activeFilter = 'all';
  function render() {
    const keyword = search ? search.value.trim().toLowerCase() : '';
    let items = PRODUCTS.filter((item) => {
      const tagList = item.tags.split(' ');
      const filterMatch = activeFilter === 'all' || tagList.includes(activeFilter);
      const text = (item.title + ' ' + item.category + ' ' + item.desc + ' ' + item.tags).toLowerCase();
      const searchMatch = keyword === '' || text.includes(keyword);
      return filterMatch && searchMatch;
    });
    if (sort && sort.value === 'name') items.sort((a, b) => a.title.localeCompare(b.title));
    if (sort && sort.value === 'low') items.sort((a, b) => a.price - b.price);
    if (sort && sort.value === 'high') items.sort((a, b) => b.price - a.price);
    const markup = items.map(createProductCard).join('');
    grids.forEach((grid) => { grid.innerHTML = markup; });
    if (empty) empty.hidden = items.length !== 0;
  }
  filterButtons.forEach((button) => button.addEventListener('click', () => {
    filterButtons.forEach((btn) => btn.classList.remove('is-active'));
    button.classList.add('is-active'); activeFilter = button.dataset.filter; render();
  }));
  if (search) search.addEventListener('input', render);
  if (sort) sort.addEventListener('change', render);
  render();
}
function populateProductSelect() {
  const productSelect = $('#product-select'); if (!productSelect) return;
  productSelect.innerHTML = '<option value="">Choose a game</option>' + PRODUCTS.map((item) => `<option value="${item.id}">${item.title} - ${formatPrice(item.price)}</option>`).join('');
}
function setupCheckout() {
  const form = $('[data-checkout-form]'); if (!form) return;
  populateProductSelect();
  const productSelect = $('#product-select'); const quantity = $('#quantity'); const deliveryInputs = $$('input[name="delivery"]'); const summaryItems = $('[data-summary-items]');
  const summaryCount = $('[data-summary-count]'); const summarySubtotal = $('[data-summary-subtotal]'); const summaryTotal = $('[data-summary-total]'); const summaryDelivery = $('[data-summary-delivery]');
  const params = new URLSearchParams(window.location.search); const productFromUrl = params.get('product'); if (productFromUrl && getProduct(productFromUrl) && productSelect) productSelect.value = productFromUrl;
  function setError(key, message) { const target = $(`[data-error-for="${key}"]`); const field = $(`[data-field="${key}"]`); if (target) target.textContent = message; if (field) field.classList.toggle('has-error', message.length > 0); }
  function clearErrors() { ['full-name','email','product','quantity','card-number','expiry','cvv','terms'].forEach((key) => setError(key, '')); }
  function updateSummary() {
    const product = getProduct(productSelect.value); const qty = Math.max(1, Number(quantity.value || 1)); const delivery = deliveryInputs.find((input) => input.checked)?.value || 'Digital Key';
    if (!product) {
      summaryItems.innerHTML = '<p class="product-copy">Select a game to see the summary.</p>'; summaryCount.textContent = '0 game'; summarySubtotal.textContent = '$0.00'; summaryTotal.textContent = '$0.00'; summaryDelivery.textContent = delivery; return;
    }
    const subtotal = product.price * qty;
    const visual = product.image ? `<img src="assets/covers/${product.image}" alt="${product.title}" />` : `<div class="poster-fallback poster-style-${product.style || 'action'}" style="height:72px;border-radius:15px;padding:10px"><div><strong style="font-size:.9rem">${product.title}</strong></div></div>`;
    summaryItems.innerHTML = `<div class="summary-item">${visual}<div><strong>${product.title}</strong><span>${product.category}</span></div></div>`;
    summaryCount.textContent = qty + (qty > 1 ? ' games' : ' game'); summarySubtotal.textContent = '$' + subtotal.toFixed(2); summaryTotal.textContent = '$' + subtotal.toFixed(2); summaryDelivery.textContent = delivery;
  }
  [productSelect, quantity, ...deliveryInputs].forEach((input) => input.addEventListener('input', updateSummary));
  [productSelect, quantity, ...deliveryInputs].forEach((input) => input.addEventListener('change', updateSummary));
  updateSummary();
  form.addEventListener('submit', (event) => {
    event.preventDefault(); clearErrors(); let valid = true;
    const name = $('#full-name').value.trim(); const email = $('#email').value.trim(); const product = productSelect.value; const qty = Number(quantity.value); const card = onlyDigits($('#card-number').value); const month = $('#exp-month').value; const year = $('#exp-year').value; const cvv = onlyDigits($('#cvv').value); const terms = $('#terms').checked;
    if (name.length < 3) { setError('full-name', 'Full name must be at least 3 characters.'); valid = false; }
    if (!email.includes('@') || !email.includes('.') || email.startsWith('@') || email.endsWith('@')) { setError('email', 'Enter a valid email address.'); valid = false; }
    if (!getProduct(product)) { setError('product', 'Please choose a game.'); valid = false; }
    if (!qty || qty < 1 || qty > 5) { setError('quantity', 'Quantity must be between 1 and 5.'); valid = false; }
    if (card.length !== 16) { setError('card-number', 'Card number must contain 16 digits.'); valid = false; }
    if (!month || !year) { setError('expiry', 'Choose expiration month and year.'); valid = false; }
    if (cvv.length < 3 || cvv.length > 4) { setError('cvv', 'CVV must contain 3 or 4 digits.'); valid = false; }
    if (!terms) { setError('terms', 'You must agree to the terms.'); valid = false; }
    const success = $('[data-success-banner]'); if (success) success.classList.toggle('is-visible', valid); if (valid) form.reset(); populateProductSelect(); updateSummary();
  });
}
function setupLocationButtons() { $$('[data-map-query]').forEach((button) => { button.addEventListener('click', () => { const query = encodeURIComponent(button.dataset.mapQuery); window.open('https://www.google.com/maps/search/?api=1&query=' + query, '_blank'); }); }); }

document.addEventListener('DOMContentLoaded', () => { setupMobileMenu(); setupReveal(); setupHeroSlider(); setupCatalog(); setupCheckout(); setupLocationButtons(); });