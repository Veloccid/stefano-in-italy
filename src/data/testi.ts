// Tutti i testi del sito in 3 lingue: inglese (principale), italiano, spagnolo.
export type Lingua = 'en' | 'it' | 'es';
export const LINGUE: Lingua[] = ['en', 'it', 'es'];
export const TESTI: Record<string, Record<Lingua, string>> = {
 "meta.title": {
  "en": "Stefano In Italy — Tour leader in Italy",
  "it": "Stefano In Italy — Tour leader in Italia",
  "es": "Stefano In Italy — Tour leader en Italia"
 },
 "meta.desc": {
  "en": "Stefano Alonzi, certified tour leader: day tours and multi-day trips across Italy for groups of up to 80, in English, Italian and Spanish. Verified reviews, experience and contacts for collaborations.",
  "it": "Stefano Alonzi, tour leader certificato: tour di giornata e viaggi di più giorni in Italia per gruppi fino a 80 persone, in italiano, inglese e spagnolo. Recensioni verificate, curriculum e contatti per collaborazioni.",
  "es": "Stefano Alonzi, tour leader certificado: tours de un día y viajes de varios días por Italia para grupos de hasta 80 personas, en inglés, italiano y español. Reseñas verificadas, experiencia y contacto para colaboraciones."
 },
 "nav.aria": {
  "en": "Sections",
  "it": "Sezioni",
  "es": "Secciones"
 },
 "nav.reviews": {
  "en": "Reviews",
  "it": "Recensioni",
  "es": "Reseñas"
 },
 "nav.cv": {
  "en": "Experience",
  "it": "Curriculum",
  "es": "Experiencia"
 },
 "nav.collab": {
  "en": "Contact",
  "it": "Contatti",
  "es": "Contacto"
 },
 "lang.aria": {
  "en": "Language",
  "it": "Lingua",
  "es": "Idioma"
 },
 "hero.aria": {
  "en": "Welcome",
  "it": "Benvenuto",
  "es": "Bienvenida"
 },
 "hero.sub": {
  "en": "Tours and trips across Italy, told by someone who walks them every day: art, architecture, local food and traditions.",
  "it": "Tour e viaggi in Italia raccontati da chi ci cammina ogni giorno: arte, architettura, cibo locale e tradizioni.",
  "es": "Tours y viajes por Italia contados por quien los recorre cada día: arte, arquitectura, cocina local y tradiciones."
 },
 "hero.hint": {
  "en": "scroll, let's go!",
  "it": "scorri, si parte!",
  "es": "¡desliza, nos vamos!"
 },
 "intro.h": {
  "en": "Hi, I'm Stefano",
  "it": "Ciao, sono Stefano",
  "es": "Hola, soy Stefano"
 },
 "intro.lead": {
  "en": "I'll show you Italy the way I would a friend who's visiting: no script, plenty of true stories.",
  "it": "Ti porto in giro per l'Italia come farei con un amico in visita: niente copione, tante storie vere.",
  "es": "Te llevo por Italia como haría con un amigo de visita: sin guion, muchas historias reales."
 },
 "intro.p1": {
  "en": "I'm Stefano Alonzi, a certified tour leader with a degree in Science and Technology for Cultural Heritage. Since 2022 I've led groups across Tuscany and the rest of Italy: day tours, multi-day trips and food tours in Florence, with groups of up to 80 people.",
  "it": "Sono Stefano Alonzi, tour leader certificato e laureato in Scienze e Tecnologie per i Beni Culturali. Dal 2022 accompagno gruppi in Toscana e in tutta Italia: tour di giornata, viaggi di più giorni, food tour a Firenze, fino a gruppi di 80 persone.",
  "es": "Soy Stefano Alonzi, tour leader certificado y graduado en Ciencias y Tecnologías para el Patrimonio Cultural. Desde 2022 acompaño grupos por la Toscana y toda Italia: tours de un día, viajes de varios días y food tours en Florencia, con grupos de hasta 80 personas."
 },
 "intro.p2": {
  "en": "I speak English, Italian and Spanish. I love art history, architecture, local food and traditions, and I look after every detail so the trip runs smoothly from arrival to departure.",
  "it": "Parlo italiano, inglese e spagnolo. Mi appassionano la storia dell'arte, l'architettura, la cucina locale e le tradizioni, e curo ogni dettaglio perché il viaggio fili liscio dall'arrivo alla partenza.",
  "es": "Hablo inglés, italiano y español. Me apasionan la historia del arte, la arquitectura, la cocina local y las tradiciones, y cuido cada detalle para que el viaje fluya desde la llegada hasta la salida."
 },
 "intro.note": {
  "en": "SII! sounds like sì, yes!",
  "it": "SII! è anche un sì",
  "es": "SII! suena a «sí»"
 },
 "intro.arch": {
  "en": "Photo of Stefano on tour<br>(portrait 4:5, arch crop)",
  "it": "Foto di Stefano in tour<br>(verticale 4:5, ritaglio ad arco)",
  "es": "Foto de Stefano en tour<br>(vertical 4:5, recorte en arco)"
 },
 "rev.h": {
  "en": "What travellers say",
  "it": "Cosa dicono i viaggiatori",
  "es": "Lo que dicen los viajeros"
 },
 "rev.p": {
  "en": "Original screenshots of reviews left after the tours, unedited.",
  "it": "Screenshot originali delle recensioni lasciate dopo i tour, senza modifiche.",
  "es": "Capturas originales de las reseñas dejadas tras los tours, sin modificar."
 },
 "rev.note": {
  "en": "all verified!",
  "it": "tutte verificate!",
  "es": "¡todas verificadas!"
 },
 "rev.badge": {
  "en": "Verified",
  "it": "Verificata",
  "es": "Verificada"
 },
 "rev.ph": {
  "en": "Review screenshot",
  "it": "Screenshot recensione",
  "es": "Captura de reseña"
 },
 "rev.alt": {
  "en": "Verified review on",
  "it": "Recensione verificata su",
  "es": "Reseña verificada en"
 },
 "cv.h": {
  "en": "Experience",
  "it": "Curriculum",
  "es": "Experiencia"
 },
 "cv.now": {
  "en": "present",
  "it": "oggi",
  "es": "hoy"
 },
 "cv.0.h": {
  "en": "Tour leader, Michelangelo International",
  "it": "Tour leader, Michelangelo International",
  "es": "Tour leader, Michelangelo International"
 },
 "cv.0.d": {
  "en": "Tours across Italy for groups of 30+: logistics, hotels and transport, and the main contact for guests and local suppliers.",
  "it": "Tour in Italia per gruppi di oltre 30 persone: logistica, hotel e trasporti, punto di riferimento per ospiti e fornitori locali.",
  "es": "Tours por Italia para grupos de más de 30 personas: logística, hoteles y transporte, y punto de referencia para huéspedes y proveedores locales."
 },
 "cv.1.h": {
  "en": "Tour leader, SRISA Santa Reparata International School of Art",
  "it": "Tour leader, SRISA Santa Reparata International School of Art",
  "es": "Tour leader, SRISA Santa Reparata International School of Art"
 },
 "cv.1.d": {
  "en": "1 to 4-day trips across Italy for international university students: transport, logistics and accommodation.",
  "it": "Viaggi da 1 a 4 giorni in Italia per studenti universitari internazionali: trasporti, logistica e alloggi.",
  "es": "Viajes de 1 a 4 días por Italia para estudiantes universitarios internacionales: transporte, logística y alojamiento."
 },
 "cv.2.h": {
  "en": "Travel consultant, Italy Luxury Travel",
  "it": "Travel consultant, Italy Luxury Travel",
  "es": "Consultor de viajes, Italy Luxury Travel"
 },
 "cv.2.d": {
  "en": "Tailor-made itineraries for a luxury incoming DMC: high-end services, bookings and last-minute changes.",
  "it": "Itinerari su misura per una DMC incoming del lusso: servizi di fascia alta, prenotazioni e cambi dell'ultimo minuto.",
  "es": "Itinerarios a medida para una DMC receptiva de lujo: servicios de alta gama, reservas y cambios de última hora."
 },
 "cv.3.h": {
  "en": "Tour leader, Walkabout Florence",
  "it": "Tour leader, Walkabout Florence",
  "es": "Tour leader, Walkabout Florence"
 },
 "cv.3.d": {
  "en": "Daily tours in Tuscany for groups of 40+ with an agency awarded TripAdvisor Travelers' Choice four years in a row.",
  "it": "Tour quotidiani in Toscana per gruppi di oltre 40 persone con un'agenzia premiata per 4 anni di fila con il Travelers' Choice di TripAdvisor.",
  "es": "Tours diarios por la Toscana para grupos de más de 40 personas con una agencia premiada cuatro años seguidos con el Travelers' Choice de TripAdvisor."
 },
 "cv.4.h": {
  "en": "Tour leader, Tourist Italy and Streaty",
  "it": "Tour leader, Tourist Italy e Streaty",
  "es": "Tour leader, Tourist Italy y Streaty"
 },
 "cv.4.d": {
  "en": "Private and small-group tours in Tuscany, plus market tours and exclusive food tours in Florence.",
  "it": "Tour privati e per piccoli gruppi in Toscana, mercati e food tour esclusivi a Firenze.",
  "es": "Tours privados y para grupos pequeños en la Toscana, mercados y food tours exclusivos en Florencia."
 },
 "cv.5.h": {
  "en": "Tour leader, Ciao Florence",
  "it": "Tour leader, Ciao Florence",
  "es": "Tour leader, Ciao Florence"
 },
 "cv.5.d": {
  "en": "Tuscany tours for groups of up to 80 in three languages: 2,000+ guests and 150+ five-star reviews for the agency.",
  "it": "Tour in Toscana per gruppi fino a 80 persone in tre lingue: oltre 2.000 clienti e più di 150 recensioni a cinque stelle per l'agenzia.",
  "es": "Tours por la Toscana para grupos de hasta 80 personas en tres idiomas: más de 2.000 clientes y más de 150 reseñas de cinco estrellas para la agencia."
 },
 "cv.6.h": {
  "en": "Orientation worker, Syracuse University",
  "it": "Orientation worker, Syracuse University",
  "es": "Orientation worker, Syracuse University"
 },
 "cv.6.d": {
  "en": "Welcoming students at the Florence campus: arrivals, shuttles and support.",
  "it": "Accoglienza degli studenti nel campus di Firenze: arrivi, navette e assistenza.",
  "es": "Acogida de estudiantes en el campus de Florencia: llegadas, traslados y asistencia."
 },
 "cv.7.h": {
  "en": "Project designer, DMO Ciociaria – Valle di Comino",
  "it": "Project designer, DMO Ciociaria – Valle di Comino",
  "es": "Diseñador de proyectos, DMO Ciociaria – Valle di Comino"
 },
 "cv.7.d": {
  "en": "Winning project in the LazioCrea regional call «Valcomino turistica: tra proposte originali, valori autentici e innovazioni sostenibili».",
  "it": "Progetto vincitore del bando regionale LazioCrea «Valcomino turistica: tra proposte originali, valori autentici e innovazioni sostenibili».",
  "es": "Proyecto ganador de la convocatoria regional de LazioCrea «Valcomino turistica: tra proposte originali, valori autentici e innovazioni sostenibili»."
 },
 "cv.8.h": {
  "en": "Tour Leader Certification",
  "it": "Certificazione Tour Leader",
  "es": "Certificación de Tour Leader"
 },
 "cv.8.d": {
  "en": "Forma Futuro, Parma, issued by the Emilia-Romagna Region.",
  "it": "Forma Futuro di Parma, rilasciata dalla Regione Emilia-Romagna.",
  "es": "Forma Futuro de Parma, expedida por la Región de Emilia-Romaña."
 },
 "cv.9.h": {
  "en": "Bachelor's in Science and Technology for Cultural Heritage",
  "it": "Laurea in Scienze e Tecnologie per i Beni Culturali",
  "es": "Grado en Ciencias y Tecnologías para el Patrimonio Cultural"
 },
 "cv.9.d": {
  "en": "University of Ferrara, with an Erasmus+ exchange in Art History at the University of Zaragoza (2015).",
  "it": "Università degli Studi di Ferrara, con Erasmus+ in Storia dell'Arte all'Universidad de Zaragoza (2015).",
  "es": "Universidad de Ferrara, con un Erasmus+ en Historia del Arte en la Universidad de Zaragoza (2015)."
 },
 "f.lang": {
  "en": "Languages",
  "it": "Lingue",
  "es": "Idiomas"
 },
 "f.lang.0": {
  "en": "English, C1",
  "it": "English, C1",
  "es": "Inglés, C1"
 },
 "f.lang.1": {
  "en": "Italian, native",
  "it": "Italiano, madrelingua",
  "es": "Italiano, nativo"
 },
 "f.lang.2": {
  "en": "Spanish, C2",
  "it": "Español, C2",
  "es": "Español, C2"
 },
 "f.spec": {
  "en": "Specialties",
  "it": "Specialità",
  "es": "Especialidades"
 },
 "f.spec.0": {
  "en": "Day tours",
  "it": "Tour di giornata",
  "es": "Tours de un día"
 },
 "f.spec.1": {
  "en": "Multi-day trips",
  "it": "Viaggi di più giorni",
  "es": "Viajes de varios días"
 },
 "f.spec.2": {
  "en": "Food and market tours",
  "it": "Food tour e mercati",
  "es": "Food tours y mercados"
 },
 "f.spec.3": {
  "en": "Groups of up to 80",
  "it": "Gruppi fino a 80 persone",
  "es": "Grupos de hasta 80 personas"
 },
 "f.spec.4": {
  "en": "University students",
  "it": "Studenti universitari",
  "es": "Estudiantes universitarios"
 },
 "f.spec.5": {
  "en": "Tailor-made itineraries",
  "it": "Itinerari su misura",
  "es": "Itinerarios a medida"
 },
 "f.where": {
  "en": "Where",
  "it": "Dove",
  "es": "Dónde"
 },
 "f.where.0": {
  "en": "Florence",
  "it": "Firenze",
  "es": "Florencia"
 },
 "f.where.1": {
  "en": "Tuscany",
  "it": "Toscana",
  "es": "Toscana"
 },
 "f.where.2": {
  "en": "All of Italy",
  "it": "Tutta Italia",
  "es": "Toda Italia"
 },
 "f.where.3": {
  "en": "Ciociaria, Valle di Comino",
  "it": "Ciociaria, Valle di Comino",
  "es": "Ciociaria, Valle di Comino"
 },
 "f.dl": {
  "en": "Ask for my full CV on WhatsApp",
  "it": "Chiedi il CV completo su WhatsApp",
  "es": "Pide mi CV completo por WhatsApp"
 },
 "col.h": {
  "en": "Contact me",
  "it": "Contattami",
  "es": "Contáctame"
 },
 "col.p": {
  "en": "Agencies, tour operators, DMCs, schools and universities: tell me about your group and your dates, in English, Italian or Spanish, and let's plan it together.",
  "it": "Agenzie, tour operator, DMC, scuole e università: raccontami il tuo gruppo e le date, in italiano, inglese o spagnolo, e organizziamo insieme.",
  "es": "Agencias, touroperadores, DMC, escuelas y universidades: cuéntame tu grupo y las fechas, en inglés, italiano o español, y lo organizamos juntos."
 },
 "col.0": {
  "en": "Day tours and multi-day trips for groups",
  "it": "Tour di giornata e viaggi di più giorni per gruppi",
  "es": "Tours de un día y viajes de varios días para grupos"
 },
 "col.1": {
  "en": "Programmes for international students and universities",
  "it": "Programmi per studenti e università internazionali",
  "es": "Programas para estudiantes y universidades internacionales"
 },
 "col.2": {
  "en": "Tailor-made itineraries and food tours",
  "it": "Itinerari su misura e food tour",
  "es": "Itinerarios a medida y food tours"
 },
 "wa.btn": {
  "en": "Message me on WhatsApp",
  "it": "Scrivimi su WhatsApp",
  "es": "Escríbeme por WhatsApp"
 },
 "wa.aria": {
  "en": "Message Stefano on WhatsApp",
  "it": "Scrivi a Stefano su WhatsApp",
  "es": "Escribe a Stefano por WhatsApp"
 },
 "wa.text": {
  "en": "Hi Stefano, I'm writing from your website about a collaboration.",
  "it": "Ciao Stefano, ti scrivo dal sito per una collaborazione.",
  "es": "Hola Stefano, te escribo desde tu web por una colaboración."
 },
 "foot": {
  "en": "Stefano Alonzi, certified tour leader. Based in Sora (FR), travelling all over Italy.",
  "it": "Stefano Alonzi, tour leader certificato. Base a Sora (FR), in viaggio per tutta Italia.",
  "es": "Stefano Alonzi, tour leader certificado. Con base en Sora (FR), viajando por toda Italia."
 },
 "cv.open": {
  "en": "View my CV",
  "it": "Vedi il curriculum",
  "es": "Ver mi currículum"
 },
 "cv.close": {
  "en": "Close",
  "it": "Chiudi",
  "es": "Cerrar"
 },
 "ct.email": {
  "en": "Send me an email",
  "it": "Scrivimi una email",
  "es": "Envíame un email"
 },
 "rv.prev": {
  "en": "Previous reviews",
  "it": "Recensioni precedenti",
  "es": "Reseñas anteriores"
 },
 "rv.next": {
  "en": "Next reviews",
  "it": "Recensioni successive",
  "es": "Reseñas siguientes"
 },
 "ph.photo": {
  "en": "Photo of Stefano coming soon",
  "it": "Foto di Stefano in arrivo",
  "es": "Foto de Stefano próximamente"
 },
 "cta.collab": {
  "en": "Let's work together",
  "it": "Lavoriamo insieme",
  "es": "Trabajemos juntos"
 },
 "tag.role": {
  "en": "Certified tour leader",
  "it": "Tour leader certificato",
  "es": "Tour leader certificado"
 },
 "stat.80.l": {
  "en": "people per group, at most",
  "it": "persone per gruppo, al massimo",
  "es": "personas por grupo, como máximo"
 },
 "stat.3.l": {
  "en": "languages: English, Italian, Spanish",
  "it": "lingue: inglese, italiano, spagnolo",
  "es": "idiomas: inglés, italiano, español"
 },
 "stat.2022.l": {
  "en": "first groups as a tour leader",
  "it": "primi gruppi da tour leader",
  "es": "primeros grupos como tour leader"
 },
 "stat.5.l": {
  "en": "stars from the travellers",
  "it": "stelle dai viaggiatori",
  "es": "estrellas de los viajeros"
 },
 "rev.quote.src": {
  "en": "Bridget C., Ireland · Trustpilot",
  "it": "Bridget C., Irlanda · Trustpilot",
  "es": "Bridget C., Irlanda · Trustpilot"
 },
 "rev.open": {
  "en": "Open the original review",
  "it": "Apri la recensione originale",
  "es": "Abrir la reseña original"
 },
 "mag.issue": {
  "en": "No. 01 · Italy on foot",
  "it": "N. 01 · L'Italia a piedi",
  "es": "N.º 01 · Italia a pie"
 },
 "mag.kicker": {
  "en": "Portrait",
  "it": "Ritratto",
  "es": "Retrato"
 },
 "mag.title": {
  "en": "The tour leader who walks Italy every day",
  "it": "Il tour leader che cammina l'Italia ogni giorno",
  "es": "El tour leader que recorre Italia cada día"
 },
 "mag.by": {
  "en": "Words and routes by Stefano Alonzi",
  "it": "Testi e percorsi di Stefano Alonzi",
  "es": "Textos y rutas de Stefano Alonzi"
 },
 "mag.career": {
  "en": "Ten stops in a career",
  "it": "Dieci tappe di una carriera",
  "es": "Diez etapas de una carrera"
 },
 "path.h": {
  "en": "The road so far",
  "it": "La strada fatta finora",
  "es": "El camino hasta ahora"
 },
 "path.p": {
  "en": "Scroll and follow the route: every stop is a real step of my career.",
  "it": "Scorri e segui il percorso: ogni tappa è un pezzo vero della mia carriera.",
  "es": "Desliza y sigue la ruta: cada parada es una etapa real de mi carrera."
 },
 "path.start": {
  "en": "Departure",
  "it": "Partenza",
  "es": "Salida"
 },
 "path.end": {
  "en": "Next stop: your group",
  "it": "Prossima tappa: il tuo gruppo",
  "es": "Próxima parada: tu grupo"
 },
 "pc.h": {
  "en": "Postcards from the road",
  "it": "Cartoline dal viaggio",
  "es": "Postales del camino"
 },
 "pc.hint": {
  "en": "tap a postcard to turn it over",
  "it": "tocca una cartolina per girarla",
  "es": "toca una postal para darle la vuelta"
 },
 "pc.greet": {
  "en": "Greetings from",
  "it": "Saluti da",
  "es": "Saludos desde"
 },
 "pc.turn": {
  "en": "Turn over",
  "it": "Gira",
  "es": "Dar la vuelta"
 },
 "pal.follow": {
  "en": "Follow me!",
  "it": "Seguitemi!",
  "es": "¡Seguidme!"
 },
 "pal.stop": {
  "en": "Stop",
  "it": "Tappa",
  "es": "Parada"
 },
 "pal.hello": {
  "en": "Hello",
  "it": "Ciao",
  "es": "Hola"
 },
 "pal.group": {
  "en": "The group follows: scroll to move to the next stop.",
  "it": "Il gruppo segue: scorri per passare alla tappa dopo.",
  "es": "El grupo sigue: desliza para pasar a la siguiente parada."
 },
 "map.h": {
  "en": "Where I've worked",
  "it": "Dove ho lavorato",
  "es": "Dónde he trabajado"
 },
 "map.hint": {
  "en": "tap a point on the map",
  "it": "tocca un punto sulla mappa",
  "es": "toca un punto del mapa"
 },
 "map.all": {
  "en": "Tours all over Italy",
  "it": "Tour in tutta Italia",
  "es": "Tours por toda Italia"
 },
 "pl.firenze": {
  "en": "Florence",
  "it": "Firenze",
  "es": "Florencia"
 },
 "pl.toscana": {
  "en": "Tuscany",
  "it": "Toscana",
  "es": "Toscana"
 },
 "pl.ferrara": {
  "en": "Ferrara",
  "it": "Ferrara",
  "es": "Ferrara"
 },
 "pl.parma": {
  "en": "Parma",
  "it": "Parma",
  "es": "Parma"
 },
 "pl.sora": {
  "en": "Sora and Valle di Comino",
  "it": "Sora e Valle di Comino",
  "es": "Sora y Valle di Comino"
 },
 "pl.sora.d": {
  "en": "My home base, and the area where I designed the Valle di Comino tourism project.",
  "it": "La mia base, e la zona dove ho progettato il turismo della Valle di Comino.",
  "es": "Mi base, y la zona donde diseñé el proyecto turístico del Valle di Comino."
 },
 "kit.h": {
  "en": "My tour leader kit",
  "it": "Il mio kit da tour leader",
  "es": "Mi kit de tour leader"
 },
 "kit.hint": {
  "en": "click the objects on the desk",
  "it": "clicca gli oggetti sulla scrivania",
  "es": "haz clic en los objetos del escritorio"
 },
 "kit.paddle": {
  "en": "The paddle: the groups I lead",
  "it": "La paletta: i gruppi che accompagno",
  "es": "La paleta: los grupos que acompaño"
 },
 "kit.radio": {
  "en": "The radio: three languages",
  "it": "La radio: tre lingue",
  "es": "La radio: tres idiomas"
 },
 "kit.folder": {
  "en": "The folder: my experience",
  "it": "La cartellina: la mia esperienza",
  "es": "La carpeta: mi experiencia"
 },
 "kit.notebook": {
  "en": "The notebook: what travellers say",
  "it": "Il taccuino: cosa dicono i viaggiatori",
  "es": "El cuaderno: lo que dicen los viajeros"
 },
 "kit.phone": {
  "en": "The phone: write to me",
  "it": "Il telefono: scrivimi",
  "es": "El teléfono: escríbeme"
 },
 "kit.radio.p": {
  "en": "I lead groups in English, Italian and Spanish, switching language without losing anyone along the way.",
  "it": "Accompagno gruppi in inglese, italiano e spagnolo, cambiando lingua senza perdere nessuno per strada.",
  "es": "Acompaño grupos en inglés, italiano y español, cambiando de idioma sin perder a nadie por el camino."
 },
 "board.h": {
  "en": "The review board",
  "it": "La bacheca delle recensioni",
  "es": "El tablón de reseñas"
 },
 "board.hint": {
  "en": "drag the screenshots around, tap one to enlarge it",
  "it": "sposta gli screenshot trascinandoli, toccane uno per ingrandirlo",
  "es": "arrastra las capturas, toca una para ampliarla"
 },
 "board.soon": {
  "en": "screenshot coming soon",
  "it": "screenshot in arrivo",
  "es": "captura próximamente"
 },
 "board.note": {
  "en": "Real reviews, unedited screenshots.",
  "it": "Recensioni vere, screenshot senza modifiche.",
  "es": "Reseñas reales, capturas sin modificar."
 },
 "scroll": {
  "en": "scroll",
  "it": "scorri",
  "es": "desliza"
 }
};

