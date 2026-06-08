// ============================================
// EXERCIȚII - Sprechen B2: Wohnen & Stadtleben
// Claudia Toth · 5 exerciții (toate text inputs)
// ============================================

function normalizeAnswer(str) {
    return (str || '')
        .toString()
        .toLowerCase()
        .trim()
        .replace(/ß/g, 'ss')
        .replace(/ä/g, 'ae')
        .replace(/ö/g, 'oe')
        .replace(/ü/g, 'ue')
        .replace(/[ăâ]/g, 'a')
        .replace(/î/g, 'i')
        .replace(/[șş]/g, 's')
        .replace(/[țţ]/g, 't')
        .replace(/…/g, '...')
        .replace(/\s*\.\.\.\s*/g, ' ')
        .replace(/\s*\/\s*/g, ' ')
        .replace(/\s*,\s*/g, ' ')
        .replace(/\s+/g, ' ')
        .replace(/[.!?;:]/g, '').trim();
}

// ============================================
// EX 1: Traducere DE → RO (vocabular cheie)
// ============================================
const ex1Data = [
    { id: 'a', de: 'die Mietwohnung', correct: 'apartament cu chirie', accept: ['apartament cu chirie', 'apartament închiriat', 'apartament inchiriat', 'mietwohnung', 'locuință închiriată', 'locuinta inchiriata'] },
    { id: 'b', de: 'die Kaltmiete', correct: 'chiria rece (fără utilități)', accept: ['chiria rece', 'chirie rece', 'kaltmiete', 'chirie fără utilități', 'chirie fara utilitati', 'chirie netă', 'chirie neta'] },
    { id: 'c', de: 'die Nebenkosten', correct: 'utilități (NUR Plural)', accept: ['utilități', 'utilitati', 'nebenkosten', 'cheltuieli adiționale', 'cheltuieli aditionale', 'costuri secundare'] },
    { id: 'd', de: 'die Wohnungsnot', correct: 'criza locuințelor', accept: ['criza locuințelor', 'criza locuintelor', 'wohnungsnot', 'lipsă de locuințe', 'lipsa de locuinte'] },
    { id: 'e', de: 'die Gentrifizierung', correct: 'gentrificarea (zone gentrificate)', accept: ['gentrificarea', 'gentrificare', 'gentrifizierung'] },
    { id: 'f', de: 'der Nahverkehr', correct: 'transport public local', accept: ['transport public local', 'transport public', 'nahverkehr', 'öpnv', 'oepnv'] },
    { id: 'g', de: 'das Tiny House', correct: 'căsuța mică (20-30 m²)', accept: ['căsuța mică', 'casuta mica', 'tiny house', 'casă mică', 'casa mica'] },
    { id: 'h', de: 'die Landflucht', correct: 'exodul rural (tineri din sate)', accept: ['exodul rural', 'exod rural', 'landflucht', 'fuga de la sat'] }
];

function buildEx1() {
    const container = document.getElementById('ex1-container');
    if (!container) return;
    let html = `
        <div class="exercise-instruction">
            <strong>🔁 Tradu termenul german în română.</strong><br>
            Diacriticele românești (ă, â, î, ș, ț) sunt opționale — sistemul acceptă ambele forme.
        </div>
    `;
    ex1Data.forEach((item, index) => {
        html += `
            <div class="exercise-item">
                <span class="exercise-number">${index + 1}</span>
                <div class="input-group">
                    <label><strong style="color:#065f46; font-size:1.05rem;">${item.de}</strong></label>
                    <input type="text" id="ex1-${item.id}" placeholder="traducere RO...">
                </div>
                <div class="feedback" id="ex1-f${item.id}"></div>
            </div>
        `;
    });
    container.innerHTML = html;
}

function checkEx1() {
    let correct = 0;
    const total = ex1Data.length;
    ex1Data.forEach(item => {
        const input = document.getElementById(`ex1-${item.id}`);
        const fb = document.getElementById(`ex1-f${item.id}`);
        const userAnswer = normalizeAnswer(input.value);
        const isCorrect = item.accept.some(a => normalizeAnswer(a) === userAnswer);
        if (isCorrect) {
            fb.className = 'feedback correct';
            fb.textContent = `Corect: ${item.correct}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${item.correct}`;
        }
    });
    return { correct, total };
}

