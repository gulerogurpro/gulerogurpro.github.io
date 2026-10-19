/* ============================================================
   data.js — tout le contenu du portfolio (réalisations, grille de
   compétences, veille, parcours). Modifier ce fichier suffit pour
   mettre le site à jour : rien n'est écrit en dur dans index.html.
   ============================================================ */

// Pseudo-constante : session d'examen visée
var SESSION = 2027;

/* ---------- Bloc 1 — libellés exacts du référentiel BTS SIO ---------- */
var COMPETENCES = [
  {
    id: "B1.1", label: "Gérer le patrimoine informatique",
    how: "Acquise sur mes jeux Roblox : trois ont une sauvegarde DataStore avec verrou de session (Medieval Duels, Fusée Clicker, Simulateur Photo), deux un accès d'administration vérifié côté serveur (Échapper au Minus, Fusée Clicker), et tous partagent le même outillage de normes (Luau typé, Selene, StyLua, versions d'outils recensées dans rokit.toml). Indicateur visé : les sauvegardes sont réalisées et les restaurations testées, les droits correspondent aux habilitations.",
    subs: [
      { id: "B1.1.1", label: "Recenser et identifier les ressources numériques" },
      { id: "B1.1.2", label: "Exploiter des référentiels, normes et standards adoptés par le prestataire informatique" },
      { id: "B1.1.3", label: "Mettre en place et vérifier les niveaux d'habilitation associés à un service" },
      { id: "B1.1.4", label: "Vérifier les conditions de la continuité d'un service informatique" },
      { id: "B1.1.5", label: "Gérer des sauvegardes" },
      { id: "B1.1.6", label: "Vérifier le respect des règles d'utilisation des ressources numériques" }
    ]
  },
  {
    id: "B1.2", label: "Répondre aux incidents et aux demandes d'assistance et d'évolution",
    how: "Compétence que je couvrirai pendant le stage de deuxième année (support, ticketing, traitement de demandes). Elle est volontairement affichée comme non couverte : rien n'est inventé sur ce site.",
    subs: [
      { id: "B1.2.1", label: "Collecter, suivre et orienter des demandes" },
      { id: "B1.2.2", label: "Traiter des demandes concernant les services réseau et système, applicatifs" },
      { id: "B1.2.3", label: "Traiter des demandes concernant les applications" }
    ]
  },
  {
    id: "B1.3", label: "Développer la présence en ligne de l'organisation",
    how: "Acquise avec le site Level Up Games (site vitrine exploitant un catalogue), la campagne de lancement d'Échapper au Minus (vidéos TikTok, analyse de créateurs) et ce portfolio (mentions légales, référencement). Indicateur visé : image valorisée, cadre juridique respecté, visibilité mesurée.",
    subs: [
      { id: "B1.3.1", label: "Participer à la valorisation de l'image de l'organisation sur les médias numériques en tenant compte du cadre juridique et des enjeux économiques" },
      { id: "B1.3.2", label: "Référencer les services en ligne de l'organisation et mesurer leur visibilité" },
      { id: "B1.3.3", label: "Participer à l'évolution d'un site Web exploitant les données de l'organisation" }
    ]
  },
  {
    id: "B1.4", label: "Travailler en mode projet",
    how: "Acquise sur le TP Dart (backlog, une branche Git par fonctionnalité, indicateurs tests / lint) et sur Échapper au Minus (journal de projet, scénario documenté, date de sortie). Indicateur visé : activités planifiées, livrables conformes, écarts justifiés.",
    subs: [
      { id: "B1.4.1", label: "Analyser les objectifs et les modalités d'organisation d'un projet" },
      { id: "B1.4.2", label: "Planifier les activités" },
      { id: "B1.4.3", label: "Évaluer les indicateurs de suivi d'un projet et analyser les écarts" }
    ]
  },
  {
    id: "B1.5", label: "Mettre à disposition des utilisateurs un service informatique",
    how: "Acquise en publiant deux jeux sur Roblox (Échapper au Minus sur deux places, Fusée Clicker), en préparant la sortie de Medieval Duels (tests par assertions, README, aide en jeu) et en concevant deux cours interactifs pour accompagner des débutants. Indicateur visé : tests effectués, service déployé et opérationnel, support d'information disponible.",
    subs: [
      { id: "B1.5.1", label: "Réaliser les tests d'intégration et d'acceptation d'un service" },
      { id: "B1.5.2", label: "Déployer un service" },
      { id: "B1.5.3", label: "Accompagner les utilisateurs dans la mise en place d'un service" }
    ]
  },
  {
    id: "B1.6", label: "Organiser son développement professionnel",
    how: "Acquise par ma veille sur les moteurs de jeu (fiches datées et sourcées), mon dépôt GitHub, l'auto-formation sur Godot et Roblox et ce portfolio. Indicateur visé : veille régulière, identité professionnelle visible, besoins de formation identifiés.",
    subs: [
      { id: "B1.6.1", label: "Mettre en place son environnement d'apprentissage personnel" },
      { id: "B1.6.2", label: "Mettre en œuvre des outils et stratégies de veille informationnelle" },
      { id: "B1.6.3", label: "Gérer son identité professionnelle" },
      { id: "B1.6.4", label: "Développer son projet professionnel" }
    ]
  }
];

/* ---------- Bloc 2 — option SLAM ---------- */
var BLOC2 = [
  { id: "B2.1", label: "Concevoir et développer une solution applicative" },
  { id: "B2.2", label: "Assurer la maintenance corrective ou évolutive d'une solution applicative" },
  { id: "B2.3", label: "Gérer les données" }
];

