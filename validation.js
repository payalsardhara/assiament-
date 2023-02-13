let age = prompt("enter your age")
    age = Number.parseInt(age)

    if(age>=20){
        alert("fill in youe details")
    }
    else{
        alert("you are not eligible")
    }

let username = document.getElementById('username')
let password = document.getElementById('password')
let email = document.getElementById('email')
let tel = document.getElementById('tel')
let x = 1

function velidform(){

    if(username.value == ""){
        document.getElementById('usererror').innerHTML = 'must be requird'
        x = 0
        event.preventDefault()

    }
    else {
        document.getElementById('usererror').innerHTML = ''
        x = 1
    }
    if(password.value == ""){
        document.getElementById('passworderror').innerHTML = 'enter your password'
        x = 0
        event.preventDefault()
        
    }
    else if(password.value.length < 8){
        document.getElementById('passworderror').innerHTML = 'please enter atleast 8 digits'
        x = 0
        event.preventDefault()

    }
    else{
        document.getElementById('passworderror').innerHTML = ''
        x = 1
    }
    if(email.value == ""){
        document.getElementById('emailerror').innerHTML = 'please enter your email'
        x = 0
        event.preventDefault()

    }
    else{
        document.getElementById('emailerror').innerHTML = ''
        x = 1
    }
    if(tel.value == ''){
        document.getElementById('telerror').innerHTML = 'please enter tha number'
        x = 0
        event.preventDefault()

    }
    else if(!tel.value.startsWith('+')){
        document.getElementById('telerror').innerHTML = 'enter the plus sign and country number in the box'
        x = 0
        event.preventDefault()

    }
    else{
        document.getElementById('telerror').innerHTML = ''
        x = 1
    }
    if(x){
        return true
    
    }
    else{
        return false
    
    }
}