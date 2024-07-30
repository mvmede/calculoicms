function obterPrecoCusto() {
    let precoCusto = parseFloat(prompt("Digite o preço de custo do produto:"));
    return precoCusto;
}

function calcularICMS(precoCusto, taxaICMS) {
    let icms = precoCusto * (taxaICMS / 100);
    return icms;
}

function calcularPrecoFinal(precoCusto, icms, margemLucro) {
    let precoComICMS = precoCusto + icms;
    let precoFinal = precoComICMS + (precoComICMS * (margemLucro / 100));
    return precoFinal;
}
function calcularPrecoProduto() {
    const taxaICMS = 18; // Porcentagem do ICMS
    const margemLucro = 20; // Porcentagem da margem de lucro

    let precoCusto = obterPrecoCusto();
    let icms = calcularICMS(precoCusto, taxaICMS);
    let precoFinal = calcularPrecoFinal(precoCusto, icms, margemLucro);

    console.log(`Preço de custo: R$${precoCusto.toFixed(2)}`);
    console.log(`Valor do ICMS: R$${icms.toFixed(2)}`);
    console.log(`Preço final com margem de lucro: R$${precoFinal.toFixed(2)}`);
}


calcularPrecoProduto();