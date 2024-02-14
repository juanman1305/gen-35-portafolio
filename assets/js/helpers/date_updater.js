function updateCopyrightYear (){
    const currentYear = new Date().getFullYear();
    const CopyrightElement = document.querySelector('.footer__copy');

    if (CopyrightElement){
    CopyrightElement.textContent = `©${currentYear}, Todos los derechos reservados.`
    }

}

export default updateCopyrightYear