Add-Type -AssemblyName System.Speech
$synth = New-Object System.Speech.Synthesis.SpeechSynthesizer
try { $synth.SelectVoice("Microsoft Hedda Desktop") } catch { Write-Host "Hedda voice not available, using default DE voice" }
$synth.Rate = -2

$ae = [char]0x00E4; $oe = [char]0x00F6; $ue = [char]0x00FC; $ss = [char]0x00DF
$AE = [char]0x00C4; $OE = [char]0x00D6; $UE = [char]0x00DC

$outDir = "$PSScriptRoot\cards"
if (!(Test-Path $outDir)) { New-Item -ItemType Directory -Path $outDir | Out-Null }

$cards = @(
    @("01-mietwohnung.wav", "die Mietwohnung, die Mietwohnungen"),
    @("02-eigentumswohnung.wav", "die Eigentumswohnung"),
    @("03-einfamilienhaus.wav", "das Einfamilienhaus"),
    @("04-reihenhaus.wav", "das Reihenhaus"),
    @("05-wg.wav", "die Wohngemeinschaft"),
    @("06-mieter.wav", "der Mieter, die Mieterin"),
    @("07-grossstadt.wav", "die Gro${ss}stadt, die Gro${ss}st${ae}dte"),
    @("08-kleinstadt.wav", "die Kleinstadt, die Kleinst${ae}dte"),
    @("09-vorort.wav", "der Vorort, die Vororte"),
    @("10-dorf.wav", "das Dorf, die D${oe}rfer"),
    @("11-auf-dem-land.wav", "auf dem Land wohnen"),
    @("12-miete.wav", "die Miete, die Mieten"),
    @("13-kaltmiete.wav", "die Kaltmiete"),
    @("14-nebenkosten.wav", "die Nebenkosten"),
    @("15-kaution.wav", "die Kaution"),
    @("16-mietspiegel.wav", "der Mietspiegel"),
    @("17-mietvertrag.wav", "der Mietvertrag, die Mietvertr${ae}ge"),
    @("18-nahverkehr.wav", "der Nahverkehr"),
    @("19-bahnhof.wav", "der Bahnhof, die Bahnh${oe}fe"),
    @("20-einkaufsmoeglichkeit.wav", "die Einkaufsm${oe}glichkeit"),
    @("21-gruenflaeche.wav", "die Gr${ue}nfl${ae}che, die Gr${ue}nfl${ae}chen"),
    @("22-viertel.wav", "das Viertel, die Viertel"),
    @("23-wohnungsnot.wav", "die Wohnungsnot"),
    @("24-gentrifizierung.wav", "die Gentrifizierung"),
    @("25-mietsteigerung.wav", "die Mietsteigerung"),
    @("26-landflucht.wav", "die Landflucht"),
    @("27-pendeln.wav", "pendeln"),
    @("28-tiny-house.wav", "das Tiny House"),
    @("29-smart-home.wav", "das Smart Home"),
    @("30-nachhaltiges-bauen.wav", "nachhaltiges Bauen"),
    @("31-stadt-land.wav", "In der Stadt, auf dem Land"),
    @("32-laut-mietspiegel.wav", "Laut Mietspiegel")
)

$total = $cards.Count
$ok = 0
foreach ($card in $cards) {
    $filename = $card[0]
    $text = $card[1]
    $outPath = Join-Path $outDir $filename
    try {
        $synth.SetOutputToWaveFile($outPath)
        $synth.Speak($text)
        $synth.SetOutputToNull()
        $ok++
        Write-Host "  [$ok/$total] $filename" -ForegroundColor Green
    } catch {
        Write-Host "  ERROR: $filename -- $_" -ForegroundColor Red
    }
}

$synth.Dispose()
Write-Host ""
Write-Host "Generated $ok / $total WAV files in $outDir" -ForegroundColor Cyan
