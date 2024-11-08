import readline from "node:readline";
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function reverseString(string) {
  let invertida = "";
  for (let i = string.length - 1; i >= 0; i--) {
    invertida += string[i];
  }
  return invertida;
}

rl.question("Digite uma string para inverter:", (input) => {
  console.log("String invertida:", reverseString(input));
  rl.close();
});
