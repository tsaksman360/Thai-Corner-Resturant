/* ==========================================================
   Thai Corner — Interactions
   ========================================================== */

// Sticky nav blur on scroll
const nav = document.getElementById('navbar');
const onScroll = () => nav.classList.toggle('is-scrolled', window.scrollY > 30);
document.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// Mobile nav
const toggle = document.getElementById('navToggle');
const links  = document.getElementById('navLinks');
toggle.addEventListener('click', () => {
  toggle.classList.toggle('is-open');
  links.classList.toggle('is-open');
});
links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  toggle.classList.remove('is-open');
  links.classList.remove('is-open');
}));

// Reveal on scroll
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('is-visible');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// Subtle hero parallax
const heroBg = document.querySelector('.hero__bg');
if (heroBg && window.matchMedia('(min-width: 760px)').matches) {
  document.addEventListener('scroll', () => {
    const y = Math.min(window.scrollY, 700);
    heroBg.style.transform = `scale(1.08) translateY(${y * 0.15}px)`;
  }, { passive: true });
}

// Year
document.getElementById('year').textContent = new Date().getFullYear();

/* ----- MENU DATA + TABS ----- */
const MENU = {
  appetizers: [
    { name: "Fried Vegetarian Spring Rolls", desc: "Assorted vegetables, Thai herbs, Thai sauce", price: "$10.95" },
    { name: "Fried Pork Spring Rolls", desc: "Carrot, onion, vernicelli and pork filling.", price: "$12.95" },
    { name: "Tod Mun Pla", desc: "Thai fish cakes, kaffir lime, cucumber-peanut dip.", price: "$11" },
    { name: "Miang Kham", desc: "Betel leaf wraps, toasted coconut, ginger, palm sugar.", price: "$10" },
    { name: "Crab Rangoon", desc: "Blue crab, cream cheese, scallion, plum sauce.", price: "$13" },
    { name: "Som Tum", desc: "Green papaya salad, lime, peanuts, dried shrimp.", price: "$11" },
  ],
  soups: [
    { name: "Tom Yum Goong", desc: "Tiger prawns, lemongrass, galangal, mushrooms.", price: "$14" },
    { name: "Tom Kha Gai", desc: "Coconut chicken soup, galangal, kaffir lime.", price: "$13" },
    { name: "Po Tak", desc: "Mixed seafood, lemongrass, lime, basil.", price: "$16" },
    { name: "Kuay Tiew Tom Yum", desc: "Spicy noodle soup, minced pork, peanuts.", price: "$13" },
  ],
  noodles: [
    { name: "Pad Thai  Pad Thai (Chicken, Beef, Pork or Veggies)", desc: "Stir fried with rice noodles, bean sprouts, tofu, green onions, egg and tamarind seasoning sauce, served with ground peanuts on the side.", price: "" },
    { name: "Pad Thai Prawn", desc: "Stir fried with rice noodles, bean sprouts, tofu, green onions, egg and tamarind seasoning sauce, served with ground peanuts on the side.", price: "" },
    { name: "Pad See Iew (Chicken, Beef, Tofu or Pork)", desc: "Stir fried with rice noodles, egg, broccoli, carrots.", price: "" },
    { name: " Phad Kee Mao (Chicken, Beef, Tofu or Pork)", desc: "Stir fried rice noodles, bell peppers, onion and basil leaves.", price: "" },
    { name: "Thai Vermicelli Salad “Yum Kha-nom Jeen” </br> (Chicken, Beef, Tofu or Pork) ", desc: "Thai vermicelli noodles, spring rolls, cucumber, carrots, mint leaves, cilantro and lettuce with special house sauce.", price: "" },
  ],
  rice: [
    { name: "Thai Corner Special Fried Rice </br> (Chicken, Beef, Tofu or Pork)", desc: "ried rice with bell peppers, onion, basil leaves, topped with a fried egg.", price: "" },
    { name: "Pineapple Fried Rice", desc: "Cashews, raisins, curry powder, shrimp.", price: "" },
    { name: "Khao Pad Kra Pao", desc: "Holy basil minced chicken, fried egg, jasmine rice.", price: "" },
    { name: "Mango Sticky Rice Bowl", desc: "Savory variant: coconut rice, grilled chicken, mango.", price: "" },
  ],
  curry: [
    { name: "Red Curry (Chicken, Beef, Tofu or Pork)", desc: "Red curry paste in coconut milk with bamboo shoots, bell peppers & basil leaves.", price: "" },
    { name: "Green Curry (Chicken, Beef, Tofu or Pork) ", desc: "Green curry paste in coconut milk with bamboo shoots, peas, bell peppers & basil leaves.", price: "" },
    { name: "Mas-samun Curry (Chicken, Beef, Tofu or Pork)", desc: "Mas-samun curry paste in coconut milk, onions, potatoes & carrots & roasted cashews.", price: "" },
    { name: "Pa-nang Curry (Chicken, Beef, Tofu or Pork)", desc: "Pa-nang curry paste in creamy coconut milk, bell peppers, sprinkled with kaffir lime leaves.", price: "" },
    { name: "Pineapple Curry (Chicken, Beef, Tofu or Pork)", desc: "Red curry paste with pineapple, coconut milk, sprinkled with kaffir lime leaves.", price: "" },
  ],
  desserts: [
    { name: "Mango Sticky Rice", desc: "Sweet coconut rice, ripe mango, sesame.", price: "$11" },
    { name: "Coconut Ice Cream", desc: "Toasted peanut, sticky rice, palm syrup.", price: "$9" },
    { name: "Tub Tim Krob", desc: "Water chestnuts in syrup, coconut milk, crushed ice.", price: "$10" },
    { name: "Banana in Coconut", desc: "Warm coconut cream, palm sugar, salt.", price: "$9" },
  ],
  bakery: [
    { name: "Pandan Coconut Cake", desc: "Layered chiffon, young coconut cream.", price: "$12" },
    { name: "Thai Tea Tiramisu", desc: "Mascarpone, Thai tea reduction, espresso sponge.", price: "$11" },
    { name: "Jasmine Madeleines", desc: "Jasmine-infused, brown butter, honey glaze (6pc).", price: "$10" },
    { name: "Mango Tart", desc: "Vanilla custard, ripe mango, sticky-rice crumble.", price: "$10" },
    { name: "Black Sesame Cookies", desc: "Crisp edges, chewy center (4pc).", price: "$8" },
    { name: "Kaya Toast Brioche", desc: "House coconut jam, salted butter, brioche.", price: "$9" },
  ],
  stir_fry:[
    {name:"Chicken Cashew (or Prawn)", desc: "chicken or prawns, bell peppers, onions, carrots, pineapple, celery & roasted cashews.", price: ""},
    {name: "Spicy Beef (Chicken, Tofu or Pork)", desc: "sautéed with bell peppers, chili, bamboo shoots, mushrooms, onions & green onions.", price: ""},
    {name: "Spicy Basil leaf (Chicken, Beef, Tofu or Pork)", desc: "sautéed with bell peppers, chili, onions and basil leaves", price: ""},
    {name: "Ginger Beef", desc: "sautéed fried crispy beef, bell peppers and carrots with special house sauce.", price: ""},
    {name: "Mixed Vegetables", desc: "sautéed broccoli, carrots, cauliflower and peas with oyster sauce.", price: ""},
    {name: "Eggplant Delight (Chicken, Beef, Tofu or Pork)", desc: "sautéed with bell peppers, eggplant & basil leaves.", price: ""},
    {name: "Thai Corner Garden", desc: "Mixed vegetables with Thai curry powder, red curry in coconut milk.", price: ""},
    {name: "Mixed Vegetables with Tofu", desc: "sautéed tofu with mixed vegetables.", price: ""},
  ],
  drinks:[
    {name: "Jasmine Tea or Green Tea", desc: "", price:"$1.50"},
    {name:"Coffee", desc:"", price:"$3"},
    {name:"Thai Iced Lemon Tea", desc:"", price:"$5"},
    {name:"Thai Iced Tea (with cream)", desc:"", price:"$5"},
    {name:"Thai Iced Coffee (with cream)", desc:"", price:"$5"},
    {name:"Juices (Mango, Lychee, Coconut)", desc:"", price:"$5"},
    {name:"Perrier Carbonated Natural Spring Water", desc:"", price:"$3"},
    {name:"Soft Drinks or Bottled Water", desc:"", price:"$3"},
    {name:"Vanila Ice Cream", desc:"", price:"$6"},
  ] 
};

const panel = document.getElementById('menuPanel');
const tabs  = document.querySelectorAll('.menu__tab');

function renderMenu(cat){
  const items = MENU[cat] || [];
  // split into two columns
  const half = Math.ceil(items.length/2);
  const cols = [items.slice(0,half), items.slice(half)];
  panel.innerHTML = cols.map(col => `
    <div class="menu-col">
      ${col.map(item => `
        <div class="menu-item">
          <div style="flex:1">
            <div class="menu-item__head">
              <span class="menu-item__name">${item.name}</span>
              <span class="menu-item__dots"></span>
              <span class="menu-item__price">${item.price}</span>
            </div>
            <p class="menu-item__desc">${item.desc}</p>
          </div>
        </div>
      `).join('')}
    </div>
  `).join('');
}

tabs.forEach(t => t.addEventListener('click', () => {
  tabs.forEach(x => x.classList.remove('is-active'));
  t.classList.add('is-active');
  renderMenu(t.dataset.cat);
}));
renderMenu('appetizers');
