// ============================================
// TEORIE — Sprechen B2: Wohnen & Stadtleben
// Vocabular bilingv pentru proba orală B2 (Sprechen Teil 1 + Teil 2)
// Claudia Toth · Annettes Deutschkurs · Nivel B2
// Aliniat cu Testul 9 oficial Examen B2 (Wohnen & Stadtleben)
// ============================================

const theoryHTML = `
    <!-- 1: Wohnformen -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(0)">
            <span>🏠 1. Wohnformen — forme de locuit (chirie, proprietate, WG)</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-0">
            <div class="andreea-note">
                <img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar">
                <div class="andreea-note-content">
                    <div class="speaker">Andreea îți spune:</div>
                    <div class="text">La proba orală B2: <em>„Wo wohnst du?"</em>. Învață <strong>die Mietwohnung</strong> (apartament cu chirie — majoritatea germanilor!) vs. <strong>die Eigentumswohnung</strong> (apartament în proprietate). Capcană culturală: în Germania <strong>doar 51% sunt proprietari</strong> (vs. 96% în România). Mulți germani închiriază toată viața — e perfect normal. Și <em>die WG</em> (Wohngemeinschaft) = locuit cu prieteni (NU familie). 🦋</div>
                </div>
            </div>

            <div class="theory-box">
                <h4>📚 Vocabular — Wohnformen</h4>
                <table class="theory-table">
                    <thead><tr><th>Germană (Sg + Pl)</th><th>Traducere RO</th><th>Exemplu în context</th></tr></thead>
                    <tbody>
                        <tr><td class="verb">die Mietwohnung · die Mietwohnungen</td><td class="ro-text">apartament cu chirie / -e (f)</td><td><em>In Berlin lebt man meistens in einer Mietwohnung.</em></td></tr>
                        <tr><td class="verb">die Eigentumswohnung · -en</td><td class="ro-text">apartament în proprietate (f)</td><td><em>Eine Eigentumswohnung in München kostet sehr viel.</em></td></tr>
                        <tr><td class="verb">das Einfamilienhaus · die Einfamilienhäuser</td><td class="ro-text">casa unifamilială / -e (n, Umlaut!)</td><td><em>Auf dem Land wohnen viele im Einfamilienhaus.</em></td></tr>
                        <tr><td class="verb">das Reihenhaus · die Reihenhäuser</td><td class="ro-text">casa în șir (n, Umlaut!)</td><td><em>Reihenhäuser sind kompakt und günstiger.</em></td></tr>
                        <tr><td class="verb">die WG (Wohngemeinschaft) · -s</td><td class="ro-text">locuință în comun (cu prieteni)</td><td><em>Studenten leben oft in einer WG.</em></td></tr>
                        <tr><td class="verb">das Studentenwohnheim · -e</td><td class="ro-text">căminul studențesc / -e</td><td><em>Im Studentenwohnheim ist es günstig.</em></td></tr>
                        <tr><td class="verb">die Ferienwohnung · die Ferienwohnungen</td><td class="ro-text">apartament de vacanță (Airbnb, f)</td><td><em>Eine Ferienwohnung vermieten ist beliebt.</em></td></tr>
                        <tr><td class="verb">der Mieter / die Mieterin · -nen</td><td class="ro-text">chiriaș / -ă</td><td><em>Der Mieter zahlt jeden Monat die Miete.</em></td></tr>
                        <tr><td class="verb">der Vermieter / die Vermieterin · -nen</td><td class="ro-text">proprietarul / -a care închiriază</td><td><em>Mein Vermieter ist sehr nett.</em></td></tr>
                    </tbody>
                </table>
            </div>

            <div class="theory-box" style="background:#dbeafe; border-color:#3b82f6;">
                <h4>💡 Strukturen für die mündliche Prüfung</h4>
                <ul>
                    <li><strong>Ich wohne in</strong> + Dat: <em>Ich wohne in einer Mietwohnung in Berlin.</em></li>
                    <li><strong>Ich teile eine WG mit</strong> + Dat: <em>Ich teile eine WG mit zwei Freundinnen.</em></li>
                    <li><strong>Mein Traumhaus wäre</strong>: <em>Mein Traumhaus wäre ein Einfamilienhaus auf dem Land.</em></li>
                </ul>
            </div>
        </div>
    </div>

    <!-- 2: Stadt vs. Land -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(1)">
            <span>🏙️🌳 2. Stadt vs. Land — oraș vs. sat (pereche-cheie!)</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-1">
            <div class="andreea-note">
                <img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar">
                <div class="andreea-note-content">
                    <div class="speaker">Andreea îți spune:</div>
                    <div class="text">PERECHE-CHEIE B2: <em>„Stadt oder Land — wo lebt es sich besser?"</em>. Învață <strong>die Großstadt</strong> (oraș mare — Berlin, München, Hamburg, Köln) vs. <strong>die Kleinstadt</strong> (oraș mic — Potsdam, Heidelberg) vs. <strong>das Dorf</strong> (sat). Și capcana: <strong>in der Stadt</strong> (în oraș, Dativ) vs. <strong>in die Stadt</strong> (spre oraș, Akkusativ — direcție!). 🦋</div>
                </div>
            </div>

            <div class="theory-box">
                <h4>📚 Vocabular — Stadt vs. Land</h4>
                <table class="theory-table">
                    <thead><tr><th>Germană (Sg + Pl)</th><th>Traducere RO</th><th>Exemplu în context</th></tr></thead>
                    <tbody>
                        <tr><td class="verb">die Großstadt · die Großstädte</td><td class="ro-text">orașul mare / orașele (f, Umlaut!)</td><td><em>Berlin ist die größte Großstadt Deutschlands.</em></td></tr>
                        <tr><td class="verb">die Kleinstadt · die Kleinstädte</td><td class="ro-text">orașul mic (f, Umlaut!)</td><td><em>Potsdam ist eine schöne Kleinstadt.</em></td></tr>
                        <tr><td class="verb">der Vorort · die Vororte</td><td class="ro-text">suburbia / suburbiile (m)</td><td><em>Im Vorort ist es ruhiger als im Zentrum.</em></td></tr>
                        <tr><td class="verb">das Dorf · die Dörfer</td><td class="ro-text">satul / satele (n, Umlaut!)</td><td><em>In meinem Dorf gibt es nur 200 Einwohner.</em></td></tr>
                        <tr><td class="verb">das Stadtzentrum · die Stadtzentren</td><td class="ro-text">centrul orașului</td><td><em>Das Stadtzentrum ist mit dem Auto schwer zu erreichen.</em></td></tr>
                        <tr><td class="verb">das Land (auf dem Land)</td><td class="ro-text">zona rurală (la țară — Dativ idiomatic)</td><td><em>Ich möchte auf dem Land wohnen.</em></td></tr>
                        <tr><td class="verb">die Einwohnerzahl (nur Sg.)</td><td class="ro-text">populația, numărul de locuitori</td><td><em>Berlin hat eine Einwohnerzahl von 3,7 Millionen.</em></td></tr>
                        <tr><td class="verb">ländlich · städtisch</td><td class="ro-text">rural · urban (adj.)</td><td><em>Ich bevorzuge das ländliche Leben.</em></td></tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>

    <!-- 3: Wohnungsmarkt -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(2)">
            <span>💰 3. Wohnungsmarkt — chirie, prețuri, Maklerprovision</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-2">
            <div class="andreea-note">
                <img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar">
                <div class="andreea-note-content">
                    <div class="speaker">Andreea îți spune:</div>
                    <div class="text">Cuvinte B2 esențiale: <strong>die Kaltmiete</strong> (chiria fără utilități — KM la anunțuri) vs. <strong>die Warmmiete</strong> (chiria cu utilități incluse — WM). Diferența e <strong>die Nebenkosten</strong> (NK — încălzire, apă, internet etc.). Plus <strong>die Kaution</strong> (garanție — de obicei 2-3 luni chirie depusă la mutare). Și <strong>der Mietspiegel</strong> = tabel oficial cu chiriile medii pe cartier (te protejează de chirii exagerate). 🦋</div>
                </div>
            </div>

            <div class="theory-box">
                <h4>📚 Vocabular — Wohnungsmarkt</h4>
                <table class="theory-table">
                    <thead><tr><th>Germană (Sg + Pl)</th><th>Traducere RO</th><th>Exemplu în context</th></tr></thead>
                    <tbody>
                        <tr><td class="verb">die Miete · die Mieten</td><td class="ro-text">chiria / chiriile (f)</td><td><em>Die Miete steigt jedes Jahr.</em></td></tr>
                        <tr><td class="verb">die Kaltmiete (KM) / die Warmmiete (WM)</td><td class="ro-text">chiria rece (fără utilități) / caldă (cu)</td><td><em>800 € Kaltmiete + 200 € Nebenkosten = 1000 € Warmmiete.</em></td></tr>
                        <tr><td class="verb">die Nebenkosten (Pl., NK)</td><td class="ro-text">utilități (NUR Plural!)</td><td><em>Die Nebenkosten enthalten Heizung und Wasser.</em></td></tr>
                        <tr><td class="verb">die Kaution · die Kautionen</td><td class="ro-text">garanția / garanțiile (depozit)</td><td><em>Die Kaution beträgt 2 Monatsmieten.</em></td></tr>
                        <tr><td class="verb">der Kaufpreis · die Kaufpreise</td><td class="ro-text">prețul de cumpărare (m)</td><td><em>Der Kaufpreis pro Quadratmeter ist hoch.</em></td></tr>
                        <tr><td class="verb">die Maklerprovision · -en</td><td class="ro-text">comisionul agenției imobiliare</td><td><em>Die Maklerprovision liegt bei 7%.</em></td></tr>
                        <tr><td class="verb">der Mietspiegel · die Mietspiegel</td><td class="ro-text">tabelul oficial al chiriilor medii</td><td><em>Laut Mietspiegel kostet 1 m² in Berlin 14 €.</em></td></tr>
                        <tr><td class="verb">der Mietvertrag · die Mietverträge</td><td class="ro-text">contractul de chirie (m, Umlaut!)</td><td><em>Der Mietvertrag ist auf unbestimmte Zeit.</em></td></tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>

    <!-- 4: Infrastruktur -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(3)">
            <span>🚆 4. Infrastruktur — transport, magazine, școli, spațiu verde</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-3">
            <div class="andreea-note">
                <img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar">
                <div class="andreea-note-content">
                    <div class="speaker">Andreea îți spune:</div>
                    <div class="text">Cuvinte cheie: <strong>der Nahverkehr (ÖPNV)</strong> = transport public local (öffentlicher Personennahverkehr — abreviere oficială!) + <strong>Einkaufsmöglichkeiten</strong> (posibilități de cumpărături, cuvânt compus B2 tipic) + <strong>die Grünflächen</strong> (spațiu verde — Park, Wald, See). Argument B2 puternic pentru Stadt: „Die Infrastruktur ist hervorragend!" — pentru Land: „Mehr Grünflächen und Natur." 🦋</div>
                </div>
            </div>

            <div class="theory-box">
                <h4>📚 Vocabular — Infrastruktur</h4>
                <table class="theory-table">
                    <thead><tr><th>Germană (Sg + Pl)</th><th>Traducere RO</th><th>Exemplu în context</th></tr></thead>
                    <tbody>
                        <tr><td class="verb">der Nahverkehr (ÖPNV) (nur Sg.)</td><td class="ro-text">transport public local</td><td><em>In Berlin ist der Nahverkehr ausgezeichnet.</em></td></tr>
                        <tr><td class="verb">der Bahnhof · die Bahnhöfe</td><td class="ro-text">gara / gările (m, Umlaut!)</td><td><em>Der Hauptbahnhof ist im Zentrum.</em></td></tr>
                        <tr><td class="verb">die U-Bahn · die S-Bahn</td><td class="ro-text">metroul / trenul urban</td><td><em>Mit der U-Bahn bin ich in 10 Minuten am Ziel.</em></td></tr>
                        <tr><td class="verb">die Einkaufsmöglichkeit · -en</td><td class="ro-text">posibilități de cumpărături (Umlaut!)</td><td><em>In meinem Viertel gibt es viele Einkaufsmöglichkeiten.</em></td></tr>
                        <tr><td class="verb">die Schule · die Schulen</td><td class="ro-text">școala / școlile (f)</td><td><em>Die Schule ist nur 5 Minuten zu Fuß entfernt.</em></td></tr>
                        <tr><td class="verb">das Krankenhaus · die Krankenhäuser</td><td class="ro-text">spitalul / spitalele (n, Umlaut!)</td><td><em>Das nächste Krankenhaus ist 10 km entfernt.</em></td></tr>
                        <tr><td class="verb">die Grünfläche · die Grünflächen</td><td class="ro-text">spațiul verde / spațiile</td><td><em>Berlin hat viele Grünflächen — z.B. den Tiergarten.</em></td></tr>
                        <tr><td class="verb">das Viertel · die Viertel</td><td class="ro-text">cartierul / cartierele (n, plural identic)</td><td><em>Prenzlauer Berg ist ein beliebtes Viertel in Berlin.</em></td></tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>

    <!-- 5: Probleme moderne -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(4)">
            <span>⚠️ 5. Probleme moderne — Wohnungsnot, Gentrifizierung, Mietsteigerung</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-4">
            <div class="andreea-note">
                <img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar">
                <div class="andreea-note-content">
                    <div class="speaker">Andreea îți spune:</div>
                    <div class="text">Cuvinte CHEIE B2: <strong>die Wohnungsnot</strong> (criza locuințelor — Berlin, München, Hamburg!) + <strong>die Gentrifizierung</strong> (gentrificarea — locuitorii originali sunt împinși afară de chirii mari) + <strong>die Mietsteigerung</strong> (creșterea chiriei). Și capcana <strong>die Landflucht</strong> (exod rural — tinerii pleacă din sate) vs. <strong>der Stadtflucht-Trend</strong> (trendul invers după COVID — orașenii vor înapoi la sat). Citează: „Laut Statistik..." 🦋</div>
                </div>
            </div>

            <div class="theory-box">
                <h4>📚 Vocabular — Probleme moderne</h4>
                <table class="theory-table">
                    <thead><tr><th>Germană (Sg + Pl)</th><th>Traducere RO</th><th>Exemplu în context</th></tr></thead>
                    <tbody>
                        <tr><td class="verb">die Wohnungsnot (nur Sg.)</td><td class="ro-text">criza locuințelor</td><td><em>In München herrscht große Wohnungsnot.</em></td></tr>
                        <tr><td class="verb">die Gentrifizierung (nur Sg.)</td><td class="ro-text">gentrificarea (zone gentrificate)</td><td><em>Die Gentrifizierung verdrängt alteingesessene Bewohner.</em></td></tr>
                        <tr><td class="verb">die Mietsteigerung · -en</td><td class="ro-text">creșterea chiriei</td><td><em>Die Mietsteigerung liegt bei 8% pro Jahr.</em></td></tr>
                        <tr><td class="verb">die Landflucht (nur Sg.)</td><td class="ro-text">exodul rural (tineri din sate)</td><td><em>Landflucht ist ein großes Problem in Brandenburg.</em></td></tr>
                        <tr><td class="verb">die Pendelei (nur Sg.) / pendeln</td><td class="ro-text">naveta / a face naveta</td><td><em>Viele pendeln täglich 2 Stunden zur Arbeit.</em></td></tr>
                        <tr><td class="verb">die Vereinsamung (nur Sg.)</td><td class="ro-text">însingurare (problemă în orașe mari)</td><td><em>Vereinsamung ist auch in Großstädten ein Problem.</em></td></tr>
                        <tr><td class="verb">der Lärm (nur Sg.)</td><td class="ro-text">zgomotul</td><td><em>Der Lärm in der Innenstadt stört mich.</em></td></tr>
                        <tr><td class="verb">die Luftverschmutzung (nur Sg.)</td><td class="ro-text">poluarea aerului</td><td><em>Luftverschmutzung schadet der Gesundheit.</em></td></tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>

    <!-- 6: Trends 2025-2026 -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(5)">
            <span>🌱 6. Trends 2025-2026 — Co-Living, Tiny House, Smart Home, nachhaltiges Bauen</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-5">
            <div class="andreea-note">
                <img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar">
                <div class="andreea-note-content">
                    <div class="speaker">Andreea îți spune:</div>
                    <div class="text">Trend-uri 2026: <strong>Co-Living</strong> (locuit comun pentru adulți — variantă modernă a WG-ului, dar premium), <strong>Tiny House</strong> (case mici 20-30 m² — minimalism, nachhaltig), <strong>Mikroapartment</strong> (apartamente sub 30 m² — pentru singles în orașe scumpe), <strong>Smart Home</strong> (case inteligente cu app-uri), <strong>nachhaltiges Bauen</strong> (construcții ecologice — solar, lemn, izolare bună). 🦋</div>
                </div>
            </div>

            <div class="theory-box">
                <h4>📚 Vocabular — Trends 2025-2026</h4>
                <table class="theory-table">
                    <thead><tr><th>Germană (Sg + Pl)</th><th>Traducere RO</th><th>Exemplu în context</th></tr></thead>
                    <tbody>
                        <tr><td class="verb">das Co-Living (nur Sg.)</td><td class="ro-text">co-living (locuit premium în comun)</td><td><em>Co-Living wird bei jungen Berufstätigen beliebt.</em></td></tr>
                        <tr><td class="verb">das Tiny House · die Tiny Houses</td><td class="ro-text">căsuța mică (20-30 m², n)</td><td><em>Ein Tiny House passt zu Minimalisten.</em></td></tr>
                        <tr><td class="verb">das Mikroapartment · die Mikroapartments</td><td class="ro-text">microapartament (sub 30 m²)</td><td><em>Mikroapartments sind ideal für Singles in Großstädten.</em></td></tr>
                        <tr><td class="verb">das Smart Home · die Smart Homes</td><td class="ro-text">casa inteligentă</td><td><em>In einem Smart Home steuert man Licht und Heizung per App.</em></td></tr>
                        <tr><td class="verb">das nachhaltige Bauen (nur Sg.)</td><td class="ro-text">construcție sustenabilă</td><td><em>Nachhaltiges Bauen mit Holz wird immer populärer.</em></td></tr>
                        <tr><td class="verb">die Energieeffizienz (nur Sg.)</td><td class="ro-text">eficiența energetică</td><td><em>Energieeffizienz spart Geld und schützt das Klima.</em></td></tr>
                        <tr><td class="verb">die Solaranlage · die Solaranlagen</td><td class="ro-text">instalație solară</td><td><em>Eine Solaranlage senkt die Stromkosten.</em></td></tr>
                        <tr><td class="verb">die Wärmedämmung (nur Sg.)</td><td class="ro-text">izolația termică</td><td><em>Eine gute Wärmedämmung ist wichtig im Winter.</em></td></tr>
                    </tbody>
                </table>
            </div>

            <div class="theory-box" style="background:#dbeafe; border-color:#3b82f6;">
                <h4>💡 Strukturen für die Argumentation (für Teil 2)</h4>
                <ul>
                    <li><strong>In der Stadt</strong> (Dat — loc) vs. <strong>in die Stadt</strong> (Akk — direcție): <em>Ich lebe in der Stadt. — Ich fahre in die Stadt.</em></li>
                    <li><strong>Auf dem Land</strong> (idiomatic — fără articol): <em>Ich möchte auf dem Land wohnen.</em></li>
                    <li><strong>Im Vergleich zur Stadt</strong>: <em>Im Vergleich zur Stadt ist das Land ruhiger.</em></li>
                    <li><strong>Laut Mietspiegel / laut Statistik</strong>: <em>Laut Mietspiegel kostet Berlin durchschnittlich 14 € pro m².</em></li>
                    <li><strong>Es kommt darauf an, wo</strong>: <em>Es kommt darauf an, wo du arbeitest.</em></li>
                </ul>
            </div>
        </div>
    </div>
`;

document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('theory-container');
    if (container) container.innerHTML = theoryHTML;
});
