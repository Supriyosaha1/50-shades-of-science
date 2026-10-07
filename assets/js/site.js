const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('#site-nav');
menuButton?.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open));
  nav.classList.toggle('open', open);
});
nav?.addEventListener('click', event => {
  if (event.target.closest('a')) {
    nav.classList.remove('open');
    menuButton?.setAttribute('aria-expanded', 'false');
  }
});
const form = document.querySelector('#booking-form');
const interest = new URLSearchParams(location.search).get('interest');
const interestMap = {school:'School programme',future:'Future Scientists',csr:'CSR / partnership'};
if (form && interestMap[interest]) form.elements.interest.value = interestMap[interest];
form?.addEventListener('submit', event => {
  event.preventDefault();
  if (!form.reportValidity()) return;
  const data = new FormData(form);
  const labels = {name:'Name',email:'Email',organisation:'Organisation / school',interest:'Interest',location:'City / location',audience:'Audience and size',timeframe:'Date / timeframe',message:'Message'};
  const lines = Object.entries(labels).map(([key,label]) => `${label}: ${data.get(key) || '—'}`);
  const subject = `50 Shades of Science enquiry — ${data.get('interest')}`;
  const mailto = `mailto:50shadesofscience@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join('\n'))}`;
  document.querySelector('#form-status').textContent = 'Your email app should open with the enquiry. Please review and send it there. If it does not open, email 50shadesofscience@gmail.com directly.';
  location.href = mailto;
});
