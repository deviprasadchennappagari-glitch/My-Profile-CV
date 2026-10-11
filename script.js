/* ==========================================================================
   Devi Prasad — personal profile site: small enhancements, no libraries.
   Everything here is optional; the site is fully readable without JavaScript.
   ========================================================================== */
(function () {
  'use strict';

  var header = document.querySelector('.site-header');
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');
  var navLinks = nav ? nav.querySelectorAll('a[href^="#"]') : [];

  /* ---- Footer year ---- */
  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  /* ---- Header gets a background once the page scrolls ---- */
  function onScroll() {
    if (header) header.classList.toggle('is-scrolled', window.scrollY > 24);
  }
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ---- Mobile menu ---- */
  function setMenu(open) {
    if (!toggle || !nav) return;
    toggle.setAttribute('aria-expanded', String(open));
    nav.classList.toggle('is-open', open);
  }
  if (toggle) {
    toggle.addEventListener('click', function () {
      setMenu(toggle.getAttribute('aria-expanded') !== 'true');
    });
    navLinks.forEach(function (a) { a.addEventListener('click', function () { setMenu(false); }); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setMenu(false); });
  }

  /* ---- Scroll reveal (staggers siblings slightly) ---- */
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    revealEls.forEach(function (el) {
      var siblings = el.parentElement ? el.parentElement.querySelectorAll(':scope > .reveal') : [];
      var i = Array.prototype.indexOf.call(siblings, el);
      if (i > 0) el.style.setProperty('--delay', Math.min(i, 5) * 0.08 + 's');
    });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('is-visible'); });
  }

  /* ---- Highlight the nav link of the section in view ---- */
  var sections = Array.prototype.map.call(navLinks, function (a) {
    return document.querySelector(a.getAttribute('href'));
  });
  if ('IntersectionObserver' in window) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        navLinks.forEach(function (a) {
          a.classList.toggle('is-active', a.getAttribute('href') === '#' + entry.target.id);
        });
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    sections.forEach(function (s) { if (s) spy.observe(s); });
  }

  /* ---- Contact form -> opens the visitor's email app with the message filled in.
          To receive messages without an email app, see README.md ("Contact form"). ---- */
  var form = document.getElementById('contact-form');
  var status = document.getElementById('form-status');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var fields = ['name', 'email', 'message'].map(function (n) { return form.elements[n]; });
      var valid = true;
      fields.forEach(function (f) {
        var ok = f.value.trim() !== '' && (f.type !== 'email' || /^\S+@\S+\.\S+$/.test(f.value));
        f.setAttribute('aria-invalid', ok ? 'false' : 'true');
        if (!ok) valid = false;
      });
      if (!valid) {
        status.textContent = 'Please fill in all fields with a valid email address.';
        return;
      }
      var to = 'deviprasadchennappagari@gmail.com';
      var subject = 'Website enquiry from ' + fields[0].value.trim();
      var body = fields[2].value.trim() + '\n\n— ' + fields[0].value.trim() + ' (' + fields[1].value.trim() + ')';
      status.textContent = 'Opening your email app…';
      window.location.href = 'mailto:' + to + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
    });
  }
})();
