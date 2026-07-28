# Notater Skriver

[Deutsch](#deutsch) | [English](#english)

---

## Deutsch

**Notater Skriver** ist eine moderne, schlanke Webanwendung zur Textverarbeitung, entwickelt mit HTML, CSS und JavaScript. 

> ⚠️ **Hinweis:** Die Website und die Benutzeroberfläche sind derzeit **nur auf Deutsch** verfügbar.

### Aufbau der Anwendung
Die Webanwendung ist in zwei Hauptbereiche unterteilt:

1. **Das Dashboard:** Die zentrale Startseite zur Verwaltung deiner Arbeit.
   * **Neu erstellen:** Schnelles Anlegen eines neuen, leeren Dokuments mit einem Klick.
   * **Zuletzt verwendet:** Eine Übersicht deiner zuletzt bearbeiteten Dokumente inklusive Zeitstempel und einer Option zum schnellen Löschen.
   * **Notater News:** Ein integrierter Feed für Ankündigungen, wichtige Info-Meldungen, Barrierefreiheits-Updates (z. B. Screenreader-Optimierungen) und Versionshinweise (Changelogs).
2. **Die Bearbeitungsansicht:** Der eigentliche Editor mit einer vollwertigen Werkzeugleiste für die professionelle Textformatierung.

### Datenspeicherung
Deine Dokumente werden sicher und direkt im Browser über **IndexedDB** gespeichert. Dadurch bleiben alle Texte und Bearbeitungsstände auch nach dem Schließen oder Aktualisieren des Tabs lokal auf deinem Gerät erhalten, ohne dass eine externe Datenbank benötigt wird.

### Struktur und Menüfunktionen (Bearbeitungsansicht)
Die Editor-Oberfläche ist intuitiv in verschiedene Reiter unterteilt, wie man es von modernen Texteditoren kennt:
* **Start:** Schneller Zugriff auf Schriftarten, Textgrößen, Stile, Effekte (wie hoch- und tiefgestellt), Textfarben und Ausrichtungen.
* **Einfügen:** Einbinden von Tabellen, Listen (Aufzählungen/Nummerierungen) und Trennlinien für strukturierte Dokumente.
* **Format:** Erweiterte Werkzeuge zur Layout-Anpassung, für Zeilenabstände und Seitenränder.
* **Tools:** Nützliche Hilfsmittel wie die Suchen-und-Ersetzen-Funktion.
* **Export:** Schnelles Speichern der Arbeit als PDF, Word-Dokument (.doc), HTML oder reine Textdatei (.txt).
* **Katalog:** Hier befindet sich das integrierte **Benutzerhandbuch** mit allen wichtigen Informationen zur Anwendung.
* **Ansicht:** Optionen zur Anpassung der Benutzeroberfläche und des Fokus-Modus.

### Hauptfunktionen
* **Echtzeit-Textformatierung:** Ändere Schriftarten, Textgrößen, Farben und Stile direkt beim Schreiben.
* **Erweiterte Effekte:** Mathematische oder chemische Notationen durch einfachen Klick auf hoch- oder tiefgestellten Text.
* **Statistiken in Echtzeit:** Die Statusleiste am unteren Rand zeigt dir stets die aktuelle Anzahl der Wörter, Zeichen sowie die geschätzte Lesezeit an.
* **Verlaufskontrolle:** Fehler schnell korrigieren mit den integrierten Undo- und Redo-Pfeilen.

### Benutzerhandbuch & Tastenkombinationen
Für eine effiziente Bedienung öffne bitte das integrierte **Benutzerhandbuch** über den Reiter **Katalog**. Dort findest du eine vollständige Liste aller gängigen Tastenkombinationen für ein flüssiges Arbeiten:
* `Strg + B` / `Strg + Shift + B`: Text fetten
* `Strg + I`: Text kursiv setzen
* Viele weitere standardisierte Tastenkombinationen gängiger Schreibprogramme.

### Danksagung & Credits
* **Icons:** Die Benutzeroberfläche nutzt die Open-Source-Icons von [Lucide](https://lucide.dev).
* **Entwickler:** Dieses Projekt wird mit viel Liebe zum Detail entwickelt. Alle Rechte vorbehalten.

---

## English

**Notater Skriver** is a modern, lightweight web-based word processor built using HTML, CSS, and JavaScript.

> ⚠️ **Note:** The website and user interface are currently **only available in German**.

### Application Structure
The web application is split into two main sections:

1. **The Dashboard:** The central hub used for managing your work.
   * **Neu erstellen (Create New):** Quickly start a new, blank document with a single click.
   * **Zuletzt verwendet (Recent Documents):** An overview of your recently edited files, complete with timestamps and a quick-delete option.
   * **Notater News:** A built-in feed for general announcements, information updates, accessibility improvements (e.g., screen reader support), and version changelogs.
2. **The Editor View:** The actual writing interface equipped with a full toolbar for professional text formatting.

### Data Storage
Your documents are stored securely and directly within the browser using **IndexedDB**. This ensures that all texts and project states are saved locally on your device even after closing or refreshing the tab, without requiring an external database.

### Structure and Menu Functions (Editor View)
The editor interface is intuitively divided into various tabs, familiar from professional text editors:
* **Start:** Quick access to fonts, text sizes, styles, effects (like superscript/subscript), text colors, and alignments.
* **Einfügen (Insert):** Integration of tables, lists (bullet points/numbering), and horizontal lines for structured documents.
* **Format:** Advanced tools for layout adjustments, line spacing, and page margins.
* **Tools:** Useful utilities such as the built-in find-and-replace feature.
* **Export:** Quickly save your work as a PDF, Word Document (.doc), HTML, or plain text (.txt).
* **Katalog (Catalog):** Contains the built-in **User Manual** with all essential application insights.
* **Ansicht (View):** Interface customization and focus mode options.

### Key Features
* **Real-Time Text Formatting:** Modify fonts, text sizes, colors, and styles on the fly.
* **Advanced Text Effects:** Easily create mathematical or chemical notations using superscript and subscript.
* **Live Document Statistics:** The bottom status bar tracks your words, characters, and estimated reading time in real time.
* **History Control:** Quickly correct mistakes with integrated undo and redo actions.

### User Manual & Shortcuts
For an efficient workflow, please refer to the built-in **User Manual** located under the **Katalog** tab. It contains a full list of standard keyboard shortcuts to speed up your writing:
* `Ctrl + B`: Bold text
* `Ctrl + I`: Italic text
* Many other industry-standard shortcuts used in popular text processors.

### Credits
* **Icons:** The user interface features open-source icons provided by [Lucide](https://lucide.dev).
* **Developer:** This project is developed with great care and dedication. All rights reserved.
