/*DATA*/
let albums = [
    'Immunity is the debut studio album by American singer-songwriter Clairo, released on August 2, 2019, by Fader Label. The album was co-produced by Clairo and Rostam Batmanglij, formerly of Vampire Weekend. It has been described as a soft rock, bedroom pop, electropop, and indie pop record.',
    'Coping Mechanism (stylized as <COPINGMECHANISM>) is the fifth studio album by American singer Willow. It was released on October 7, 2022, through MSFTS Music and Roc Nation. The album was preceded by a slew of singles, including Maybe Its My Fault, Hover Like a Goddess, Curious/Furious, and Split.Coping Mechanism is a pop punk, emo, grunge rock, and hard rock album with elements of metal, post-hardcore, gothic rock, ska punk, indie rock, screamo, guitar pop, R&B, and "avant-garde electro".',
    'Fine Line é o segundo álbum de estúdio do cantor e compositor britânico Harry Styles, lançado em 13 de dezembro de 2019, através da Erskine e Columbia Records. Os temas do álbum envolvem términos, felicidade e "fazer sexo e se sentir triste", como o próprio Styles disse. O disco foi descrito como pop rock, com elementos de pop progressivo, pop psicodélico, folk, soul, funk e indie pop.',
    'Em 2015, o vocalista e vocalista Jeremias Heimbach, que já havia feito música como cantor e compositor, juntou-se a Oliver Sparkuhle para implementar o projeto de uma banda conjunta. Foi fundada oficialmente em 2018. Jeremias tem jogado na formação atual desde a primavera de 2018. Durante um show em Helmstedt, Baixa Saxônia, a banda foi descoberta por uma agência de artistas e assinada. Jeremias tornou-se conhecido por um público mais amplo como o ato de abertura de Giant Rooks e OK Kid. Seu EP de estreia Du muss an den Frühling glauben, produzido por Tim Tautorat, foi lançado pela banda em outubro de 2019. Em 28 de maio de 2021, foi lançado o primeiro álbum da banda, Golden Hour, que alcançou o número 9 nas paradas de álbuns alemãs.',
    'Blurryface é o quarto álbum de estúdio do duo norte-americano Twenty One Pilots, e o segundo álbum da banda lançado pela Fueled by Ramen. O álbum foi precedido pelo single, "Fairly Local", lançado em 17 de março de 2015. Foi definido para ser lançado em 19 de maio de 2015, mas, foi lançado dois dias antes em 17 de maio via iTunes. O disco estreou na primeira posição da tabela musical dos Estados Unidos, Billboard 200, com 146 mil cópias vendida. Blurryface é o quarto álbum de estúdio do duo norte-americano Twenty One Pilots, e o segundo álbum da banda lançado pela Fueled by Ramen. O álbum foi precedido pelo single, "Fairly Local", lançado em 17 de março de 2015. Foi definido para ser lançado em 19 de maio de 2015, mas, foi lançado dois dias antes em 17 de maio via iTunes. O disco estreou na primeira posição da tabela musical dos Estados Unidos, Billboard 200, com 146 mil cópias vendida'
]

let artists = [
    'Clairo',
    'Willow',
    'Harry Styles',
    'Jeremias',
    'Twenty One Pilots'
]

let ids = [ 1, 2, 3, 4, 5 ]

let indexes = [ 0, 1, 2, 3, 4 ]

let url_yt = [
    'https://www.youtube.com/playlist?list=PLsAZ9VYSyO13Wp5GD8wM5OYtfMV0sck46',
    'https://www.youtube.com/playlist?list=PL7AyFRLdnY8qCIDYZZpSUFXiomHzvWqpw',
    "https://www.youtube.com/playlist?list=PLfSdF_HSSu548MHnItRg7sYbj1OkmFc2g",
    'https://www.youtube.com/playlist?list=PLolZAjHU3zximZnudFIeC5-ZIMvjJ1trQ',
    'https://www.youtube.com/playlist?list=OLAK5uy_mWtWynXa5NeLQEJjvrmVZmmO48G4eBBWg'
]