// Pagina "lavori in corso" sulla home
Object.assign(TESTI, {
 "wip.title": {
  "en": "Stefano In Italy — The website is about to depart",
  "it": "Stefano In Italy — Il sito sta per partire",
  "es": "Stefano In Italy — La web está a punto de salir"
 },
 "wip.kicker": {
  "en": "Website coming soon",
  "it": "Sito in arrivo",
  "es": "Web muy pronto"
 },
 "wip.h": {
  "en": "I'm gathering the group.<br>The website departs soon!",
  "it": "Sto radunando il gruppo.<br>Il sito parte a breve!",
  "es": "Estoy reuniendo al grupo.<br>¡La web sale muy pronto!"
 },
 "wip.p": {
  "en": "In the meantime you can find me on Instagram, or write to me on WhatsApp for groups and collaborations.",
  "it": "Intanto mi trovi su Instagram, oppure scrivimi su WhatsApp per gruppi e collaborazioni.",
  "es": "Mientras tanto me encuentras en Instagram, o escríbeme por WhatsApp para grupos y colaboraciones."
 },
 "wip.roll": {
  "en": "Headcount",
  "it": "Appello",
  "es": "Recuento"
 },
 "wip.missing": {
  "en": "only the website is missing",
  "it": "manca solo il sito",
  "es": "solo falta la web"
 },
 "wip.sign": {
  "en": "Almost there!",
  "it": "Ci siamo quasi!",
  "es": "¡Casi listos!"
 },
 "wip.ig": {
  "en": "Follow me on Instagram",
  "it": "Seguimi su Instagram",
  "es": "Sígueme en Instagram"
 },
 "wip.foot": {
  "en": "Stefano Alonzi · Tour leader in Italy",
  "it": "Stefano Alonzi · Tour leader in Italia",
  "es": "Stefano Alonzi · Tour leader en Italia"
 }
});

