// ============================================
// FLASHCARDS — Sprechen B2: Wohnen & Stadtleben
// Claudia Toth · 32 carduri · audio Hedda WAV pregenerat
// ⚠️ ZERO ghilimele interne — CAPS pentru emfază
// ============================================

const flashcardsData = [
    // ===== Wohnformen (6) =====
    { de: "die Mietwohnung · die Mietwohnungen", ro: "apartament cu chirie · -e (f)", audio: "audio/cards/01-mietwohnung.wav" },
    { de: "die Eigentumswohnung", ro: "apartament în proprietate (f)", audio: "audio/cards/02-eigentumswohnung.wav" },
    { de: "das Einfamilienhaus", ro: "casa unifamilială (n, Umlaut Pl!)", audio: "audio/cards/03-einfamilienhaus.wav" },
    { de: "das Reihenhaus", ro: "casa în șir (n)", audio: "audio/cards/04-reihenhaus.wav" },
    { de: "die WG (Wohngemeinschaft)", ro: "locuință comună (cu prieteni)", audio: "audio/cards/05-wg.wav" },
    { de: "der Mieter / die Mieterin", ro: "chiriaș / -ă (m/f)", audio: "audio/cards/06-mieter.wav" },

    // ===== Stadt vs. Land (5) =====
    { de: "die Großstadt · die Großstädte", ro: "orașul mare · orașele (f, Umlaut!)", audio: "audio/cards/07-grossstadt.wav" },
    { de: "die Kleinstadt · die Kleinstädte", ro: "orașul mic · orașele (f, Umlaut!)", audio: "audio/cards/08-kleinstadt.wav" },
    { de: "der Vorort · die Vororte", ro: "suburbia · suburbiile (m)", audio: "audio/cards/09-vorort.wav" },
    { de: "das Dorf · die Dörfer", ro: "satul · satele (n, Umlaut!)", audio: "audio/cards/10-dorf.wav" },
    { de: "auf dem Land wohnen", ro: "a locui la țară (idiomatic, Dat)", audio: "audio/cards/11-auf-dem-land.wav" },

    // ===== Wohnungsmarkt (6) =====
    { de: "die Miete · die Mieten", ro: "chiria · chiriile (f)", audio: "audio/cards/12-miete.wav" },
    { de: "die Kaltmiete (KM)", ro: "chiria rece, fără utilități (f)", audio: "audio/cards/13-kaltmiete.wav" },
    { de: "die Nebenkosten (NK, Pl.)", ro: "utilități (NUR Plural!)", audio: "audio/cards/14-nebenkosten.wav" },
    { de: "die Kaution", ro: "garanția (2-3 luni chirie, f)", audio: "audio/cards/15-kaution.wav" },
    { de: "der Mietspiegel", ro: "tabelul oficial al chiriilor medii (m)", audio: "audio/cards/16-mietspiegel.wav" },
    { de: "der Mietvertrag · die Mietverträge", ro: "contractul de chirie (m, Umlaut!)", audio: "audio/cards/17-mietvertrag.wav" },

    // ===== Infrastruktur (5) =====
    { de: "der Nahverkehr (ÖPNV)", ro: "transport public local (m, nur Sg)", audio: "audio/cards/18-nahverkehr.wav" },
    { de: "der Bahnhof · die Bahnhöfe", ro: "gara · gările (m, Umlaut!)", audio: "audio/cards/19-bahnhof.wav" },
    { de: "die Einkaufsmöglichkeit", ro: "posibilități cumpărături (f, Umlaut!)", audio: "audio/cards/20-einkaufsmoeglichkeit.wav" },
    { de: "die Grünfläche · die Grünflächen", ro: "spațiul verde · spațiile (f)", audio: "audio/cards/21-gruenflaeche.wav" },
    { de: "das Viertel · die Viertel", ro: "cartierul · cartierele (n, plural identic)", audio: "audio/cards/22-viertel.wav" },

    // ===== Probleme moderne (5) =====
    { de: "die Wohnungsnot", ro: "criza locuințelor (f, nur Sg)", audio: "audio/cards/23-wohnungsnot.wav" },
    { de: "die Gentrifizierung", ro: "gentrificarea (f, nur Sg)", audio: "audio/cards/24-gentrifizierung.wav" },
    { de: "die Mietsteigerung", ro: "creșterea chiriei (f)", audio: "audio/cards/25-mietsteigerung.wav" },
    { de: "die Landflucht", ro: "exodul rural (f, nur Sg)", audio: "audio/cards/26-landflucht.wav" },
    { de: "pendeln", ro: "a face naveta (verb regulat)", audio: "audio/cards/27-pendeln.wav" },

    // ===== Trends 2025-2026 (3) =====
    { de: "das Tiny House", ro: "căsuța mică 20-30 m² (n, anglicism)", audio: "audio/cards/28-tiny-house.wav" },
    { de: "das Smart Home", ro: "casa inteligentă (n)", audio: "audio/cards/29-smart-home.wav" },
    { de: "nachhaltiges Bauen", ro: "construcție sustenabilă (n, nur Sg)", audio: "audio/cards/30-nachhaltiges-bauen.wav" },

    // ===== Conectori argumentativi cheie (2) =====
    { de: "In der Stadt vs. auf dem Land", ro: "în oraș vs. la țară (B2 cheie!)", audio: "audio/cards/31-stadt-land.wav" },
    { de: "Laut Mietspiegel", ro: "potrivit tabelului oficial al chiriilor", audio: "audio/cards/32-laut-mietspiegel.wav" }
];

