const number = document.querySelector('.number');
const btnUsa = document.querySelector('.btn');
const outPut = document.querySelector('.output');

    function mascaraUsa() {
        let numberClean = number.textContent.replace(/\D/g, '');
        if(numberClean.length === 11){
            outPut.innerHTML += numberClean.replace(/(\d{1})(\d{3})(\d{3})(\d{4})/,"+\$1 (\$2) \$3-\$4");
        };
    };


btnUsa.addEventListener('click', mascaraUsa);