/* ---------- Réalisations ---------- */
var PROJETS = [
  {
    slug: "medieval",
    titre: "Medieval Duels",
    court: "Medieval Duels — jeu de duel Roblox",
    type: "perso",
    vedette: true,
    periode: "10/2026 → sortie prévue le 30/10/26",
    lieu: "Marseille — projet personnel",
    modalite: "Seul : conception, code, assets et communication",
    pitch: "Un jeu de duel médiéval 1 contre 1 sur Roblox : moteur de combat serveur-autoritaire, animations générées dans Blender et campagne de lancement automatisée.",
    resume: "Un lobby (château, marché, cour d'entraînement) mène à des arènes où l'on s'affronte au meilleur des trois manches : garde, parade, esquive, coups lourds, compétences et exécutions cinématiques. Le serveur décide seul du combat et de l'économie ; les clients n'envoient que des intentions par des RemoteEvents typés, validés et limités en débit.",
    stack: ["Luau (strict)", "Roblox Studio", "Rojo", "Rokit", "Selene", "StyLua", "Blender (Python)", "ffmpeg", "PowerShell"],
    images: [
      { src: "img/medieval-arene.jpg", alt: "Début d'un duel dans le Colisée de sable, tribunes remplies et score affiché en tête" },
      { src: "img/medieval-marche.jpg", alt: "Le Marché du château : héraut, école d'armes, boutique, forge et marché noir, construits par le code serveur" },
      { src: "img/medieval-boutique.jpg", alt: "Interface de la boutique : trois coffres avec les probabilités de rareté affichées au joueur" },
      { src: "img/medieval-miniature.jpg", alt: "Miniature officielle du jeu, rendue dans Blender à partir des modèles du jeu" }
    ],
    chiffres: [{ n: "102 000", l: "lignes de code écrites" }, { n: "219", l: "fichiers source" }, { n: "31", l: "exécutions cinématiques" }, { n: "5", l: "styles de combat" }],
    comps: {
      "B1.1.2": "Normes de code appliquées à tout le projet : Luau en mode strict, lint Selene, formatage StyLua, versions d'outils figées par Rokit.",
      "B1.1.5": "Sauvegarde DataStore avec verrou de session (un seul serveur par joueur), UpdateAsync, réessais exponentiels, autosave décalée et sauvegarde à l'arrêt du serveur (BindToClose).",
      "B1.3.1": "Campagne de lancement : montage automatique de vidéos verticales sous-titrées (Whisper + ffmpeg) et robot Discord PowerShell qui publie des aperçus à heure fixe ; classification 17+ respectée via le questionnaire de maturité Roblox.",
      "B1.4.2": "Plan de sortie fixé au 30/10/2026 avec publications programmées par le Planificateur de tâches Windows.",
      "B1.5.1": "La résolution d'un coup est un module pur (Resolve.luau) couvert par des tests par assertions ; PNJ d'entraînement à trois difficultés pour les tests en jeu.",
      "B1.5.2": "Chaîne de déploiement prête : synchronisation Rojo → Roblox Studio, écran de chargement en ReplicatedFirst, prise en charge clavier, manette et tactile. Publication publique planifiée le 30/10/2026.",
      "B1.5.3": "Tableau complet des commandes (clavier, manette, tactile) dans le README et aide en jeu (touche H) avec les touches de l'appareil utilisé."
    },
    bloc2: ["B2.1", "B2.3"],
    contexte: "Je voulais un jeu de combat « lisible » où le serveur a toujours raison : sur Roblox, le client possède la physique de son personnage, ce qui rend la triche facile dans la plupart des jeux de combat. Le besoin : un moteur de duel juste, complet (armes, compétences, économie) et une sortie publique préparée comme un vrai lancement.",
    environnement: ["Roblox Studio + Rojo (code écrit hors Studio, synchronisé)", "Luau strict, Selene, StyLua, Rokit, Wally", "Blender piloté en Python (bpy) pour les armures, armes, décor et animations corps entier, export FBX", "Python (faster-whisper, ffmpeg) et PowerShell pour la communication", "Documentation : README, docs officielles Roblox, DevForum"],
    demarche: [
      "Architecture serveur / client / modules partagés, systèmes chargés par priorité avec init() et start().",
      "Combat résolu par un module pur testé par assertions, puis branché sur une machine à états temps réel (garde, parade, esquive, combos, coups lourds).",
      "Anti-triche : rate limiting par joueur et par remote (seau de jetons), vérification des types reçus, « crédit de déplacement » serveur contre la téléportation.",
      "Pipeline d'assets : les modèles et animations sont générés par scripts Blender et exportés en modules Luau compacts décodés à la demande.",
      "Communication automatisée : vidéos courtes montées par script, robot Discord planifié, miniature rendue dans Blender."
    ],
    productions: ["Jeu complet : 5 styles de combat, une soixantaine d'armes, 21 compétences, 41 traits, 31 exécutions", "Système de sauvegarde avec verrou de session", "Pipeline Blender → FBX → Luau", "README de commandes clavier / manette / tactile", "Vidéos et miniature de lancement"],
    resultats: ["Environ 102 000 lignes écrites en 219 fichiers (181 fichiers Luau strict, 44 scripts Python pour Blender), hors modules de données générés", "Mode spectateur, PNJ d'entraînement, duels au meilleur des 3 manches", "Clavier / souris, manettes Xbox / PlayStation et écran tactile pris en charge", "Sortie publique planifiée le 30/10/2026"],
    difficultes: [
      "Le client possède la physique : impossible de faire confiance à ses positions. Solution : le serveur accorde une réserve de déplacement calculée d'après la vitesse réelle et remet le joueur à sa dernière position acceptée en cas d'écart.",
      "Importer des dizaines d'animations corps entier une par une dans Studio n'était pas tenable : j'ai écrit des scripts Blender qui exportent les animations en données Luau, décodées à la demande côté client.",
      "Le gore impose un classement 17+ : il est désactivable dans la configuration et déclaré dans le questionnaire de maturité."
    ],
    securite: ["Serveur autoritaire : toute action passe par des RemoteEvents typés et validés", "Rate limiting par joueur et par remote", "Contrôle serveur des déplacements (anti-téléportation)", "Sauvegardes verrouillées par session pour éviter la duplication d'objets entre serveurs", "Classification 17+ et gore désactivable"],
    liens: [{ label: "Page du jeu sur Roblox (ouverture publique le 30/10/26)", url: "https://www.roblox.com/games/137015628229288" }],
    code: {
      file: "src/server/Systems/CombatServer.luau", lang: "lua",
      why: "Extrait légèrement abrégé. Le serveur ne fait pas confiance au client : il accorde à chaque joueur une « réserve » de déplacement calculée d'après sa vitesse réelle, puis le remet à sa dernière position acceptée en cas de téléportation.",
      code: [
        "local function checkMove(f: Fighter, dt: number)",
        "\tlocal position = f.root.Position",
        "\tif not f.player or f.action == \"Dead\" or engaged(f) or f.root.Anchored then",
        "\t\tf.lastPos = position -- PNJ, corps sans vie ou racine tenue par le serveur",
        "\t\treturn",
        "\tend",
        "\tlocal speed = C.WALKSPEED * f.style.walk * f.bonus.walk * 1.5",
        "\tlocal cap = speed * MOVE_WINDOW + MOVE_SLACK",
        "\tf.moveCredit = if f.moveCredit < cap",
        "\t\tthen math.min(cap, f.moveCredit + speed * dt)",
        "\t\telse math.max(cap, f.moveCredit - BOOST_FADE * dt)",
        "\tlocal moved = ((position - f.lastPos) * Vector3.new(1, 0, 1)).Magnitude",
        "\tif moved <= f.moveCredit then",
        "\t\tf.moveCredit -= moved",
        "\t\tf.lastPos = position",
        "\telse -- téléportation : retour à la dernière position acceptée",
        "\t\tf.root.CFrame = f.root.CFrame.Rotation + Vector3.new(f.lastPos.X, position.Y, f.lastPos.Z)",
        "\t\tf.lastPos = f.root.Position",
        "\tend",
        "end"
      ].join("\n")
    }
  },
  {
    slug: "minus",
    titre: "Échapper au Minus",
    court: "Échapper au Minus — story d'horreur Roblox",
    type: "perso",
    periode: "10/2026, jeu publié",
    lieu: "Marseille — projet personnel",
    modalite: "Seul : scénario, code, mise en scène et promotion",
    pitch: "Une story d'horreur Roblox en 7 chapitres, de 1 à 6 joueurs, dont tout le décor, l'IA et la mise en scène sont générés par 24 000 lignes de Luau.",
    resume: "Une bande d'amis passe la nuit chez Minus, voisin gentil le jour et prédateur la nuit, et doit s'échapper de son quartier. Aucune map n'est modélisée à la main : lobby, quartier, immeuble, dimension inversée et arène finale sont construits par le code au lancement. Un metteur en scène serveur enchaîne les chapitres, les cinématiques, les dialogues synchronisés et l'IA de chasse.",
    stack: ["Luau (typé)", "Roblox Studio", "Rojo", "TeleportService", "PathfindingService", "Audio API (reconnaissance vocale)", "Python + ffmpeg"],
    images: [
      { src: "img/minus-semi.jpg", alt: "Le quartier du Semi au crépuscule, entièrement construit par le code, avec Minus près du bus" },
      { src: "img/minus-porte.jpg", alt: "Chapitre 3, 00 h 13 : Minus apparaît dans l'encadrement de la porte de la chambre" },
      { src: "img/minus-nuit.jpg", alt: "Cinématique de la nuit : Minus se penche au-dessus du lit et sourit de toutes ses dents" },
      { src: "img/minus-hud.jpg", alt: "Chapitre 4 : le HUD piloté par le serveur affiche l'objectif « Cache-toi » et un compte à rebours" }
    ],
    chiffres: [{ n: "24 000", l: "lignes de Luau" }, { n: "7", l: "chapitres" }, { n: "1 à 6", l: "joueurs" }, { n: "2", l: "places Roblox" }],
    comps: {
      "B1.1.3": "Menu d'administration réservé au créateur et vérifié côté serveur (identifiant utilisateur contrôlé à chaque appel).",
      "B1.1.4": "Téléportation vers un serveur réservé avec réessais en cas d'échec, et repli automatique en mode Studio (où la téléportation est indisponible) pour pouvoir tester sans serveur.",
      "B1.3.1": "Campagne TikTok : analyse de créateurs Roblox, journal de communication, vidéos montées par un script Python / ffmpeg, première publication le 09/10/2026.",
      "B1.3.2": "Analyse des créateurs et des formats TikTok qui fonctionnent (document d'analyse dans le dossier promo) pour orienter la visibilité du jeu ; suivi daté dans le journal de communication. Visibilité mesurée par les statistiques publiques de Roblox : 43 visites au 20/10/2026.",
      "B1.4.1": "Histoire complète écrite avant le code (docs/HISTOIRE.md) et découpée en 7 chapitres testables séparément (Config.TestStartChapter).",
      "B1.4.2": "Journal de projet (journal.md) et plan de promotion ; chaque chapitre est un jalon livrable.",
      "B1.5.2": "Déploiement sur deux places Roblox (lobby et histoire) à partir du même fichier, procédure de publication documentée.",
      "B1.5.3": "README : ouvrir le jeu, tester une cage, démarrer à un chapitre donné, publier en deux places."
    },
    bloc2: ["B2.1", "B2.2"],
    contexte: "Les « stories » d'horreur sont un genre très joué sur Roblox. Je voulais en écrire une complète, jouable en groupe, sans modéliser une seule map à la main : tout devait sortir du code pour pouvoir changer l'histoire sans toucher à Studio.",
    environnement: ["Roblox Studio + Rojo 7.7.1, Rokit, Selene, StyLua", "TeleportService (serveurs réservés), PathfindingService, TweenService, TextChatService", "Roblox Audio API : AudioDeviceInput / AudioSpeechToText", "Python 3 + ffmpeg pour le montage des vidéos de promotion", "Documentation : docs/HISTOIRE.md, journal.md, README"],
    demarche: [
      "Écriture du scénario en 7 chapitres, puis d'un petit langage de construction (Build.luau) pour générer les décors.",
      "StoryDirector serveur : enchaîne les chapitres, pilote cinématiques et dialogues synchronisés ; les clients n'affichent que les effets.",
      "IA de Minus : graphe de pièces, parcours en largeur, vision par raycast, fouille des cachettes et QTE « retiens ton souffle ».",
      "Chapitre 6 : formule à prononcer au micro, validée côté serveur par une distance de Levenshtein tolérante aux fautes, avec repli texte.",
      "Lobby à cages qui téléporte le groupe vers un serveur réservé, avec réessais et repli Studio."
    ],
    productions: ["Jeu publié sur Roblox (« Escape the Minus »)", "Scénario documenté et journal de projet", "Script Python de montage des vidéos de promotion", "Menu administrateur pour sauter à n'importe quel moment de l'histoire"],
    resultats: ["24 371 lignes de Luau typé en 71 fichiers, plus un script Python de montage (77 lignes)", "7 chapitres, boss du flashback et boss final, difficulté adaptée au nombre de joueurs", "Reconnaissance vocale avec repli texte / chat", "Mode spectateur et reprise au dernier point atteint"],
    difficultes: [
      "La reconnaissance vocale entend « à house du cémi » pour « A housse du Semi » : j'ai écrit une distance de Levenshtein « sous-chaîne » partagée client / serveur, le serveur la réexécutant avant d'accepter.",
      "Le chapitre 6 exige 3 joueurs vivants sur les plateformes (Config.PlatformsRequired) : en Studio, le jeu en accepte moins pour que je puisse tester seul.",
      "Limite assumée : pas de persistance (badges non implémentés, tout est en mémoire de session). C'est la prochaine évolution prévue."
    ],
    securite: ["Toute action du client (formule, QTE, renvoi de projectile, menu admin) est revérifiée côté serveur", "Typage des arguments, fenêtres de temps et anti-spam sur les remotes", "Menu admin réservé à l'identifiant du créateur", "Données de téléportation contrôlées à l'arrivée"],
    liens: [{ label: "Jouer sur Roblox (ESCAPE THE MINUS)", url: "https://www.roblox.com/games/107366286112214" }],
    code: {
      file: "src/shared/Formula.luau", lang: "lua",
      why: "Distance de Levenshtein « sous-chaîne » : la première ligne est initialisée à zéro pour autoriser un départ n'importe où dans la phrase. Partagée entre le client (retour visuel) et le serveur, qui la réexécute avant d'accepter la réponse : un client modifié ne peut pas tricher.",
      code: [
        "-- Plus petit nombre de lettres à changer pour retrouver `target` QUELQUE PART dans `text`",
        "local function bestDistance(target: string, text: string): number",
        "\tlocal m, n = #target, #text",
        "\tif n == 0 then return m end",
        "\tlocal previous = table.create(n + 1, 0) -- on peut commencer n'importe où",
        "\tfor i = 1, m do",
        "\t\tlocal current = table.create(n + 1, 0)",
        "\t\tcurrent[1] = i",
        "\t\tlocal t = string.byte(target, i)",
        "\t\tfor j = 1, n do",
        "\t\t\tlocal cost = if string.byte(text, j) == t then 0 else 1",
        "\t\t\tcurrent[j + 1] = math.min(previous[j] + cost, previous[j + 1] + 1, current[j] + 1)",
        "\t\tend",
        "\t\tprevious = current",
        "\tend",
        "\tlocal best = m",
        "\tfor j = 1, n + 1 do best = math.min(best, previous[j]) end",
        "\treturn best",
        "end"
      ].join("\n")
    }
  },
  {
    slug: "fusee",
    titre: "Fusée Clicker",
    court: "Fusée Clicker — clicker / simulateur Roblox",
    type: "perso",
    periode: "Version du 06/10/26, jeu publié",
    lieu: "Marseille — projet personnel",
    modalite: "Seul : code, équilibrage, interface, monétisation",
    pitch: "Un clicker-simulateur complet où l'on pompe, décolle et pilote sa fusée à travers 18 biomes, avec un serveur qui arbitre tout et une sauvegarde multi-serveurs écrite à la main.",
    resume: "Le joueur pompe du carburant, décolle, traverse 18 biomes (ciel, Lune, Mars, trou noir…) pour récolter des pièces, puis améliore sa fusée et collectionne 49 familiers via 8 œufs. La map, les zones, les skins et les familiers sont générés par le code au lancement. Quêtes quotidiennes, événements horaires synchronisés entre serveurs, classement mondial et monétisation Robux complètent la boucle.",
    stack: ["Luau (strict)", "Roblox Studio", "Rojo", "Rokit", "Wally", "DataStoreService", "OrderedDataStore", "MarketplaceService", "PolicyService"],
    images: [],
    chiffres: [{ n: "17 500", l: "lignes de Luau" }, { n: "18", l: "biomes" }, { n: "49", l: "familiers" }, { n: "8", l: "œufs" }],
    comps: {
      "B1.1.1": "Ressources du projet recensées dans le dépôt : outils et versions figés (rokit.toml), dépendances (wally.toml), arborescence synchronisée (default.project.json), identifiants des passes et produits Robux et des 11 sons importés centralisés dans la configuration.",
      "B1.1.3": "Panneau d'administration vérifié côté serveur : seules les actions d'un identifiant autorisé sont exécutées.",
      "B1.1.5": "Couche DataStore maison : verrou de session multi-serveurs, réessais avec backoff exponentiel, autosave échelonnée toutes les 60 s, BindToClose, migrations de schéma et assainissement du profil chargé.",
      "B1.3.2": "Page du jeu rédigée en anglais et en français pour toucher un public international (publié sous le nom « Rocket Clicker ») ; visibilité mesurée par les statistiques publiques de Roblox : 85 visites au 20/10/2026.",
      "B1.1.6": "Respect des règles de la plateforme : achats aléatoires masqués selon PolicyService, livraison des produits Robux idempotente et confirmée à Roblox seulement après sauvegarde réussie.",
      "B1.5.1": "Raccourcis de test réservés à Studio (pièces, réservoir plein, œuf gratuit) et procédure de test de la sauvegarde (accès API activé après publication).",
      "B1.5.2": "Jeu publié sur Roblox : passes et produits Robux renseignés, sons importés, version partagée vérifiée au démarrage."
    },
    bloc2: ["B2.1", "B2.3"],
    contexte: "Les clickers vivent de la rétention : il faut une boucle de progression solide et une sauvegarde qui ne perd jamais rien, même quand un joueur change de serveur. Je voulais écrire cette couche moi-même pour la comprendre, sans bibliothèque externe.",
    environnement: ["Roblox Studio + Rojo, Rokit, Wally (dépendances commentées : zéro lib), Selene, StyLua", "DataStoreService, OrderedDataStore, MarketplaceService, PolicyService, UserService", "Documentation : README, docs Roblox (limites DataStore, budget de requêtes)"],
    demarche: [
      "Architecture serveur / client / partagé : chaque système expose init() / start() et est chargé automatiquement.",
      "Serveur autoritaire sur tout (carburant, pièces, tirages d'œufs, vol) ; chaque RemoteEvent est validé et limité par un seau de jetons.",
      "Couche DataStore : prise de possession atomique du profil (UpdateAsync), verrou de session, migrations versionnées, assainissement des données.",
      "Live-ops : quêtes quotidiennes déterministes (graine jour UTC + UserId), événements à chaque heure pile synchronisés entre serveurs, classement via OrderedDataStore.",
      "Monétisation : livraison idempotente par identifiant de reçu, achats aléatoires masqués selon PolicyService."
    ],
    productions: ["Jeu publié", "Couche de persistance avec verrou de session et migrations", "Système de quêtes, cadeaux et événements", "Classement mondial top 10"],
    resultats: ["17 559 lignes de Luau strict en 62 fichiers", "147 entrées d'index (49 familiers × 3 variantes)", "Interface responsive PC, mobile et manette", "Aucune bibliothèque externe"],
    difficultes: [
      "Les altitudes dépassent la limite des entiers d'OrderedDataStore : elles sont encodées en log10 pour le classement.",
      "Deux serveurs pouvaient écrire le même profil et dupliquer des objets : verrou de session avec horodatage, écriture annulée si un autre serveur détient encore un verrou récent.",
      "Le budget de requêtes DataStore est limité : autosave échelonnée par joueur et gestion du budget pour le classement."
    ],
    securite: ["Serveur autoritaire et validation de chaque RemoteEvent", "Rate limiting par seau de jetons, contrôle temporel des collectes en vol", "Sauvegarde verrouillée par session, kick si la sauvegarde échoue pour ne pas écraser les données", "Panneau admin vérifié côté serveur", "Conformité PolicyService pour les achats aléatoires"],
    liens: [{ label: "Jouer sur Roblox (Rocket Clicker)", url: "https://www.roblox.com/games/86163553911530" }],
    code: {
      file: "src/server/Systems/PlayerData.luau", lang: "lua",
      why: "Prise de possession d'un profil en une seule opération atomique : si un autre serveur détient un verrou récent, l'écriture est annulée (anti-duplication) ; sinon le profil est migré, assaini puis verrouillé pour ce serveur.",
      code: [
        "ds:UpdateAsync(keyFor(player.UserId), function(old: any)",
        "\tlocked = false",
        "\tresult = nil",
        "\tif typeof(old) == \"table\" and typeof(old.lock) == \"table\" then",
        "\t\tlocal lock = old.lock",
        "\t\tlocal fresh = typeof(lock.time) == \"number\" and os.time() - lock.time < LOCK_STALE_SECONDS",
        "\t\tif fresh and lock.jobId ~= game.JobId then",
        "\t\t\tlocked = true",
        "\t\t\treturn nil -- annule l'écriture : un autre serveur possède encore ce profil",
        "\t\tend",
        "\tend",
        "\tlocal migrated = if typeof(old) == \"table\" then migrate(old) else defaultProfile()",
        "\tlocal profile = sanitize(migrated)",
        "\tresult = profile",
        "\tlocal stored: any = table.clone(profile)",
        "\tstored.lock = { jobId = game.JobId, time = os.time() }",
        "\treturn stored",
        "end)"
      ].join("\n")
    }
  },
  {
    slug: "photo",
    titre: "Simulateur Photo",
    court: "Simulateur Photo — safari-photo Roblox",
    type: "perso",
    periode: "10/2026, en développement",
    lieu: "Marseille — projet personnel",
    modalite: "Seul : code, pipeline Blender, génération du monde",
    pitch: "Un safari-photo multijoueur où le serveur note chaque cliché selon le cadrage, la distance et l'angle de l'animal, avec 20 créatures low-poly générées par script Blender.",
    resume: "Le joueur parcourt deux zones générées à partir d'une graine, photographie des animaux qui se promènent, fuient ou chargent, puis vend sa pellicule pour acheter de meilleurs objectifs. Le client n'envoie que la direction du regard : le serveur choisit la créature visée dans un cône de 15°, vérifie la ligne de vue par raycast et calcule les étoiles.",
    stack: ["Luau (strict)", "Roblox Studio", "Rojo", "Selene", "StyLua", "DataStoreService", "Blender (Python)", "FBX"],
    images: [
      { src: "img/photo-foret-animaux.jpg", alt: "Les 10 animaux de la forêt, du lapin au cerf d'argent, rendus dans Blender" },
      { src: "img/photo-savane-animaux.jpg", alt: "Les 10 animaux de la savane, du suricate au lion doré, rendus dans Blender" },
      { src: "img/photo-decors.jpg", alt: "Décors de la forêt, stand du vendeur et appareil photo tenu en main" }
    ],
    chiffres: [{ n: "4 958", l: "lignes de Luau" }, { n: "20", l: "espèces" }, { n: "900", l: "lignes de Python Blender" }, { n: "15°", l: "cône de visée" }],
    comps: {
      "B1.1.2": "Luau strict, Selene, StyLua et Rokit : mêmes normes de code que sur mes autres projets.",
      "B1.1.5": "Sauvegarde DataStore : verrou de session multi-serveurs, UpdateAsync avec backoff, autosave 60 s, migrations v1 → v3, expulsion du joueur si la sauvegarde échoue pour ne pas écraser ses données.",
      "B1.5.1": "Tests unitaires sur la logique pure de notation des photos (PhotoLogic.spec)."
    },
    bloc2: ["B2.1", "B2.3"],
    contexte: "Un jeu calme pour changer des jeux de combat, mais avec le même principe : le serveur a toujours raison. La notation d'une photo devait être impossible à tricher et le réseau devait rester léger malgré des dizaines d'animaux animés.",
    environnement: ["Roblox Studio + Rojo 7.7.1, Rokit, Selene, StyLua", "DataStoreService", "Blender piloté en Python (bpy) : modélisation par script, export FBX, aperçus", "Documentation : docs Roblox (raycasts, CFrame), docs Blender Python"],
    demarche: [
      "Génération du monde au démarrage : terrain, collines, point d'eau, décors posés par graine déterministe, chemins dégagés.",
      "Notation serveur : 40 % centrage, 30 % distance, 30 % orientation de l'animal, convertis en 1 à 3 étoiles.",
      "IA des créatures par machine à états (promenade / fuite / charge) avec détection par cône de vision et raycast.",
      "Réseau : chaque créature n'est côté serveur qu'une boîte invisible ; chaque client y accroche le modèle et l'anime lui-même.",
      "Pipeline d'assets : un script Blender de 900 lignes construit les 20 animaux en pièces nommées et exporte FBX, palette et miniatures."
    ],
    productions: ["Jeu jouable à la première personne (souris, tactile, manette)", "Script Blender générant 20 animaux et les décors", "Couche de sauvegarde avec migrations", "Tests unitaires de la notation"],
    resultats: ["4 958 lignes de Luau strict en 19 fichiers", "20 espèces, 5 raretés, variantes Shiny et Mythique", "Objectif commun par zone : un légendaire apparaît quand tous les joueurs ont tout photographié"],
    difficultes: [
      "Trop de données réseau avec des dizaines d'animaux : une seule Part répliquée par créature, l'animation (pattes, tête, queue) est calculée côté client.",
      "La modération Roblox des FBX ralentit les imports : le script Blender gère un export partiel pour ne réimporter que ce qui change.",
      "Limite assumée : pas de pathfinding, les créatures choisissent des points joignables en ligne droite."
    ],
    securite: ["Validation des entrées : type, NaN, magnitude hors bornes, cadence trop rapide", "Choix de la cible et ligne de vue calculés uniquement côté serveur", "Sauvegarde verrouillée par session", "Migrations de schéma versionnées"],
    liens: [],
    code: {
      file: "src/server/Systems/Photo.luau", lang: "lua",
      why: "Le serveur ne fait confiance à rien venant du client (type, NaN, magnitude), puis sélectionne la créature visée par produit scalaire dans un cône de 15° et confirme par raycast qu'aucun obstacle ne la cache.",
      code: [
        "-- Le client n'envoie que la direction de son regard ; tout le reste est vérifié ici.",
        "local length = lookDir.Magnitude",
        "if length ~= length or length < 0.5 or length > 1.5 then -- length ~= length : NaN",
        "\treturn fail(\"Photo invalide\")",
        "end",
        "local dir: Vector3 = lookDir.Unit",
        "for _, creature in Creatures.alive do",
        "\tlocal offset = creature.root.Position - origin",
        "\tlocal distance = offset.Magnitude",
        "\tif distance < 0.1 or distance > lens.range then continue end",
        "\tlocal angle = math.deg(math.acos(math.clamp(dir:Dot(offset.Unit), -1, 1)))",
        "\tif angle > Config.Photo.halfAngle or angle >= bestAngle then continue end",
        "\tif not inLineOfSight(origin, creature.root, character) then continue end",
        "\tbest, bestAngle, bestDistance = creature, angle, distance",
        "end"
      ].join("\n")
    }
  },
  {
    slug: "levelup",
    titre: "Level Up Games",
    court: "Level Up Games — site vitrine HTML / JS",
    type: "formation",
    periode: "14/10/26 (TP de cours)",
    lieu: "Lycée — cours de développement web",
    modalite: "En binôme avec Anas (TP de cours) : tout le site réalisé ensemble, à parts égales, sans répartition par page ; HTML, CSS et JavaScript sans bibliothèque",
    pitch: "Un site de boutique de jeux vidéo entièrement dynamique en JavaScript pur : catalogue filtrable, fiches produit générées à la volée, formulaire intelligent et plan d'accès géolocalisé.",
    resume: "Site vitrine multi-pages pour une boutique de consoles et jeux neufs et d'occasion. Toutes les pages s'appuient sur un unique tableau de 12 produits : l'accueil sélectionne nouveautés et bonnes affaires, le catalogue filtre en temps réel, la fiche produit se construit depuis le paramètre d'URL. Le formulaire bascule entre réservation et rachat, vérifie le stock et calcule une estimation en direct.",
    stack: ["HTML5", "CSS3 (Grid, Flexbox)", "JavaScript vanilla", "URLSearchParams", "API Geolocation", "Google Maps", "SVG"],
    images: [
      { src: "img/levelup-accueil.jpg", alt: "Page d'accueil : bannière, boutons d'action et sections Nouveautés et Bonnes affaires générées en JavaScript" },
      { src: "img/levelup-catalogue.jpg", alt: "Catalogue : recherche et filtres type, état, plateforme appliqués en temps réel" },
      { src: "img/levelup-fiche.jpg", alt: "Fiche produit construite depuis le paramètre d'URL, avec garantie, stock et lien de réservation" },
      { src: "img/levelup-formulaire.jpg", alt: "Formulaire en mode rachat : coordonnées, plateforme, état et estimation calculée en direct" }
    ],
    chiffres: [{ n: "480", l: "lignes" }, { n: "5", l: "pages" }, { n: "12", l: "produits" }, { n: "0", l: "bibliothèque" }],
    comps: {
      "B1.3.1": "Site vitrine qui valorise l'image d'une boutique : identité graphique, thème sombre responsive, mentions de contact en pied de page.",
      "B1.3.3": "Toutes les pages exploitent les données de l'organisation (catalogue de 12 produits défini une seule fois) : accueil, catalogue filtrable, fiche produit, formulaire pré-rempli.",
      "B1.5.1": "Validation HTML5 (champs obligatoires, motif de téléphone français, quantité bornée, date de retrait au lendemain minimum) et contrôles JavaScript (stock, calcul), vérifiés page par page à la main ; pas encore de rapport de tests formalisé.",
      "B1.5.2": "Prévisualisation via un serveur HTTP local et stratégie de repli : carte Google Maps en iframe si aucune clé d'API n'est renseignée."
    },
    bloc2: ["B2.1"],
    contexte: "TP de cours : construire le site d'une boutique de jeux vidéo neufs et d'occasion avec catalogue, fiches, formulaire de réservation / rachat et plan d'accès, en HTML / CSS / JavaScript uniquement.",
    environnement: ["Éditeur de code, navigateur, serveur HTTP local Python", "API Geolocation du navigateur, Google Maps (embed ou API JS)", "Documentation : MDN"],
    demarche: [
      "Un seul modèle de données (scripts/produits.js) rendu dynamiquement sur toutes les pages avec Array.filter / map / find.",
      "Liaison des pages par paramètres d'URL (?id=, ?mode=rachat) lus avec URLSearchParams.",
      "Formulaire à deux modes commutables, validation HTML5 puis contrôles JavaScript (stock, date, estimation = 40 % du prix neuf pondéré par l'état).",
      "Plan d'accès : géolocalisation du visiteur et distance au magasin par la formule de haversine, repli iframe sans clé d'API.",
      "Mise en page responsive : grille auto-fill, navigation sticky, passage en une colonne sur mobile."
    ],
    productions: ["5 pages HTML, 1 feuille de style, 3 scripts", "Catalogue avec filtres combinés et compteur de résultats", "Formulaire réservation / rachat avec récapitulatif", "Page magasin géolocalisée"],
    resultats: ["480 lignes en 9 fichiers", "Accessibilité de base : labels associés, aria-label, role=status, lang=fr", "Aucune dépendance externe"],
    difficultes: [
      "Sans clé Google Maps, la carte JavaScript ne charge pas : repli automatique en iframe pour que la page reste utile.",
      "Les pages sont à la racine ou dans /pages/ : le chemin de base est résolu dynamiquement pour que les liens et images marchent partout.",
      "Point de vigilance identifié : le rendu HTML par concaténation de chaînes n'échappe pas les données ; acceptable ici (données internes), à corriger avant toute saisie utilisateur affichée."
    ],
    securite: ["Validation côté client des formulaires (motifs, bornes, dates)", "Aucune donnée personnelle persistée : le formulaire n'envoie rien à un serveur", "Risque d'injection HTML identifié et documenté"],
    liens: [],
    code: {
      file: "site/scripts/carte.js", lang: "js",
      why: "Géolocalisation du navigateur et formule de haversine pour calculer, côté client et sans dépendance, la distance réelle entre le visiteur et la boutique.",
      code: [
        "function distanceKm(lat1, lon1, lat2, lon2) {",
        "  var r = Math.PI / 180, R = 6371;",
        "  var a = Math.pow(Math.sin((lat2 - lat1) * r / 2), 2) +",
        "    Math.cos(lat1 * r) * Math.cos(lat2 * r) * Math.pow(Math.sin((lon2 - lon1) * r / 2), 2);",
        "  return 2 * R * Math.asin(Math.sqrt(a));",
        "}",
        "",
        "function afficherDistance(lat, lng) {",
        "  var d = distanceKm(lat, lng, MAGASIN.y, MAGASIN.x);",
        "  document.getElementById(\"distance\").textContent =",
        "    \"Vous êtes à environ \" + d.toFixed(1).replace(\".\", \",\") + \" km du magasin.\";",
        "}",
        "",
        "if (navigator.geolocation) {",
        "  navigator.geolocation.getCurrentPosition(function (p) {",
        "    afficherDistance(p.coords.latitude, p.coords.longitude);",
        "  });",
        "}"
      ].join("\n")
    }
  },
  {
    slug: "cours",
    titre: "Studs & Scripts · Nœuds & Signaux",
    court: "Cours interactifs Roblox et Godot (sites web)",
    type: "perso",
    periode: "19/10/26",
    lieu: "Marseille — projet personnel",
    modalite: "Seul : plan pédagogique, structure, choix des 7 jeux « fil rouge » ; rédaction assistée par IA, relue et testée par moi",
    pitch: "Deux cours complets et interactifs, Roblox Studio + Luau puis Godot 4 + GDScript : 60 chapitres, 63 quiz, 7 jeux à construire, dans deux pages HTML sans aucune dépendance.",
    resume: "Chaque cours est une page HTML autonome qui reproduit l'ergonomie de l'outil enseigné : sommaire façon Explorer de Roblox Studio ou dock Scène de Godot, blocs de code aux couleurs de l'éditeur officiel. Sommaire, quiz et pieds de chapitre sont générés dynamiquement, la progression est enregistrée en localStorage et la coloration syntaxique est un tokenizer écrit à la main.",
    stack: ["HTML5", "CSS3 (thème clair / sombre)", "JavaScript vanilla", "localStorage", "IntersectionObserver", "Clipboard API"],
    images: [
      { src: "img/cours-studs.jpg", alt: "Accueil de Studs & Scripts : sommaire façon Explorer de Roblox Studio avec les 23 chapitres et la progression" },
      { src: "img/cours-noeuds.jpg", alt: "Accueil de Nœuds & Signaux : dock Scène façon Godot avec anneaux colorés par famille de nœud" },
      { src: "img/cours-studs-chapitre.jpg", alt: "Chapitre sur les événements : code Luau coloré, barre d'emplacement du script et bouton Copier" },
      { src: "img/cours-noeuds-chapitre.jpg", alt: "Chapitre sur les signaux : tableau des signaux courants et script GDScript coloré" }
    ],
    chiffres: [{ n: "60", l: "chapitres" }, { n: "63", l: "quiz" }, { n: "7", l: "jeux guidés" }, { n: "280+", l: "blocs de code" }],
    comps: {
      "B1.5.3": "Supports d'accompagnement complets pour des débutants : objectifs par chapitre, défis avec solution, quiz avec explication, aide-mémoire, programmes sur 6 et 10 semaines.",
      "B1.6.1": "Les deux cours formalisent mon propre environnement d'apprentissage sur Roblox et Godot (parcours en deux étapes, passerelle « De Roblox à Godot »).",
      "B1.6.2": "Contenu aligné sur ma veille : Godot 4.6 (Jolt par défaut), équivalences Godot 3 → 4, Luau typé."
    },
    bloc2: ["B2.1"],
    contexte: "J'ai appris Roblox puis Godot en autodidacte. Je voulais structurer ce parcours pour d'autres débutants, sous une forme utilisable hors ligne et sans installation : un fichier HTML par cours.",
    environnement: ["HTML / CSS / JavaScript, aucune bibliothèque", "Google Fonts (Atkinson Hyperlegible pour la lisibilité)", "Outils : assistant IA pour la rédaction, Roblox Studio et Godot 4.6 pour tester chaque exemple"],
    demarche: [
      "Plan pédagogique : 23 chapitres Roblox (3 jeux : obby, simulateur, « la lave monte ») puis 37 chapitres Godot (4 jeux, de la 2D aux shaders et au multijoueur).",
      "Interface qui imite l'outil enseigné pour réduire la charge mentale (Explorer, dock Scène, couleurs de l'éditeur de script).",
      "Génération du sommaire, des quiz et des pieds de chapitre depuis les sections ; progression en localStorage.",
      "Colorateur syntaxique Luau / GDScript / shader écrit en expressions régulières, avec échappement HTML systématique.",
      "Accessibilité : aria-live pour les retours de quiz, navigation clavier, thème sombre automatique, tiroir mobile fermable par Échap."
    ],
    productions: ["Deux pages HTML autonomes (3 249 et 5 991 lignes)", "63 quiz et 58 défis avec solution repliable", "Aide-mémoire Luau / GDScript, glossaire, programmes de travail"],
    resultats: ["9 240 lignes dont ~510 de CSS et ~550 de JavaScript", "Fonctionne hors ligne, sans serveur ni installation", "Progression sauvegardée par chapitre"],
    difficultes: [
      "Colorer trois langages sans bibliothèque : un tokenizer par expressions régulières à groupes capturants, chaque fragment échappé avant insertion dans le DOM.",
      "L'API Clipboard est refusée en file:// sur certains navigateurs : repli par sélection du texte.",
      "Transparence : la rédaction a été assistée par une IA ; la structure, les choix pédagogiques et les tests des exemples dans Studio et Godot sont de moi."
    ],
    securite: ["Échappement systématique du code inséré dans le DOM (aucune injection HTML)", "Aucune donnée personnelle : seule la progression est stockée localement"],
    liens: [],
    code: {
      file: "Studs & Scripts.html", lang: "js",
      why: "Un colorateur Luau en vingt lignes : une expression régulière à groupes capturants découpe commentaires, chaînes, nombres et identifiants ; chaque fragment est échappé avant insertion, et un coup d'œil en avant distingue les appels de fonction des variables.",
      code: [
        "const KW = new Set('and break continue do else elseif end for function if in local not or repeat return then until while'.split(' '));",
        "const RE = /(--\\[\\[[\\s\\S]*?\\]\\]|--[^\\n]*)|(\"(?:\\\\.|[^\"\\\\\\n])*\"|'(?:\\\\.|[^'\\\\\\n])*')|(\\b\\d+(?:\\.\\d+)?\\b)|([A-Za-z_]\\w*)/g;",
        "const esc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');",
        "function highlight(src) {",
        "  let out = '', last = 0, m;",
        "  RE.lastIndex = 0;",
        "  while ((m = RE.exec(src))) {",
        "    out += esc(src.slice(last, m.index));",
        "    let cls = '';",
        "    if (m[1]) cls = 'c';            // commentaire",
        "    else if (m[2]) cls = 's';       // chaîne",
        "    else if (m[3]) cls = 'n';       // nombre",
        "    else if (KW.has(m[4])) cls = 'k'; // mot-clé",
        "    else if (/^\\s*\\(/.test(src.slice(RE.lastIndex, RE.lastIndex + 3))) cls = 'f'; // appel",
        "    out += cls ? '<span class=\"t-' + cls + '\">' + esc(m[0]) + '</span>' : esc(m[0]);",
        "    last = RE.lastIndex;",
        "  }",
        "  return out + esc(src.slice(last));",
        "}"
      ].join("\n")
    }
  },
  {
    slug: "mud",
    titre: "MUD en Dart — TP5 (TDD)",
    court: "MUD en Dart — bibliothèque en TDD (TP5)",
    type: "formation",
    periode: "10/2026 (TP de cours, dépôt du 14/10/26)",
    lieu: "Formation — cours de développement",
    modalite: "Seul (un seul auteur dans l'historique Git)",
    pitch: "Les fondations d'un jeu d'aventure textuel en Dart, construites brique par brique en développement piloté par les tests : 37 tests verts, 59 commits, zéro avertissement.",
    resume: "La bibliothèque définit Thing (un objet nommé doté d'un volume) et Box (un conteneur qui s'ouvre, se ferme, possède une capacité optionnelle et refuse ce qui ne rentre pas). Chaque élément du backlog a sa branche Git : commit du test rouge, puis de l'implémentation verte, puis fusion dans main.",
    stack: ["Dart 3.8", "package:test", "dart analyze / lints", "dart format", "Git (branches par fonctionnalité)", "GitHub + devcontainer"],
    images: [],
    chiffres: [{ n: "37", l: "tests verts" }, { n: "59", l: "commits" }, { n: "0", l: "avertissement" }, { n: "253", l: "lignes de tests" }],
    comps: {
      "B1.1.2": "Standards du cours appliqués : lints recommandés (package:lints), dart analyze sans avertissement, dart format, environnement reproductible (devcontainer / Codespaces).",
      "B1.4.1": "Backlog du TP analysé et découpé en éléments testables indépendamment, bonus « pour aller plus loin » inclus.",
      "B1.4.2": "Une branche test-* par élément du backlog, test rouge puis implémentation verte puis fusion dans main : 59 commits lisibles.",
      "B1.4.3": "Indicateurs suivis à chaque étape : nombre de tests verts (37/37), avertissements d'analyse (0), réponses aux questions du TP (REPONSES.md).",
      "B1.5.1": "37 tests unitaires organisés en groupes avec matchers (isA, same, isNull, equals, isNot), tous verts.",
      "B1.6.1": "Dépôt GitHub avec devcontainer : environnement de développement reproductible en un clic."
    },
    bloc2: ["B2.1", "B2.2"],
    contexte: "TP5 du cours de développement : construire en Dart les premières briques d'un MUD (jeu d'aventure textuel multijoueur) en appliquant strictement le cycle rouge / vert / refactor, à partir d'un dépôt modèle fourni par l'enseignant.",
    environnement: ["Dart 3.8, package:test, package:lints", "Git et GitHub (dépôt personnel forké du modèle), devcontainer / Codespaces", "Documentation : énoncé du TP, documentation Dart (null safety, collections)"],
    demarche: [
      "Lecture du backlog et création d'une branche par fonctionnalité.",
      "Pour chaque fonctionnalité : écrire le test (rouge), l'implémentation minimale (vert), nettoyer, fusionner.",
      "Null safety : capacité optionnelle int? copiée dans une variable locale pour permettre la promotion de type.",
      "Égalité structurelle par redéfinition de == et hashCode ; actions métier (actionAdd, actionLook, find) séparées des primitives.",
      "Programme de démonstration : un coffre de capacité 5 qui accepte une épée et une potion mais refuse un bouclier."
    ],
    productions: ["Bibliothèque lib/ (Thing, Box) et programme bin/mud.dart", "37 tests unitaires", "REPONSES.md : réponses aux questions du TP", "Historique Git de 59 commits"],
    resultats: ["345 lignes dont 92 de bibliothèque et 253 de tests", "dart analyze : 0 avertissement", "Dépôt public sur GitHub"],
    difficultes: [
      "Le type nullable int? ne se promeut pas dans un getter : la valeur est copiée dans une variable locale finale avant le test de nullité.",
      "Garder un historique lisible : une branche par élément du backlog, un commit pour le test rouge puis un pour l'implémentation verte (59 commits au total).",
      "Limite assumée : le MUD lui-même (salles, joueurs, réseau) n'est pas implémenté, le TP s'arrête aux briques Box / Thing."
    ],
    securite: ["Validation des règles métier avant toute mutation (boîte ouverte, place suffisante)", "Tests automatisés comme filet de sécurité contre les régressions"],
    liens: [{ label: "Dépôt GitHub", url: "https://github.com/gulerogurpro/mud-dart-tp5" }],
    code: {
      file: "lib/box.dart", lang: "dart",
      why: "Null safety de Dart (la capacité int? est copiée localement pour permettre la promotion de type), séparation entre primitive (add) et action métier (actionAdd), et usage idiomatique de firstOrNull.",
      code: [
        "int? get remainingRoom {",
        "  final cap = capacity;",
        "  return cap == null ? null : cap - usedVolume;",
        "}",
        "",
        "bool hasRoomFor(Thing thing) {",
        "  final cap = capacity;",
        "  if (cap == null) return true;",
        "  return usedVolume + thing.volume <= cap;",
        "}",
        "",
        "bool actionAdd(Thing thing) {",
        "  if (!_open || !hasRoomFor(thing)) return false;",
        "  add(thing);",
        "  return true;",
        "}",
        "",
        "Thing? find(String name) {",
        "  if (!_open) return null;",
        "  return _contents.where((t) => t.hasName(name)).firstOrNull;",
        "}"
      ].join("\n")
    }
  },
  {
    slug: "godot",
    titre: "Mini-jeux Godot 4",
    court: "Mini-jeux Godot 4 — jeu de plateforme 2D et prototypes 3D",
    type: "perso",
    periode: "28/03/26 → 12/05/26",
    lieu: "Marseille — auto-formation",
    modalite: "Seul : apprentissage de Godot et de GDScript",
    pitch: "Trois mini-jeux Godot 4.6 en GDScript : un platformer 2D complet exporté pour Windows et Linux, et deux prototypes 3D (première et troisième personne) qui posent les bases (physique, animation, signaux, caméra).",
    resume: "« First game » est un platformer jouable de bout en bout : un chevalier animé court et saute sur une TileMap, ramasse des pièces comptées par un GameManager, évite un slime qui patrouille et meurt dans une zone de chute qui ralentit le temps. Les deux prototypes 3D ajoutent un contrôleur à la première personne puis un personnage Mixamo animé avec caméra orbitale.",
    stack: ["Godot 4.6", "GDScript", "Jolt Physics", "TileMap", "AnimationPlayer", "Mixamo (.glb)", "Export Windows / Linux"],
    images: [],
    chiffres: [{ n: "3", l: "mini-jeux" }, { n: "191", l: "lignes de GDScript" }, { n: "2", l: "plateformes d'export" }, { n: "9", l: "pièces à ramasser" }],
    comps: {
      "B1.5.2": "Platformer exporté en exécutable Windows et binaire Linux via export_presets.cfg.",
      "B1.6.1": "Auto-formation structurée : tutoriel débutant (Brackeys) pour le platformer, puis prototypes 3D personnels pour aller plus loin.",
      "B1.6.2": "Choix techniques issus de ma veille : Godot 4.6 avec Jolt Physics par défaut (voir la fiche de veille du 26/01/2026)."
    },
    bloc2: ["B2.1"],
    contexte: "Après Roblox, je voulais comprendre un moteur open source classique : arbre de scènes, signaux, physique, export multiplateforme. Trois petits projets valent mieux qu'un gros pour apprendre les bases.",
    environnement: ["Godot 4.6, GDScript, Jolt Physics, Direct3D 12", "Assets du tutoriel Brackeys (chevalier, slime, pièces) et modèle Mixamo", "Documentation : docs Godot, tutoriel vidéo"],
    demarche: [
      "Platformer 2D : déplacement, saut, gravité, animations, slime qui fait demi-tour grâce à deux RayCast2D, pièces (Area2D + signal), zone de mort avec ralenti puis rechargement de la scène.",
      "Prototype FPS : CharacterBody3D, souris capturée, rotation du corps et de la caméra, monde en CSG avec ciel procédural.",
      "Troisième personne : personnage Mixamo, marche / course, caméra orbitale découplée du modèle, orientation par look_at.",
      "Export Windows et Linux du platformer."
    ],
    productions: ["First game.exe et binaire Linux", "Deux scènes de prototypes 3D", "Input Map personnalisée en français"],
    resultats: ["191 lignes de GDScript en 7 scripts", "Platformer jouable de bout en bout", "Bases acquises : signaux, autoload, Input Map, physique 2D et 3D"],
    difficultes: [
      "Caméra orbitale : le corps tourne avec la souris, les visuels contre-tournent et la caméra s'incline sur son pivot ; il a fallu convertir l'entrée 2D en direction monde via transform.basis.",
      "Ne pas relancer l'animation à chaque frame : vérification de l'animation courante avant play().",
      "Limites assumées : prototypes 3D sans objectif de jeu, variable is_lock déclarée mais pas encore utilisée, et quelques fautes de nommage (dossier « Scnenes », action « courire ») à corriger."
    ],
    securite: ["Non concerné (jeux solo hors ligne)"],
    liens: [],
    code: {
      file: "Scripts/player.gd", lang: "gdscript",
      why: "Extrait tel quel du contrôleur troisième personne : conversion d'une entrée 2D en direction dans l'espace monde (transform.basis), rig caméra découplé du modèle, et bascule d'animation qui vérifie l'animation courante pour ne pas la relancer à chaque frame.",
      code: [
        "func _input(event):",
        "\tif event is InputEventMouseMotion :",
        "\t\trotate_y(deg_to_rad(-event.relative.x*rotate_horizontal))",
        "\t\tvisuels.rotate_y(deg_to_rad(event.relative.x*rotate_horizontal))",
        "\t\tcamera_mount.rotate_x((deg_to_rad(-event.relative.y*rotate_vertical)))",
        "",
        "func _physics_process(delta: float) -> void:",
        "\tvar input_dir := Input.get_vector(\"gauche\", \"droite\", \"avancer\", \"reculer\")",
        "\tvar direction := (transform.basis * Vector3(input_dir.x, 0, input_dir.y)).normalized()",
        "\tif direction:",
        "\t\tif running:",
        "\t\t\tif animation_player.current_animation != \"running\":",
        "\t\t\t\tanimation_player.play(\"running\")",
        "\t\telse :",
        "\t\t\tif animation_player.current_animation != \"walking\":",
        "\t\t\t\tanimation_player.play(\"walking\")",
        "\t\tif !is_lock:",
        "\t\t\tvisuels.look_at(position + direction)",
        "\t\tvelocity.x = direction.x * SPEED",
        "\t\tvelocity.z = direction.z * SPEED"
      ].join("\n")
    }
  },
  {
    slug: "portfolio",
    titre: "Ce portfolio & ma veille",
    court: "Portfolio E5 et veille technologique (ce site)",
    type: "portfolio",
    periode: "10/2026 → session " + SESSION,
    lieu: "Marseille",
    modalite: "Conception, contenu et veille par moi ; intégration HTML / CSS / JavaScript réalisée avec un assistant IA, relue et vérifiée",
    pitch: "Le site que vous lisez : HTML, CSS et JavaScript sans bibliothèque, construit autour de la grille d'évaluation E5 et d'une veille datée et sourcée sur les moteurs de jeu.",
    resume: "Une seule page, un seul fichier de données : chaque réalisation est décrite en dix rubriques, chaque coche de la grille de compétences renvoie à une preuve, et la veille rassemble 21 fiches vérifiées sur Unreal, Unity, Godot et Roblox. Mentions légales et politique de confidentialité sont publiées.",
    stack: ["HTML5", "CSS3", "JavaScript vanilla", "Canvas", "dialog natif", "localStorage"],
    images: [],
    chiffres: [{ n: "21", l: "fiches de veille" }, { n: "0", l: "framework" }, { n: "22", l: "sous-compétences listées" }],
    comps: {
      "B1.3.1": "Image professionnelle cohérente (site, GitHub), mentions légales et politique de confidentialité publiées, aucune donnée sensible exposée.",
      "B1.3.2": "Balises de description, titres hiérarchisés, URL stable et partageable (ancres, liens directs vers les fiches et les compétences).",
      "B1.6.2": "Veille sur les moteurs de jeu : sources officielles et presse spécialisée, fiches datées, résumé, impact, bilan.",
      "B1.6.3": "Identité professionnelle visible et cohérente : ce site, un profil LinkedIn, un dépôt GitHub public et une adresse de contact professionnelle.",
      "B1.6.4": "Projet professionnel explicité : stage / alternance en développement en " + SESSION + ", puis poursuite d'études."
    },
    bloc2: ["B2.1"],
    contexte: "L'épreuve E5 exige un portfolio accessible retraçant le parcours, les réalisations et les compétences du bloc 1. Je l'ai conçu pour que le jury trouve chaque preuve en un clic, et pour qu'il fonctionne aussi bien hébergé qu'ouvert depuis une clé USB.",
    environnement: ["HTML / CSS / JavaScript sans bibliothèque, Google Fonts avec polices de repli", "Pas de serveur : tout fonctionne en file://", "Documentation : référentiel BTS SIO, circulaire nationale, MDN"],
    demarche: ["Recenser les sous-compétences du bloc 1 avec leurs libellés exacts.", "Décrire chaque réalisation en dix rubriques identiques.", "Relier chaque coche de la grille à une preuve précise.", "Rédiger la veille à partir d'articles ouverts et vérifiés, avec date, source et impact.", "Vérifier accessibilité (clavier, contraste, mouvement réduit) et impression (mode jury)."],
    productions: ["Site statique en 5 fichiers", "Grille de compétences interactive", "Tableau de synthèse (version web)", "21 fiches de veille"],
    resultats: ["Fonctionne hébergé et hors ligne", "Mode jury imprimable", "Thème clair pour la projection"],
    difficultes: ["Rester honnête : les compétences non couvertes (B1.2) sont affichées comme telles plutôt que gonflées, et l'usage d'un assistant IA est indiqué là où il a servi.", "Garder la cohérence des intitulés entre cartes, fiches, grille et tableau de synthèse : une seule source de données."],
    securite: ["Aucun cookie, aucun traceur ; localStorage uniquement pour le thème et les préférences d'animation", "Formulaire de contact en mailto : aucune donnée transmise à un serveur", "Mentions légales et politique de confidentialité publiées"],
    liens: [{ label: "Site en ligne", url: "https://gulerogurpro.github.io/" }, { label: "Code source du site", url: "https://github.com/gulerogurpro/gulerogurpro.github.io" }],
    code: null
  }
];