let currentCardIndex = 0;
let currentFlashAudio = null;

function buildFlashcards() {
    const c = document.getElementById('flashcards-container');
    if (!c) return;
    c.innerHTML = `
        <div class="exercise-instruction">
            <strong>📇 32 carduri Sprechen B2 — Wohnen & Stadtleben</strong> — 6 Wohnformen + 5 Stadt vs. Land + 6 Wohnungsmarkt + 5 Infrastruktur + 5 Probleme moderne + 3 Trends + 2 conectori cheie.<br>
            Click pe card pentru traducere. Click pe 🔊 pentru pronunție Hedda. Folosește săgețile pentru navigare.
        </div>
        <div class="flashcard-counter" id="flashcard-counter">Card 1 / ${flashcardsData.length}</div>
        <div class="flashcard" id="flashcard" onclick="flipCard()">
            <button class="flashcard-audio-btn" onclick="playFlashcardAudio(event)" title="Ascultă pronunția">🔊</button>
            <div class="flashcard-content">
                <div class="de" id="flashcard-de">${flashcardsData[0].de}</div>
                <div class="ro" id="flashcard-ro">${flashcardsData[0].ro}</div>
            </div>
            <div class="flashcard-hint">👆 Click pentru traducere</div>
        </div>
        <div class="flashcard-controls">
            <button class="flashcard-btn" onclick="prevCard()" id="prev-btn">← Anterior</button>
            <button class="flashcard-btn" onclick="nextCard()" id="next-btn">Următor →</button>
        </div>
    `;
    updateFlashcard();
}

function updateFlashcard() {
    const card = flashcardsData[currentCardIndex];
    const deEl = document.getElementById('flashcard-de');
    const roEl = document.getElementById('flashcard-ro');
    const counter = document.getElementById('flashcard-counter');
    const fc = document.getElementById('flashcard');
    if (deEl) deEl.textContent = card.de;
    if (roEl) roEl.textContent = card.ro;
    if (counter) counter.textContent = `Card ${currentCardIndex + 1} / ${flashcardsData.length}`;
    if (fc) fc.classList.remove('flipped');
}

function flipCard() {
    const fc = document.getElementById('flashcard');
    if (fc) fc.classList.toggle('flipped');
}

function nextCard() {
    currentCardIndex = (currentCardIndex + 1) % flashcardsData.length;
    updateFlashcard();
}

function prevCard() {
    currentCardIndex = (currentCardIndex - 1 + flashcardsData.length) % flashcardsData.length;
    updateFlashcard();
}

function playFlashcardAudio(event) {
    event.stopPropagation();
    const card = flashcardsData[currentCardIndex];
    if (currentFlashAudio) {
        currentFlashAudio.pause();
        currentFlashAudio.currentTime = 0;
    }
    if (card.audio) {
        currentFlashAudio = new Audio(card.audio);
        currentFlashAudio.play().catch(() => playWithTTS(card.de));
    } else {
        playWithTTS(card.de);
    }
}

function playWithTTS(text) {
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const u = new SpeechSynthesisUtterance(text);
        u.lang = 'de-DE';
        u.rate = 0.82;
        window.speechSynthesis.speak(u);
    }
}

buildFlashcards();
