function converter() {
    const valor = parseFloat(document.getElementById('valor').value);
    const unidadeOrigem = document.getElementById('unidadeOrigem').value;
    const unidadeDestino = document.getElementById('unidadeDestino').value;

    let resultado = valor;

    if (unidadeOrigem !== unidadeDestino) {
        switch (unidadeOrigem) {
            case 'kilobyte':
                resultado *= 1024;
                break;
            case 'megabyte':
                resultado *= 1048576;
                break;
            case 'gigabyte':
                resultado *= 1073741824;
                break;
            case 'terabyte':
                resultado *= 1099511627776;
                break;
            case 'petabyte':
                resultado *= 1125899906884629;
                break;
        }

        switch (unidadeDestino) {
            case 'kilobyte':
                resultado /= 1024;
                break;
            case 'megabyte':
                resultado /= 1048576;
                break;
            case 'gigabyte':
                resultado /= 1073741824;
                break;
            case 'terabyte':
                resultado /= 1099511627776;
                break;
            case 'petabyte':
                resultado /= 1125899906884629;
                break;
        }
    }

    // Formata��o do resultado com duas casas decimais
    const resultadoFormatado = resultado.toFixed(2);

    // Exibi��o do resultado na tela
    document.getElementById('resultado').innerHTML = `Resultado: ${resultadoFormatado} ${unidadeDestino}`;
}
