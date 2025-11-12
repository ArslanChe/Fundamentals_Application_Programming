// Highlight current nav link
(function () {
    var path = location.pathname.split('/').pop() || 'index.html';
    var links = document.querySelectorAll('.nav-links a[data-href]');
    for (var i = 0; i < links.length; i++) {
        var href = links[i].getAttribute('data-href');
        if (href === path) {
            links[i].classList.add('active');
        }
    }
})();


