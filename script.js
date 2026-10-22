/* TekodeX Romantic Garden Wedding Template
   Edit CONFIG below. Nothing else in this file needs to change. */
var CONFIG = {
  // Ceremony start, with the UTC offset of the venue. England in June is +01:00 (British Summer Time).
  weddingDate: '2027-06-19T14:30:00+01:00',
  // How guests reply. Leave any of these as '' to hide that option.
  rsvp: {
    names: 'Charlotte and Alexander',          // used in the pre-written message
    whatsapp: '+44 7700 900123',               // include the country code
    email: 'rsvp@example.com',
    phone: '+44 7700 900123',
    emailSubject: 'RSVP: wedding on 19 June 2027'
  }
};

(function () {
  'use strict';
  var $ = function (s) { return document.querySelector(s); };
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* Invitation opening */
  var cover = $('#cover'), site = $('#site');
  $('#open').addEventListener('click', function () {
    site.hidden = false;
    document.body.classList.remove('locked');
    cover.classList.add('is-open');
    window.scrollTo(0, 0);
    setTimeout(function () {
      cover.hidden = true;
      var h = $('#welcome-title'); h.tabIndex = -1; h.focus({ preventScroll: true });
    }, reduced ? 0 : 900);
  });

  /* Countdown */
  var target = new Date(CONFIG.weddingDate).getTime();
  var box = $('#count'), done = $('#count-done'), cells = {};
  ['d', 'h', 'm', 's'].forEach(function (k) { cells[k] = $('[data-u=' + k + ']'); });
  function tick() {
    var diff = target - Date.now();
    if (isNaN(target)) { console.warn('CONFIG.weddingDate is not a valid date.'); box.hidden = true; clearInterval(timer); return; }
    if (diff <= 0) { box.hidden = true; done.hidden = false; clearInterval(timer); return; }
    var s = Math.floor(diff / 1000);
    cells.d.textContent = Math.floor(s / 86400);
    cells.h.textContent = Math.floor(s % 86400 / 3600);
    cells.m.textContent = Math.floor(s % 3600 / 60);
    cells.s.textContent = s % 60;
  }
  var timer = setInterval(tick, 1000); tick();

  /* Gallery lightbox */
  var lb = $('#lightbox'), lbImg = $('#lb-img'), opener = null;
  document.querySelectorAll('.thumb').forEach(function (b) {
    b.addEventListener('click', function () {
      opener = b; lbImg.src = b.dataset.full; lbImg.alt = b.dataset.alt; lb.showModal();
    });
  });
  $('#lb-close').addEventListener('click', function () { lb.close(); });
  lb.addEventListener('click', function (e) { if (e.target === lb) lb.close(); });
  lb.addEventListener('close', function () { if (opener) opener.focus(); });

  /* RSVP: opens WhatsApp, the email app or the phone app. No form, no server, nothing stored by this site. */
  var R = CONFIG.rsvp, SAMPLES = ['+44 7700 900123', 'rsvp@example.com'];
  var msg = 'Hello ' + R.names + ',\n\nThis is my reply to your wedding invitation.\n\nName:\nAttending (yes or no):\nNumber of guests:\nDietary requirements:\nMessage for you:';
  var links = {
    whatsapp: R.whatsapp && 'https://wa.me/' + R.whatsapp.replace(/\D/g, '') + '?text=' + encodeURIComponent(msg),
    email: R.email && 'mailto:' + R.email.trim() + '?subject=' + encodeURIComponent(R.emailSubject) + '&body=' + encodeURIComponent(msg),
    phone: R.phone && 'tel:' + R.phone.replace(/[^\d+]/g, '')
  };
  var shown = { whatsapp: R.whatsapp, email: R.email, phone: R.phone }, visible = 0;
  document.querySelectorAll('.reply a').forEach(function (a) {
    var k = a.dataset.kind;
    if (!links[k]) { a.parentNode.hidden = true; return; }
    a.href = links[k]; a.querySelector('span').textContent = shown[k]; visible++;
    if (k === 'whatsapp') { a.target = '_blank'; a.rel = 'noopener'; }
  });
  if (!visible) $('#reply-note').hidden = false;
  else if ([R.whatsapp, R.email, R.phone].some(function (v) { return SAMPLES.indexOf(v) > -1; })) $('#demo-note').hidden = false;
})();
