/* Glossary tooltip system for UMEDCTA portfolio.
   Definitions drawn from the project's philosophical dictionary.
   Hover on desktop, tap on mobile. */

var GLOSSARY = {
  'sublation': {
    name: 'Sublation (Aufhebung)',
    def: 'A concept is simultaneously preserved, negated, and lifted to a more determinate form. What gets cancelled in its immediacy is retained as a moment of what comes next.'
  },
  'determinate-negation': {
    name: 'Determinate Negation',
    def: 'Negation with content: specifying what is ruled out, not just saying "no." Produces a more determinate concept rather than empty absence.'
  },
  'abstract-negation': {
    name: 'Abstract Negation',
    def: 'Negation without content\u2014cancelling something without specifying what replaces it. Produces indeterminate absence rather than progress.'
  },
  'material-inference': {
    name: 'Material Inference',
    def: 'Inference good in virtue of its content, not its logical form. "It\u2019s raining, so the streets are wet" is materially valid regardless of formal structure.'
  },
  'communicative-action': {
    name: 'Communicative Action',
    def: 'Social interaction oriented toward mutual understanding, where participants coordinate by raising and redeeming validity claims\u2014truth, rightness, sincerity.'
  },
  'strategic-action': {
    name: 'Strategic Action',
    def: 'Goal-directed interaction where success is measured by whether the outcome was achieved, not by mutual understanding.'
  },
  'validity-claims': {
    name: 'Validity Claims',
    def: 'In any communicative act, speakers raise claims to truth (objective), rightness (normative), and sincerity (subjective). Understanding requires all three be redeemable.'
  },
  'recognition': {
    name: 'Recognition (Anerkennung)',
    def: 'The intersubjective achievement through which self-consciousness becomes real. A structural requirement for selfhood, not a psychological preference.'
  },
  'inferentialism': {
    name: 'Inferentialism',
    def: 'The position that concepts get their meaning through patterns of inference, compatibility, and incompatibility\u2014not by pointing at objects.'
  },
  'anaphora': {
    name: 'Anaphora',
    def: 'Expressions that refer back to previously established content. Numerals may function anaphorically, recollecting iterative counting activity rather than naming pre-existing objects.'
  },
  'apperception': {
    name: 'Apperception',
    def: 'The unity of self-consciousness accompanying all thought. Kant\u2019s "I think" that must be capable of accompanying all representations\u2014socially constituted, not private.'
  },
  'geist': {
    name: 'Geist (Spirit)',
    def: 'The constructive spiral between intelligence and intelligibility. Not a ghost but the normative structure of rational, self-conscious life sustained by reciprocal recognition.'
  },
  'dialectic': {
    name: 'Dialectic',
    def: 'The logical movement through which contradictions within a concept drive its development toward more adequate forms. Not thesis-antithesis-synthesis but the internal restlessness of determinate thought.'
  },
  'analytic-pragmatism': {
    name: 'Analytic Pragmatism',
    def: 'Brandom\u2019s program: understanding conceptual content through the pragmatic significance of using concepts in reasoning and action.'
  },
  'critical-ethnography': {
    name: 'Critical Ethnography',
    def: 'Carspecken\u2019s methodology for studying social practices, attending to power, meaning, and the researcher\u2019s own position within the research.'
  },
  'intersubjectivity': {
    name: 'Intersubjectivity',
    def: 'The social dimension of meaning, constituted through reciprocal recognition among language-using agents. Understanding is not private but achieved between persons.'
  },
  'alienation': {
    name: 'Alienation (Entfremdung)',
    def: 'Estrangement from one\u2019s own activity, from others, and from oneself. A disruption of the intersubjective conditions for flourishing.'
  },
  'substitution-inference': {
    name: 'Substitution Inference',
    def: 'Brandom\u2019s test for inferential relations between concepts: can one term be substituted for another in a sentence while preserving truth? Reveals commitment structures hidden in classification.'
  },
  'performative-contradiction': {
    name: 'Performative Contradiction',
    def: 'An utterance whose content contradicts the conditions of its own performance. "There are no valid claims" is itself a validity claim.'
  },
  'becoming': {
    name: 'Becoming (Werden)',
    def: 'The dialectical unity of being and nothing. Neither can stand alone; each passes into the other. Becoming is the movement itself, not a static third thing.'
  }
};

(function () {
  var tooltip = null;
  var isTouch = false;
  var activeEl = null;

  document.addEventListener('touchstart', function () { isTouch = true; }, { once: true });

  document.addEventListener('DOMContentLoaded', function () {
    tooltip = document.createElement('div');
    tooltip.className = 'g-tooltip';
    document.body.appendChild(tooltip);

    var terms = document.querySelectorAll('.g');
    for (var i = 0; i < terms.length; i++) {
      (function (el) {
        var term = el.getAttribute('data-term');
        if (!term || !GLOSSARY[term]) return;

        el.addEventListener('mouseenter', function (e) {
          if (!isTouch) show(el, term);
        });
        el.addEventListener('mouseleave', function () {
          if (!isTouch) hide();
        });
        el.addEventListener('click', function (e) {
          if (isTouch) {
            e.preventDefault();
            e.stopPropagation();
            if (activeEl === el) { hide(); } else { show(el, term); }
          }
        });
      })(terms[i]);
    }

    document.addEventListener('click', function () {
      if (isTouch) hide();
    });
  });

  function show(el, term) {
    var entry = GLOSSARY[term];
    tooltip.innerHTML = '<div class="g-term-name">' + entry.name + '</div>' + entry.def;
    tooltip.style.display = 'block';
    tooltip.className = 'g-tooltip';
    // Render offscreen to measure
    tooltip.style.top = '-9999px';
    tooltip.style.left = '-9999px';
    activeEl = el;

    requestAnimationFrame(function () {
      position(el);
      tooltip.className = 'g-tooltip visible';
    });
  }

  function hide() {
    tooltip.className = 'g-tooltip';
    tooltip.style.display = 'none';
    activeEl = null;
  }

  function position(target) {
    var rect = target.getBoundingClientRect();
    var ttRect = tooltip.getBoundingClientRect();
    var scrollY = window.pageYOffset || document.documentElement.scrollTop;
    var scrollX = window.pageXOffset || document.documentElement.scrollLeft;

    // Try above first
    var top = rect.top + scrollY - ttRect.height - 8;
    var left = rect.left + scrollX + (rect.width / 2) - (ttRect.width / 2);

    // Flip below if would go off-screen top
    if (top < scrollY + 8) {
      top = rect.bottom + scrollY + 8;
    }

    // Constrain horizontally
    var maxLeft = document.documentElement.clientWidth - ttRect.width - 8;
    if (left < 8) left = 8;
    if (left > maxLeft) left = maxLeft;

    tooltip.style.top = top + 'px';
    tooltip.style.left = left + 'px';
  }
})();
