document.getElementById('parte2').style.display = 'none'
document.getElementById('parte3').style.display = 'none'
document.getElementById('parte4').style.display = 'none'
document.getElementById('parte5').style.display = 'none'
document.getElementById('textarea').value = ''

function done1() {
    let nome = document.getElementById('nome').value
    if (nome.length > 0) {
        document.getElementById('nome').setAttribute('style', 'border: 1px solid green')
        document.getElementById('parte1').style.display = 'none'
        document.getElementById('parte2').style.display = ''
    } else {
        alert('Preencha o campo nome')
        document.getElementById('nome').setAttribute('style', 'border: 1px solid red')
    }

}

function done2() {
    let email = document.getElementById('email').value
    if (email.length > 0) {
        if (email.includes('@') && email.includes('.')) {
            document.getElementById('email').setAttribute('style', 'border: 1px solid green')
            document.getElementById('parte2').style.display = 'none'
            document.getElementById('parte3').style.display = ''
        } else {
            alert('Insira um e-mail válido!')
            document.getElementById('email').setAttribute('style', 'border: 1px solid red')
        }
    } else {
        document.getElementById('email').setAttribute('style', 'border: 1px solid red')
        alert('Preencha o campo de email')
    }
}

function done3() {
    let telefone = document.getElementById('telefone').value
    if (telefone.length == 16) {
        document.getElementById('telefone').setAttribute('style', 'border: 1px solid green')
        document.getElementById('parte3').style.display = 'none'
        document.getElementById('parte4').style.display = ''
    } else {
        alert('Preencha o campo telefone')
        document.getElementById('telefone').setAttribute('style', 'border: 1px solid red')
    }

}

function done4() {
    let assunto = document.getElementById('assunto').value
    if (assunto.length > 10) {
        document.getElementById('assunto').setAttribute('style', 'border: 1px solid green')
        document.getElementById('parte4').style.display = 'none'
        document.getElementById('parte5').style.display = ''
    } else {
        alert('Preencha o campo assunto com no minimo 10 caracteres')
        document.getElementById('assunto').setAttribute('style', 'border: 1px solid red; font-size: 22px')
    }

}

function altera() {
    document.getElementById('final').innerHTML = "Enviado com sucesso!"
    document.getElementById('final').style.textShadow = '0 0 .6em black'
    document.getElementById('body').setAttribute('class', 'cacabado')
    document.getElementById('principal').setAttribute('class', 'acabado')
    document.getElementById('parte5').style.display = 'none'
}

function done5() {
    let textarea = document.getElementById('textarea').value
    if (textarea.length > 0) {
        document.getElementById('textarea').setAttribute('style', 'border: 1px solid green')
        document.getElementById('parte4').style.display = 'none'
        document.getElementById('parte5').style.display = ''
        altera()
    } else {
        alert('Preencha o campo de texto')
        document.getElementById('textarea').setAttribute('style', 'border: 1px solid red')
    }
}

function digitando() {

    let textarea = document.getElementById('textarea').value
    document.getElementById('digitando').innerHTML = ` ${textarea.length}/200`
    if (textarea.length >= 200) {
        document.getElementById('digitando').style.color = 'red'
        document.getElementById('textarea').style.color = 'red'
    } else if (textarea.length < 200) {
        document.getElementById('digitando').style.color = 'white'
        document.getElementById('textarea').style.color = 'black'
    }
}

function mascaraFone() {
    let telefone = document.getElementById('telefone').value
    if (telefone.length == 0) {
        document.getElementById('telefone').value = '('
    } else if (telefone.length == 3) {
        document.getElementById('telefone').value += ') '
    } else if (telefone.length == 6) {
        document.getElementById('telefone').value += ' '
    }
    else if (telefone.length == 11) {
        document.getElementById('telefone').value += '-'
    }

}