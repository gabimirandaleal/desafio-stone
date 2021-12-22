# desafio-stone
A função addUpExpenses recebe um array de objetos com as despesas da viagem e um array com os nomes das pessoas que participaram da viagem. Essa função é responsável percorrer o array de despesas e multiplicar a quantidade(amount) pelo preço por unidade (unitPrice). Em seguida mandamos esse total para a função shareExpenses, que recebe o total das despesas e os membros e divide o valor entre eles, já criando o dicionário(objeto). Ao final eu verifico se a divisão está correta, para fazer isso basta verificar se o valor pago para cada integrante * o número de integrantes é igual ao valor total de despesas, se for, só retorno o objeto, senão, aleatorizo alguém entre os membros que irá pagar o menor ou maior valor entre todos. Ao final, retorno o dicionário. 

Para rodar lembre-se: a função recebe um array de objetos e nomes de viajantes:

- Obs: É só abrir o index.html no navegador e olhar o devtools na aba "console" e colar as linhas abaixo, para acessar o valor que cada um deve pagar coloque namesToPay["nomedointegrante"]

let testeExpenses = [{name: "passeio de escuna", amount: 5, unitPrice: 80}, {name: "diaria hotel", amount: 3, unitPrice: 337.99}, {name: "almoço selfservice", amount: 0.757, unitPrice: 45.99}];

let namesTeste = ["joao", "maria", "gabriela", "erick", "julia"];

let namesToPay = addUpExpenses(testeExpenses, namesTeste);