// ============================================
// EX 2: Traducere RO → DE (vocabular activ)
// ============================================
const ex2Data = [
    { id: 'a', ro: 'eu locuiesc la oraș', correct: 'ich wohne in der Stadt', accept: ['ich wohne in der stadt', 'ich lebe in der stadt'] },
    { id: 'b', ro: 'eu locuiesc la țară', correct: 'ich wohne auf dem Land', accept: ['ich wohne auf dem land', 'ich lebe auf dem land'] },
    { id: 'c', ro: 'chiria mea este 800 euro', correct: 'meine Miete beträgt 800 Euro', accept: ['meine miete beträgt 800 euro', 'meine miete betraegt 800 euro', 'meine miete ist 800 euro', 'meine miete kostet 800 euro'] },
    { id: 'd', ro: 'contractul de chirie', correct: 'der Mietvertrag', accept: ['der mietvertrag', 'mietvertrag'] },
    { id: 'e', ro: 'a locui într-o WG', correct: 'in einer WG wohnen', accept: ['in einer wg wohnen', 'in einer wg leben', 'in einer wohngemeinschaft wohnen'] },
    { id: 'f', ro: 'creșterea chiriei', correct: 'die Mietsteigerung', accept: ['die mietsteigerung', 'mietsteigerung', 'die mieterhöhung', 'mieterhoehung'] },
    { id: 'g', ro: 'casă inteligentă', correct: 'Smart Home', accept: ['smart home', 'das smart home', 'ein smart home', 'intelligentes haus'] },
    { id: 'h', ro: 'a face naveta', correct: 'pendeln', accept: ['pendeln', 'jeden tag pendeln'] }
];

function buildEx2() {
    const container = document.getElementById('ex2-container');
    if (!container) return;
    let html = `
        <div class="exercise-instruction">
            <strong>🔁 Tradu expresia română în germană.</strong><br>
            <em>💡 Diacritice germane:</em> poți scrie <code>ae</code> (= ä), <code>oe</code> (= ö), <code>ue</code> (= ü), <code>ss</code> (= ß).
        </div>
    `;
    ex2Data.forEach((item, index) => {
        html += `
            <div class="exercise-item">
                <span class="exercise-number">${index + 1}</span>
                <div class="input-group">
                    <label><strong style="color:#6b7280; font-size:1.05rem;">${item.ro}</strong></label>
                    <input type="text" id="ex2-${item.id}" placeholder="traducere DE...">
                </div>
                <div class="feedback" id="ex2-f${item.id}"></div>
            </div>
        `;
    });
    container.innerHTML = html;
}

function checkEx2() {
    let correct = 0;
    const total = ex2Data.length;
    ex2Data.forEach(item => {
        const input = document.getElementById(`ex2-${item.id}`);
        const fb = document.getElementById(`ex2-f${item.id}`);
        const userAnswer = normalizeAnswer(input.value);
        const isCorrect = item.accept.some(a => normalizeAnswer(a) === userAnswer);
        if (isCorrect) {
            fb.className = 'feedback correct';
            fb.textContent = `Corect: ${item.correct}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${item.correct}`;
        }
    });
    return { correct, total };
}

// ============================================
// EX 3: Completează propoziția cu substantivul potrivit
// ============================================
const ex3Data = [
    { id: 'a', sentence: 'In Berlin lebt man meistens in einer ______. (apartament cu chirie)', correct: 'Mietwohnung', accept: ['mietwohnung'] },
    { id: 'b', sentence: 'Auf dem Land wohnen viele in einem ______. (casă unifamilială)', correct: 'Einfamilienhaus', accept: ['einfamilienhaus'] },
    { id: 'c', sentence: 'In München herrscht große ______. (criza locuințelor)', correct: 'Wohnungsnot', accept: ['wohnungsnot'] },
    { id: 'd', sentence: 'Mit der ______ bin ich in 10 Minuten am Ziel. (metroul)', correct: 'U-Bahn', accept: ['u-bahn', 'u bahn'] },
    { id: 'e', sentence: 'Berlin hat viele ______ — zum Beispiel den Tiergarten. (spații verzi)', correct: 'Grünflächen', accept: ['grünflächen', 'gruenflaechen'] },
    { id: 'f', sentence: 'Die ______ beträgt 2 Monatsmieten. (garanție)', correct: 'Kaution', accept: ['kaution'] },
    { id: 'g', sentence: 'Mit dem Auto pendeln viele täglich 2 Stunden zur ______. (muncă)', correct: 'Arbeit', accept: ['arbeit'] },
    { id: 'h', sentence: 'Ein ______ passt zu Minimalisten und ist nachhaltig. (căsuța mică)', correct: 'Tiny House', accept: ['tiny house'] }
];

