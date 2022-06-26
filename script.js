// / Crie um objeto que receba ao menos três propriedades sobre você.
const dados = {
  nome: 'Felipe',
  idade: 28,
  nacionalidade: 'brasileiro'
}
// Adicione uma nova propriedade sem alterar seu objeto inicial.
dados.estadoCivil = 'Casado'
// Remova uma propriedade desse objeto.
delete dados.nacionalidade
//Mostre no console todas as propriedades desse objeto.
console.log(dados)
// Crie um array  chamado "cadastro" contendo ao menos 5 objetos. 
//Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos. 
//Na propriedade amigos, adicione ao menos 4 itens.

let Cadastro =[{
  name : 'Cosme',
  age : 9000,
  phone : '(21) 97171-17171',
  friend : ['bruno','gabriel','marcos','welder']
  
},
{
  name : 'Bruna',
  age : 19,
  phone : '(22) 98765-7171',
  friend : ['Daniel','Jeova','Abraao','Moises']
  
},
{
  name : 'Luan',
  age : 39,
  phone : '(55) 98181-1234',
  friend : ['Joao','Paulo','Felipe','Mateus'],
  
},
{
  name : 'Felipe',
  age : 28,
  phone : '(55) 98764-1234',
  friend : ['Andre','Jonatas','Alessandra','Aline']
  
},
{
  name : 'Rian',
  age : 19, 
  phone : '(55) 11123-9876',
  friend : [,'Fabiano','Mayara','Lucia','Davi']
  
}
]
// Mostre no console o nome de um amigo de cada lista.
console.log(Cadastro[0].friend [1])
console.log(Cadastro[1].friend [2])
console.log(Cadastro[2].friend [3])
console.log(Cadastro[3].friend [1])
console.log(Cadastro[4].friend [2])