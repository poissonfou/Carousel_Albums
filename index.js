function Toggle_one(){
    const div_one = document.querySelector('.div-one');
    div_one.classList.toggle('one-focused');

    let div_three = document.querySelector('.div-three');
    div_three.classList.toggle('one-focused-three');

    let div_four = document.querySelector('.div-four');
    div_four.classList.toggle('one-focused-four');

    let div_five = document.querySelector('.div-five');
    div_five.classList.toggle('one-focused-five');

    let gradient = document.querySelector('.gradient');
    gradient.classList.toggle('gradient-one')

    let desc = document.querySelector('.album-desc');
    desc.textContent = albums[0] + " (Wikipedia)";

    let img = document.querySelector('.singer-img');
    img.setAttribute('src', './img/1.jpg')

    let spotify = document.querySelector('.spotify');
    spotify.setAttribute('href', urls[0]);

    let yt = document.querySelector('.youtube');
    yt.setAttribute('href', urls[1]);

    let name = document.querySelector('.name');
    name.textContent = artists[0];

    
    let line = document.getElementById('line');
    line.style.backgroundColor = 'white';
}

function Toggle_two(){
    let div_two = document.querySelector('.div-two');
    div_two.classList.toggle('two-focused')

    const div_one = document.querySelector('.div-one');
    div_one.classList.toggle('two-focused-one');

    let div_three = document.querySelector('.div-three');
    div_three.classList.toggle('two-focused-three');

    let div_four = document.querySelector('.div-four');
    div_four.classList.toggle('two-focused-four');

    let div_five = document.querySelector('.div-five');
    div_five.classList.toggle('two-focused-five');

    let gradient = document.querySelector('.gradient');
    gradient.classList.toggle('gradient-two')

    let desc = document.querySelector('.album-desc');
    desc.textContent = albums[1] + " (Wikipedia)";

    let img = document.querySelector('.singer-img');
    img.setAttribute('src', './img/2.jpg')

    let spotify = document.querySelector('.spotify');
    spotify.setAttribute('href', urls[2]);

    let yt = document.querySelector('.youtube');
    yt.setAttribute('href', urls[3]);

    let name = document.querySelector('.name');
    name.textContent = artists[1];

    let line = document.getElementById('line');
    line.style.backgroundColor = 'rgb(66, 17, 146)';
}

function Toggle_four(){
    let div_four = document.querySelector('.div-four');
    div_four.classList.toggle('four-focused');

    const div_one = document.querySelector('.div-one');
    div_one.classList.toggle('four-focused-one');

    let div_two = document.querySelector('.div-two');
    div_two.classList.toggle('four-focused-two')

    let div_three = document.querySelector('.div-three');
    div_three.classList.toggle('four-focused-three');

    let div_five = document.querySelector('.div-five');
    div_five.classList.toggle('four-focused-five');

    let gradient = document.querySelector('.gradient');
    gradient.classList.toggle('gradient-four')

    let desc = document.querySelector('.album-desc');
    desc.textContent = albums[2] + " (Wikipedia)";

    let img = document.querySelector('.singer-img');
    img.setAttribute('src', './img/4.jpg')

    let spotify = document.querySelector('.spotify');
    spotify.setAttribute('href', urls[4]);

    let yt = document.querySelector('.youtube');
    yt.setAttribute('href', urls[5]);

    let name = document.querySelector('.name');
    name.textContent = artists[2];

    
    let line = document.getElementById('line');
    line.style.backgroundColor = 'rgb(241, 98, 62)';
}

function Toggle_five(){
    let div_five = document.querySelector('.div-five');
    div_five.classList.toggle('five-focused');

    let div_one = document.querySelector('.div-one');
    div_one.classList.toggle('five-focused-one');

    let div_two = document.querySelector('.div-two');
    div_two.classList.toggle('five-focused-two')

    let div_three = document.querySelector('.div-three');
    div_three.classList.toggle('five-focused-three');

    let gradient = document.querySelector('.gradient');
    gradient.classList.toggle('gradient-five')

    let desc = document.querySelector('.album-desc');
    desc.textContent = albums[3] + " (Wikipedia)";

    let img = document.querySelector('.singer-img');
    img.setAttribute('src', './img/5.jpg')

    let spotify = document.querySelector('.spotify');
    spotify.setAttribute('href', urls[6]);

    let yt = document.querySelector('.youtube');
    yt.setAttribute('href', urls[7]);

    let name = document.querySelector('.name');
    name.textContent = artists[3];

    let line = document.getElementById('line');
    line.style.backgroundColor = 'rgb(247, 30, 30)';
}

