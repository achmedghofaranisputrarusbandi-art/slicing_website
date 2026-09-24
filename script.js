const products = [
  {n:'Kopi Susu Senja',p:18000,c:'kopi',e:'☕',d:'Espresso, susu segar, gula aren'},
  {n:'V60 Gayo',p:25000,c:'kopi',e:'🫘',d:'Manual brew, aroma buah dan cokelat'},
  {n:'Es Kopi Toraja',p:22000,c:'kopi',e:'🧊',d:'Body tebal, finish manis'},
  {n:'Matcha Latte',p:24000,c:'non-kopi',e:'🍵',d:'Matcha Jepang dengan susu oat'},
  {n:'Teh Tarik',p:15000,c:'non-kopi',e:'🫖',d:'Teh hitam pekat, susu kental manis'},
  {n:'Pisang Goreng Keju',p:16000,c:'snack',e:'🍌',d:'Renyah luar, lembut dalam'},
  {n:'Roti Bakar Cokelat',p:17000,c:'snack',e:'🍞',d:'Roti tebal, cokelat leleh'}
];
const $ = s => document.querySelector(s);
const rupiah = n => n.toLocaleString('id-ID');
let count = 0, total = 0;

function render(filter = 'all') {
  const list = products.filter(x => filter === 'all' || x.c === filter);
  $('#grid').innerHTML = list.map((x, i) => `
    <article class="card">
      <span class="emoji" aria-hidden="true">${x.e}</span>
      <h3>${x.n}</h3><p>${x.d}</p>
      <div class="row"><strong>Rp ${rupiah(x.p)}</strong>
      <button class="btn small" data-price="${x.p}">Tambah</button></div>
    </article>`).join('');
}

function updateCart() {
  $('#count').textContent = count;
  $('#total').textContent = rupiah(total);
}

$('#grid').addEventListener('click', e => {
  const b = e.target.closest('button[data-price]');
  if (!b) return;
  count++; total += Number(b.dataset.price);
  updateCart();
});
$('#reset').addEventListener('click', () => { count = total = 0; updateCart(); });

document.querySelector('.filters').addEventListener('click', e => {
  const chip = e.target.closest('.chip');
  if (!chip) return;
  document.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
  chip.classList.add('active');
  render(chip.dataset.filter);
});

// Menu mobile
const burger = $('#burger'), menu = $('#menu');
burger.addEventListener('click', () => {
  const open = menu.classList.toggle('open');
  burger.setAttribute('aria-expanded', open);
});
menu.addEventListener('click', e => { if (e.target.tagName === 'A') menu.classList.remove('open'); });

// Tema gelap/terang
const root = document.documentElement, themeBtn = $('#themeBtn');
function setTheme(t) { root.dataset.theme = t; themeBtn.textContent = t === 'dark' ? '☀️' : '🌙'; }
setTheme(matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
themeBtn.addEventListener('click', () => setTheme(root.dataset.theme === 'dark' ? 'light' : 'dark'));

// Validasi form
$('#form').addEventListener('submit', e => {
  e.preventDefault();
  const nama = $('#nama'), email = $('#email'), orang = $('#orang'), msg = $('#msg');
  [nama, email, orang].forEach(i => i.classList.remove('error'));
  msg.className = '';
  let err = '';
  if (nama.value.trim().length < 3) { nama.classList.add('error'); err = 'Nama minimal 3 karakter.'; }
  else if (!/^\S+@\S+\.\S+$/.test(email.value)) { email.classList.add('error'); err = 'Format email belum benar.'; }
  else if (orang.value < 1 || orang.value > 12) { orang.classList.add('error'); err = 'Jumlah orang harus 1 sampai 12.'; }
  if (err) { msg.textContent = err; msg.classList.add('err'); return; }
  msg.textContent = `Reservasi terkirim, ${nama.value.trim()}. Sampai jumpa!`;
  msg.classList.add('ok');
  e.target.reset(); orang.value = 2;
});

render();