// Proposte con mappe e paesaggi
Object.assign(TESTI, {
 "z.toscana": {
  "en": "Tuscany",
  "it": "Toscana",
  "es": "Toscana"
 },
 "z.emilia": {
  "en": "Emilia-Romagna",
  "it": "Emilia-Romagna",
  "es": "Emilia-Romaña"
 },
 "z.lazio": {
  "en": "Lazio",
  "it": "Lazio",
  "es": "Lacio"
 },
 "z.puglia": {
  "en": "Apulia",
  "it": "Puglia",
  "es": "Apulia"
 },
 "z.toscana.d": {
  "en": "Where it all took off: day tours, food tours and multi-day trips from Florence, with groups of up to 80.",
  "it": "Dove è partito tutto: tour di giornata, food tour e viaggi di più giorni da Firenze, con gruppi fino a 80 persone.",
  "es": "Donde empezó todo: tours de un día, food tours y viajes de varios días desde Florencia, con grupos de hasta 80 personas."
 },
 "z.emilia.d": {
  "en": "Where I studied and trained: my degree in Ferrara and the tour leader certification in Parma.",
  "it": "Dove ho studiato e mi sono formato: la laurea a Ferrara e la certificazione da tour leader a Parma.",
  "es": "Donde estudié y me formé: la carrera en Ferrara y la certificación de tour leader en Parma."
 },
 "z.puglia.d": {
  "en": "Lately you will find me here: trulli, white towns and the sea, with groups from all over the world.",
  "it": "Ultimamente mi trovi qui: trulli, città bianche e mare, con gruppi da tutto il mondo.",
  "es": "Últimamente me encuentras aquí: trulli, pueblos blancos y mar, con grupos de todo el mundo."
 },
 "z.recente": {
  "en": "lately here",
  "it": "ultimamente qui",
  "es": "últimamente aquí"
 },
 "map2.h": {
  "en": "Explore my Italy",
  "it": "Esplora la mia Italia",
  "es": "Explora mi Italia"
 },
 "map2.hint": {
  "en": "tap a region or a point on the map",
  "it": "tocca una regione o un punto sulla mappa",
  "es": "toca una región o un punto del mapa"
 },
 "map2.tutta": {
  "en": "All of Italy",
  "it": "Tutta Italia",
  "es": "Toda Italia"
 },
 "map2.tutta.d": {
  "en": "Four regions, three languages and groups from all over the world. Tap a region to fly in.",
  "it": "Quattro regioni, tre lingue e gruppi da tutto il mondo. Tocca una regione per volarci dentro.",
  "es": "Cuatro regiones, tres idiomas y grupos de todo el mundo. Toca una región para entrar volando."
 },
 "map2.drag": {
  "en": "drag to move the map",
  "it": "trascina per spostare la mappa",
  "es": "arrastra para mover el mapa"
 },
 "stat.reg.l": {
  "en": "regions where I have worked",
  "it": "regioni dove ho lavorato",
  "es": "regiones donde he trabajado"
 },
 "fly.h": {
  "en": "Fly over my Italy",
  "it": "Sorvola la mia Italia",
  "es": "Sobrevuela mi Italia"
 },
 "fly.hint": {
  "en": "scroll to take off",
  "it": "scorri per decollare",
  "es": "desliza para despegar"
 },
 "fly.end": {
  "en": "Landing: let's plan your group together.",
  "it": "Atterraggio: organizziamo insieme il tuo gruppo.",
  "es": "Aterrizaje: organicemos juntos tu grupo."
 },
 "fly.tappa": {
  "en": "Stop",
  "it": "Tappa",
  "es": "Parada"
 },
 "pae.h": {
  "en": "The landscapes I walk through",
  "it": "I paesaggi che attraverso",
  "es": "Los paisajes que recorro"
 },
 "pae.hint": {
  "en": "scroll to walk, tap what you see",
  "it": "scorri per camminare, tocca quello che vedi",
  "es": "desliza para caminar, toca lo que ves"
 },
 "pae.bus": {
  "en": "The coach: the groups I lead",
  "it": "Il pullman: i gruppi che accompagno",
  "es": "El autobús: los grupos que acompaño"
 },
 "pae.bus.d": {
  "en": "Groups of 20, 40, up to 80 people: transport, hotels and timetables are on me, so the group only has to enjoy the trip.",
  "it": "Gruppi da 20, 40, fino a 80 persone: trasporti, hotel e orari li gestisco io, così il gruppo deve solo godersi il viaggio.",
  "es": "Grupos de 20, 40, hasta 80 personas: transporte, hoteles y horarios los gestiono yo, así el grupo solo tiene que disfrutar del viaje."
 },
 "pae.faro": {
  "en": "The lighthouse: write to me",
  "it": "Il faro: scrivimi",
  "es": "El faro: escríbeme"
 },
 "pie.h": {
  "en": "A map that unfolds",
  "it": "Una mappa che si apre",
  "es": "Un mapa que se despliega"
 },
 "pie.cover": {
  "en": "Road map of Italy · tour leader edition",
  "it": "Carta stradale d'Italia · edizione tour leader",
  "es": "Mapa de carreteras de Italia · edición tour leader"
 },
 "pie.open": {
  "en": "Unfold the map",
  "it": "Apri la mappa",
  "es": "Despliega el mapa"
 },
 "pie.close": {
  "en": "Fold it again",
  "it": "Richiudi la mappa",
  "es": "Volver a plegar"
 },
 "pie.legend": {
  "en": "Legend",
  "it": "Legenda",
  "es": "Leyenda"
 },
 "pie.leg.1": {
  "en": "where I have worked",
  "it": "dove ho lavorato",
  "es": "donde he trabajado"
 },
 "pie.leg.2": {
  "en": "lately here",
  "it": "ultimamente qui",
  "es": "últimamente aquí"
 },
 "pie.leg.3": {
  "en": "my home base",
  "it": "la mia base",
  "es": "mi base"
 }
});

