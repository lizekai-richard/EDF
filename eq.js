(function() {
    $(function() {
        var el;
        el = $('.eq');
        katex.render(el.html(), el[0]);
    });
}.call(this));