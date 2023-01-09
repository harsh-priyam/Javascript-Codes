document.addEventListener('DOMContentLoaded',
    function(e) {
        console.log('HTMl parsed and DOM tree built!', e);
    });

window.addEventListener('load', function(e) {
    console.log('Page fully loaded', e);
});

window.addEventListener('beforeunload', function(e) {
    console.log('Page fully loaded', e);
});