// Proposte sobrie (K-N)
Object.assign(TESTI, {
 "fid.h": {
  "en": "Trusted by travellers and tour operators",
  "it": "Scelto da viaggiatori e tour operator",
  "es": "Elegido por viajeros y touroperadores"
 },
 "fid.p": {
  "en": "Five-star reviews on Trustpilot, handwritten letters and messages from the groups I have accompanied.",
  "it": "Recensioni a cinque stelle su Trustpilot, lettere scritte a mano e messaggi dei gruppi che ho accompagnato.",
  "es": "Reseñas de cinco estrellas en Trustpilot, cartas escritas a mano y mensajes de los grupos que he acompañado."
 },
 "fid.lettera": {
  "en": "Handwritten letter coming soon",
  "it": "Lettera scritta a mano in arrivo",
  "es": "Carta manuscrita próximamente"
 },
 "fid.lettere": {
  "en": "Letters from my travellers",
  "it": "Le lettere dei miei viaggiatori",
  "es": "Las cartas de mis viajeros"
 },
 "fid.tutte": {
  "en": "All reviews are original, unedited.",
  "it": "Tutte le recensioni sono originali, senza modifiche.",
  "es": "Todas las reseñas son originales, sin modificar."
 },
 "ct.h2": {
  "en": "Let's talk about your group",
  "it": "Parliamo del tuo gruppo",
  "es": "Hablemos de tu grupo"
 },
 "ct.mail.l": {
  "en": "Prefer email? Write to",
  "it": "Preferisci l'email? Scrivi a",
  "es": "¿Prefieres el email? Escribe a"
 },
 "ct.wa.l": {
  "en": "or on WhatsApp",
  "it": "oppure su WhatsApp",
  "es": "o por WhatsApp"
 },
 "ct.risposta": {
  "en": "I reply personally, usually within the day.",
  "it": "Rispondo di persona, di solito in giornata.",
  "es": "Respondo personalmente, normalmente en el día."
 },
 "porte.h": {
  "en": "Who are you planning for?",
  "it": "Per chi stai organizzando?",
  "es": "¿Para quién organizas?"
 },
 "porte.ag": {
  "en": "I'm a tour operator or travel agency",
  "it": "Sono un tour operator o un'agenzia",
  "es": "Soy un touroperador o una agencia"
 },
 "porte.ag.d": {
  "en": "A reliable tour leader for your groups in Italy.",
  "it": "Un tour leader affidabile per i tuoi gruppi in Italia.",
  "es": "Un tour leader fiable para tus grupos en Italia."
 },
 "porte.pr": {
  "en": "I'm organising a private group",
  "it": "Organizzo un gruppo privato",
  "es": "Organizo un grupo privado"
 },
 "porte.pr.d": {
  "en": "Friends, family or an association travelling together.",
  "it": "Amici, famiglia o un'associazione che viaggia insieme.",
  "es": "Amigos, familia o una asociación que viaja junta."
 },
 "ag.h": {
  "en": "For tour operators and agencies",
  "it": "Per tour operator e agenzie",
  "es": "Para touroperadores y agencias"
 },
 "ag.0": {
  "en": "Logistics without hitches: transport, hotels and timetables under control",
  "it": "Logistica senza intoppi: trasporti, hotel e orari sotto controllo",
  "es": "Logística sin contratiempos: transporte, hoteles y horarios bajo control"
 },
 "ag.1": {
  "en": "Groups led in English, Italian and Spanish",
  "it": "Gruppi accompagnati in inglese, italiano e spagnolo",
  "es": "Grupos acompañados en inglés, italiano y español"
 },
 "ag.2": {
  "en": "Apulia, Lazio, Tuscany and the rest of Italy",
  "it": "Puglia, Lazio, Toscana e il resto d'Italia",
  "es": "Apulia, Lacio, Toscana y el resto de Italia"
 },
 "ag.3": {
  "en": "The main contact for guests and local suppliers on the road",
  "it": "Il punto di riferimento per ospiti e fornitori locali durante il viaggio",
  "es": "El punto de referencia para huéspedes y proveedores locales durante el viaje"
 },
 "pr.h": {
  "en": "For private groups",
  "it": "Per i gruppi privati",
  "es": "Para grupos privados"
 },
 "pr.0": {
  "en": "Write to me: how many you are, when you would like to travel and what you dream of seeing.",
  "it": "Scrivimi: quanti siete, quando vorreste partire e cosa sognate di vedere.",
  "es": "Escríbeme: cuántos sois, cuándo queréis viajar y qué soñáis ver."
 },
 "pr.1": {
  "en": "We talk it through calmly, in English, Italian or Spanish.",
  "it": "Ne parliamo con calma, in inglese, italiano o spagnolo.",
  "es": "Lo hablamos con calma, en inglés, italiano o español."
 },
 "pr.2": {
  "en": "On the road I look after the group, so you only have to enjoy Italy.",
  "it": "Durante il viaggio penso io al gruppo, voi dovete solo godervi l'Italia.",
  "es": "Durante el viaje yo cuido del grupo, vosotros solo tenéis que disfrutar de Italia."
 },
 "pr.best": {
  "en": "At my best with groups of 10 to 20 people.",
  "it": "Do il meglio con gruppi da 10 a 20 persone.",
  "es": "Doy lo mejor con grupos de 10 a 20 personas."
 },
 "mc.h": {
  "en": "Where we will travel",
  "it": "Dove viaggeremo",
  "es": "Dónde viajaremos"
 },
 "mc.p": {
  "en": "Tap a region to see where I have worked and the places I know best.",
  "it": "Tocca una regione per vedere dove ho lavorato e i posti che conosco meglio.",
  "es": "Toca una región para ver dónde he trabajado y los lugares que mejor conozco."
 }
});

