/* ============================================================
   main.js — rendu des sections depuis data.js et interactions.
   Aucune bibliothèque, aucun module, aucun fetch : tout fonctionne
   en file:// comme hébergé.
   ============================================================ */
(function () {
  "use strict";

  var html = document.documentElement;
  var reduceQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  var finePointer = window.matchMedia("(pointer: fine) and (hover: hover)").matches;
  if (finePointer) html.classList.add("fine-pointer");

  var store = {
    get: function (k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set: function (k, v) { try { if (v === null) localStorage.removeItem(k); else localStorage.setItem(k, v); } catch (e) { /* stockage refusé (navigation privée, file://) */ } }
  };
  function motionReduced() { return reduceQuery.matches || html.dataset.motion === "reduced" || html.dataset.jury === "1"; }

  /* ---------- Utilitaires ---------- */
  function $(sel, root) { return (root || document).querySelector(sel); }
  function $$(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }
  function esc(s) { return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"); }
  // Typographie française : espace fine insécable avant : ; ! ? et autour des guillemets
  function fr(s) { return esc(s).replace(/ ([:;!?»])/g, " $1").replace(/« /g, "« "); }
  function li(arr) { return arr.map(function (x) { return "<li>" + fr(x) + "</li>"; }).join(""); }

  var SUBS = {}, COMP_OF = {};
  COMPETENCES.forEach(function (c) { c.subs.forEach(function (s) { SUBS[s.id] = s; COMP_OF[s.id] = c.id; }); });
  var BLOC2_BY = {}; BLOC2.forEach(function (b) { BLOC2_BY[b.id] = b; });
  var PROJ = {}; PROJETS.forEach(function (p) { PROJ[p.slug] = p; });
  function compsOf(p) { var set = {}; Object.keys(p.comps).forEach(function (k) { set[COMP_OF[k]] = true; }); return Object.keys(set).sort(); }
  var TYPES = { perso: "Projet personnel", formation: "Formation", portfolio: "Portfolio" };

  /* ---------- Coloration syntaxique (6 classes CSS, aucune lib) ---------- */
  var KW = {
    lua: "and break continue do else elseif end for function if in local not or repeat return then until while nil true false",
    js: "const let var function return if else for while new class this true false null undefined of in typeof",
    dart: "final var int bool String return if else null true false class get set void late const",
    gdscript: "func var const if else elif for while return extends signal class_name is in and or not true false null pass void match"
  };
  var COMMENT = { lua: "--[^\\n]*", js: "\\/\\/[^\\n]*", dart: "\\/\\/[^\\n]*", gdscript: "#[^\\n]*" };
  function highlight(src, lang) {
    var kw = Object.create(null); (KW[lang] || KW.js).split(" ").forEach(function (k) { kw[k] = 1; });
    var re = new RegExp("(" + (COMMENT[lang] || COMMENT.js) + ")|(\"(?:\\\\.|[^\"\\\\\\n])*\"|'(?:\\\\.|[^'\\\\\\n])*'|`(?:\\\\.|[^`\\\\])*`)|(\\b\\d+(?:\\.\\d+)?\\b)|([A-Za-z_]\\w*)", "g");
    var out = "", last = 0, m;
    while ((m = re.exec(src))) {
      out += esc(src.slice(last, m.index));
      var cls = "";
      if (m[1]) cls = "c"; else if (m[2]) cls = "s"; else if (m[3]) cls = "n";
      else if (kw[m[4]]) cls = "k";
      else if (/^\s*\(/.test(src.slice(re.lastIndex, re.lastIndex + 2))) cls = "f";
      out += cls ? '<span class="t-' + cls + '">' + esc(m[0]) + "</span>" : esc(m[0]);
      last = re.lastIndex;
    }
    return out + esc(src.slice(last));
  }

  /* ---------- Rendu : réalisations ---------- */
  function badges(p) {
    return compsOf(p).map(function (c) { return '<span class="badge" data-c="' + c + '">' + c + "</span>"; }).join("") +
      p.bloc2.map(function (b) { return '<span class="badge b2">' + b + "</span>"; }).join("");
  }
  function carte(p, i) {
    var media = p.images.length
      ? '<img src="' + p.images[0].src + '" alt="' + esc(p.images[0].alt) + '" loading="' + (p.vedette ? "eager" : "lazy") + '">'
      : '<pre class="carte-code" aria-hidden="true">' + (p.code ? highlight(p.code.code, p.code.lang) : fr(p.resume)) + "</pre>";
    return '<article class="carte glass' + (p.vedette ? " vedette" : "") + '" data-reveal style="--i:' + (i % 6) + '" data-slug="' + p.slug + '" data-type="' + p.type + '" data-comps="' + compsOf(p).join(" ") + '">' +
      '<span class="type-tag">' + TYPES[p.type] + "</span>" +
      '<div class="carte-media">' + media + "</div>" +
      '<div class="carte-corps"><div class="mono">~/realisations/' + p.slug + "</div>" +
      "<h3>" + fr(p.titre) + "</h3><p>" + fr(p.pitch) + "</p>" +
      '<div class="carte-meta mono"><span>' + fr(p.periode) + "</span><span>" + fr(p.modalite.split(" : ")[0].split(" (")[0]) + "</span></div>" +
      '<div class="puces">' + badges(p) + "</div>" +
      '<button class="btn btn-petit ouvrir" data-slug="' + p.slug + '" data-cursor="ouvrir" aria-haspopup="dialog">Ouvrir la fiche <span aria-hidden="true">→</span></button></div></article>';
  }
  function renderProjets() {
    $("#grille-projets").innerHTML = PROJETS.map(carte).join("");
    $("#fiches-jury").innerHTML = PROJETS.map(function (p) { return fiche(p, true); }).join("");
  }

  function fiche(p, enPage) {
    var id = (enPage ? "jury-" : "fiche-") + p.slug;
    var r = function (n, titre, corps) { return '<section class="rubrique" id="' + id + "-r" + n + '"><h3><span class="num">' + String(n).padStart(2, "0") + "</span>" + titre + "</h3>" + corps + "</section>"; };
    var galerie = p.images.length ? '<figure class="galerie" data-index="0">' +
      '<img src="' + p.images[0].src + '" alt="' + esc(p.images[0].alt) + '" loading="lazy">' +
      '<figcaption class="galerie-legende"><span class="legende">' + fr(p.images[0].alt) + "</span>" +
      (p.images.length > 1 ? '<span class="galerie-nav"><button type="button" class="prec" aria-label="Capture précédente">‹</button><span class="mono compteur">1 / ' + p.images.length + '</span><button type="button" class="suiv" aria-label="Capture suivante">›</button></span>' : "") +
      "</figcaption></figure>" : "";
    var sommaire = ["Intitulé", "Organisation", "Contexte", "Compétences B1", "Environnement", "Démarche", "Productions", "Résultats", "Difficultés", "Liens"]
      .map(function (t, i) { return '<a href="#' + id + "-r" + (i + 1) + '">' + String(i + 1).padStart(2, "0") + " " + t + "</a>"; }).join("");
    var comps = Object.keys(p.comps).map(function (k) {
      return '<li><button type="button" data-comp-btn="' + COMP_OF[k] + '" title="Projeter la compétence ' + COMP_OF[k] + '">' + k + "</button><b>" + fr(SUBS[k].label) + "</b><p>" + fr(p.comps[k]) + "</p></li>";
    }).join("");
    var bloc2 = p.bloc2.map(function (b) { return '<span class="badge b2">' + b + " · " + fr(BLOC2_BY[b].label) + "</span>"; }).join("");
    var chiffres = (p.chiffres || []).map(function (c) { return '<div class="chiffre glass"><b>' + c.n + "</b><span>" + fr(c.l) + "</span></div>"; }).join("");
    var code = p.code ? '<div class="code-bloc"><div class="code-tete"><span>' + esc(p.code.file) + "</span><span>" + p.code.lang + '</span></div><pre tabindex="0"><code>' + highlight(p.code.code, p.code.lang) + '</code></pre><p class="pourquoi">' + fr(p.code.why) + "</p></div>" : "";
    var liens = p.liens.length ? "<ul>" + p.liens.map(function (l) { return '<li><a href="' + l.url + '" target="_blank" rel="noopener">' + fr(l.label) + "</a> <span class=\"mono\">" + esc(l.url.replace(/^https?:\/\//, "")) + "</span></li>"; }).join("") + "</ul>" : "<p>Code consultable sur demande (projet non publié sur un dépôt public).</p>";
    return '<div class="fiche" id="' + id + '"><header class="fiche-tete"><div class="mono">~/realisations/' + p.slug + " · " + fr(p.periode) + "</div><h2" + (enPage ? "" : ' id="fiche-titre"') + ">" + fr(p.titre) + '</h2><p class="lead">' + fr(p.pitch) + '</p><div class="puces">' + badges(p) + "</div></header>" +
      galerie + '<nav class="fiche-sommaire" aria-label="Rubriques de la fiche">' + sommaire + "</nav>" +
      r(1, "Intitulé court", "<p><strong>" + fr(p.court) + "</strong></p><p>" + fr(p.resume) + "</p>") +
      r(2, "Organisation, période, lieu, modalité", "<dl><dt>Période</dt><dd>" + fr(p.periode) + "</dd><dt>Lieu</dt><dd>" + fr(p.lieu) + "</dd><dt>Modalité</dt><dd><strong>" + fr(p.modalite) + "</strong></dd><dt>Type</dt><dd>" + TYPES[p.type] + "</dd></dl>") +
      r(3, "Contexte et besoin", "<p>" + fr(p.contexte) + "</p>") +
      r(4, "Compétences du bloc 1 mobilisées", '<ul class="comps-liste">' + comps + '</ul><p class="mono" style="margin-top:12px">Bloc 2 (option SLAM)</p><div class="puces">' + bloc2 + "</div>") +
      r(5, "Environnement technologique", "<ul>" + li(p.environnement) + '</ul><div class="puces">' + p.stack.map(function (s) { return '<span class="puce">' + fr(s) + "</span>"; }).join("") + "</div>") +
      r(6, "Démarche", "<ol>" + li(p.demarche) + "</ol>") +
      r(7, "Productions et preuves", '<div class="chiffres-fiche">' + chiffres + "</div><ul>" + li(p.productions) + "</ul>" + code) +
      r(8, "Résultats et indicateurs", "<ul>" + li(p.resultats) + "</ul>") +
      r(9, "Difficultés, erreurs résolues, bilan critique", "<ul>" + li(p.difficultes) + "</ul>") +
      r(10, "Liens", liens) +
      '<aside class="securite"><h4><span aria-hidden="true">🛡</span> Sécurité et conformité</h4><ul>' + li(p.securite) + "</ul></aside></div>";
  }

  /* ---------- Dialog fiche ---------- */
  var dialog = $("#fiche"), dialogContenu = $("#fiche .dialog-contenu"), opener = null;
  function ouvrirFiche(slug, from) {
    var p = PROJ[slug]; if (!p) return;
    opener = from || document.activeElement;
    dialogContenu.innerHTML = fiche(p, false);
    $("#fiche .chemin").textContent = "~/realisations/" + slug;
    if (!dialog.open) dialog.showModal();
    dialogContenu.scrollTop = 0;
    history.replaceState(null, "", "#realisations/" + slug);
    $("#fiche .dialog-fermer").focus();
  }
  function fermerFiche() {
    if (dialog.open) dialog.close();
  }
  dialog.addEventListener("close", function () {
    if (/^#(realisations\/|fiche-)/.test(location.hash)) history.replaceState(null, "", "#realisations");
    if (opener && opener.focus && palette.hidden) opener.focus(); // Ctrl+K ferme la fiche : laisser le focus à la palette
  });
  dialog.addEventListener("click", function (e) {
    if (e.target === dialog) fermerFiche(); // clic sur le fond
    var btn = e.target.closest("button");
    if (btn && btn.classList.contains("dialog-fermer")) fermerFiche();
    if (btn && btn.dataset.compBtn) { fermerFiche(); setComp(btn.dataset.compBtn, true); }
  });
  dialog.addEventListener("keydown", function (e) {
    var g = $(".galerie", dialog); if (!g) return;
    if (e.key === "ArrowRight") galerieDefile(g, 1);
    if (e.key === "ArrowLeft") galerieDefile(g, -1);
  });
  var swipeX = null;
  document.addEventListener("pointerdown", function (e) { var g = e.target.closest(".galerie"); swipeX = g ? e.clientX : null; });
  document.addEventListener("pointerup", function (e) {
    var g = e.target.closest(".galerie");
    if (g && swipeX !== null && Math.abs(e.clientX - swipeX) > 40) galerieDefile(g, e.clientX < swipeX ? 1 : -1);
    swipeX = null;
  });
  function galerieDefile(g, dir) {
    var p = PROJ[g.closest(".fiche").id.replace(/^(fiche|jury)-/, "")]; if (!p || p.images.length < 2) return;
    var i = (parseInt(g.dataset.index, 10) + dir + p.images.length) % p.images.length;
    g.dataset.index = i;
    var img = $("img", g); img.src = p.images[i].src; img.alt = p.images[i].alt;
    $(".legende", g).innerHTML = fr(p.images[i].alt);
    $(".compteur", g).textContent = (i + 1) + " / " + p.images.length;
  }
  document.addEventListener("click", function (e) {
    var b = e.target.closest(".ouvrir"); if (b) ouvrirFiche(b.dataset.slug, b);
    // galerie : dans le dialog comme dans les fiches dépliées du mode jury
    var nb = e.target.closest(".galerie-nav button"); if (nb) galerieDefile(nb.closest(".galerie"), nb.classList.contains("suiv") ? 1 : -1);
  });

  /* ---------- Rendu : grille des compétences ---------- */
  function renderMatrice() {
    var cols = PROJETS.map(function (p) { return '<th scope="col" class="proj">' + fr(p.titre) + "</th>"; }).join("");
    var couvertes = 0, total = 0;
    var rows = COMPETENCES.map(function (c) {
      var head = '<tr class="comp-ligne" data-c="' + c.id + '"><th scope="rowgroup" colspan="' + (PROJETS.length + 1) + '"><button type="button" data-comp-btn="' + c.id + '" aria-pressed="false"><span class="code">' + c.id + "</span>" + fr(c.label) + '</button><p class="how">' + fr(c.how) + "</p></th></tr>";
      var subs = c.subs.map(function (s) {
        total++;
        var cells = PROJETS.map(function (p) {
          return '<td class="cell">' + (p.comps[s.id]
            ? '<a href="#realisations/' + p.slug + '" class="preuve" data-slug="' + p.slug + '" title="Voir la preuve dans la fiche ' + esc(p.titre) + '" aria-label="' + esc(s.id + " prouvée par " + p.titre) + '">✓</a>'
            : "<span aria-hidden=\"true\">·</span>") + "</td>";
        }).join("");
        var n = PROJETS.filter(function (p) { return p.comps[s.id]; }).length;
        if (n) couvertes++;
        return '<tr class="sub' + (n ? "" : " a-couvrir") + '" data-c="' + c.id + '"><th scope="row"><span class="code">' + s.id + "</span>" + fr(s.label) + (n ? "" : '<span class="note">à couvrir en stage de 2e année</span>') + "</th>" + cells + "</tr>";
      }).join("");
      return head + subs;
    }).join("");
    $("#matrice").innerHTML = '<table><thead><tr><th scope="col">Compétence / sous-compétence</th>' + cols + "</tr></thead><tbody>" + rows + "</tbody></table>";
    $("#compteur-matrice").innerHTML = "<b>" + couvertes + "</b> / " + total + " sous-compétences prouvées";
  }
  document.addEventListener("click", function (e) {
    var a = e.target.closest("a.preuve"); if (!a) return;
    e.preventDefault(); ouvrirFiche(a.dataset.slug, a);
    setTimeout(function () { var r = $("#fiche-" + a.dataset.slug + "-r4"); if (r) r.scrollIntoView({ behavior: motionReduced() ? "auto" : "smooth", block: "start" }); }, 60);
  });

  /* ---------- Rendu : tableau de synthèse ---------- */
  function renderSynthese() {
    var groupes = [["Réalisations en milieu professionnel en cours de première année", []], ["Réalisations en milieu professionnel en cours de seconde année", []], ["Réalisations en cours de formation (travaux de cours et projets personnels)", PROJETS]];
    var head = "<tr><th scope=\"col\">Intitulé court</th><th scope=\"col\">Période</th><th scope=\"col\">Productions et documents</th>" + COMPETENCES.map(function (c) { return '<th scope="col" title="' + esc(c.label) + '">' + c.id + "</th>"; }).join("") + "</tr>";
    var body = groupes.map(function (g) {
      return '<tr><th scope="rowgroup" colspan="' + (3 + COMPETENCES.length) + '" class="groupe">' + fr(g[0]) + "</th></tr>" + (g[1].length ? "" : '<tr><td colspan="' + (3 + COMPETENCES.length) + '" class="mono">Aucune à ce jour — stage de deuxième année à venir.</td></tr>') + g[1].map(function (p) {
        var cs = compsOf(p);
        return "<tr><th scope=\"row\"><a href=\"#realisations/" + p.slug + '" class="preuve" data-slug="' + p.slug + '">' + fr(p.court) + '</a></th><td class="periode">' + fr(p.periode) + "</td><td><ul>" + li(p.productions.slice(0, 3)) + "</ul></td>" +
          COMPETENCES.map(function (c) { return '<td class="x">' + (cs.indexOf(c.id) >= 0 ? "×" : "") + "</td>"; }).join("") + "</tr>";
      }).join("");
    }).join("");
    $("#tableau-synthese").innerHTML = "<table><thead>" + head + "</thead><tbody>" + body + "</tbody></table>";
  }

  /* ---------- Rendu : parcours (git log) ---------- */
  function renderParcours() {
    $("#gitlog-liste").innerHTML = PARCOURS.map(function (c, i) {
      return '<li class="commit' + (c.branch ? " branche" : "") + (c.head ? " head" : "") + '" tabindex="0" style="--i:' + i + '"><div class="ligne"><span class="hash">' + c.hash + "</span>" +
        (c.head ? '<span class="tag">(HEAD -&gt; main)</span>' : "") + (c.branch ? '<span class="tag">(' + c.branch + ")</span>" : "") +
        c.tags.map(function (t) { return '<span class="tag">(tag: ' + t + ")</span>"; }).join("") +
        '<span class="date">' + fr(c.date) + '</span><span class="titre">' + fr(c.titre) + "</span></div><p>" + fr(c.detail) + ' <a href="' + c.lien + '">→ voir</a></p></li>';
    }).join("");
  }
  function dessinerGitlog() {
    var svg = $("#gitlog-svg"), items = $$("#gitlog-liste .commit"); if (!svg || !items.length) return;
    var corps = $(".gitlog-corps"), top = corps.getBoundingClientRect().top;
    var xMain = 20, xBranch = 46, d = "", db = "", prevY = null;
    items.forEach(function (it, i) {
      var y = it.getBoundingClientRect().top - top + 29;
      it.dataset.y = y;
      if (it.classList.contains("branche")) {
        var next = items[i + 1], ny = next ? next.getBoundingClientRect().top - top + 29 : y + 40;
        db += "M" + xMain + "," + (prevY !== null ? prevY : y - 40) + " C" + xMain + "," + (y - 10) + " " + xBranch + "," + (y - 30) + " " + xBranch + "," + y + " C" + xBranch + "," + (y + 30) + " " + xMain + "," + (ny - 10) + " " + xMain + "," + ny + " ";
      } else {
        d += (prevY === null ? "M" : "L") + xMain + "," + y + " ";
        prevY = y;
      }
    });
    svg.setAttribute("viewBox", "0 0 56 " + corps.offsetHeight);
    svg.innerHTML = '<path class="principale" d="' + d.trim() + '"/><path class="branche" d="' + db.trim() + '"/>';
    $$("path", svg).forEach(function (p) { var L = p.getTotalLength(); p.style.strokeDasharray = L; p.style.strokeDashoffset = motionReduced() ? 0 : L; p.dataset.l = L; });
    if (motionReduced()) items.forEach(function (it) { it.classList.add("vu"); });
    animerGitlog();
  }
  function animerGitlog() {
    if (motionReduced()) return;
    var corps = $(".gitlog-corps"); if (!corps) return;
    var r = corps.getBoundingClientRect(), h = window.innerHeight;
    var progress = Math.min(1, Math.max(0, (h * 0.85 - r.top) / r.height));
    $$("#gitlog-svg path").forEach(function (p) { p.style.strokeDashoffset = p.dataset.l * (1 - progress); });
    $$("#gitlog-liste .commit").forEach(function (it) { if (progress * r.height >= parseFloat(it.dataset.y) - 10) it.classList.add("vu"); });
  }

  /* ---------- Rendu : veille ---------- */
  function renderVeille() {
    var v = VEILLE;
    $("#veille-theme").innerHTML = fr(v.theme);
    $("#veille-pourquoi").innerHTML = fr(v.pourquoi);
    $("#veille-methode").innerHTML = li(v.methode);
    $("#veille-bilan").innerHTML = li(v.bilan);
    var dates = v.entries.map(function (e) { return e.date; }).sort();
    $("#veille-compte").innerHTML = "<b>" + v.entries.length + "</b> fiches · du " + dateFr(dates[0]) + " au " + dateFr(dates[dates.length - 1]);
    $("#veille-liste").innerHTML = v.entries.map(function (e, i) {
      return '<article class="fiche-veille glass" data-reveal style="--i:' + (i % 4) + '" data-m="' + esc(e.engine) + '" id="veille-' + i + '"><div class="entete"><time datetime="' + e.date + '">' + dateFr(e.date) + '</time><span class="moteur" data-m="' + esc(e.engine) + '">' + esc(e.engine) + "</span></div><h3>" + fr(e.title) + "</h3><p>" + fr(e.summary) + '</p><p class="impact"><b>Impact pour moi :</b> ' + fr(e.impact) + '</p><div class="pied"><a href="' + e.url + '" target="_blank" rel="noopener">' + fr(e.source) + '</a><span class="puces">' + e.tags.map(function (t) { return '<span class="puce">' + fr(t) + "</span>"; }).join("") + "</span></div></article>";
    }).join("");
    $("#tendances").innerHTML = Object.keys(v.tendances).map(function (k) { return '<div class="glass" data-reveal><h4>' + esc(k) + "</h4><p>" + fr(v.tendances[k]) + "</p></div>"; }).join("");
  }
  function dateFr(iso) { var p = iso.split("-"); return p[2] + "/" + p[1] + "/" + p[0]; }
  $("#veille-filtres").addEventListener("click", function (e) {
    var b = e.target.closest(".chip"); if (!b) return;
    $$("#veille-filtres .chip").forEach(function (c) { c.setAttribute("aria-pressed", c === b ? "true" : "false"); });
    var m = b.dataset.m;
    $$(".fiche-veille").forEach(function (f) { f.classList.toggle("masquee", m !== "all" && f.dataset.m !== m); });
  });

  /* ---------- Rendu : technologies ---------- */
  var NIVEAUX = ["", "découverte", "pratiqué", "à l'aise"];
  function renderTechnos() {
    $("#technos").innerHTML = TECHNOS.map(function (t) {
      var usage = t.usage.map(function (s) { return PROJ[s] ? PROJ[s].titre : s; }).join(", ");
      return "<li><span>" + fr(t.nom) + '</span><span class="jauge3" role="img" aria-label="niveau ' + t.niveau + " sur 3 : " + NIVEAUX[t.niveau] + '">' + [1, 2, 3].map(function (n) { return "<i" + (n <= t.niveau ? ' class="on"' : "") + "></i>"; }).join("") + "</span>" + (usage ? '<span class="usage">utilisé dans : ' + fr(usage) + "</span>" : '<span class="usage">vu en cours</span>') + "</li>";
    }).join("");
  }

  /* ---------- Rendu : E6 ---------- */
  function renderE6() {
    $("#e6-cartes").innerHTML = E6.map(function (e, i) {
      var p = PROJ[e.slug];
      return '<article class="e6-carte glass" data-reveal style="--i:' + i + '"><div class="mono">Réalisation ' + (i + 1) + " · " + fr(p.periode) + "</div><h3>" + fr(p.court) + "</h3><p>" + fr(e.pourquoi) + '</p><dl><dt>Compétences</dt><dd><div class="puces">' + e.couvre.map(function (b) { return '<span class="badge b2">' + b + " · " + fr(BLOC2_BY[b].label) + "</span>"; }).join("") + "</div></dd><dt>Modalité</dt><dd>" + fr(p.modalite) + "</dd><dt>Environnement</dt><dd>" + fr(p.stack.join(", ")) + "</dd><dt>Accès</dt><dd>" + fr(e.acces) + '</dd></dl><button class="btn btn-petit ouvrir" data-slug="' + p.slug + '" data-cursor="ouvrir">Fiche complète <span aria-hidden="true">→</span></button></article>';
    }).join("");
    var cov = BLOC2.map(function (b) {
      var par = E6.filter(function (e) { return e.couvre.indexOf(b.id) >= 0; }).map(function (e) { return PROJ[e.slug].titre; });
      return "<tr><th scope=\"row\"><span class=\"code\">" + b.id + "</span>" + fr(b.label) + '</th><td class="x">' + (par.length ? "✓ " + fr(par.join(" · ")) : "—") + "</td></tr>";
    }).join("");
    $("#e6-bloc2").innerHTML = "<table><thead><tr><th scope=\"col\">Compétence du bloc 2</th><th scope=\"col\">Couverte par</th></tr></thead><tbody>" + cov + "</tbody></table>";
  }

  /* ---------- Projecteur de compétence ---------- */
  var compActive = null;
  function setComp(id, scroll) {
    compActive = (id && id !== compActive) ? id : null;
    if (compActive) html.dataset.comp = compActive; else delete html.dataset.comp;
    $$("[data-comp-btn]").forEach(function (b) { b.setAttribute("aria-pressed", b.dataset.compBtn === compActive ? "true" : "false"); });
    var n = 0;
    $$("#grille-projets .carte").forEach(function (c) {
      var on = !!compActive && (" " + c.dataset.comps + " ").indexOf(" " + compActive + " ") >= 0;
      c.classList.toggle("allume", on); if (on && !c.classList.contains("masquee")) n++;
      $$(".badge[data-c]", c).forEach(function (b) { b.classList.toggle("on", b.dataset.c === compActive); });
    });
    $$("#matrice tr").forEach(function (tr) { tr.classList.toggle("allume", !!compActive && tr.dataset.c === compActive); });
    var cpt = $("#compteur-comp");
    cpt.textContent = compActive ? n + " réalisation" + (n > 1 ? "s" : "") + " prouve" + (n > 1 ? "nt" : "") + " la compétence " + compActive + " — " + COMPETENCES.filter(function (c) { return c.id === compActive; })[0].label + ". Échap pour réinitialiser." : "";
    if (compActive) history.replaceState(null, "", "#competences?c=" + compActive);
    else if (location.hash.indexOf("#competences?") === 0) history.replaceState(null, "", "#competences");
    recolorer();
    if (scroll && compActive) $("#realisations").scrollIntoView({ behavior: motionReduced() ? "auto" : "smooth" });
  }
  document.addEventListener("click", function (e) {
    var b = e.target.closest("[data-comp-btn]"); if (b && !dialog.contains(b)) setComp(b.dataset.compBtn, b.classList.contains("chip"));
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !dialog.open && $("#palette").hidden && compActive) setComp(null);
  });
  $("#filtres-type").addEventListener("click", function (e) {
    var b = e.target.closest(".chip[data-t]"); if (!b) return; // les chips B1.x du même groupe sont gérées par le projecteur
    $$("#filtres-type .chip[data-t]").forEach(function (c) { c.setAttribute("aria-pressed", c === b ? "true" : "false"); });
    $$("#grille-projets .carte").forEach(function (c) { c.classList.toggle("masquee", b.dataset.t !== "all" && c.dataset.type !== b.dataset.t); });
  });

  /* ---------- Palette de commandes ---------- */
  var palette = $("#palette"), pInput = $("#palette input"), pListe = $("#palette ul"), pItems = [], pSel = 0;
  function construirePalette() {
    pItems = [];
    $$(".nav ul a").forEach(function (a) { pItems.push({ cat: "section", label: a.textContent.replace(/^\d+\s*/, ""), run: function () { location.hash = a.getAttribute("href"); } }); });
    PROJETS.forEach(function (p) { pItems.push({ cat: "réalisation", label: p.titre, run: function () { ouvrirFiche(p.slug); } }); });
    COMPETENCES.forEach(function (c) {
      pItems.push({ cat: "compétence", label: c.id + " " + c.label, run: function () { if (compActive !== c.id) setComp(c.id, true); } });
      c.subs.forEach(function (s) { pItems.push({ cat: "sous-compétence", label: s.id + " " + s.label, run: function () { if (compActive !== c.id) setComp(c.id, false); $("#competences").scrollIntoView(); } }); });
    });
    VEILLE.entries.forEach(function (e, i) { pItems.push({ cat: "veille", label: e.title, run: function () { var el = $("#veille-" + i); $$("#veille-filtres .chip")[0].click(); el.scrollIntoView({ block: "center" }); el.classList.add("cible"); setTimeout(function () { el.classList.remove("cible"); }, 2500); } }); });
    pItems.push({ cat: "commande", label: "Mode jury (lecture, projection, impression)", run: toggleJury });
    pItems.push({ cat: "commande", label: "Thème clair / sombre", run: toggleTheme });
    pItems.push({ cat: "commande", label: "Réduire les animations", run: toggleMotion });
    pItems.push({ cat: "commande", label: "Copier la grille des compétences en texte", run: copierMatrice });
    pItems.push({ cat: "commande", label: "Copier mon adresse e-mail", run: function () { copier($("#email").textContent, $("#copier-email")); } });
    pItems.push({ cat: "commande", label: "Imprimer / exporter en PDF", run: function () { window.print(); } });
  }
  function score(q, s) { // sous-séquence : chaque lettre de q doit apparaître dans l'ordre
    q = q.toLowerCase(); s = s.toLowerCase(); var i = 0, sc = 0, prev = -2;
    for (var j = 0; j < s.length && i < q.length; j++) { if (s[j] === q[i]) { sc += (prev === j - 1 ? 3 : 1) + (j === 0 ? 2 : 0); prev = j; i++; } }
    return i === q.length ? sc : -1;
  }
  function filtrerPalette() {
    var q = pInput.value.trim();
    var res = pItems.map(function (it) { return { it: it, s: q ? score(q, it.label) : 0 }; }).filter(function (r) { return r.s >= 0; }).sort(function (a, b) { return b.s - a.s; }).slice(0, 12);
    pSel = 0;
    pListe.innerHTML = res.map(function (r, i) { return '<li role="option" aria-selected="' + (i === 0) + '" data-i="' + pItems.indexOf(r.it) + '"><span>' + fr(r.it.label) + '</span><span class="cat">' + r.it.cat + "</span></li>"; }).join("") || '<li role="option" aria-selected="false"><span>Aucun résultat</span></li>';
    $("#palette-statut").textContent = res.length + " résultat" + (res.length > 1 ? "s" : "");
  }
  function ouvrirPalette() { if (!pItems.length) construirePalette(); palette.hidden = false; pInput.value = ""; filtrerPalette(); pInput.focus(); }
  function fermerPalette() { palette.hidden = true; $("#btn-palette").focus(); }
  function executerPalette() { var el = $$("li", pListe)[pSel]; if (!el || !el.dataset.i) return; fermerPalette(); pItems[el.dataset.i].run(); }
  pInput.addEventListener("input", filtrerPalette);
  pInput.addEventListener("keydown", function (e) {
    var items = $$("li", pListe);
    if (e.key === "ArrowDown" || e.key === "ArrowUp") { e.preventDefault(); pSel = (pSel + (e.key === "ArrowDown" ? 1 : -1) + items.length) % items.length; items.forEach(function (l, i) { l.setAttribute("aria-selected", i === pSel); }); items[pSel].scrollIntoView({ block: "nearest" }); }
    if (e.key === "Enter") executerPalette();
    if (e.key === "Tab") e.preventDefault(); // le focus reste dans la palette
  });
  pListe.addEventListener("click", function (e) { var l = e.target.closest("li"); if (l) { pSel = $$("li", pListe).indexOf(l); executerPalette(); } });
  palette.addEventListener("click", function (e) { if (e.target === palette) fermerPalette(); });
  document.addEventListener("keydown", function (e) {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") { e.preventDefault(); if (dialog.open) fermerFiche(); palette.hidden ? ouvrirPalette() : fermerPalette(); }
    else if (e.key === "Escape" && !palette.hidden) fermerPalette();
  });
  $("#btn-palette").addEventListener("click", ouvrirPalette);

  /* ---------- Préférences : jury, thème, mouvement ---------- */
  function toggleJury() {
    var on = html.dataset.jury !== "1";
    if (on) html.dataset.jury = "1"; else delete html.dataset.jury;
    store.set("jury", on ? "1" : null);
    $$("[data-action=jury]").forEach(function (b) { b.setAttribute("aria-pressed", on); });
    arreterCanvas(); demarrerCanvas();
    setTimeout(function () { dessinerGitlog(); revelerTout(); }, 50);
  }
  function toggleTheme() {
    var light = html.dataset.theme !== "light";
    if (light) html.dataset.theme = "light"; else delete html.dataset.theme;
    store.set("theme", light ? "light" : null);
    $$("[data-action=theme]").forEach(function (b) { b.setAttribute("aria-pressed", light); });
    recolorer();
  }
  function toggleMotion() {
    var red = html.dataset.motion !== "reduced";
    if (red) html.dataset.motion = "reduced"; else delete html.dataset.motion;
    store.set("motion", red ? "reduced" : null);
    $$("[data-action=motion]").forEach(function (b) { b.setAttribute("aria-pressed", red); });
    arreterCanvas(); demarrerCanvas(); dessinerGitlog(); revelerTout();
  }
  $$("[data-action]").forEach(function (b) {
    b.addEventListener("click", { jury: toggleJury, theme: toggleTheme, motion: toggleMotion }[b.dataset.action]);
    b.setAttribute("aria-pressed", { jury: html.dataset.jury === "1", theme: html.dataset.theme === "light", motion: html.dataset.motion === "reduced" }[b.dataset.action]);
  });

  /* ---------- Copier ---------- */
  function copier(texte, btn) {
    var ok = function () { if (btn) { var t = btn.textContent; btn.textContent = "Copié ✓"; setTimeout(function () { btn.textContent = t; }, 1800); } };
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(texte).then(ok, function () { copierRepli(texte); ok(); });
    else { copierRepli(texte); ok(); }
  }
  function copierRepli(texte) { var ta = document.createElement("textarea"); ta.value = texte; ta.setAttribute("readonly", ""); ta.style.position = "fixed"; ta.style.opacity = "0"; document.body.appendChild(ta); ta.select(); try { document.execCommand("copy"); } catch (e) { /* refusé */ } ta.remove(); }
  function copierMatrice() {
    var lignes = ["Grille des compétences du bloc 1 — Ogur Guler — session " + SESSION, ""];
    COMPETENCES.forEach(function (c) {
      lignes.push(c.id + " " + c.label);
      c.subs.forEach(function (s) { var par = PROJETS.filter(function (p) { return p.comps[s.id]; }).map(function (p) { return p.court; }); lignes.push("  " + s.id + " " + s.label + " : " + (par.length ? par.join(" ; ") : "à couvrir")); });
      lignes.push("");
    });
    copier(lignes.join("\n"), $("#copier-matrice"));
  }
  $("#copier-matrice").addEventListener("click", copierMatrice);
  $("#copier-email").addEventListener("click", function () { copier($("#email").textContent, this); });
  $("#form-contact").addEventListener("submit", function (e) {
    e.preventDefault();
    var nom = $("#f-nom").value.trim(), msg = $("#f-message").value.trim();
    location.href = "mailto:" + $("#email").textContent + "?subject=" + encodeURIComponent("Contact depuis votre portfolio — " + nom) + "&body=" + encodeURIComponent(msg + "\n\n— " + nom);
  });

  /* ---------- Navigation ---------- */
  var nav = $("#nav"), lastY = window.scrollY;
  window.addEventListener("scroll", function () {
    var y = window.scrollY;
    if (!html.classList.contains("menu-ouvert")) nav.classList.toggle("cachee", y > lastY && y > 200);
    lastY = y;
    requestAnimationFrame(animerGitlog);
  }, { passive: true });
  var sections = $$("main section[id]");
  var spy = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (!en.isIntersecting) return;
      $$(".nav ul a, #menu-mobile a").forEach(function (a) { a.setAttribute("aria-current", a.getAttribute("href") === "#" + en.target.id ? "true" : "false"); });
    });
  }, { rootMargin: "-40% 0px -55% 0px" });
  sections.forEach(function (s) { spy.observe(s); });
  $("#btn-menu").addEventListener("click", function () {
    var open = html.classList.toggle("menu-ouvert"); this.setAttribute("aria-expanded", open);
  });
  $("#menu-mobile").addEventListener("click", function (e) { if (e.target.closest("a")) { html.classList.remove("menu-ouvert"); $("#btn-menu").setAttribute("aria-expanded", "false"); } });

  /* ---------- Révélations ---------- */
  var reveal = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("visible"); reveal.unobserve(en.target); } });
  }, { threshold: 0.12 });
  function observerReveal() { $$("[data-reveal], .section-tete, .technos").forEach(function (el) { if (!el.classList.contains("visible")) reveal.observe(el); }); }
  function revelerTout() { if (motionReduced()) $$("[data-reveal], .section-tete, .technos").forEach(function (el) { el.classList.add("visible"); }); }

  /* ---------- Hero : ligne de statut tapée ---------- */
  function taperStatut() {
    var el = $("#statut"), texte = el.dataset.texte, span = $("span.texte", el);
    if (motionReduced()) { span.textContent = texte; el.classList.add("fini"); return; }
    var i = 0; (function tick() { span.textContent = texte.slice(0, ++i); if (i < texte.length) setTimeout(tick, 38); else el.classList.add("fini"); })();
  }

  /* ---------- Verre vivant, tilt, boutons magnétiques, curseur ---------- */
  var curseur = $(".curseur"), cx = 0, cy = 0, ax = -100, ay = -100, mx = -100, my = -100, rafCurseur = null;
  document.addEventListener("mousemove", function (e) {
    mx = e.clientX; my = e.clientY;
    var g = e.target.closest(".glass");
    if (g) { var r = g.getBoundingClientRect(); g.style.setProperty("--mx", ((e.clientX - r.left) / r.width * 100) + "%"); g.style.setProperty("--my", ((e.clientY - r.top) / r.height * 100) + "%"); }
    if (motionReduced() || !finePointer) return;
    var cadre = e.target.closest(".hero-photo .cadre");
    $$(".hero-photo .cadre").forEach(function (c) {
      if (c === cadre) { var rr = c.getBoundingClientRect(); c.style.setProperty("--ry", ((e.clientX - rr.left) / rr.width - 0.5) * 8 + "deg"); c.style.setProperty("--rx", (0.5 - (e.clientY - rr.top) / rr.height) * 8 + "deg"); }
      else { c.style.removeProperty("--rx"); c.style.removeProperty("--ry"); }
    });
    magnetiser(e);
    var cible = e.target.closest("[data-cursor], a, button");
    curseur.classList.toggle("actif", !!cible && !dialog.contains(cible));
    $(".curseur-mot").textContent = cible && cible.dataset.cursor ? cible.dataset.cursor : "";
    if (!rafCurseur) rafCurseur = requestAnimationFrame(bougerCurseur);
  });
  function bougerCurseur() {
    rafCurseur = null;
    cx = mx; cy = my; ax += (mx - ax) * 0.18; ay += (my - ay) * 0.18;
    $(".curseur-point").style.setProperty("--x", cx + "px"); $(".curseur-point").style.setProperty("--y", cy + "px");
    $(".curseur-anneau").style.setProperty("--x", ax + "px"); $(".curseur-anneau").style.setProperty("--y", ay + "px");
    if (Math.abs(mx - ax) > 0.5 || Math.abs(my - ay) > 0.5) rafCurseur = requestAnimationFrame(bougerCurseur);
  }
  function magnetiser(e) {
    $$(".btn.magnetic").forEach(function (b) {
      var r = b.getBoundingClientRect(), bx = r.left + r.width / 2, by = r.top + r.height / 2, dx = e.clientX - bx, dy = e.clientY - by, dist = Math.hypot(dx, dy);
      if (dist < 90) { var f = 0.35, lim = 12; b.style.transform = "translate(" + Math.max(-lim, Math.min(lim, dx * f)) + "px," + Math.max(-lim, Math.min(lim, dy * f)) + "px)"; var s = $("span", b); if (s) s.style.transform = "translate(" + dx * 0.15 + "px," + dy * 0.15 + "px)"; }
      else if (b.style.transform) { b.style.transform = ""; var s2 = $("span", b); if (s2) s2.style.transform = ""; }
    });
  }

  /* ---------- Constellation (canvas) ---------- */
  var canvas = $("#ciel"), ctx = canvas.getContext("2d"), particules = [], rafCanvas = null, couleur = [199, 204, 224], cible = couleur.slice(), heroH = 0;
  function lireCouleurs() {
    var cs = getComputedStyle(html);
    var base = cs.getPropertyValue("--particle").split(",").map(Number);
    var acc = (compActive ? cs.getPropertyValue("--ok-rgb") : "").split(",").map(Number);
    cible = compActive && acc.length === 3 ? acc : base;
  }
  function recolorer() { lireCouleurs(); if (motionReduced()) { couleur = cible.slice(); dessinerStatique(); } }
  function dimensionner() {
    var dpr = Math.min(2, window.devicePixelRatio || 1);
    canvas.width = innerWidth * dpr; canvas.height = innerHeight * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    heroH = $(".hero").offsetHeight;
    var n = innerWidth < 768 ? 30 : 90;
    if (particules.length === n) return; // garder le ciel en place (barre d'adresse mobile, changement de thème)
    particules = [];
    for (var i = 0; i < n; i++) particules.push({ x: Math.random() * innerWidth, y: Math.random() * innerHeight, vx: (Math.random() - 0.5) * 0.25, vy: (Math.random() - 0.5) * 0.25, r: 1 + Math.random() * 1.5, a: 0.25 + Math.random() * 0.45 });
  }
  function dessiner(statique) {
    for (var k = 0; k < 3; k++) couleur[k] += (cible[k] - couleur[k]) * 0.05;
    var c = couleur.map(Math.round).join(","), w = innerWidth, h = innerHeight;
    var dens = window.scrollY > heroH * 0.8 ? 0.6 : 1, par = window.scrollY * 0.15 % h;
    ctx.clearRect(0, 0, w, h);
    var attract = finePointer && !statique && mx > 0;
    particules.forEach(function (p) {
      if (!statique) {
        p.x += p.vx; p.y += p.vy;
        if (attract) { var dx = mx - p.x, dy = (my + par) - p.y, d = Math.hypot(dx, dy); if (d < 160 && d > 1) { p.x += dx / d * 0.35; p.y += dy / d * 0.35; } }
        if (p.x < 0) p.x = w; if (p.x > w) p.x = 0; if (p.y < 0) p.y = h; if (p.y > h) p.y = 0;
      }
      p.sy = (p.y - par + h) % h;
    });
    ctx.lineWidth = 1;
    for (var i = 0; i < particules.length; i++) {
      var a = particules[i];
      for (var j = i + 1; j < particules.length; j++) {
        var b = particules[j], dd = Math.hypot(a.x - b.x, a.sy - b.sy);
        if (dd < 120) { ctx.strokeStyle = "rgba(" + c + "," + ((1 - dd / 120) * 0.35 * dens) + ")"; ctx.beginPath(); ctx.moveTo(a.x, a.sy); ctx.lineTo(b.x, b.sy); ctx.stroke(); }
      }
      ctx.fillStyle = "rgba(" + c + "," + (a.a * dens) + ")"; ctx.beginPath(); ctx.arc(a.x, a.sy, a.r, 0, Math.PI * 2); ctx.fill();
    }
  }
  function boucle() { dessiner(false); rafCanvas = requestAnimationFrame(boucle); }
  function dessinerStatique() { dimensionner(); dessiner(true); }
  function demarrerCanvas() {
    if (html.dataset.jury === "1") { ctx.clearRect(0, 0, canvas.width, canvas.height); return; }
    lireCouleurs(); couleur = cible.slice();
    if (motionReduced()) { dessinerStatique(); return; }
    dimensionner(); if (!rafCanvas && !document.hidden) rafCanvas = requestAnimationFrame(boucle);
  }
  function arreterCanvas() { if (rafCanvas) cancelAnimationFrame(rafCanvas); rafCanvas = null; }
  document.addEventListener("visibilitychange", function () { if (document.hidden) arreterCanvas(); else demarrerCanvas(); });
  var resizeTimer; window.addEventListener("resize", function () { clearTimeout(resizeTimer); resizeTimer = setTimeout(function () { arreterCanvas(); demarrerCanvas(); dessinerGitlog(); }, 150); });

  /* ---------- Routage par ancre ---------- */
  function lireHash() {
    var h = location.hash;
    if (h.indexOf("#realisations/") === 0) { var slug = h.slice(14); if (PROJ[slug]) { $("#realisations").scrollIntoView(); ouvrirFiche(slug); } }
    else if (h.indexOf("#competences?c=") === 0) { var c = h.slice(15); if (COMPETENCES.some(function (x) { return x.id === c; })) { compActive = null; setComp(c, false); $("#competences").scrollIntoView(); } }
  }

  /* ---------- Démarrage ---------- */
  renderProjets(); renderMatrice(); renderSynthese(); renderParcours(); renderVeille(); renderTechnos(); renderE6();
  $("#annee").textContent = new Date().getFullYear();
  $$("[data-session]").forEach(function (el) { el.textContent = SESSION; });
  observerReveal(); revelerTout();
  taperStatut();
  demarrerCanvas();
  dessinerGitlog();
  window.addEventListener("load", function () { dessinerGitlog(); lireHash(); });
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(dessinerGitlog);
})();
