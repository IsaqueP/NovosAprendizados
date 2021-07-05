//Objetivo: Remover e adicionar a class 'invisible'


const buttonModal = document.getElementById('openModal')
const modalWrapper = document.querySelector('.modal-wrapper')

//Removendo a class
buttonModal.onclick = function(){
    modalWrapper.classList.remove('invisible')  
}

//Adicionando a class
document.addEventListener('keydown', function(event){
    const keyEsc = event.key == 'Escape'

    if(keyEsc){
        modalWrapper.classList.add('invisible')
    }

})
