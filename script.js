class Person{

    constructor(nome,idade,altura){
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
    }
}

class Professional extends Person{

    constructor(nome,idade,altura,profissao){
        super(nome,idade,altura);
        this.profissao = profissao;
    }
}



const newPerson = new Person("Delson",54,2);
const printPerson = `Olá me chamo ${newPerson.nome} tenho ${newPerson.idade} anos e tenho ${newPerson.altura} de altura.`
console.log(printPerson);


const newProfessional = new Professional("Delson",54,2,"Administrador");
const printProfessional = `Olá me chamo ${newProfessional.nome} tenho ${newProfessional.idade} anos, tenho ${newProfessional.altura} de altura e sou ${newProfessional.profissao}.`
console.log(printProfessional);
