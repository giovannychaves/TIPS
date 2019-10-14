const cpf = document.querySelector('.cpf');


function mascaraCpf() {
    if(cpf.value.length === 11){
        console.log(cpf.value)
        cpf.value = cpf.value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g,"\$1.\$2.\$3\-\$4");
    };
};


cpf.addEventListener('keyup', mascaraCpf);