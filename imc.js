const button = document.querySelector("#button");

function calcular() {
    const name = document.querySelector("#name");
    const height = document.querySelector("#height");
    const weight = document. querySelector("#weight");
    /* Number transforma o texto em número e o .value pega o valor digitado no documento */
    const heightvalue = Number(height.value); /* peguei o valor do input */
    const weightvalue = Number(weight.value); /* peguei o valor do input */

    const IMC = weightvalue / (heightvalue * heightvalue);

    /* console.log(IMC); */

    const result = document.querySelector("#result");

    if (name.value === "" || height.value === "" || weight.value === "" ) {
        alert("preencha todos os campos!");
    }
    else if (IMC < 18.5) {

        return result.innerText = "Você está abaixo do peso";
    }
    else if(IMC > 18.5 && IMC < 22) {
        return result.innerText = "Você está na média";
    }
    else if(IMC >= 22) {
        return result.innerText = "Você está acima do peso";
    }
}

button.addEventListener("click", calcular); /* quando acontecer um click no button, execute "calcular()" */