/* ---------- Parcours (git log) ---------- */
var PARCOURS = [
  { hash: "a7f3c2e", date: "10/2026", head: true, titre: "BTS SIO 2e année — option SLAM", detail: "Lycée Marie Curie, Marseille. Session " + SESSION + ". Projets Roblox publiés, TP Dart en TDD, préparation du stage de 2e année.", tags: ["v-medieval-duels", "v-simulateur-photo", "v-mud-dart", "v-level-up-games"], lien: "#realisations" },
  { hash: "5b1d9e0", date: "10/2026", titre: "Échapper au Minus et Fusée Clicker publiés sur Roblox", detail: "Deux jeux complets mis à disposition de vrais joueurs : déploiement, sauvegarde, promotion.", tags: ["v-minus", "v-fusee-clicker"], lien: "#realisations" },
  { hash: "4e9a7b3", date: "03/2026 → 05/2026", titre: "Auto-formation Godot 4", detail: "Trois mini-jeux en GDScript (jeu de plateforme exporté pour Windows et Linux, deux prototypes 3D) pour apprendre un moteur open source.", tags: ["v-mini-jeux-godot"], lien: "#realisations" },
  { hash: "9c04f11", date: "09/2025", titre: "Entrée en BTS SIO", detail: "Services informatiques aux organisations : support, développement, cybersécurité. Découverte du mode projet et des normes de code.", tags: [], lien: "#profil" },
  { hash: "e2a8d47", date: "07/2024", titre: "Bac STI2D option SIN", detail: "Lycée Denis Diderot, Marseille. Systèmes d'information et numérique : premiers programmes, électronique, projets en équipe.", tags: [], lien: "#profil" },
  { hash: "3f7b0c9", date: "2023 – 2024", titre: "Certification PIX", detail: "Compétences numériques certifiées : recherche d'information, protection des données, création de contenu.", tags: [], lien: "#developpement" },
  { hash: "c81e4aa", date: "avant le BTS", branch: "stage", titre: "Stage en cabinet de kinésithérapie", detail: "Découverte du monde professionnel : installation des appareils de soin pour la clientèle, pratique encadrée des massages sur des personnes âgées. Ce que j'en garde : la relation avec l'usager, la rigueur et la ponctualité.", tags: [], lien: "#profil" },
  { hash: "d41ab62", date: "07/2021", titre: "Diplôme national du brevet", detail: "Collège Jules Massenet, Marseille.", tags: [], lien: "#profil" },
  { hash: "0000001", date: "2006", titre: "Initial commit", detail: "Marseille.", tags: [], lien: "#top" }
];

