
export function verifiquedIMC() {
    const IMCveri = document.querySelector('.imc')

    const alturaInput = document.querySelector('#altura')
    const pesoInput = document.querySelector('#peso')
    const btnSubmit = document.querySelector('#btnCalc')
    
    const imcQuest = document.querySelector('.imc-questions span')
    
    /*Resposta IMC JS* */
    const finalRespostaPrime = document.querySelector('.imc-info')
    const finalResposta = document.querySelector('.imc-info p')
    
    const sexo = document.querySelectorAll('input[name="sexo"]')

if(IMCveri) {

 function imcHandleClick(e) {
    e.preventDefault()

    const msgErrorSexo = document.querySelector('.imc-radio span')
    const selectSex = document.querySelector('input[name="sexo"]:checked').value

    // const sexoProx = selectSex.nextElementSibling
    function sexSelect() {
        selectSex
    }
        sexo.forEach( sexGender => {
        sexGender.addEventListener('change', sexSelect)
    })


    const alturaValue = alturaInput.value
    const pesoValue = pesoInput.value
    const convAltura = alturaValue / 100

    const valor = pesoValue / (convAltura * 2)
    const valorTotal = valor.toFixed(2)


    if(pesoValue === '' || alturaValue === '') {
        imcQuest.innerText = '*Preencha todos os campos!'
        imcQuest.style.color = 'red'
        return
    }

    if(pesoValue == 0 || alturaValue == 0) {
        imcQuest.innerText = '*Preencha os campos corretamente!'
        imcQuest.style.color = 'red'
        return
    }
  

    if(valorTotal < 16) {
        const addResul = finalResposta.innerText = `-Seu IMC é: ${valorTotal} 
        (Abaixo do peso nivel 3)
        -Seu sexo é: ${selectSex}
        
        -Recomendo você fazer exercicios: 
        1-Comer muita massa
        2-Fazer musculação
        3-Beber muita agua`
        const styleAdd = finalResposta.style.padding = '22px'
        const style2 = finalRespostaPrime.style.borderRadius = '16px'
       
        return addResul
    } else if (valorTotal <= 17 ) {
        const addResul = finalResposta.innerText = `-Seu IMC é: ${valorTotal} 
        (Abaixo do peso nivel 2)
        -Seu sexo é: ${selectSex}
        
        -Recomendo você fazer exercicios: 
        1-Comer muita massa
        2-Fazer musculação
        3-Beber muita agua`
        const styleAdd = finalResposta.style.padding = '22px'
        const style2 = finalRespostaPrime.style.borderRadius = '16px'
       
        return addResul
    } else if (valorTotal <= 18.49) {
        const addResul = finalResposta.innerText = `-Seu IMC é: ${valorTotal} 
        (Abaixo do peso nivel 1)
        -Seu sexo é: ${selectSex}
        
        -Recomendo você fazer exercicios: 
        1-Comer muita massa
        2-Fazer musculação
        3-Beber muita agua`
        const styleAdd = finalResposta.style.padding = '22px'
        const style2 = finalRespostaPrime.style.borderRadius = '16px'
       
        return addResul
    } else if (valorTotal <= 24.99) {
        const addResul = finalResposta.innerText = `-Seu IMC é: ${valorTotal} 
        (Seu peso é NORMAL)
        -Seu sexo é: ${selectSex}
        
        -Recomendo você fazer exercicios: 
        1-Comer muita massa
        2-Fazer musculação
        3-Beber muita agua`
        const styleAdd = finalResposta.style.padding = '22px'
        const style2 = finalRespostaPrime.style.borderRadius = '16px'
       
        return addResul
    } else if (valorTotal > 25) {
        const addResul = finalResposta.innerText = `-Seu IMC é: ${valorTotal} 
        (ACIMA do peso!)
        -Seu sexo é: ${selectSex}
        
        -Recomendo você fazer exercicios: 
        1-Comer muitas frutas e verduras 
        2-Fazer musculação e yoga
        3-Beber muita agua`
        const styleAdd = finalResposta.style.padding = '22px'
        const style2 = finalRespostaPrime.style.borderRadius = '16px'
       
        return addResul
    }


    }

    btnSubmit.addEventListener('click', imcHandleClick)

}
}
verifiquedIMC()