let albums = [
    'Immunity is the debut studio album by American singer-songwriter Clairo, released on August 2, 2019, by Fader Label. The album was co-produced by Clairo and Rostam Batmanglij, formerly of Vampire Weekend. It has been described as a soft rock, bedroom pop, electropop, and indie pop record.',
    'Coping Mechanism (stylized as <COPINGMECHANISM>) is the fifth studio album by American singer Willow. It was released on October 7, 2022, through MSFTS Music and Roc Nation. The album was preceded by a slew of singles, including Maybe Its My Fault, Hover Like a Goddess, Curious/Furious, and Split.Coping Mechanism is a pop punk, emo, grunge rock, and hard rock album with elements of metal, post-hardcore, gothic rock, ska punk, indie rock, screamo, guitar pop, R&B, and "avant-garde electro".',
    'Em 2015, o vocalista e vocalista Jeremias Heimbach, que já havia feito música como cantor e compositor, juntou-se a Oliver Sparkuhle para implementar o projeto de uma banda conjunta. Foi fundada oficialmente em 2018. Jeremias tem jogado na formação atual desde a primavera de 2018. Durante um show em Helmstedt, Baixa Saxônia, a banda foi descoberta por uma agência de artistas e assinada. Jeremias tornou-se conhecido por um público mais amplo como o ato de abertura de Giant Rooks e OK Kid. Seu EP de estreia Du muss an den Frühling glauben, produzido por Tim Tautorat, foi lançado pela banda em outubro de 2019. Em 28 de maio de 2021, foi lançado o primeiro álbum da banda, Golden Hour, que alcançou o número 9 nas paradas de álbuns alemãs.',
    'Blurryface é o quarto álbum de estúdio do duo norte-americano Twenty One Pilots, e o segundo álbum da banda lançado pela Fueled by Ramen. O álbum foi precedido pelo single, "Fairly Local", lançado em 17 de março de 2015. Foi definido para ser lançado em 19 de maio de 2015, mas, foi lançado dois dias antes em 17 de maio via iTunes. O disco estreou na primeira posição da tabela musical dos Estados Unidos, Billboard 200, com 146 mil cópias vendida. Blurryface é o quarto álbum de estúdio do duo norte-americano Twenty One Pilots, e o segundo álbum da banda lançado pela Fueled by Ramen. O álbum foi precedido pelo single, "Fairly Local", lançado em 17 de março de 2015. Foi definido para ser lançado em 19 de maio de 2015, mas, foi lançado dois dias antes em 17 de maio via iTunes. O disco estreou na primeira posição da tabela musical dos Estados Unidos, Billboard 200, com 146 mil cópias vendida'
]

let urls = [
    'https://open.spotify.com/album/4kkVGtCqE2NiAKosri9Rnd',
    'https://www.youtube.com/playlist?list=PLsAZ9VYSyO13Wp5GD8wM5OYtfMV0sck46',
    'https://open.spotify.com/album/0oMXn0MNLNyvB4iJPZXOuV',
    'https://www.youtube.com/playlist?list=PL7AyFRLdnY8qCIDYZZpSUFXiomHzvWqpw',
    'https://open.spotify.com/album/1HmWZnKnecBlWqYcD7Zead',
    'https://www.youtube.com/playlist?list=PLolZAjHU3zximZnudFIeC5-ZIMvjJ1trQ',
    'https://open.spotify.com/album/3cQO7jp5S9qLBoIVtbkSM1',
    'https://www.youtube.com/playlist?list=OLAK5uy_mWtWynXa5NeLQEJjvrmVZmmO48G4eBBWg'
]

let artists = [
    'Clairo',
    'Willow',
    'Jeremias',
    'Twenty One Pilots'
]