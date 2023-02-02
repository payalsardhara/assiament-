let username = document.getElementById('username')
let password = document.getElementById('password')
let email = document.getElementById('email')
let tel = document.getElementById('tel')
let x = 1

function validform() {
    if (username.value == '') {
        // document.getElementById('usererror').innerHTML = 'must be riquired'
        $('#usererror').html('must be riquired')
        x = 0
        event.preventDefault()

    }
    else {
        document.getElementById('usererror').innerHTML = ''
        x = 1

    }
    if (password.value == '') {
        document.getElementById('passworderror').innerHTML = 'enter your password'
        x = 0
        event.preventDefault()


    }
    else if (password.value.length < 8) {
        document.getElementById('passworderror').innerHTML = 'please enter atleast 8 digits'
        x = 0
        event.preventDefault()

    }
    else {
        document.getElementById('passworderror').innerHTML = ''
        x = 1
    }
    if (email.value == '') {
        document.getElementById('emailerror').innerHTML = 'please enter your email'
        x = 0
        event.preventDefault()

    }
    else {
        document.getElementById('emailerror').innerHTML = ''
        x = 1
    }
    if (tel.value == '') {
        $('#telerror').html('please enter your mo.number')
        x = 0
        event.preventDefault()

    }
    else if (tel.value.length <12) {
        document.getElementById('telerror').innerHTML = 'please enter 12 digit'
    //    $('#telerror').html('please enter 12 digit')
        x = 0
        event.preventDefault()

    }
    else if (!tel.value.startWith('+')) {
        document.getElementById('telerror').innerHTML = 'enter your cuntry number'
        x = 0
        event.preventDefault()
    }
    else{
        $('#telerror').html()
        x = 1

    }
    if (x) {
        return true
    }
    else {
        return false
    }
}