/* ---------- Veille technologique : les moteurs de jeu ---------- */
var VEILLE = {
  theme: "Les moteurs de jeu : Unreal Engine, Unity, Godot et Roblox",
  pourquoi: "Tous mes projets de jeu tournent sur un moteur de jeu. Suivre leur évolution, c'est choisir les bons outils, anticiper les ruptures (Unreal Engine 6 et Verse, Unity 7 et .NET 10, nouveau Type Solver de Luau) et comprendre comment l'IA change le métier de développeur de jeux.",
  methode: [
    "Sources officielles suivies en priorité : blogs et notes de version d'Unreal Engine, Unity et Godot, newsroom et DevForum de Roblox.",
    "Presse spécialisée pour le recul : 80.lv, GameFromScratch, DSOGaming, CG Channel, Open Source For You.",
    "Rythme : un créneau hebdomadaire de lecture (flux RSS et newsletters), et une fiche par information retenue : date, source, résumé, impact pour un développeur junior.",
    "Chaque fiche est vérifiée en ouvrant la source avant publication ; aucune information non sourcée."
  ],
  bilan: [
    "Luau : le nouveau Type Solver m'a fait garder le mode strict et typer mes modules partagés sur Medieval Duels et Fusée Clicker.",
    "Roblox Studio agentique et Build : la valeur d'un développeur se déplace vers la conception et le code serveur de qualité, d'où mon insistance sur la validation côté serveur.",
    "Godot 4.6 (Jolt par défaut, IDs de nœuds) : mes prototypes Godot utilisent Jolt et les projets ont été mis à niveau.",
    "Unreal Engine 6 et Verse : prochain apprentissage planifié via UEFN, pour ne pas dépendre d'un seul écosystème."
  ],
  tendances: {
    "Unreal Engine": "Entre 2025 et 2026, Unreal a bouclé la génération UE5 (5.6, 5.7, 5.8) avec un cap sur le 60 FPS : Lumen allégé, MegaLights en production, Nanite étendu à la végétation. Le tournant est Unreal Engine 6 (accès anticipé 2027), qui fusionne UE5 et UEFN autour de Verse et Scene Graph.",
    "Unity": "Après l'abandon du Runtime Fee, Unity cherche à regagner la confiance : Unity 6.2 (Unity AI), 6.3 LTS, 6.4 (ECS intégré) et Unity 7 annoncé pour début 2027 sur CoreCLR / .NET 10, sans rupture de compatibilité. L'IA (Unity AI, MCP, Spark) et la modernisation technique dominent.",
    "Godot": "Deux versions majeures par an (4.5, 4.6, 4.7) qui alternent rendu avancé et travail de fond sur le langage et l'éditeur. La professionnalisation s'accélère : LibGodot, plugins mobiles officiels, W4 Games financée à hauteur de 33 M$ pour le portage console.",
    "Roblox": "L'IA générative devient le cœur de la plateforme (Cube, CubePart, Assistant agentique, Build). Luau se professionnalise (Type Solver, bibliothèques open source sur Wally, outils en ligne de commande). La croissance des joueurs ralentit alors que les paiements aux créateurs augmentent : la qualité et la rétention priment."
  },
  entries: [
    { date: "2026-10-07", engine: "Unity", title: "Unity Spark : créer des jeux dans le navigateur avec l'IA, en partenariat avec Google", summary: "Matt Bromberg, PDG d'Unity, présente Unity Spark, un outil développé avec Google pour créer et partager des jeux directement dans le navigateur, sans expérience préalable d'Unity, connecté à l'Asset Store. Unity insiste sur la création d'expériences originales plutôt que la régurgitation de jeux existants ; une liste d'attente est ouverte, sans date ni tarif.", impact: "Concurrent direct de l'approche « créer sans coder » de Roblox : la valeur se déplace vers la conception de gameplay et la capacité à relire et corriger du code généré.", source: "Blog officiel Unity", url: "https://unity.com/blog/why-we-built-unity-spark", tags: ["IA", "no-code"] },
    { date: "2026-09-21", engine: "Unreal Engine", title: "Les « UEFN Source assets » arrivent sur Fab : des systèmes Verse complets et modifiables", summary: "Epic ouvre sur sa marketplace Fab une catégorie de systèmes complets écrits en Verse et Scene Graph (IA de PNJ, véhicules, armes, interfaces) dont le code peut être modifié. Les listings sont publiés automatiquement à partir du 15 octobre 2026 après revue technique ; les vendeurs touchent 88 % des revenus nets.", impact: "Un junior peut étudier du code Verse professionnel en achetant un asset source, ou vendre ses propres systèmes : un modèle proche du marché des modules Roblox.", source: "Epic Developer Community", url: "https://forums.unrealengine.com/t/uefn-source-assets-are-coming-to-fab-upload-yours-today/2833019", tags: ["Verse", "marketplace"] },
    { date: "2026-08-25", engine: "Godot", title: "W4 Games lève 18 M$ (série B menée par Tencent) pour industrialiser Godot", summary: "W4 Games, fondée par les créateurs de Godot, boucle une série B de 18 millions de dollars (33 M$ levés au total), assortie d'un accord pluriannuel avec Tencent pour développer l'écosystème en Asie. W4 vend du support, du portage console et des outils, pendant que le moteur sous licence MIT reste piloté par la Godot Foundation.", impact: "Un moteur gratuit dispose désormais d'une entreprise financée pour le portage console : choisir Godot n'est plus un pari amateur.", source: "Open Source For You", url: "https://www.opensourceforu.com/2026/08/w4-games-to-scale-godot-engine/", tags: ["financement", "open source"] },
    { date: "2026-07-30", engine: "Roblox", title: "Résultats Roblox T2 2026 : 123 M de joueurs quotidiens, revenus +36 % mais croissance qui ralentit", summary: "Roblox annonce 123 millions d'utilisateurs actifs quotidiens (+10 % sur un an, en recul par rapport aux 151,5 M du T3 2025), 29 milliards d'heures jouées, un chiffre d'affaires de 1,469 Md$ (+36 %) et des bookings de 1,557 Md$ (+8 %). Les paiements aux créateurs atteignent 363 M$ (+15 %). Roblox prévoit des bookings en baisse de 14 à 18 % au T3.", impact: "L'économie créateur reste solide mais la base joueurs ralentit : un junior doit soigner la rétention et viser les publics internationaux.", source: "Roblox Corp. — lettre aux actionnaires (SEC)", url: "https://www.sec.gov/Archives/edgar/data/0001315098/000162828026051059/ex991-robloxq22026earnin.htm", tags: ["économie", "créateurs"] },
    { date: "2026-07-21", engine: "Unity", title: "Unity 7 annoncé à Unite Seoul : CoreCLR / .NET 10, preview en décembre, sortie début 2027", summary: "Unity 7 est présenté comme une continuation d'Unity 6 sans rupture de compatibilité : passage à CoreCLR avec .NET 10 et C# 14, rechargement de code partiel, Fast Enter Play Mode par défaut, éclairage global temps réel pour URP, WebGPU en production, temps de compilation des shaders réduits jusqu'à 90 %. Une CLI et un serveur MCP gratuits sont annoncés.", impact: "Le passage à .NET moderne rapproche Unity du C# appris en BTS SIO ; le serveur MCP ouvre la porte aux assistants IA pilotant l'éditeur.", source: "Blog officiel Unity", url: "https://unity.com/blog/unite-seoul-keynote-2026-recap", tags: ["C#", ".NET", "MCP"] },
    { date: "2026-07-16", engine: "Roblox", title: "Build : créer un jeu Roblox par prompt depuis son téléphone (alpha publique)", summary: "Roblox dévoile Build, un onglet de création mobile : on décrit un jeu, l'IA génère une base que l'on itère, teste et publie. Build partage le back-end et l'historique de Roblox Studio ; l'alpha publique démarre le 28 juillet 2026 en Nouvelle-Zélande, avec des agents de playtest et d'analytics à venir.", impact: "La barrière d'entrée s'effondre : la valeur d'un développeur junior se déplace vers la conception, le gameplay et le code serveur de qualité.", source: "Newsroom officiel Roblox", url: "https://about.roblox.com/newsroom/2026/07/build-without-limits-on-roblox", tags: ["IA", "mobile", "no-code"] },
    { date: "2026-06-18", engine: "Unreal Engine", title: "Unreal Engine 6 fusionnera UE5 et UEFN autour du langage Verse", summary: "Au State of Unreal 2026, Epic présente Unreal Engine 6 comme la réunion d'UE5 et de l'Unreal Editor for Fortnite dans un moteur unifié. La programmation gameplay bascule vers Verse et Scene Graph ; Actors et Blueprints resteront au début puis seront dépréciés, avec des outils de conversion. Accès anticipé prévu en 2027.", impact: "Apprendre Verse (déjà utilisable dans UEFN) devient un investissement rentable : c'est le langage de la prochaine génération d'Unreal.", source: "80.lv", url: "https://80.lv/articles/upd-unreal-engine-6-will-combine-uefn-and-ue-into-a-unified-engine", tags: ["UE6", "Verse"] },
    { date: "2026-06-18", engine: "Godot", title: "Godot 4.7 « Lights, Camera, Action ! » : sortie HDR, AreaLight3D et nouvel Asset Store", summary: "Godot 4.7 ajoute la sortie HDR en 2D et 3D sur Windows, macOS, iOS, visionOS et Linux, un nœud AreaLight3D, des améliorations Vulkan pour la XR, et côté éditeur un Asset Store repensé, des aperçus de shaders et un peintre de scène 2D. Sur Android, l'export et la publication se font depuis l'éditeur.", impact: "Pour un prototype en GDScript, c'est surtout l'éditeur qui gagne en confort ; la HDR montre que Godot rattrape Unreal et Unity sur le rendu.", source: "Blog officiel Godot Engine", url: "https://godotengine.org/releases/4.7/", tags: ["rendu", "éditeur"] },
    { date: "2026-06-17", engine: "Unreal Engine", title: "Unreal Engine 5.8 : dernière grande version d'UE5, Mesh Terrain et Lumen Lite", summary: "Annoncée comme la dernière version majeure avant Unreal Engine 6, la 5.8 ajoute Mesh Terrain (un terrain en vrais maillages qui autorise grottes et surplombs), Lumen Lite (éclairage global jusqu'à deux fois plus rapide) et MegaLights prêt pour la production, avec un objectif de 60 FPS sur consoles.", impact: "La version stable sur laquelle baser un projet scolaire en 2026-2027 : Lumen Lite rend l'éclairage dynamique accessible sur des machines modestes.", source: "DSOGaming", url: "https://www.dsogaming.com/news/unreal-engine-5-8-released-fully-detailed/", tags: ["UE5.8", "Lumen"] },
    { date: "2026-05-28", engine: "Roblox", title: "CubePart : génération 3D par parties contrôlables, ajoutée au dépôt open source Cube", summary: "L'équipe recherche de Roblox présente CubePart, qui produit un mesh 3D à partir d'un prompt et d'un schéma listant les parties attendues (cabine, roues…). Chaque partie sort comme un mesh séparé et nommé, exploitable par les scripts, l'animation et la physique. Le dépôt Cube est mis à jour et l'intégration dans Studio annoncée.", impact: "Les objets générés par IA deviennent scriptables en Luau (une porte qui s'ouvre, une roue qui tourne), donc utilisables dans un vrai prototype.", source: "Newsroom officiel Roblox", url: "https://about.roblox.com/newsroom/2026/05/cubepart-roblox-open-vocabulary-part-controllable-3d-generator", tags: ["IA", "3D", "open source"] },
    { date: "2026-04-15", engine: "Roblox", title: "Roblox Studio passe en mode agentique : l'Assistant planifie, génère et teste", summary: "Roblox annonce un mode Planning pour l'Assistant : il analyse le code et le data model, pose des questions, puis propose un plan modifiable avant toute modification. S'y ajoutent la génération de meshes texturés, des modèles procéduraux et un agent de playtest en bêta. 44 % des 1 000 meilleurs créateurs utilisent déjà l'Assistant ou des outils IA via le serveur MCP de Studio.", impact: "L'Assistant devient un copilote de projet : il faut apprendre à relire et valider ses plans, et le serveur MCP permet de brancher d'autres outils IA sur Studio.", source: "Newsroom officiel Roblox", url: "https://about.roblox.com/newsroom/2026/04/roblox-studio-going-agentic", tags: ["IA", "Studio", "MCP"] },
    { date: "2026-04-11", engine: "Godot", title: "Godot Mobile : la Godot Foundation reprend les plugins Android / iOS essentiels", summary: "La Godot Foundation annonce qu'elle maintiendra elle-même les plugins liés aux SDK Google et Apple (Play Billing, Play Games Services, StoreKit 2). L'article détaille les correctifs Vulkan qui ont fait passer le taux de crash de jeux Android d'environ 4 % à moins de 1 %, les symboles de débogage natifs et le miroir d'appareil dans l'éditeur.", impact: "Pour un projet Godot visant Android, plus besoin de plugins communautaires abandonnés pour les achats intégrés ; le miroir d'appareil simplifie les tests sur téléphone.", source: "Blog officiel Godot Engine", url: "https://godotengine.org/article/godot-mobile-update-apr-2026/", tags: ["mobile", "Android"] },
    { date: "2026-04-09", engine: "Roblox", title: "Luau open source : contributions communautaires, Signals, rocale-cli et publication Wally", summary: "Roblox ouvre certaines bibliothèques Luau aux contributions externes : dépôts GitHub comme source de vérité, publication sur Wally sous le namespace roblox/. L'annonce présente Signals, une bibliothèque réactive, et rocale-cli, un outil en ligne de commande qui envoie un projet Rojo vers Open Cloud et renvoie la sortie dans le terminal.", impact: "Mon workflow Rojo + Wally gagne des bibliothèques officielles installables comme n'importe quel paquet, et rocale-cli permet de lancer des tests Luau depuis le terminal ou une CI.", source: "Roblox DevForum (annonce officielle)", url: "https://devforum.roblox.com/t/evolving-luau-oss-community-contributions-more/4566806", tags: ["Luau", "open source", "tests"] },
    { date: "2026-03-20", engine: "Unity", title: "Unity 6.4 intègre ECS et Project Auditor dans l'éditeur, et lance Unity Studio", summary: "Unity 6.4 fait entrer l'Entity Component System dans les packages Core et installe par défaut Project Auditor, l'outil d'analyse de performance. En parallèle, Unity Studio, un éditeur 3D no-code dans le navigateur, vise les configurateurs et démos pour les designers plutôt que les développeurs de jeux.", impact: "ECS devient une brique standard : un point d'entrée officiel pour apprendre l'architecture orientée données.", source: "CG Channel", url: "https://www.cgchannel.com/2026/03/unity-releases-unity-6-4-and-unity-studio/", tags: ["ECS", "performance"] },
    { date: "2026-01-26", engine: "Godot", title: "Godot 4.6 : Jolt Physics par défaut, thème Modern, LibGodot et identifiants de nœuds uniques", summary: "Version « workflow d'abord » : Jolt devient le moteur physique 3D par défaut, l'éditeur passe au thème Modern avec des docks déplaçables, les nœuds reçoivent un identifiant interne unique qui survit aux renommages. S'ajoutent LibGodot (embarquer le moteur dans une application), un framework de cinématique inverse et un bouton Step Out dans le débogueur GDScript.", impact: "Mes prototypes Godot profitent d'une physique 3D stable sans configuration ; un projet 4.5 doit être réenregistré pour les identifiants de nœuds.", source: "Blog officiel Godot Engine", url: "https://godotengine.org/releases/4.6/", tags: ["physique", "éditeur"] },
    { date: "2025-12-04", engine: "Unity", title: "Unity 6.3 LTS : première version LTS depuis Unity 6.0, avec le Platform Toolkit", summary: "Unity 6.3 LTS apporte deux ans de support et le Platform Toolkit, une API unifiée pour les comptes, sauvegardes, manettes et succès sur Switch, PS5, Xbox, Windows, iOS et Android, testable dans l'éditeur. Aussi au menu : physique 2D Box2D v3, support natif des lecteurs d'écran, HTTP/2 par défaut.", impact: "La version à choisir pour un projet d'étude en 2026 ; le Platform Toolkit montre comment un seul code vise plusieurs plateformes, principe utile aussi sur Roblox ou Godot.", source: "Blog officiel Unity", url: "https://unity.com/blog/unity-6-3-lts-is-now-available", tags: ["LTS", "multiplateforme"] },
    { date: "2025-11-20", engine: "Roblox", title: "Le nouveau Type Solver de Luau sort de bêta : le non-strict devient le défaut", summary: "Roblox publie en version générale le New Type Solver de Luau : meilleure inférence, autocomplétion et vérification de types (propriétés read-only, refinements, type functions). Un mode non-strict repensé est activé par défaut ; les projets en --!strict doivent activer la propriété UseNewLuauTypeSolver. L'ancien moteur reste disponible pendant 2026.", impact: "Pour mes projets Rojo en --!strict, il faut basculer explicitement et corriger les nouveaux avertissements ; en contrepartie, la détection d'erreurs est nettement meilleure.", source: "Roblox DevForum (annonce officielle)", url: "https://devforum.roblox.com/t/general-release-luau%E2%80%99s-new-type-solver/4084991", tags: ["Luau", "typage"] },
    { date: "2025-11-12", engine: "Unreal Engine", title: "Unreal Engine 5.7 : Nanite Foliage, MegaLights en bêta et un mode PCG interactif", summary: "La 5.7 introduit Nanite Foliage, un rendu dédié à la végétation dense (voxels Nanite, assemblies, skinning), fait passer MegaLights en bêta avec moins de bruit et moins de réglages manuels, et ajoute au PCG un mode éditeur où l'on place du contenu sans code en traçant des lignes ou des formes.", impact: "Le PCG en mode éditeur permet de peupler un niveau sans code, utile pour prototyper vite ; Nanite Foliage et MegaLights restent réservés aux PC puissants.", source: "DSOGaming", url: "https://www.dsogaming.com/news/unreal-engine-5-7-released-fully-detailed/", tags: ["Nanite", "PCG"] },
    { date: "2025-09-15", engine: "Godot", title: "Godot 4.5 « making dreams accessible » : accessibilité, classes abstraites en GDScript et shader baker", summary: "Godot 4.5 apporte le support expérimental des lecteurs d'écran via AccessKit, un stencil buffer, et deux nouveautés GDScript : les classes et méthodes abstraites (@abstract) et les arguments variadiques. Le shader baker précompile les shaders à l'export (jusqu'à 20 fois moins de temps de chargement), le Web gagne le SIMD WebAssembly.", impact: "Les classes abstraites rapprochent le GDScript typé de ce qu'un développeur C# ou Luau strict attend ; le shader baker élimine les freezes au premier lancement.", source: "Blog officiel Godot Engine", url: "https://godotengine.org/releases/4.5/", tags: ["GDScript", "accessibilité"] },
    { date: "2025-08-14", engine: "Unity", title: "Unity 6.2 intègre Unity AI (bêta) directement dans l'éditeur", summary: "Unity 6.2 met en avant Unity AI, né de la fusion de Muse et de Sentis : assistance contextuelle, automatisation de tâches répétitives et génération d'assets dans l'éditeur. La version ajoute le Mesh LOD automatique, le World Space UI pour UI Toolkit et un Graph Toolkit. Les « Unity Points » sont gratuits pendant la bêta mais expireront au passage en payant.", impact: "Une aide au code et au prototypage dans l'éditeur, mais il faut vérifier la licence des assets générés et surveiller la future tarification.", source: "GameFromScratch", url: "https://gamefromscratch.com/unity-6-2-released/", tags: ["IA", "Unity 6.2"] },
    { date: "2025-06-04", engine: "Unreal Engine", title: "Unreal Engine 5.6 : les MetaHumans créés directement dans l'éditeur et cap sur le 60 FPS", summary: "Publiée lors du State of Unreal 2025, la 5.6 permet de créer et personnaliser des MetaHumans directement dans l'éditeur, avec une licence qui autorise leur usage dans d'autres moteurs. Elle intègre davantage d'outils de modélisation et d'animation, le streaming de géométrie statique et des optimisations visant des mondes ouverts à 60 FPS.", impact: "Moins de logiciels à apprendre : animation et personnages se font de plus en plus dans Unreal lui-même, ce qui abaisse la barrière d'entrée pour un prototype solo.", source: "GameFromScratch", url: "https://gamefromscratch.com/unreal-engine-5-6-released/", tags: ["MetaHuman", "UE5.6"] }
  ]
};

