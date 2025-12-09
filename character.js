
document.getElementById('brand').innerHTML = 'STRANGER THINGS';
document.getElementById('linkname').innerHTML = '<a href="index.html">Home</a>';
document.getElementById('linkname2').innerHTML = '<a href="character.html">Characters</a>';
document.getElementById('linkname3').innerHTML = 'Episodes';
document.getElementById('linkname4').innerHTML = 'Merch';
document.getElementById('backtext').innerHTML = 'Back to Home';
document.getElementById('bioheading').innerHTML = 'BIOGRAPHY';
document.getElementById('powersheading').innerHTML = 'ABILITIES';
document.getElementById('statsheading').innerHTML = 'CHARACTER STATS';
document.getElementById('quotesheading').innerHTML = 'MEMORABLE QUOTES';


const charactersData = {
    eleven: {
        titlelabel: 'The Gifted One',
        charactername: 'ELEVEN',
        actortext: 'Portrayed by Millie Bobby Brown',
        biotext: 'Eleven, also known as El, is a young girl with psychokinetic and telepathic abilities...',
        powers: ['Telekinesis', 'Remote Viewing', 'Dimensional Manipulation'],
        stats: { power: '98%', courage: '90%', loyalty: '100%' },
        quotes: ["Friends don't lie.", "I'm going to my friends. I'm going home.", "Bitchin'"],
        dimension: 'THE UPSIDE DOWN',
        image: 'Images/ElevenImage.webp'
    },
    mike: {
        titlelabel: 'The Leader',
        charactername: 'MIKE WHEELER',
        actortext: 'Portrayed by Finn Wolfhard',
        biotext: 'Mike is a loyal friend and natural leader of the group...',
        powers: ['Strategy', 'Bravery', 'Friendship'],
        stats: { power: '70%', courage: '95%', loyalty: '100%' },
        quotes: ["Friends stick together.", "We have to save him!", "She's our friend and she's crazy!"],
        dimension: 'THE UPSIDE DOWN',
        image: 'Images/Mike_Wheeler.png'
    },
    hopper: {
        titlelabel: 'Chief of Police',
        charactername: 'JIM HOPPER',
        actortext: 'Portrayed by David Harbour',
        biotext: 'Hopper is the chief of police in Hawkins...',
        powers: ['Strength', 'Courage', 'Dedication'],
        stats: { power: '85%', courage: '90%', loyalty: '100%' },
        quotes: ["This town hides secrets.", "I will protect them.", "Mornings are for coffee and contemplation."],
        dimension: 'THE UPSIDE DOWN',
        image: 'Images/JimHopperST.png'
    }
};


const urlParams = new URLSearchParams(window.location.search);
const charKey = urlParams.get('char') || 'eleven'; 


const character = charactersData[charKey];


document.getElementById('titlelabel').innerHTML = character.titlelabel;
document.getElementById('charactername').innerHTML = character.charactername;
document.getElementById('actortext').innerHTML = character.actortext;
document.getElementById('biotext').innerHTML = character.biotext;


const castPhoto = document.querySelector('.profileleft .castphoto');
castPhoto.style.backgroundImage = `url('${character.image}')`;
castPhoto.style.backgroundSize = 'cover';
castPhoto.style.backgroundPosition = 'center';


character.powers.forEach((power, i) => {
    const powerId = 'powername' + (i === 0 ? '' : i + 1);
    document.getElementById(powerId).innerHTML = power;
});


Object.entries(character.stats).forEach(([key, value], i) => {
    const labelId = 'statlabel' + (i === 0 ? '' : i + 1);
    const valueId = 'statvalue' + (i === 0 ? '' : i + 1);
    document.getElementById(labelId).innerHTML = key.charAt(0).toUpperCase() + key.slice(1);
    document.getElementById(valueId).innerHTML = value;
});


character.quotes.forEach((quote, i) => {
    const quoteId = 'quotetext' + (i === 0 ? '' : i + 1);
    document.getElementById(quoteId).innerHTML = quote;
});


document.getElementById('dimensionname').innerHTML = character.dimension;


document.addEventListener('DOMContentLoaded', function() {
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('show');
        });
    }, {threshold: 0.1});
    
    const elements = document.querySelectorAll('.charactername, .actortext, .bioheading, .biotext, .powersheading, .poweritem, .statsheading, .statbox, .quotesheading, .quotebox, .dimensionname');
    
    elements.forEach(el => {
        el.classList.add('fade-up');
        observer.observe(el);
    });
    
    document.querySelectorAll('.poweritem, .statbox, .quotebox').forEach((el, i) => {
        el.style.transitionDelay = (i * 0.1) + 's';
    });


    elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            el.classList.add('show');
        }
    });
});