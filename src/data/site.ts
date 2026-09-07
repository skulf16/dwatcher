export const SITE = {
  name: "dwatcher",
  fullName: "dwatcher by Datadiorama",
  url: "https://dwatcher.de",
  tagline: "Messen, Wissen, Informieren",
  claim: "Machen Sie Ihre IT unsichtbar stabil",
  description:
    "Der dwatcher ist ein von Datadiorama entwickeltes Gerät speziell zur Überwachung der Funktionen der an Ihr Netzwerk angeschlossenen Geräte. Rund um die Uhr sorgt er dafür, dass kein Speicherausfall, keine voll-laufende Festplatte, kein ungewöhnlicher Login, kein überfälliges Update Ihrer Aufmerksamkeit entgeht.",
  locale: "de_DE",
  email: "hallo@datadiorama.de",
  parent: {
    name: "Datadiorama",
    url: "https://datadiorama.de",
  },
} as const;

// Menüpunkte wie auf der alten Seite (Home = Logo)
export const NAV = [
  { label: "Features", href: "#features" },
  { label: "Technik", href: "#technik" },
  { label: "Preise", href: "#preise" },
  { label: "Kontakt", href: "#kontakt" },
] as const;
