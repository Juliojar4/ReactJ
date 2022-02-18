
function geraNumerosNaoContidos(max, min, array) {
    const aleatorio = parseInt(Math.random() * (max - min) + min)
    
    return array.includes(aleatorio) ? geraNumerosNaoContidos(max, min, array) :
    aleatorio
}

function geraNumero(qntd) {
    const numero = Array(qntd)
        .fill(0)
        .reduce((nums) => {
            const novoNumero = geraNumerosNaoContidos(1, 60, nums)
            return [...nums, novoNumero]
        },[])
    return numero
}

console.log(geraNumero(2))

