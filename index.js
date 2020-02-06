const heading = ' ANGEL ALDERETE ';
let i = 0;

const typing = () => {
    if(i < heading.length) {
        document.querySelector('.header3').innerHTML += heading.charAt(i);
        i++;

        setTimeout(typing, 150);
    }
}

typing();