const numero = document.querySelector('.numero');
const btnBr = document.querySelector('.btnBr');
const outputBr = document.querySelector('.outputBr');

    function mascaraBr() {
        let numeroLimpo = numero.value.replace(/\D/g, '');
        if(numeroLimpo.length === 10){
            outputBr.innerHTML += numeroLimpo.replace(/(\d{2})(\d{4})(\d{4})/,"(\$1) \$2-\$3");
        }else{
            outputBr.innerHTML += numeroLimpo.replace(/(\d{2})(\d{5})(\d{4})/,"(\$1) \$2-\$3");
        }
    };


btnBr.addEventListener('click', mascaraBr);