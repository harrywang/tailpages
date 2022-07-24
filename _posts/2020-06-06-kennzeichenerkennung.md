---
layout: post
title: Risiken der Bilderkennung - Kennzeichenerkennung (DE)
tags: de computer-vision ml ai
permalink: de/risiken-der-bilderkennung/kennzeichenerkennung
author: Fuxlab
---

### Kennzeichenüberwachung in Deutschland
In Teilen von Deutschland werden durch Systeme zur automatischen Kennzeichenerkennung (sog. AKLS) Daten auf Bundesstraßen und Autobahnen von vorbeifahrenden Fahrzeugen erhoben. Ein Standarddatensatz beinhaltet Informationen über:

- Kennzeichen
- Ort
- Datum / Zeit
- Fahrtrichtung

In folgenden Bundesländern wird wie folgt Kennzeichenüberwachung eingesetzt:

**Geplant:** Baden Württemberg, Saarland \
**Ja: dauerhaft:** Bayern, Hessen, Sachsen \
**Ja:** Nordrhein-Westfalen, Niedersachsen, Hamburg, Mecklenburg-Vorpommern, Brandenburg \
**Nein:** Bremen, Schleswig-Holstein, Sachsen-Anhalt, Thüringen, Berlin

Diese Daten – gehäuft gesammelt an Bundesland- und Bundes-Grenzübergängen – werden mit den Fahndungslisten der Behörden abgeglichen und mögliche Treffer werden weiterverfolgt. Mit dem Einsatz soll organisierte und schwere Kriminalität verhindert werden.

Datensätze welche nicht unter dieses Kriterien fallen  müssen ab diesem Zeitpunkt gelöscht werden. Trotzdem bietet ein solches – für den Autofahrer meist unbemerktes – System die Möglichkeit jeden Bürger (bzw. dessen Fahrzeug) automatisch zu Orten und ein Bewegungsprofil zu erstellen.

![Risiken der Bilderkennung - Kennzeichenerkennung]({{site.baseurl}}/assets/img/posts/kennzeichenerkennung.jpg)

Laut einem Urteil vom Februar 2019 ist diese Erfassung in einigen Bundesländern nicht mit dem Gesetz vereinbar. Im aktuellen Fall wurde über die Rechtmäßigkeit von 15 fest installierten Infrarotkameras in Bayern verhandelt. Demnach urteilt das Bundesverfassungsgericht “zur Freiheitlichkeit des Gemeinwesens gehöre es, dass sich Bürgerinnen und Bürger fortbewegen können, ohne dabei jederzeit beliebig staatlich registriert zu werden und die eigene Unbescholtenheit gewissermaßen nachweisen zu müssen”. Hiermit wird der Einsatz nur zur Vermeidung von “Rechtsgütern von erheblichem Gewicht” (also als Gefahrenabwehr, gg. z.B. Gewalttaten) zugelassen. Dieses schließt z.B. eine Schleierfahndung (bis zu 30km von Grenzen oder mit Grenzbezug, d.h. Auch Flughäfen und Bahnhöfen), oder aber Abwehren bei konkreter Gefahrenlage (Großveranstaltungen, Fahndungen) als zulässig mit ein. Diese sei aber nicht bei allen Anlagen gegeben, die Gesetzestexte zur Zulassung müssen im entsprechenden Bundesland angepasst werden. Bis dahin dürfen keine weiteren Daten erhoben, bzw. verwendet werden.

### Eingesetzte Technologien
Wie im Bild (X) oben gezeigt werden vermehrt stationäre Systeme eingesetzt. Diese sind häufig für den Autofahrer unsichtbar, z.B. hinter Autobahnschildern angebracht, oder in Maut-Systeme integriert. Diese Systeme bieten einen automatischen Datenbankabgleich von erkannten Kennzeichen und hohe Leseraten bei unterschiedlichen Lichtverhältnissen und Geschwindigkeiten.

Die zweite Systemgruppe sind die mobilen Einheiten welche von der Polizei nur bei Bedarf genutzt werden können. Dieser Bedarfsfall kann z.B. bei einer Großveranstaltung oder Rasterfahndung eintreten. Die Einheiten sind ähnlicher Beschaffenheit wie Radarkontrollsysteme und können am Straßenrand aufgestellt werden. Zur Einstellung und Betrieb ist Personal notwendig, was den Einsatz der mobilen Geräte verteuert und verfälschen kann. Falsch eingestellte Geräte können weder zu wenig auslösen oder aber optisch nahe beieinanderliegende Zeichen (Null und 0, I und L) verwechseln.

Gemein haben beide Systeme, dass zum Erkennen des Kennzeichens systembedingt ein komplettes Bild des Fahrzeuges und der Situation aufgenommen werden muss. Zudem haben die Personen im Fahrzeug in den meisten Fällen kein Wissen über die Kontrolle. Es gibt keinen Blitz, keinen Hinweis oder Schilder. Die Kameras werden bestmöglichst versteckt.

In beiden Systemen werden vermehrt Infrarotkameras eingesetzt, welche nicht Mittels einfacher OCR können die einzelnen Zeichen auf dem Kennzeichen vom aufgenommenen Foto in Text konvertiert werden.
Gängige Hersteller bieten neben der Kennzeichenerkennung auch weitere Erkennungen über deren Hardware an: Hersteller / Auto-Marke, Modell, Geschwindigkeit (…)

Bei der Suche nach potentiellen Treffern werden unterschiedliche Suchverfahren eingesetzt. Bei der Blacklist-Suche werden nur die Treffer weiterverarbeitet, alle Datensätze welche nicht in der Datenbank vorhanden sind werden direkt gelöscht. Diese Methode eignet sich bei einer systematischen Suche, wo die Ziele klar definiert sind. Dieses können Fahndungsunterstützung, Grenzkontrollen oder das auffinden von gestohlenen oder unversicherten Fahrzeugen sein.Bei der Whitelist-Suche hingegen liegt eine Liste von zugelassenen Merkmalen vor bei der nur Fahrzeuge gemeldet werden, welche diese nicht erfüllen. Ein Einsatz neben der Kennzeichenerkennung ist hierfür ist z.B. die Überprüfung auf das Vorhandensein Vignetten oder Plaketten.
Aktuell ist hier die Diskussion für die Überwachung der Dieselfahrer  bei herrschenden Fahrverboten in der Kritik. Das Bundesverfassungsgericht hat den Einsatz der Kennzeichen-Erfassung nur zur Gefahrenabwehr zugelassen (siehe oben) – die sog. “Diesel-Rasterfahndung” zählt hier nicht zu.

----

**Quellen:**\
Beitragsbild – [Bruno Kelzer on Unsplash](https://unsplash.com/photos/N45CQmCg9PQ)
