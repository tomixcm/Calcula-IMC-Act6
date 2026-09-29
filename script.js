function calcularIMC() {

    let alturaEnMetros = Number(document.querySelector("#alturaEnMetros").value);
    let pesoEnKilos = Number(document.querySelector("#pesoEnKilos").value);

    let imc = Math.floor(pesoEnKilos / (alturaEnMetros * alturaEnMetros));

    let resultado = document.querySelector("#resultado");
    
// Use textcontent ya que el VS me lo sugirio

    if (imc < 18.5) {
        resultado.textContent = "Tu IMC es " + imc + " - Muy bajo";
    } else if (imc >= 18.5 && imc < 25) {
        resultado.textContent = "Tu IMC es " + imc + " - Normal";
    } else {
        resultado.textContent = "Tu IMC es " + imc + " - Muy alto";
    }
}