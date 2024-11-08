import readline from "node:readline";
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function isFibonacci(n) {
  let a = 0;
  let b = 1;

  while (a < n) {
    [a, b] = [b, a + b];
  }
  return a === n;
}


function askNumber(){
	rl.question("Digite um número: ", (input) => {
		const number = parseInt(input, 10);
		
		if(isNaN(number)) {
			console.log("Entrada inválida. Por favor, digite um número.");
			askNumber();
		} else {
			if (isFibonacci(number)){
				console.log(`${number} pertence a sequência de Fibonacci.`);
			} else {
				console.log(`${number} não pertence a sequência de Fibonacci.`);
			}
			rl.close();
		}
	}
)};

askNumber();