// Proposta F: sito con più pagine
Object.assign(TESTI, {
 "m.home": {
  "en": "Home",
  "it": "Home",
  "es": "Inicio"
 },
 "m.servizi": {
  "en": "Services",
  "it": "Servizi",
  "es": "Servicios"
 },
 "m.mappa": {
  "en": "Where I work",
  "it": "Dove lavoro",
  "es": "Dónde trabajo"
 },
 "m.recensioni": {
  "en": "Reviews",
  "it": "Recensioni",
  "es": "Reseñas"
 },
 "m.cv": {
  "en": "Experience",
  "it": "Curriculum",
  "es": "Experiencia"
 },
 "m.contatti": {
  "en": "Contact",
  "it": "Contatti",
  "es": "Contacto"
 },
 "m.menu": {
  "en": "Menu",
  "it": "Menu",
  "es": "Menú"
 },
 "h.intro": {
  "en": "I accompany groups across Italy for tour operators and agencies: I look after people, timetables and every detail, so the trip feels easy.",
  "it": "Accompagno gruppi in tutta Italia per tour operator e agenzie: mi occupo delle persone, degli orari e di ogni dettaglio, perché il viaggio sia semplice.",
  "es": "Acompaño grupos por toda Italia para touroperadores y agencias: me ocupo de las personas, los horarios y cada detalle, para que el viaje sea sencillo."
 },
 "h.scopri": {
  "en": "Discover my path",
  "it": "Scopri il mio percorso",
  "es": "Descubre mi recorrido"
 },
 "h.porte": {
  "en": "Get to know my work",
  "it": "Conosci il mio lavoro",
  "es": "Conoce mi trabajo"
 },
 "h.servizi.d": {
  "en": "Tour leading for agencies and tailor-made itinerary ideas.",
  "it": "Accompagnamento per agenzie e idee di itinerari su misura.",
  "es": "Acompañamiento para agencias e ideas de itinerarios a medida."
 },
 "h.mappa.d": {
  "en": "The map of the places I know and the tours I have led there.",
  "it": "La mappa dei posti che conosco e dei tour che ci ho fatto.",
  "es": "El mapa de los lugares que conozco y los tours que he hecho allí."
 },
 "h.rec.d": {
  "en": "What travellers and groups say after the trip.",
  "it": "Cosa dicono viaggiatori e gruppi dopo il viaggio.",
  "es": "Lo que dicen viajeros y grupos después del viaje."
 },
 "h.apri": {
  "en": "Open",
  "it": "Apri",
  "es": "Abrir"
 },
 "s.h": {
  "en": "Services",
  "it": "Servizi",
  "es": "Servicios"
 },
 "s.intro": {
  "en": "Two ways to work together, always clear about who does what.",
  "it": "Due modi di lavorare insieme, sempre chiari su chi fa cosa.",
  "es": "Dos formas de trabajar juntos, siempre claras sobre quién hace qué."
 },
 "s.1.h": {
  "en": "Tour leader for tour operators and agencies",
  "it": "Tour leader per tour operator e agenzie",
  "es": "Tour leader para touroperadores y agencias"
 },
 "s.1.p": {
  "en": "I accompany your groups on day tours and multi-day trips: logistics, hotels and transport, timetables, and the main contact for guests and local suppliers.",
  "it": "Accompagno i tuoi gruppi in tour di giornata e viaggi di più giorni: logistica, hotel e trasporti, orari, e sono il punto di riferimento per ospiti e fornitori locali.",
  "es": "Acompaño a tus grupos en tours de un día y viajes de varios días: logística, hoteles y transporte, horarios, y soy el punto de referencia para huéspedes y proveedores locales."
 },
 "s.2.h": {
  "en": "Tailor-made itinerary ideas",
  "it": "Idee di itinerario su misura",
  "es": "Ideas de itinerario a medida"
 },
 "s.2.p": {
  "en": "Do you have a group and a dream trip in Italy? I help you shape the idea: places, pace and experiences. The trip is then organised and sold by an authorised travel agency I work with.",
  "it": "Hai un gruppo e un viaggio in Italia nel cuore? Ti aiuto a dare forma all'idea: luoghi, ritmo ed esperienze. Il viaggio poi lo organizza e lo vende un'agenzia di viaggi autorizzata con cui collaboro.",
  "es": "¿Tienes un grupo y un viaje soñado por Italia? Te ayudo a dar forma a la idea: lugares, ritmo y experiencias. Después el viaje lo organiza y lo vende una agencia de viajes autorizada con la que colaboro."
 },
 "s.come": {
  "en": "How it works",
  "it": "Come funziona",
  "es": "Cómo funciona"
 },
 "s.p1": {
  "en": "Tell me about your group: how many you are, when, and what you would love to see.",
  "it": "Mi racconti il tuo gruppo: quanti siete, quando, e cosa vi piacerebbe vedere.",
  "es": "Me cuentas tu grupo: cuántos sois, cuándo y qué os gustaría ver."
 },
 "s.p2": {
  "en": "Together we sketch the idea of the itinerary.",
  "it": "Insieme disegniamo l'idea di itinerario.",
  "es": "Juntos dibujamos la idea del itinerario."
 },
 "s.p3": {
  "en": "I put you in touch with the partner agency, which prepares the quote, the contract and the whole trip.",
  "it": "Ti metto in contatto con l'agenzia partner, che prepara preventivo, contratto e tutto il viaggio.",
  "es": "Te pongo en contacto con la agencia colaboradora, que prepara el presupuesto, el contrato y todo el viaje."
 },
 "s.p4": {
  "en": "With my partner code you get 5% off the price of the trip.",
  "it": "Con il mio codice partner hai il 5% di sconto sul prezzo del viaggio.",
  "es": "Con mi código de colaborador tienes un 5% de descuento en el precio del viaje."
 },
 "s.codice": {
  "en": "Ask me for the partner code",
  "it": "Chiedimi il codice partner",
  "es": "Pídeme el código de colaborador"
 },
 "s.codice.wa": {
  "en": "Hi Stefano, I have a group and an idea for a trip in Italy. Could you send me the partner code?",
  "it": "Ciao Stefano, ho un gruppo e un'idea di viaggio in Italia. Mi mandi il codice partner?",
  "es": "Hola Stefano, tengo un grupo y una idea de viaje por Italia. ¿Me envías el código de colaborador?"
 },
 "s.chiaro.h": {
  "en": "To be clear",
  "it": "Per essere chiari",
  "es": "Para ser claros"
 },
 "s.chiaro.1": {
  "en": "I am a certified tour leader, not a travel agency: I do not sell travel packages.",
  "it": "Sono un tour leader certificato, non un'agenzia di viaggi: non vendo pacchetti turistici.",
  "es": "Soy un tour leader certificado, no una agencia de viajes: no vendo paquetes turísticos."
 },
 "s.chiaro.2": {
  "en": "Quote, contract, payments, insurance and guarantees are handled by the authorised partner agency.",
  "it": "Preventivo, contratto, pagamenti, assicurazioni e garanzie sono a carico dell'agenzia partner autorizzata.",
  "es": "El presupuesto, el contrato, los pagos, los seguros y las garantías corren a cargo de la agencia colaboradora autorizada."
 },
 "s.chiaro.3": {
  "en": "The agency pays me a fee for recommending it. It does not increase the price for you.",
  "it": "L'agenzia mi riconosce un compenso per la segnalazione. Il prezzo per te non aumenta.",
  "es": "La agencia me reconoce una comisión por recomendarla. El precio para ti no aumenta."
 },
 "s.partner": {
  "en": "Partner agency:",
  "it": "Agenzia partner:",
  "es": "Agencia colaboradora:"
 },
 "mp.h": {
  "en": "Where I work",
  "it": "Dove lavoro",
  "es": "Dónde trabajo"
 },
 "mp.p": {
  "en": "Drag the map, zoom in and tap a place to see the tours I have led there.",
  "it": "Trascina la mappa, ingrandisci e tocca un posto per vedere i tour che ci ho fatto.",
  "es": "Arrastra el mapa, amplía y toca un lugar para ver los tours que he hecho allí."
 },
 "mp.scegli": {
  "en": "Tap a point on the map",
  "it": "Tocca un punto sulla mappa",
  "es": "Toca un punto del mapa"
 },
 "mp.tour": {
  "en": "Tours here",
  "it": "Tour qui",
  "es": "Tours aquí"
 },
 "mp.formazione": {
  "en": "Training",
  "it": "Formazione",
  "es": "Formación"
 },
 "mp.base": {
  "en": "My home base",
  "it": "La mia base",
  "es": "Mi base"
 },
 "mp.cv": {
  "en": "See the full experience",
  "it": "Vedi il curriculum completo",
  "es": "Ver la experiencia completa"
 },
 "mp.zoomin": {
  "en": "Zoom in",
  "it": "Ingrandisci",
  "es": "Ampliar"
 },
 "mp.zoomout": {
  "en": "Zoom out",
  "it": "Riduci",
  "es": "Reducir"
 },
 "mp.reset": {
  "en": "Whole Italy",
  "it": "Tutta Italia",
  "es": "Toda Italia"
 },
 "t.food": {
  "en": "Food and market tours",
  "it": "Food tour e mercati",
  "es": "Food tours y mercados"
 },
 "t.day": {
  "en": "Day tours in Tuscany",
  "it": "Tour di giornata in Toscana",
  "es": "Tours de un día por la Toscana"
 },
 "t.private": {
  "en": "Private and small-group tours",
  "it": "Tour privati e per piccoli gruppi",
  "es": "Tours privados y para grupos pequeños"
 },
 "t.students": {
  "en": "Trips for international university students",
  "it": "Viaggi per studenti universitari internazionali",
  "es": "Viajes para estudiantes universitarios internacionales"
 },
 "t.welcome": {
  "en": "Welcoming students on campus",
  "it": "Accoglienza degli studenti al campus",
  "es": "Acogida de estudiantes en el campus"
 },
 "t.puglia": {
  "en": "Multi-day trips in Apulia",
  "it": "Viaggi di più giorni in Puglia",
  "es": "Viajes de varios días por Apulia"
 },
 "t.puglia.d": {
  "en": "Groups travelling through Apulia: transport, hotels and timetables, and the reference point for guests and local suppliers.",
  "it": "Gruppi in viaggio per la Puglia: trasporti, hotel e orari, e il punto di riferimento per ospiti e fornitori locali.",
  "es": "Grupos de viaje por Apulia: transporte, hoteles y horarios, y el punto de referencia para huéspedes y proveedores locales."
 },
 "t.dmo": {
  "en": "Tourism project for the Valle di Comino",
  "it": "Progetto turistico per la Valle di Comino",
  "es": "Proyecto turístico para el Valle di Comino"
 },
 "r.h": {
  "en": "Reviews",
  "it": "Recensioni",
  "es": "Reseñas"
 },
 "r.lascia": {
  "en": "Have you travelled with me? Leave a review",
  "it": "Hai viaggiato con me? Lascia una recensione",
  "es": "¿Has viajado conmigo? Deja una reseña"
 },
 "cv.page.h": {
  "en": "Experience and training",
  "it": "Esperienza e formazione",
  "es": "Experiencia y formación"
 },
 "cv.esperienza": {
  "en": "Work experience",
  "it": "Esperienza",
  "es": "Experiencia"
 },
 "cv.formazione": {
  "en": "Training",
  "it": "Formazione",
  "es": "Formación"
 },
 "cv.pdf": {
  "en": "Ask for my CV in PDF",
  "it": "Chiedimi il CV in PDF",
  "es": "Pídeme el CV en PDF"
 },
 "c.h": {
  "en": "Contact",
  "it": "Contatti",
  "es": "Contacto"
 },
 "c.ig": {
  "en": "Follow me on Instagram",
  "it": "Seguimi su Instagram",
  "es": "Sígueme en Instagram"
 },
 "foot.legale": {
  "en": "Privacy and cookie policy: to be completed",
  "it": "Privacy e cookie policy: da completare",
  "es": "Privacidad y cookies: por completar"
 }
});

/** Testo in inglese (la lingua principale): il cambio lingua avviene nel browser. */
export const t = (k: string): string => TESTI[k]?.en ?? (console.warn('Testo mancante: ' + k), k);
