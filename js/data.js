/* =============================================================
   HAIR PARADISE — FILE DATI UNICO
   -------------------------------------------------------------
   Questo è l'UNICO file da modificare per aggiornare il sito.
   Cambia un prezzo, un orario, un servizio, una foto o un
   contatto QUI: il resto del sito si aggiorna da solo.
   Non serve toccare l'HTML o il CSS.
   ============================================================= */

window.HP = {

  /* ---------- IDENTITÀ ---------- */
  business: {
    name: "Hair Paradise",
    legalName: "Hair Paradise Parrucchieri di Salvatore Esposito",
    claim: "Parrucchieri · Vomero, Napoli",
    // Frase mostrata sotto il logo nell'header
    tagline: "L’arte del capello, dal 2007 nel cuore del Vomero.",
    subtagline: "Taglio · Colore · Cura — con Nashi Argan e Matrix",
    priceRange: "€€",
    foundedYear: "2007",
    vat: ""   // Partita IVA (opzionale): se compilata, appare nel footer
  },

  /* ---------- CONTATTI ---------- */
  contact: {
    phone: "081 18816701",              // fisso (mostrato)
    phoneTel: "+390818816701",          // fisso (per il tasto Chiama)
    whatsapp: "338 2008172",            // mobile (mostrato)
    whatsappIntl: "393382008172",       // mobile in formato internazionale (wa.me)
    email: "",                          // opzionale, lascia "" se non c'è
    addressStreet: "Via Adolfo Omodeo, 53-55",
    addressCity: "80128 Napoli (NA)",
    addressDistrict: "Vomero",
    // Mappa: usa l'indirizzo, nessuna chiave API richiesta
    mapsEmbed: "https://www.google.com/maps?q=Via%20Adolfo%20Omodeo%2053-55%2C%2080128%20Napoli&output=embed",
    mapsLink: "https://www.google.com/maps/place/Via+Adolfo+Omodeo,+53-55,+80128+Napoli+NA",
    // Coordinate approssimative (per i motori di ricerca) — [DA VERIFICARE]
    geo: { lat: 40.85035, lng: 14.23175 }
  },

  /* ---------- SOCIAL ---------- */
  socials: {
    instagram: "https://www.instagram.com/hairparadise_salvatore/",
    facebook: "https://www.facebook.com/p/Hair-paradise-100056649981453/?locale=it_IT",
    tiktok: "https://www.tiktok.com/@hairparadaiseesposito"
  },

  /* ---------- PRENOTAZIONE ----------
     Se un giorno attivi un sistema di prenotazione online (Fresha,
     Treatwell, Planity…), incolla qui l'indirizzo in bookingUrl:
     il pulsante "Prenota" si aprirà automaticamente lì.
     Se resta "", la prenotazione avviene via WhatsApp (form del sito). */
  booking: {
    bookingUrl: ""
  },

  /* ---------- BRAND PARTNER ---------- */
  brands: ["Nashi Argan", "Matrix"],

  /* ---------- ORARI ----------
     Indici: 0=Domenica, 1=Lunedì … 6=Sabato.
     open/close in formato "HH:MM". null = chiuso. */
  hours: [
    { day: "Domenica", open: null,    close: null   }, // 0
    { day: "Lunedì",   open: null,    close: null   }, // 1
    { day: "Martedì",  open: "08:30", close: "19:00" }, // 2
    { day: "Mercoledì",open: "08:30", close: "19:00" }, // 3
    { day: "Giovedì",  open: "08:30", close: "19:00" }, // 4
    { day: "Venerdì",  open: "08:30", close: "19:00" }, // 5
    { day: "Sabato",   open: "08:00", close: "19:00" }  // 6
  ],

  /* ---------- SERVIZI ----------
     Ogni categoria: { title, items: [{ name, desc, price, from }] }
     from:true  → mostra "da €X" (prezzo che varia per lunghezza/volume)
     from:false → mostra "€X" */
  services: [
    {
      title: "Taglio & Piega",
      items: [
        { name: "Taglio",   desc: "Taglio su misura, studiato sul viso e sulla texture.", price: 10, from: false },
        { name: "Piega",    desc: "Messa in piega professionale, luminosa e naturale.",    price: 12, from: false },
        { name: "Piega XL", desc: "Per capelli lunghi o particolarmente voluminosi.",      price: 13, from: false }
      ]
    },
    {
      title: "Colore",
      items: [
        { name: "Colore radici",                   desc: "Ritocco radici, colore uniforme e coprente.",              price: 19, from: false },
        { name: "Colore completo",                 desc: "Colore su tutta la lunghezza, riflessi pieni.",            price: 25, from: false },
        { name: "Colore radici senza ammoniaca",   desc: "Delicato sul cuoio capelluto, resa naturale.",             price: 24, from: false },
        { name: "Colore completo senza ammoniaca", desc: "Tutta la testa, formula rispettosa del capello.",          price: 30, from: false },
        { name: "Color & Care Nashi · radici",     desc: "Colore e trattamento Nashi Argan in un unico gesto.",      price: 34, from: false },
        { name: "Color & Care Nashi · completo",   desc: "Colore integrale nutriente firmato Nashi Argan.",          price: 40, from: false }
      ]
    },
    {
      title: "Schiariture & Riflessi",
      items: [
        { name: "Colpi di sole · Meches", desc: "Schiariture a ciocche per luce e profondità.",     price: 30, from: false },
        { name: "Balayage",               desc: "Schiaritura sfumata a mano libera, effetto sole.",  price: 16, from: true  },
        { name: "Sfumature",              desc: "Passaggi di colore morbidi e su misura.",           price: 30, from: true  },
        { name: "Tonalizzante",           desc: "Ravviva e corregge il riflesso, capelli lucenti.",  price: 16, from: true  },
        { name: "Riflessante",            desc: "Tono su tono per intensità e brillantezza.",        price: 24, from: false }
      ]
    },
    {
      title: "Trattamenti & Texture",
      items: [
        { name: "Trattamento specifico", desc: "Cura mirata per idratazione, forza o lucentezza.", price: 5,  from: false },
        { name: "Permanente",            desc: "Onde e volume duraturi, modellati sul tuo stile.",  price: 35, from: false }
      ]
    }
  ],
  // Nota mostrata sotto il listino
  servicesNote: "I prezzi si sommano tra loro e possono variare in base a lunghezza e volume dei capelli.",

  /* ---------- TEAM ----------
     Nessuna foto disponibile: mostriamo eleganti card con iniziali.
     Aggiungi "photo" (es. "assets/img/team-salvatore.webp") quando le hai. */
  team: {
    // Titolare / fondatore (protagonista anche della sezione Storia)
    owner: { name: "Salvatore Esposito", role: "Titolare & Master Stylist", specialty: "Taglio, colore e consulenza d’immagine", initials: "SE", photo: "" },
    // Gruppi di lavoro. Aggiungi "photo" a un membro per sostituire il monogramma.
    groups: [
      {
        title: "Hair Stylist",
        members: [
          { name: "Mery",   initials: "M", photo: "" },
          { name: "Rita",   initials: "R", photo: "" },
          { name: "Susy",   initials: "S", photo: "" },
          { name: "Ilenia", initials: "I", photo: "" }
        ]
      },
      {
        title: "Trucco & Estetica",
        members: [
          { name: "Anna",     initials: "A", photo: "" },
          { name: "Cristina", initials: "C", photo: "" }
        ]
      }
    ]
  },

  /* ---------- SPOSA ----------
     Sezione dedicata al servizio sposa (foto + video). */
  bridal: {
    kicker: "Servizio sposa",
    title: "Nel giorno più importante",
    lead: "Ti accompagniamo dalla prova allo styling finale: acconciatura, trucco e cura, pensati sul tuo abito e sulla tua luce. Un servizio su misura, per te e per chi ti sta accanto.",
    price: 350,          // a partire da €
    photo: "assets/img/sposa.webp",
    photoSmall: "assets/img/sposa-720.webp",
    photoW: 1440, photoH: 960,
    photoAlt: "Acconciatura sposa firmata Hair Paradise, ritratto in bianco e nero",
    video: "assets/video/sposa.mp4",
    videoPoster: "assets/img/sposa-poster.webp"
  },

  /* ---------- GALLERIA ----------
     Le foto d'ambiente sono in due misure (srcset). I fotogrammi
     dal video del salone raccontano il lavoro reale.
     Sostituisci pure con le tue foto: mantieni le proporzioni indicate. */
  gallery: [
    { src: "assets/img/salone-a.webp", small: "assets/img/salone-a-540.webp", w: 1080, h: 608, alt: "La sala principale di Hair Paradise, tra marmo e cromo" },
    { src: "assets/img/salone-b.webp", small: "assets/img/salone-b-540.webp", w: 1080, h: 744, alt: "La reception e l’area accoglienza del salone" },
    { src: "assets/img/salone-c.webp", small: "assets/img/salone-c-540.webp", w: 1080, h: 712, alt: "Marmo, luce e specchi LED nel salone" }
  ],

  /* ---------- MANIFESTO / ABOUT (testi editoriali) ---------- */
  content: {
    aboutTitle: "Più di un salone. Una famiglia.",
    aboutParagraphs: [
      "Hair Paradise nasce da un sogno coltivato fin da bambino. Nel 2007 Salvatore Esposito apre la sua prima bottega al Vomero; nel 2019, insieme allo studio De Luca Architettura, dà vita al salone di via Omodeo — marmo, luce e linee che sembrano disegnare il futuro.",
      "Qui ogni cliente viene ascoltato e coccolato: una consulenza attenta prima di ogni gesto, mani esperte, prodotti selezionati Nashi Argan e Matrix. Professionalità, cortesia e cura, alla portata di tutti.",
      "Non è un caso se chi entra da noi, poi, non ci lascia più."
    ],
    aboutImage: "assets/img/salone-b.webp",
    aboutImageSmall: "assets/img/salone-b-540.webp",
    aboutImageW: 1080,
    aboutImageH: 744
  }
};
