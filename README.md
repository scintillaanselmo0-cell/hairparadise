# Hair Paradise — Sito web

Sito statico (HTML + CSS + JavaScript) pronto per la pubblicazione su **GitHub Pages**, Netlify o qualsiasi hosting. Nessun server, nessun database, nessuna build.

---

## ✏️ Come modificare i contenuti

**Tutto ciò che cambia nel tempo si modifica in UN solo file:**

```
js/data.js
```

Aprilo con un editor di testo e cambia solo i valori. Esempi:

| Cosa vuoi fare | Dove, in `js/data.js` |
|---|---|
| Cambiare un **prezzo** | in `services`, il campo `price` della voce |
| Aggiungere/togliere un **servizio** | aggiungi o rimuovi un oggetto in `services` |
| Cambiare un **orario** | in `hours` (24h, es. `"08:30"`; `null` = chiuso) |
| Cambiare **telefono / WhatsApp / indirizzo** | in `contact` |
| Cambiare i **social** | in `socials` |
| Aggiungere una **foto del team** | in `team.members`, campo `photo` (es. `"assets/img/team-anna.webp"`) |
| Cambiare le **frasi** (slogan, storia) | in `content` e `business` |
| Aggiungere la **Partita IVA** | in `business.vat` |

Il resto del sito (listino, menu, mappa, dati per Google, ecc.) si aggiorna **da solo**.

### Prezzo "a partire da"
Nel listino, metti `from: true` per mostrare *"a partire da €X"* (usato per balayage, sfumature, tonalizzante). Metti `from: false` per un prezzo fisso.

---

## 📅 Prenotazioni

Di default il pulsante **Prenota** apre **WhatsApp** con il messaggio già compilato (nome, servizio, data, orario, parrucchiere). Il cliente deve solo premere invio.

Se un domani attivi un sistema di prenotazione online (Fresha, Treatwell, Planity, ecc.):
1. apri `js/data.js`
2. incolla l'indirizzo in `booking.bookingUrl`
3. da quel momento **tutti** i pulsanti "Prenota" apriranno quel sistema in una nuova scheda.

---

## 🖼️ Immagini

Sono nella cartella `assets/img/`. Per sostituirle mantieni **lo stesso nome file** (o aggiorna il percorso in `data.js`).

- Le foto d'ambiente hanno due misure (`-540` per il telefono, normale per il desktop): comodo ma non obbligatorio.
- Formato consigliato: **WebP** (leggero e nitido).
- Il **video** dell'header è `assets/video/hero.mp4`. Su schermi grandi resta un po' morbido perché il file originale è verticale/HD-social: se hai una versione a risoluzione più alta, sostituiscila mantenendo il nome.
- `assets/img/og-cover.jpg` è l'anteprima che appare quando condividi il sito su WhatsApp/Instagram/Facebook.

Il **logo** è già stato ripulito dallo sfondo:
- `logo.png` — versione scura (per fondi chiari)
- `logo-light.png` — versione avorio/oro (per fondi scuri)

---

## 🚀 Pubblicare su GitHub Pages

1. Crea un repository su GitHub e carica tutti questi file (mantieni le cartelle).
2. Vai su **Settings → Pages**.
3. In *Build and deployment* scegli **Deploy from a branch**, branch `main`, cartella `/ (root)`.
4. Salva: dopo qualche minuto il sito sarà online all'indirizzo indicato.

> Suggerimento: quando avrai un dominio (es. `hairparadise-vomero.it`), aggiornalo nel tag `<link rel="canonical">` in `index.html` e in `og:url`.

---

## 🔎 Cosa è già incluso

- Ottimizzazione per Google (SEO): titolo, descrizione, dati strutturati **HairSalon** (orari, servizi, indirizzo, telefono) generati automaticamente dai tuoi dati.
- Indicatore **“Aperto ora / Chiuso”** calcolato in tempo reale dagli orari.
- **Galleria** con ingrandimento al tocco e caricamento pigro (veloce anche su rete lenta).
- **Barra fissa** in basso sul telefono con Chiama, WhatsApp e Prenota.
- Anteprima social (Open Graph) per la condivisione su chat e feed.
- Accessibilità: navigazione da tastiera, contrasto elevato, rispetto di *“riduci animazioni”* e *risparmio dati*.

---

## 🎨 Note di stile

- Caratteri: **Fraunces** (titoli, eleganti) + **Jost** (testo). Vengono caricati da Google Fonts.
- Colori: marmo caldo, espresso e oro champagne — ispirati agli interni reali del salone.
- Il motivo ricorrente del **cerchio** richiama gli anelli luminosi, le sfere cromate e il logo tondo del salone.
