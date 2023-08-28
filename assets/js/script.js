jQuery(function($) {

    $('#inputCell').mask('(00)00000-0000')

    /* form talk to us */
    $('#form2').on('submit', (e) => {
        e.preventDefault()

        let form = $('#form2')[0]
        let formData = new FormData(form)
        validate(formData)

        let inputs = $('.form-control')
        let flag = 0

        for (let input of inputs) {
            if (input.classList.contains('is-invalid')) {
                flag = 1
            } 
        }

        if (flag == 0) {
            setTimeout(function() { 
                document.getElementById('form2').submit()
            }, 2000)
            $('#formModal').modal('show')
        } else {
            e.preventDefault()
        }
    })

    $('#form2').on('input', (e) => {
        e.preventDefault()
    
        let form = $('#form2')[0]
        let formData = new FormData(form)
        validate(formData)
    })

    function validate(form) {
        for (let key of form.keys()) {
            let element = $(`#${key}`)
            let value = form.get(key)
    
            if (element.prop('required') && (value.length <= 0)) {
                isInvalid(element)

                if (key == 'inputName') {
                    $('#invalid-feedback-name').text('Campo Obrigatório!')
                } else if (key == 'inputEmail') {
                    $('#invalid-feedback-email').text('Campo Obrigatório!')
                } else if (key == 'inputSubject') {
                    $('#invalid-feedback-subject').text('Campo Obrigatório!')
                } else if (key == 'inputMessage') {
                    $('#invalid-feedback-message').text('Campo Obrigatório!')
                } 
            } else {
                isValid(element)
            }

            if ((value.length > 0) && (key == 'inputName')) {
                if (value.length < 10) {
                    isInvalid(element)
                    $('#invalid-feedback-name').text('Número mínimo de caracteres: 10')
                } else {
                    isValid(element)
                }
            } else if ((value.length > 0) && (key == 'inputSubject')) {
                if (value.length < 6) {
                    isInvalid(element)
                    $('#invalid-feedback-subject').text('Número mínimo de caracteres: 6')
                } else {
                    isValid(element)
                }
            } else if ((value.length > 0) && (key == 'inputMessage')) {
                if (value.length < 20) {
                    isInvalid(element)
                    $('#invalid-feedback-message').text('Número mínimo de caracteres: 20')
                } else {
                    isValid(element)
                }
            }

            if ((value.length > 0) && (key == 'inputEmail')) {
                if (value.match(/^\w+\@\w+\.\D+$/)) {
                    isValid(element)
                } else {
                    isInvalid(element)
                    $('#invalid-feedback-email').text('Exemplo: meuemail@mail.com')
                }
            }

            if ((value.length > 0) && (key == 'inputCell')) {
                if (value.length == 14) {
                    isValid(element)
                } else {
                    isInvalid(element)
                    $('#invalid-feedback-cell').text('Exemplo: (55)99999-9999')
                }
            }
        }
    }

    /* form subscribe */
    $('#form').on('submit', (e) => {
        e.preventDefault()

        validateEmail($('#email'))

        if ($('#email').hasClass('is-valid')) {
            setTimeout(function() { 
                document.getElementById('form').submit()
            }, 2000)
            $('#subscribeModal').modal('show')
        } else {
            e.preventDefault()
        }
    })

    $('#form').on('input', (e) => {
        e.preventDefault()

        validateEmail($('#email'))
    })

    function validateEmail(element) {
        if (element.val().length <= 0) {
            isInvalid(element)
            $('#invalid-feedback-email').text('Campo Obrigatório!')
        } else {
            isValid(element)
        }

        if (element.val().length > 0) {
            if (element.val().match(/^\w+\@\w+\.\D+$/)) {
                isValid(element)
            } else {
                isInvalid(element)
                $('#invalid-feedback-email').text('Exemplo: meuemail@mail.com')
            }
        }
    }

    /* form subscribe mobile */
    $('#form2').on('submit', (e) => {
        e.preventDefault()

        validateEmail2($('#email2'))

        if ($('#email2').hasClass('is-valid')) {
            setTimeout(function() { 
                document.getElementById('form2').submit()
            }, 2000)
            $('#subscribeModal').modal('show')
        } else {
            e.preventDefault()
        }
    })

    $('#form2').on('input', (e) => {
        e.preventDefault()

        validateEmail2($('#email2'))
    })

    function validateEmail2(element) {
        if (element.val().length <= 0) {
            isInvalid(element)
            $('#invalid-feedback-email2').text('Campo Obrigatório!')
        } else {
            isValid(element)
        }

        if (element.val().length > 0) {
            if (element.val().match(/^\w+\@\w+\.\D+$/)) {
                isValid(element)
            } else {
                isInvalid(element)
                $('#invalid-feedback-email2').text('Exemplo: meuemail@mail.com')
            }
        }
    }

    
    /* funções validação */
    function isInvalid(element) {
        element.addClass('is-invalid')
        element.removeClass('is-valid')
    }
    
    function isValid(element) {
        element.addClass('is-valid')
        element.removeClass('is-invalid')
    }
})



let qntComments = 0;
function submit() {
    let userComment = document.getElementById("enter-comment").value;
    let textArea = document.getElementById("enter-comment");
    let divComment = document.getElementById("users-comments");
    let divQntComment = document.getElementById("qnt-comments");
    
    if (/\S/.test(userComment)) {
        qntComments++;
        divQntComment.style.visibility = "visible";
        divQntComment.innerText = qntComments;
        divComment.innerHTML += `<p class="user-comment">${userComment}</p>`
        divComment.innerHTML += `<div class="divisor"></div>`
        textArea.value = "";
    } 
}