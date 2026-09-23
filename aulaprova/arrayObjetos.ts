interface Clientes{ //estamos criando uma interface como clientes, estampos declarando cada um deles, como propriedades de number, string, começando a ficar mais seguro meu projeto
    id: Number;
    nome:string
    email:string
    idade: Number 
}

const cliente: Clientes[] = [
    {id: 1, nome:"Marcelo", email:"marcelo@outbokk.com", idade: 5},
    {id: 2, nome:"Mario", email:"test@gmail.com", idade: 4},
    {id: 3, nome:"Marcelo", email:"test@gmail.com", idade:3},
    {id: 4, nome:"Amanda", email:"test@gmail.com", idade: 2}, //criamos uma interface e tipamos ele e criando um objeto nos tpamos ele espeçlahndo na interface e ai sim meu código vai ficar em segurança. oque eu definir aqui eu vou a partir da interface, objeto é a instancia de uma classe 
]

for (const item of cliente ){
    console.log(item.id)
    console.log(item.nome)
    console.log(item.email)

}
console.log(cliente[0].nome) //o objeto é uma instancia de uma classe, usamos muito para fazer testes, se está funcionando com precisam implementamos no banco de dados 
