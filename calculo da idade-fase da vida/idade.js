const calcular = document.getElementById('calcular');

function idade () {
    const nome = document.getElementById('nome').value;
    const idade = document.getElementById('data').value;
    const resultado = document.getElementById('resultado');

    if (nome !== '' && idade !== '' ) {
       
        const numIdade = ((idade -2021)*-1).toFixed(1);

        let classificacao = '';

            if (0 < numIdade < 11){
                classificacao = ('na infancia (criança).');
            }else if (12.< numIdade < 20){
                classificacao = ('na periodo adolescente/jovem.');
            }else if (20 < numIdade < 74){
                classificacao = ('na periodo adulto.');
            }else if (numIdade > 75){
                classificacao = 'agora você é um idoso';
            }else {
                classificacao = 'invalido!';
            }

        resultado.textContent = `${nome} ve tem  ${numIdade} de idade e você está ${classificacao}`;
        
    }else {
        resultado.textContent = 'Há campos incompletos!';
    }

}

calcular.addEventListener('click', idade);