function buildEx3() {
    const container = document.getElementById('ex3-container');
    if (!container) return;
    let html = `
        <div class="exercise-instruction">
            <strong>📝 Completează cu substantivul potrivit din vocabular.</strong><br>
            Sugestia română între paranteze. Scrie EXACT cu majusculă (substantivele se scriu cu majusculă în germană!).
        </div>
    `;
    ex3Data.forEach((item, index) => {
        html += `
            <div class="exercise-item">
                <span class="exercise-number">${index + 1}</span>
                <div class="input-group">
                    <label>${item.sentence}</label>
                    <input type="text" id="ex3-${item.id}" placeholder="substantiv...">
                </div>
                <div class="feedback" id="ex3-f${item.id}"></div>
            </div>
        `;
    });
    container.innerHTML = html;
}

function checkEx3() {
    let correct = 0;
    const total = ex3Data.length;
    ex3Data.forEach(item => {
        const input = document.getElementById(`ex3-${item.id}`);
        const fb = document.getElementById(`ex3-f${item.id}`);
        const userAnswer = normalizeAnswer(input.value);
        const isCorrect = item.accept.some(a => normalizeAnswer(a) === userAnswer);
        if (isCorrect) {
            fb.className = 'feedback correct';
            fb.textContent = `Corect: ${item.correct}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${item.correct}`;
        }
    });
    return { correct, total };
}

// ============================================
// EX 4: Conectori argumentativi pentru Sprechen Teil 2
// ============================================
const ex4Data = [
    { id: 'a', sentence: 'In ______ Stadt habe ich mehr Möglichkeiten. (locul: oraș, Dativ)', correct: 'der', accept: ['der'] },
    { id: 'b', sentence: 'Auf ______ Land ist es ruhiger. (la sat, Dativ idiomatic)', correct: 'dem', accept: ['dem'] },
    { id: 'c', sentence: 'Im ______ zur Stadt ist das Land günstiger. (comparație cu)', correct: 'Vergleich', accept: ['vergleich', 'gegensatz'] },
    { id: 'd', sentence: '______ Mietspiegel kostet ein Quadratmeter in Berlin 14 Euro. (potrivit lui)', correct: 'Laut', accept: ['laut', 'nach'] },
    { id: 'e', sentence: 'Es ______ darauf an, wo du arbeitest. (depinde de)', correct: 'kommt', accept: ['kommt'] },
    { id: 'f', sentence: 'Meiner ______ nach ist die Stadt besser für junge Menschen. (părere)', correct: 'Meinung', accept: ['meinung'] },
    { id: 'g', sentence: '______ die Wohnungsnot real ist, ziehen viele in die Großstadt. (deși)', correct: 'Obwohl', accept: ['obwohl', 'auch wenn'] },
    { id: 'h', sentence: 'Auf der einen ______ ist das Land ruhig, auf der anderen ist es weit von allem. (parte)', correct: 'Seite', accept: ['seite'] }
];

function buildEx4() {
    const container = document.getElementById('ex4-container');
    if (!container) return;
    let html = `
        <div class="exercise-instruction">
            <strong>🗣️ Completează cu conectorul argumentativ potrivit.</strong><br>
            Aceste structuri sunt esențiale pentru proba orală B2 — pentru comparație, citare statistici, opinie, contrast.
        </div>
    `;
    ex4Data.forEach((item, index) => {
        html += `
            <div class="exercise-item">
                <span class="exercise-number">${index + 1}</span>
                <div class="input-group">
                    <label>${item.sentence}</label>
                    <input type="text" id="ex4-${item.id}" placeholder="conector...">
                </div>
                <div class="feedback" id="ex4-f${item.id}"></div>
            </div>
        `;
    });
    container.innerHTML = html;
}

function checkEx4() {
    let correct = 0;
    const total = ex4Data.length;
    ex4Data.forEach(item => {
        const input = document.getElementById(`ex4-${item.id}`);
        const fb = document.getElementById(`ex4-f${item.id}`);
        const userAnswer = normalizeAnswer(input.value);
        const isCorrect = item.accept.some(a => normalizeAnswer(a) === userAnswer);
        if (isCorrect) {
            fb.className = 'feedback correct';
            fb.textContent = `Corect: ${item.correct}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${item.correct}`;
        }
    });
    return { correct, total };
}

