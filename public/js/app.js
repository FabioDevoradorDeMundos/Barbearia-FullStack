

const contactForm = document.querySelector('#formularioDeContato')
const nome = document.querySelector('#nome')
const email = document.querySelector('#email')
const mensagem = document.querySelector('#mensagem')
const data = document.querySelector('#data')

contactForm.addEventListener('submit', (e) => {
    e.preventDefault()
    
    let formData = {
        name:nome.value,
        email:email.value,
        message:mensagem.value,
        data:data.value

    }
    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/');
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.onload = function() {
        
      
    }

    xhr.send(JSON.stringify(formData))
    console.log(xhr.responseText);
        if(xhr.responseText == ''){
            alert('Email enviado')
            nome.value = ''
            email.value = ''
            mensagem.value = ''
            data.value = ''

        } else{
            alert('Algo deu errado')
        }


})