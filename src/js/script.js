const inputpass = document.getElementById('showPassword');

function showPass(){
    if(inputpass.type === 'password'){
        inputpass.type = 'text';
    }else{
        inputpass.type = 'password';
    }
}