// ============================================
// EX 5: Schreibwerkstatt — argument scurt cu Google Form (regula 18)
// ============================================
function buildEx5() {
    const container = document.getElementById('ex5-container');
    if (!container) return;
    container.innerHTML = `
        <div class="exercise-instruction">
            <strong>✍️ Schreibwerkstatt — exersează un argument scurt</strong><br>
            Scrie 4-6 propoziții (60-100 cuvinte) în germană pentru una dintre situațiile de mai jos. Sunt situații tipice pentru <strong>Sprechen Teil 2</strong> (dialog pe perechi cu argumente).
        </div>

        <div class="theory-box" style="background:#fef3c7; border-color:#f59e0b;">
            <h4>📋 Alege UNA dintre cele 3 teme:</h4>
            <ol>
                <li><strong>„Stadt oder Land — wo lebt es sich besser?"</strong> Argumentează care e mai bine cu minim 2 motive concrete + un exemplu personal.</li>
                <li><strong>„Wohnungsnot in Großstädten — was kann man tun?"</strong> Prezintă 2 soluții cu structurile <em>„Man könnte ..."</em> + <em>„Es ist wichtig, dass ..."</em>.</li>
                <li><strong>„Mein Traumhaus — Mietwohnung, Eigentumshaus oder Tiny House?"</strong> Descrie unde ai vrea să locuiești și de ce (5-7 propoziții).</li>
            </ol>
        </div>

        <div class="theory-box" style="background:#dbeafe; border-color:#3b82f6;">
            <h4>💡 Structuri utile (le poți copia)</h4>
            <ul>
                <li><strong>Meiner Meinung nach</strong> + verb pe poz. 2: „Meiner Meinung nach ist das Land besser für Familien."</li>
                <li><strong>In der Stadt</strong> (loc, Dat) vs. <strong>auf dem Land</strong> (idiomatic, Dat): „In der Stadt gibt es mehr Kultur, auf dem Land mehr Natur."</li>
                <li><strong>Im Vergleich zur Stadt</strong>: „Im Vergleich zur Stadt ist das Land günstiger."</li>
                <li><strong>Laut Mietspiegel / laut Statistik</strong>: „Laut Mietspiegel kostet Berlin durchschnittlich 14 € pro m²."</li>
                <li><strong>Es kommt darauf an, wo</strong>: „Es kommt darauf an, wo du arbeitest."</li>
                <li><strong>Auf der einen Seite ... auf der anderen Seite ...</strong></li>
            </ul>
        </div>

        <p style="margin: 14px 0;">📝 Scrie textul tău în câmpul de mai jos (doar pentru proba personală — nu se verifică automat). Pentru corectură de la Annette → folosește formularul:</p>

        <textarea id="ex5-text" rows="8" style="width:100%; padding:14px; border:2px solid #d1fae5; border-radius:8px; font-family:inherit; font-size:1rem; line-height:1.6;" placeholder="Schreib hier deinen Text (4-6 Sätze, 60-100 Wörter)..."></textarea>

        <div style="margin: 14px 0; padding: 16px 20px; background:#ecfdf5; border: 2px solid #10b981; border-radius:10px; text-align:center;">
            <p style="margin: 0 0 10px; color:#065f46; font-weight:600;">📨 Trimite textul tău spre corectură (Annette îți răspunde personal cu feedback)</p>
            <a href="https://forms.gle/2r1RavMhMW7d91ch9" target="_blank" rel="noopener" style="display:inline-block; background:linear-gradient(135deg, #10b981 0%, #059669 100%); color:white; padding:12px 28px; border-radius:8px; text-decoration:none; font-weight:700; font-size:1rem;">📨 Trimite spre corectură</a>
            <p style="margin: 8px 0 0; color:#6b7280; font-size:0.85rem; font-style:italic;">(formularul deschis în tab nou — în el alegi „Sprechen B2 — Wohnen & Stadtleben")</p>
        </div>
    `;
}

function checkEx5() {
    const textarea = document.getElementById('ex5-text');
    const userText = (textarea?.value || '').trim();
    const wordCount = userText ? userText.split(/\s+/).length : 0;

    if (wordCount < 30) {
        return { correct: 0, total: 1, message: 'Scrie cel puțin 30 de cuvinte ca să poți trimite textul spre corectură.' };
    }
    return { correct: 1, total: 1, message: `Ai scris ${wordCount} cuvinte. Acum trimite textul prin Google Form pentru corectură personală.` };
}

document.addEventListener('DOMContentLoaded', function() {
    buildEx1();
    buildEx2();
    buildEx3();
    buildEx4();
    buildEx5();
});
