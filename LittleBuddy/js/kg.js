
    function revealLines() {

      var lines = lines_el.getElementsByTagName('span'),
          delay = 10;

      lines_el.classList.add('is-visible');

      for (var i = 0; i < lines.length; i++) {

        (function(_this) {
          setTimeout(function() {
            _this.classList.add('default');
          }, delay);
        })(lines[i]);

        delay += 200;
      }
    }

    function splitWords() {
      return lines_el.innerText.split(/\s/).map(function(word) {
        return '<span>' + word + '</span>';
      }).join(' ');
    }

    function createLinesView() {
      var lines = getLines();

      return lines.map(function(line) {
        return '<span>' + line.map(function(span) {
          return span.innerText;
        }).join(' ') + '</span>';
      }).join('');

    }

    function repositionLines() {
      [].map.call(lines_el.querySelectorAll('span'), function(el) {
        el.style.transform = 'translateY(' + lines_el.offsetHeight + 'px)';
      });
    }

    // Break content to lines
    // http://stackoverflow.com/a/27925305/2321666
    function getLines() {
      var lines = [],
          line,
          words = lines_el.getElementsByTagName('span'),
          lastTop;

      for (var i = 0; i < words.length; i++) {
        var word = words[i];
        if (word.offsetTop != lastTop) {
          lastTop = word.offsetTop;
          line = [];
          lines.push(line);
        }
        line.push(word);
      }
      return lines;
    }

    var lines_el = document.getElementById('lines');

    function init() {

      lines_el.innerHTML = splitWords();
      lines_el.innerHTML = createLinesView();
      repositionLines();
      revealLines();
    }

    init();