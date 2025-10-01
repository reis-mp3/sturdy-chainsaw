let anaName;
let anaBtn = document.getElementById('ana_rose');
let mail = document.getElementById('mail')

anaBtn.onclick = function(){
    anaName = document.getElementById('ana_name').value
    if(anaName === 'Ana'){
        anaBtn.style.display = 'none'
        mail.style.display = 'block'
    }
}

