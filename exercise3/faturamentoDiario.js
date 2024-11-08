import fs from "node:fs";

const data = JSON.parse(fs.readFileSync("mes.json", "utf-8"));
const faturamentoDiario = data.map((i) => i.valor).filter((valor) => valor > 0);

const menorValor = Math.min(...faturamentoDiario);
const maiorValor = Math.max(...faturamentoDiario);
const mediaMensal =
  faturamentoDiario.reduce((acc, val) => acc + val, 0) /
  faturamentoDiario.length;
const diasAcimaDaMedia = faturamentoDiario.filter(
  (valor) => valor > mediaMensal
).length;

console.log("Menor valor:", menorValor);
console.log("Maior valor:", maiorValor);
console.log("Dias acima da média:", diasAcimaDaMedia);