/* ---------- Environnement technique (1 découverte · 2 pratiqué · 3 à l'aise) ---------- */
var TECHNOS = [
  { nom: "Luau / Roblox", niveau: 3, usage: ["medieval", "minus", "fusee", "photo", "cours"] },
  { nom: "Rojo · Rokit · Selene · StyLua", niveau: 3, usage: ["medieval", "minus", "fusee", "photo"] },
  { nom: "HTML / CSS", niveau: 3, usage: ["levelup", "cours", "portfolio"] },
  { nom: "JavaScript", niveau: 2, usage: ["levelup", "cours", "portfolio"] },
  { nom: "GDScript / Godot 4", niveau: 2, usage: ["godot", "cours"] },
  { nom: "Dart", niveau: 2, usage: ["mud"] },
  { nom: "Python (scripts, Blender)", niveau: 2, usage: ["medieval", "photo", "minus"] },
  { nom: "Git / GitHub", niveau: 2, usage: ["mud", "portfolio"] },
  { nom: "Blender", niveau: 2, usage: ["medieval", "photo"] },
  { nom: "C#", niveau: 1, usage: [] },
  { nom: "PHP", niveau: 1, usage: [] },
  { nom: "Java", niveau: 1, usage: [] },
  { nom: "MySQL · SQL Server", niveau: 1, usage: [] },
  { nom: "Windows Server 2022", niveau: 1, usage: [] },
  { nom: "PowerShell · ffmpeg", niveau: 2, usage: ["medieval", "minus"] },
  { nom: "Bureautique · PAO", niveau: 2, usage: ["portfolio"] }
];

/* ---------- E6 : réalisations pressenties pour l'option SLAM ---------- */
var E6 = [
  { slug: "fusee", couvre: ["B2.1", "B2.3"], acces: "Jeu publié sur Roblox sous le nom « Rocket Clicker » : roblox.com/games/86163553911530 ; code synchronisé par Rojo, consultable sur demande", pourquoi: "Solution applicative complète (client / serveur) avec une vraie couche de données : schéma de profil versionné, migrations, verrou de session, classement OrderedDataStore. Couvre la conception, le développement et la gestion des données." },
  { slug: "mud", couvre: ["B2.1", "B2.2"], acces: "Dépôt public github.com/gulerogurpro/mud-dart-tp5 (devcontainer prêt à l'emploi)", pourquoi: "Base de code petite, propre et entièrement testée (37 tests, 0 avertissement) : idéale pour traiter en une heure une expression de besoins du jury — ajouter une fonctionnalité en TDD, corriger un dysfonctionnement, mettre à jour tests et documentation." }
];
