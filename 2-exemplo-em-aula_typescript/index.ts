// class Pessoa {

//     // private nome!:string
//     // private idade!:number
//     // private cpf!:string
//     //fazendo direto no construtor para diminuir as linhas acima. No construtor nao precisa de ponto de exclamação.


//     constructor(private nome:string,private idade:number,private  cpf:string) {
//         this.nome=nome
//         this.idade=idade
//         this.cpf=cpf
        
//     }

//     escreverPropriedades(){
//         console.log(this.nome)
//         console.log(this.idade)
//         console.log(this.cpf)
//     }

//     getNome(){
//         return this.nome
//     }
    
//     setNome(nome:string){
//         return this.nome = nome;
//     }

    
//     getIdade(){
//         return this.idade
//     }
    
//     setIdade(idade:number){
//         return this.idade = idade;
//     }

//     getCPF(){
//         return this.cpf
//     }
    
//     setCPF(cpf:string){
//         return this.cpf = cpf;
//     }
// }

// let pessoa = new Pessoa("marcelly",31,"111.111.111-11");

// pessoa.escreverPropriedades();



// pessoa.setNome("Eduardo")

// console.log(pessoa.getNome());





// //ATIVIDADE Introdução a POO
// class Carro {
//     modelo!:string
//     marca!:string
//     ano!:number



//     constructor(modelo:string,marca:string,ano:number) {
//         this.modelo=modelo
//         this.marca=marca
//         this.ano=ano        
//     }

//     escreverPropriedades(){
//         console.log(this.modelo)
//         console.log(this.marca)
//         console.log(this.ano)
//     }
// }

// let carro = new Carro("sandero","reanult",2012);

// carro.escreverPropriedades();



interface propriedadesCarro{
    marca:String
}

class Carro implements propriedadesCarro{
    marca!:String;
}