let url_spotify = [
    'https://open.spotify.com/album/4kkVGtCqE2NiAKosri9Rnd',
    'https://open.spotify.com/album/0oMXn0MNLNyvB4iJPZXOuV',
    'https://open.spotify.com/album/7xV2TzoaVc0ycW7fwBwAml',
    'https://open.spotify.com/album/1HmWZnKnecBlWqYcD7Zead',
    'https://open.spotify.com/album/3cQO7jp5S9qLBoIVtbkSM1'
]

let color = [
    'white',
    'rgb(66, 17, 146)',
    'rgb(245, 56, 151)',
    'rgb(241, 98, 62)',
    'rgb(247, 30, 30)'
]


function Toggle(id, index){
       ids.forEach((x) => {
        if(id == x){
            console.log('working'); 
            const div_one = document.querySelector(`.div-${id}`);
            div_one.classList.toggle(`focused-${id}`);
        
            if(id == 1){

                let div_three = document.querySelector(`.div-${id + 2}`);
                div_three.classList.toggle(`focused-${id}-${id + 2}`);
            
                let div_four = document.querySelector(`.div-${id + 3}`);
                div_four.classList.toggle(`focused-${id}-${id + 3}`);
            
                let div_five = document.querySelector(`.div-${id + 4}`);
                div_five.classList.toggle(`focused-${id}-${id + 4}`);

            } else if(id == 2){

                let div_one = document.querySelector(`.div-${id - 1}`);
                div_one.classList.toggle(`focused-${id}-${id - 1}`);
            
                let div_three = document.querySelector(`.div-${id + 1}`);
                div_three.classList.toggle(`focused-${id}-${id + 1}`);
            
                let div_four = document.querySelector(`.div-${id + 2}`);
                div_four.classList.toggle(`focused-${id}-${id + 2}`);

                let div_five = document.querySelector(`.div-${id + 3}`);
                div_five.classList.toggle(`focused-${id}-${id + 3}`);

            } else if(id == 3){
                let div_one = document.querySelector(`.div-${id - 2}`);
                div_one.classList.toggle(`focused-${id}-${id - 2}`);
            
                let div_two = document.querySelector(`.div-${id - 1}`);
                div_two.classList.toggle(`focused-${id}-${id - 1}`);
            
                let div_four = document.querySelector(`.div-${id + 1}`);
                div_four.classList.toggle(`focused-${id}-${id + 1}`);

                let div_five = document.querySelector(`.div-${id + 2}`);
                div_five.classList.toggle(`focused-${id}-${id + 2}`);
            }
             else if(id == 4){
                let div_one = document.querySelector(`.div-${id - 3}`);
                div_one.classList.toggle(`focused-${id}-${id - 3}`);
            
                let div_two = document.querySelector(`.div-${id - 2}`);
                div_two.classList.toggle(`focused-${id}-${id - 2}`);
            
                let div_three = document.querySelector(`.div-${id - 1}`);
                div_three.classList.toggle(`focused-${id}-${id - 1}`);

                let div_five = document.querySelector(`.div-${id + 1}`);
                div_five.classList.toggle(`focused-${id}-${id + 1}`);

            } else if (id == 5){
                let div_one = document.querySelector(`.div-${id - 4}`);
                div_one.classList.toggle(`focused-${id}-${id - 4}`);
            
                let div_two = document.querySelector(`.div-${id - 3}`);
                div_two.classList.toggle(`focused-${id}-${id - 3}`);
            
                let div_three = document.querySelector(`.div-${id - 2}`);
                div_three.classList.toggle(`focused-${id}-${id - 2}`);
            }
        
            let gradient = document.querySelector('.gradient');
            gradient.classList.toggle(`gradient-${id}`)
         
            let img = document.querySelector('.singer-img');
            img.setAttribute('src', `./img/${id}.jpg`)
        }
  },
    indexes.forEach((x) => {
        if(index == x){ 
        let spotify = document.querySelector('.spotify');
        spotify.setAttribute('href', url_spotify[index]);
    
        let yt = document.querySelector('.youtube');
        yt.setAttribute('href', url_yt[index]);
    
        let name = document.querySelector('.name');
        name.textContent = artists[index];

        let desc = document.querySelector('.album-desc');
        desc.textContent = albums[index] + " (Wikipedia)";

        let line = document.getElementById('line');
        line.style.backgroundColor = `${color[index]}`;
        }
    })
  
  );
}

