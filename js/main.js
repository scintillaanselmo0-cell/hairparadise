/* =============================================================
   HAIR PARADISE — MAIN
   Tutto il contenuto dinamico viene generato da js/data.js
   ============================================================= */
(function () {
  "use strict";
  var D = window.HP;
  if (!D) return;

  var $  = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };
  var euro = function (n) { return "€" + String(n).replace(".", ","); };
  var esc = function (s) { return String(s).replace(/[&<>"']/g, function (m) {
    return { "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;" }[m];
  }); };

  var waHref = "https://wa.me/" + D.contact.whatsappIntl;
  var telHref = "tel:" + D.contact.phoneTel;

  /* ---------- Testi identità ---------- */
  var setText = function (sel, txt) { $$(sel).forEach(function (el) { el.textContent = txt; }); };
  setText("[data-tagline]", D.business.tagline);
  setText("[data-subtagline]", D.business.subtagline);
  setText("[data-year]", new Date().getFullYear());
  setText("[data-claim-foot]", D.business.claim);
  (function () {
    var vat = (D.business.vat || "").trim();
    var txt = "© " + new Date().getFullYear() + " " + D.business.legalName +
              (vat ? " · P.IVA " + vat : "") + " · " + D.contact.addressDistrict + ", Napoli";
    setText("[data-copyright]", txt);
  })();

  /* ---------- SERVIZI ---------- */
  (function () {
    var host = $("[data-services]");
    if (host) {
      host.innerHTML = D.services.map(function (cat) {
        var rows = cat.items.map(function (it) {
          var price = it.from
            ? '<span class="svc-price"><span class="from">a partire da</span>' + euro(it.price) + '</span>'
            : '<span class="svc-price">' + euro(it.price) + '</span>';
          return '<div class="svc-item">' +
                   '<span class="svc-name">' + esc(it.name) + '</span>' +
                   price +
                   (it.desc ? '<span class="svc-desc">' + esc(it.desc) + '</span>' : '') +
                 '</div>';
        }).join("");
        return '<div class="svc-cat">' +
                 '<h3 class="svc-cat-title">' + esc(cat.title) + '</h3>' +
                 rows +
               '</div>';
      }).join("");
    }
    setText("[data-services-note]", "* " + D.servicesNote);
  })();

  /* ---------- GALLERIA ---------- */
  (function () {
    var host = $("[data-gallery]");
    if (!host) return;
    host.innerHTML = D.gallery.map(function (g, i) {
      var srcset = g.small ? (g.small + " 540w, " + g.src + " 1080w") : "";
      var sizes = "(min-width:820px) 33vw, 50vw";
      var img = '<img src="' + g.src + '"' +
                (srcset ? ' srcset="' + srcset + '" sizes="' + sizes + '"' : '') +
                ' width="' + g.w + '" height="' + g.h + '"' +
                ' alt="' + esc(g.alt) + '" loading="lazy" decoding="async" />';
      return '<button class="gallery-item reveal" type="button" data-full="' + g.src + '" data-alt="' + esc(g.alt) + '" aria-label="Ingrandisci: ' + esc(g.alt) + '">' +
               img +
               '<figcaption>' + esc(g.alt) + '</figcaption>' +
             '</button>';
    }).join("");
  })();

  /* ---------- TEAM ---------- */
  (function () {
    var host = $("[data-team]");
    if (!host) return;
    var t = D.team;
    var avatar = function (m) {
      return m.photo
        ? '<span class="team-avatar"><img src="' + m.photo + '" alt="' + esc(m.name) + '" loading="lazy" decoding="async" /></span>'
        : '<span class="team-avatar"><span class="team-initials">' + esc(m.initials || m.name.charAt(0)) + '</span></span>';
    };
    var html = "";
    // Titolare in evidenza
    if (t.owner) {
      html += '<article class="team-card team-card--owner reveal">' +
                avatar(t.owner) +
                '<h3 class="team-name">' + esc(t.owner.name) + '</h3>' +
                '<p class="team-role">' + esc(t.owner.role) + '</p>' +
                (t.owner.specialty ? '<p class="team-spec">' + esc(t.owner.specialty) + '</p>' : '') +
              '</article>';
    }
    // Gruppi
    (t.groups || []).forEach(function (g) {
      html += '<div class="team-group">' +
                '<h3 class="team-group-title">' + esc(g.title) + '</h3>' +
                '<div class="team-group-grid">' +
                  g.members.map(function (m) {
                    return '<article class="team-card reveal">' +
                             avatar(m) +
                             '<h4 class="team-name">' + esc(m.name) + '</h4>' +
                             (m.specialty ? '<p class="team-spec">' + esc(m.specialty) + '</p>' : '') +
                           '</article>';
                  }).join("") +
                '</div>' +
              '</div>';
    });
    host.innerHTML = html;
  })();

  /* ---------- SPOSA ---------- */
  (function () {
    var b = D.bridal;
    if (!b) return;
    setText("[data-bridal-kicker]", b.kicker);
    setText("[data-bridal-title]", b.title);
    setText("[data-bridal-lead]", b.lead);
    setText("[data-bridal-price]", euro(b.price));
    var ph = $("[data-bridal-photo]");
    if (ph) {
      ph.src = b.photo;
      if (b.photoSmall) { ph.srcset = b.photoSmall + " 720w, " + b.photo + " 1440w"; ph.sizes = "(min-width:860px) 58vw, 100vw"; }
      if (b.photoW) ph.width = b.photoW;
      if (b.photoH) ph.height = b.photoH;
      ph.alt = b.photoAlt || "Servizio sposa Hair Paradise";
    }
    var v = $("[data-bridal-video]");
    if (v) {
      v.poster = b.videoPoster || "";
      var src = document.createElement("source");
      src.src = b.video; src.type = "video/mp4";
      v.appendChild(src);
    }
  })();

  /* ---------- STORIA / ABOUT ---------- */
  (function () {
    var c = D.content;
    setText("[data-about-title]", c.aboutTitle);
    var body = $("[data-about-body]");
    if (body) body.innerHTML = c.aboutParagraphs.map(function (p) { return "<p>" + esc(p) + "</p>"; }).join("");
    var img = $("[data-about-img]");
    if (img) {
      img.src = c.aboutImage;
      if (c.aboutImageSmall) { img.srcset = c.aboutImageSmall + " 540w, " + c.aboutImage + " 1080w"; img.sizes = "(min-width:860px) 50vw, 100vw"; }
      if (c.aboutImageW) img.width = c.aboutImageW;
      if (c.aboutImageH) img.height = c.aboutImageH;
    }
    setText("[data-brands]", "Prodotti e trattamenti: " + D.brands.join(" · "));
  })();

  /* ---------- CONTATTI ---------- */
  (function () {
    var full = D.contact.addressStreet + ", " + D.contact.addressCity;
    setText("[data-address]", full);
    setText("[data-address-foot]", full);
    $$("[data-address-link]").forEach(function (a) { a.href = D.contact.mapsLink; });

    $$("[data-phone-link]").forEach(function (a) { a.href = telHref; if (!a.querySelector("svg")) a.textContent = D.contact.phone; });
    $$("[data-wa-link]").forEach(function (a) { a.href = waHref; if (!a.querySelector("svg")) a.textContent = D.contact.whatsapp; });
    $$("[data-phone-foot]").forEach(function (a) { a.href = telHref; a.textContent = "Tel. " + D.contact.phone; });
    $$("[data-wa-foot]").forEach(function (a) { a.href = waHref; a.textContent = "WhatsApp " + D.contact.whatsapp; });

    // Quick contacts nel blocco prenota
    var qc = $("[data-quickcontacts]");
    if (qc) {
      qc.innerHTML =
        '<li><span class="lbl">WhatsApp</span><a href="' + waHref + '" target="_blank" rel="noopener">' + esc(D.contact.whatsapp) + '</a></li>' +
        '<li><span class="lbl">Telefono</span><a href="' + telHref + '">' + esc(D.contact.phone) + '</a></li>' +
        '<li><span class="lbl">Indirizzo</span><a href="' + D.contact.mapsLink + '" target="_blank" rel="noopener">' + esc(full) + '</a></li>';
    }

    // Mappa
    var map = $("[data-map]");
    if (map) map.src = D.contact.mapsEmbed;

    // Social
    var order = [
      ["instagram", "Instagram", '<path fill="currentColor" d="M12 8.6A3.4 3.4 0 1 0 12 15.4 3.4 3.4 0 0 0 12 8.6zm0 5.6A2.2 2.2 0 1 1 12 9.8a2.2 2.2 0 0 1 0 4.4zM16.5 6.3a.8.8 0 1 0 0 1.6.8.8 0 0 0 0-1.6zM19.3 8c-.05-1-.24-1.9-.98-2.63C17.6 4.62 16.7 4.43 15.7 4.38 14.7 4.32 11.3 4.32 10.3 4.38c-1 .05-1.9.24-2.63.98C6.94 6.1 6.75 7 6.7 8c-.06 1-.06 4.4 0 5.4.05 1 .24 1.9.98 2.63.73.74 1.63.93 2.63.98 1 .06 4.4.06 5.4 0 1-.05 1.9-.24 2.63-.98.74-.73.93-1.63.98-2.63.06-1 .06-4.4 0-5.4zm-1.44 6.5a2.2 2.2 0 0 1-1.25 1.25c-.86.34-2.9.26-3.86.26s-3 .08-3.86-.26A2.2 2.2 0 0 1 5.19 14.5c-.34-.86-.26-2.9-.26-3.86s-.08-3 .26-3.86A2.2 2.2 0 0 1 6.44 5.53c.86-.34 2.9-.26 3.86-.26s3-.08 3.86.26a2.2 2.2 0 0 1 1.25 1.25c.34.86.26 2.9.26 3.86s.08 3-.26 3.86z"/>'],
      ["facebook", "Facebook", '<path fill="currentColor" d="M13.5 21v-7h2.4l.4-2.8h-2.8V9.4c0-.8.22-1.35 1.4-1.35H16.8V5.55C16.5 5.5 15.6 5.42 14.55 5.42c-2.2 0-3.7 1.34-3.7 3.8v2.98H8.4V15h2.45v7z"/>'],
      ["tiktok", "TikTok", '<path fill="currentColor" d="M16.6 5.8c-.9-.6-1.5-1.6-1.6-2.8h-2.5v10.9c0 1.3-1 2.3-2.3 2.3s-2.3-1-2.3-2.3 1-2.3 2.3-2.3c.25 0 .5.04.7.1V9.1a4.9 4.9 0 0 0-.7-.05A4.75 4.75 0 1 0 14.7 14V8.5a5.9 5.9 0 0 0 3.4 1.08V7.05c-.6 0-1.15-.18-1.5-.45z"/>']
    ];
    function socialHTML() {
      return order.filter(function (o) { return D.socials[o[0]]; }).map(function (o) {
        return '<li><a href="' + D.socials[o[0]] + '" target="_blank" rel="noopener" aria-label="' + o[1] + '">' +
                 '<svg viewBox="0 0 24 24" width="20" height="20">' + o[2] + '</svg></a></li>';
      }).join("");
    }
    var s1 = $("[data-socials]"); if (s1) s1.innerHTML = socialHTML();
    var s2 = $("[data-socials-foot]"); if (s2) s2.innerHTML = socialHTML();
  })();

  /* ---------- ORARI + STATO APERTO/CHIUSO ---------- */
  (function () {
    var list = $("[data-hours]");
    var now = new Date();
    var today = now.getDay();
    if (list) {
      list.innerHTML = D.hours.map(function (h, i) {
        var val = (h.open && h.close) ? (h.open + " – " + h.close) : "Chiuso";
        return '<li class="' + (i === today ? "today" : "") + '"><span class="h-day">' + esc(h.day) + '</span><span>' + val + '</span></li>';
      }).join("");
    }

    var el = $("[data-openstatus]");
    if (!el) return;
    var toMin = function (s) { var p = s.split(":"); return (+p[0]) * 60 + (+p[1]); };
    var nowMin = now.getHours() * 60 + now.getMinutes();
    var t = D.hours[today];
    var open = false, label = "";
    if (t.open && t.close && nowMin >= toMin(t.open) && nowMin < toMin(t.close)) {
      open = true; label = "Aperto ora · chiude alle " + t.close;
    } else {
      // trova la prossima apertura
      for (var k = 0; k <= 7; k++) {
        var idx = (today + k) % 7;
        var d = D.hours[idx];
        if (d.open && d.close) {
          if (k === 0 && nowMin < toMin(d.open)) { label = "Chiuso · apre oggi alle " + d.open; break; }
          if (k === 0 && nowMin >= toMin(d.close)) { continue; }
          var when = (k === 1) ? "domani" : d.day.toLowerCase();
          label = "Chiuso · apre " + when + " alle " + d.open; break;
        }
      }
      if (!label) label = "Chiuso";
    }
    el.className = "open-status " + (open ? "is-open" : "is-closed");
    el.innerHTML = '<span class="dot"></span>' + esc(label);
  })();

  /* ---------- NAV ---------- */
  (function () {
    var header = $("#siteHeader");
    var toggle = $("#navToggle");
    var menu = $("#mobileMenu");

    var onScroll = function () {
      if (window.scrollY > 40) header.classList.add("scrolled");
      else header.classList.remove("scrolled");
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    if (toggle && menu) {
      var setOpen = function (v) {
        toggle.setAttribute("aria-expanded", v ? "true" : "false");
        toggle.setAttribute("aria-label", v ? "Chiudi il menu" : "Apri il menu");
        if (v) { menu.hidden = false; header.classList.add("scrolled"); }
        else { menu.hidden = true; onScroll(); }
      };
      toggle.addEventListener("click", function () { setOpen(menu.hidden); });
      $$("a", menu).forEach(function (a) { a.addEventListener("click", function () { setOpen(false); }); });
    }
  })();

  /* ---------- VIDEO HERO (lazy, rispetta reduced-motion / risparmio dati) ---------- */
  (function () {
    var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var conn = navigator.connection || {};
    var saveData = conn.saveData === true;
    var slow = conn.effectiveType && /2g/.test(conn.effectiveType);
    if (reduce || saveData || slow) return; // restano i poster

    // Hero: parte appena possibile
    var hv = $("#heroVideo");
    if (hv) {
      var startHero = function () {
        hv.preload = "auto"; hv.load();
        var p = hv.play(); if (p && p.then) p.catch(function () {});
        hv.addEventListener("playing", function () { hv.classList.add("is-ready"); }, { once: true });
      };
      if ("requestIdleCallback" in window) requestIdleCallback(startHero, { timeout: 2500 });
      else setTimeout(startHero, 900);
    }

    // Video sposa: parte quando entra in vista, si ferma quando esce
    var bv = $("[data-bridal-video]");
    if (bv && "IntersectionObserver" in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) {
            bv.preload = "auto";
            var p = bv.play(); if (p && p.then) p.catch(function () {});
            bv.classList.add("is-ready");
          } else {
            bv.pause();
          }
        });
      }, { threshold: 0.35 });
      io.observe(bv);
    }
  })();

  /* ---------- LIGHTBOX ---------- */
  (function () {
    var lb = $("#lightbox"), img = $("#lbImg"), close = $("#lbClose"), last = null;
    if (!lb) return;
    var open = function (src, alt) {
      img.src = src; img.alt = alt || "";
      lb.hidden = false; lb.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden"; close.focus();
    };
    var hide = function () {
      lb.hidden = true; lb.setAttribute("aria-hidden", "true");
      img.src = ""; document.body.style.overflow = "";
      if (last) last.focus();
    };
    document.addEventListener("click", function (e) {
      var t = e.target.closest("[data-full]");
      if (t) { last = t; open(t.getAttribute("data-full"), t.getAttribute("data-alt")); }
    });
    close.addEventListener("click", hide);
    lb.addEventListener("click", function (e) { if (e.target === lb) hide(); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape" && !lb.hidden) hide(); });
  })();

  /* ---------- STICKY BAR (mostra dopo l'hero) ---------- */
  (function () {
    var bar = $("#stickyBar"), hero = $("#hero"), foot = $(".site-footer");
    if (!bar || !hero) return;
    var update = function () {
      var pastHero = (hero.getBoundingClientRect().bottom < 80);
      var atFoot = foot ? (foot.getBoundingClientRect().top < window.innerHeight - 40) : false;
      if (pastHero && !atFoot) bar.classList.add("show");
      else bar.classList.remove("show");
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
  })();

  /* ---------- REVEAL (solo opacità) ---------- */
  (function () {
    var els = $$(".reveal");
    if (!("IntersectionObserver" in window) || !els.length) { els.forEach(function (e) { e.classList.add("in"); }); return; }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
    }, { threshold: 0.12 });
    els.forEach(function (e) { io.observe(e); });
  })();

  /* ---------- BOOKING: url esterno o WhatsApp ---------- */
  (function () {
    var ext = (D.booking && D.booking.bookingUrl || "").trim();

    // Se esiste un URL esterno di prenotazione: i CTA lo aprono in nuova scheda
    if (ext) {
      $$("[data-book]").forEach(function (a) {
        a.setAttribute("href", ext); a.setAttribute("target", "_blank"); a.setAttribute("rel", "noopener");
      });
      var form = $("#bookingForm");
      if (form) {
        form.innerHTML = '<p class="booking-lead">Prenota comodamente online: verrai indirizzato al nostro sistema di prenotazione.</p>' +
          '<a class="btn btn-gold btn-block" href="' + ext + '" target="_blank" rel="noopener">Prenota online</a>';
      }
      return;
    }

    // --- WhatsApp booking ---
    var form = $("#bookingForm");
    if (!form) return;
    var selServ = $("#bk-servizio");
    var selHair = $("#bk-parrucchiere");
    var selTime = $("#bk-orario");
    var inpDate = $("#bk-data");
    var msg = $("#formMsg");

    // Popola servizi
    selServ.innerHTML = '<option value="" disabled selected>Scegli un servizio…</option>' +
      D.services.map(function (cat) {
        return '<optgroup label="' + esc(cat.title) + '">' +
          cat.items.map(function (it) { return '<option>' + esc(it.name) + '</option>'; }).join("") +
          '</optgroup>';
      }).join("");

    // Popola parrucchieri (titolare + tutti i membri dei gruppi)
    var teamNames = [];
    if (D.team.owner) teamNames.push(D.team.owner.name);
    (D.team.groups || []).forEach(function (g) { g.members.forEach(function (m) { teamNames.push(m.name); }); });
    selHair.innerHTML = '<option value="">Nessuna preferenza</option>' +
      teamNames.map(function (n) { return '<option>' + esc(n) + '</option>'; }).join("");

    // Data: no passato
    var pad = function (n) { return (n < 10 ? "0" : "") + n; };
    var todayStr = (function () { var d = new Date(); return d.getFullYear() + "-" + pad(d.getMonth() + 1) + "-" + pad(d.getDate()); })();
    inpDate.min = todayStr;

    var toMin = function (s) { var p = s.split(":"); return (+p[0]) * 60 + (+p[1]); };
    var fromMin = function (m) { return pad(Math.floor(m / 60)) + ":" + pad(m % 60); };

    function fillTimes() {
      selTime.innerHTML = "";
      var val = inpDate.value;
      if (!val) { selTime.innerHTML = '<option value="" disabled selected>Scegli prima la data</option>'; return; }
      var d = new Date(val + "T00:00:00");
      var h = D.hours[d.getDay()];
      if (!h.open || !h.close) {
        selTime.innerHTML = '<option value="" disabled selected>Siamo chiusi in questa data</option>';
        return;
      }
      var start = toMin(h.open), end = toMin(h.close), step = 30, opts = [];
      // se è oggi, parti dal prossimo slot utile
      var now = new Date();
      if (val === todayStr) {
        var nowMin = now.getHours() * 60 + now.getMinutes() + 30;
        start = Math.max(start, Math.ceil(nowMin / step) * step);
      }
      for (var m = start; m <= end - step; m += step) opts.push('<option>' + fromMin(m) + '</option>');
      if (!opts.length) { selTime.innerHTML = '<option value="" disabled selected>Nessun orario disponibile</option>'; return; }
      selTime.innerHTML = '<option value="" disabled selected>Scegli un orario…</option>' + opts.join("");
    }
    inpDate.addEventListener("change", fillTimes);
    fillTimes();

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      msg.className = "form-msg";
      var nome = $("#bk-nome").value.trim();
      var servizio = selServ.value;
      var data = inpDate.value;
      var orario = selTime.value;
      var hair = selHair.value;

      if (!nome || !servizio || !data || !orario) {
        msg.classList.add("error");
        msg.textContent = "Compila nome, servizio, data e orario per continuare.";
        return;
      }
      // data leggibile
      var d = new Date(data + "T00:00:00");
      var dataIt = d.toLocaleDateString("it-IT", { weekday: "long", day: "numeric", month: "long" });

      var lines = [
        "Ciao Hair Paradise! Vorrei prenotare un appuntamento.",
        "• Nome: " + nome,
        "• Servizio: " + servizio,
        "• Data: " + dataIt,
        "• Orario: " + orario
      ];
      if (hair) lines.push("• Parrucchiere: " + hair);
      var text = encodeURIComponent(lines.join("\n"));

      msg.classList.add("ok");
      msg.textContent = "Ti stiamo aprendo WhatsApp — premi invio per inviare la richiesta. Ti confermeremo noi l’appuntamento in chat.";
      window.open(waHref + "?text=" + text, "_blank", "noopener");
    });
  })();

  /* ---------- JSON-LD (HairSalon) generato dai dati ---------- */
  (function () {
    var dayMap = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    var ohs = D.hours.filter(function (h) { return h.open && h.close; }).map(function (h, i) {
      return { "@type": "OpeningHoursSpecification", "dayOfWeek": dayMap[D.hours.indexOf(h)], "opens": h.open, "closes": h.close };
    });
    var services = [];
    D.services.forEach(function (cat) { cat.items.forEach(function (it) { services.push(it.name); }); });
    if (D.bridal) services.push("Acconciatura sposa");
    var sameAs = Object.keys(D.socials).map(function (k) { return D.socials[k]; }).filter(Boolean);

    var ld = {
      "@context": "https://schema.org",
      "@type": "HairSalon",
      "name": D.business.name,
      "legalName": D.business.legalName,
      "image": location.origin + location.pathname.replace(/index\.html$/, "") + "assets/img/og-cover.jpg",
      "url": location.href.split("#")[0],
      "telephone": D.contact.phoneTel,
      "priceRange": D.business.priceRange,
      "currenciesAccepted": "EUR",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": D.contact.addressStreet,
        "addressLocality": "Napoli",
        "postalCode": "80128",
        "addressRegion": "NA",
        "addressCountry": "IT"
      },
      "geo": { "@type": "GeoCoordinates", "latitude": D.contact.geo.lat, "longitude": D.contact.geo.lng },
      "openingHoursSpecification": ohs,
      "acceptsReservations": true,
      "makesOffer": services.map(function (s) {
        return { "@type": "Offer", "itemOffered": { "@type": "Service", "name": s } };
      }),
      "sameAs": sameAs
    };
    var tag = document.createElement("script");
    tag.type = "application/ld+json";
    tag.textContent = JSON.stringify(ld);
    document.head.appendChild(tag);
  })();

})();
