const myForm = document.querySelector('.interesse-form')
const errorMsg = document.querySelector('.msg')
const btnInscreva = document.querySelector('.btnInsrevase')

const nameInput = document.querySelector('#name')
const cpfInput = document.querySelector('#cpf')
const dataInput = document.querySelector('#data')
const birthdayInput = document.querySelector('#birthday')
const telefoneInput = document.querySelector('#telefone')
const emailInput = document.querySelector('#email')

export function verifySubscribe() {
if(myForm) {
 function subscribeHandle(e) {
    e.preventDefault()
    
    const nameValue = nameInput.value
    const cpfValue = cpfInput.value
    // const dataValue = dataInput.value
    const birthdayValue = birthdayInput.value
    const telefoneValue = telefoneInput.value
    const emailValue = emailInput.value

    if(nameValue === '' || cpfValue === '' || birthdayValue === '' || telefoneValue === '' || emailValue === '') {
        errorMsg.innerText = 'Preencha todos os campos.*'
        errorMsg.style.color = 'red'
        errorMsg.style.fontSize = '1.1rem'
        return
    }
    
    nameInput.value = ''
    cpfInput.value = ''
    dataInput.value = ''
    birthdayInput.value = ''
    telefoneInput.value = ''
    emailInput.value = ''
}
btnInscreva.addEventListener('click', subscribeHandle)
}
}
verifySubscribe()