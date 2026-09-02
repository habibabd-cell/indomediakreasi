  // Mobile menu toggle
  const burgerBtn = document.getElementById('burgerBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  burgerBtn.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('open');
    burgerBtn.setAttribute('aria-expanded', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });
  mobileMenu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      burgerBtn.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });

  // Portfolio filter
  const tabs = document.querySelectorAll('.filter-tab');
  const items = document.querySelectorAll('.p-item');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const filter = tab.dataset.filter;
      items.forEach(item => {
        const match = filter === 'all' || item.dataset.cat === filter;
        if (match) {
          item.classList.remove('hide');
          item.style.animation = 'none';
          item.offsetHeight; /* reflow */
          item.style.animation = null;
          item.classList.add('reveal-in');
        } else {
          item.classList.add('hide');
        }
      });
    });
  });

  // Contact form -> WhatsApp handoff
  const contactForm = document.getElementById('contactForm');
  const formSuccess = document.getElementById('formSuccess');
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const nama = document.getElementById('f-nama').value.trim();
    const hp = document.getElementById('f-hp').value.trim();
    const email = document.getElementById('f-email').value.trim();
    const jenis = document.getElementById('f-jenis').value;
    const pesan = document.getElementById('f-pesan').value.trim();

    const text = `Halo Indo Media Kreasi, saya ingin konsultasi event.%0A%0ANama: ${encodeURIComponent(nama)}%0AEmail: ${encodeURIComponent(email)}%0ANo. HP: ${encodeURIComponent(hp)}%0AJenis Event: ${encodeURIComponent(jenis)}%0APesan: ${encodeURIComponent(pesan)}`;
    const waUrl = `https://wa.me/6281234567890?text=${text}`;

    contactForm.style.display = 'none';
    formSuccess.classList.add('show');
    window.open(waUrl, '_blank');
  });

  // Header shadow on scroll
  const header = document.querySelector('header');
  window.addEventListener('scroll', () => {
    header.style.boxShadow = window.scrollY > 10 ? '0 4px 20px rgba(0,0,0,0.25)' : 'none';
  });
