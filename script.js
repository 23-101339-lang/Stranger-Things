document.getElementById('sitetitle').innerHTML = 'STRANGER THINGS';
document.getElementById('linktext').innerHTML = '<a href="index.html">Home</a>';
document.getElementById('linktext2').innerHTML = '<a href="character.html">Characters</a>';
document.getElementById('linktext3').innerHTML = 'Episodes';
document.getElementById('linktext4').innerHTML = 'Merch';
document.getElementById('maintitle').innerHTML = 'STRANGER THINGS';
document.getElementById('maindesc').innerHTML = 'When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces, and one strange little girl.';
document.getElementById('herobadge').innerHTML = 'Sci-Fi Horror';
document.getElementById('herobadge2').innerHTML = '2016';
document.getElementById('herobadge3').innerHTML = '4 Seasons';
document.getElementById('watchbtn').innerHTML = 'Watch Now';
document.getElementById('castheading').innerHTML = 'CHARACTERS';
document.getElementById('castdesc').innerHTML = 'The heroes of Hawkins, Indiana';
document.getElementById('castname').innerHTML = 'ELEVEN';
document.getElementById('castrole').innerHTML = 'The Gifted One';
document.getElementById('castname2').innerHTML = 'MIKE WHEELER';
document.getElementById('castrole2').innerHTML = 'The Leader';
document.getElementById('castname3').innerHTML = 'JIM HOPPER';
document.getElementById('castrole3').innerHTML = 'Chief of Police';
document.getElementById('episodeheading').innerHTML = 'EPISODES';
document.getElementById('episodedesc').innerHTML = 'Iconic moments from the series';
document.getElementById('episodelabel').innerHTML = 'SEASON 1 / EPISODE 1';
document.getElementById('episodetitle').innerHTML = 'THE VANISHING OF WILL BYERS';
document.getElementById('episodelabel2').innerHTML = 'SEASON 1 / EPISODE 8';
document.getElementById('episodetitle2').innerHTML = 'THE UPSIDE DOWN';
document.getElementById('episodelabel3').innerHTML = 'SEASON 2 / EPISODE 8';
document.getElementById('episodetitle3').innerHTML = 'THE MIND FLAYER';
document.getElementById('storeheading').innerHTML = 'MERCH STORE';
document.getElementById('storetext').innerHTML = 'Official Stranger Things merchandise. Posters, apparel, collectibles, and more from Hawkins, Indiana.';
document.getElementById('shopbtn').innerHTML = 'Shop Collection';












document.addEventListener('DOMContentLoaded', function() {
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, {threshold: 0.1});
    
    const elements = document.querySelectorAll('.maintitle, .maindesc, .herobadge, .herobadge2, .herobadge3, .watchbtn, .castheading, .castdesc, .castcard, .episodeheading, .episodedesc, .episodecard, .storeheading, .storetext, .shopbtn');
    
    elements.forEach(el => {
        el.classList.add('fade-up');
        observer.observe(el);
    });
    

});


elements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
        el.classList.add('show');
    }
});



function goToCharacter(characterKey) {
    window.location.href = `character.html?char=${characterKey}`;
}


