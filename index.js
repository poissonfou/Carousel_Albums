



function Toggle_one(){
    const div_one = document.querySelector('.div-one');
    div_one.classList.toggle('one-focused');

    let div_three = document.querySelector('.div-three');
    div_three.classList.toggle('one-focused-three');

    let div_four = document.querySelector('.div-four');
    div_four.classList.toggle('one-focused-four');

    let div_five = document.querySelector('.div-five');
    div_five.classList.toggle('one-focused-five');
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
}

function Toggle_five(){
    let div_five = document.querySelector('.div-five');
    div_five.classList.toggle('five-focused');

    const div_one = document.querySelector('.div-one');
    div_one.classList.toggle('five-focused-one');

    let div_two = document.querySelector('.div-two');
    div_two.classList.toggle('five-focused-two')

    let div_three = document.querySelector('.div-three');
    div_three.classList.toggle('five-focused-three');
}


