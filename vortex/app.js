
document.addEventListener('DOMContentLoaded', function() {
    var layers = document.querySelectorAll('.layer');

    var observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(entry) {
            if (!entry.isIntersecting) {
                entry.target.classList.add('animate');
            } else {
                entry.target.classList.remove('animate');
            }
        });
    }, { threshold: 0.5 });

    layers.forEach(function(layer) {
        observer.observe(layer);
    });
});


