const scrollFunc = () => {
    const link = document.querySelector('.header-menu__item a');
    const links = document.querySelectorAll('.header-menu__item a');
    const cardCharacteristics = document.querySelector('.card-details__link-characteristics');

    const newArray = [...links, cardCharacteristics];

    seamless.polyfill();

    newArray.forEach((element) => {
        element.addEventListener('click', (e) => {
            e.preventDefault();

            const id = element.getAttribute('href').substring(1);
            const section = document.getElementById(id);

            if(section){
                section.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                })
            } else {
                seamless.scrollIntoView(document.querySelector("#cross-sell"), {
                    behavior: "smooth",
                    block: "center",
                    inline: "center",
                });
            }
        })
    })
}

scrollFunc();