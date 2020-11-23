class Transaction {
   private date: string;
   private value: number;
   private description: string;

      constructor(date: string, value: number, description: string) {
         this.date = date;
         this.value = value;
         this.description = description;
      }

      public getDate(){return this.date}
      public setDate(newDate: string){this.date = newDate}

      public getValue(){return this.value}
      public setValue(newValue: string){this.date = newValue}

      public getDescription(){return this.description}
      public setDescription(newDescription: string){this.date = newDescription}


}



class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction[] = [];
  
    constructor(
       cpf: string,
       name: string,
       age: number,
       transactions: Transaction[]
    ) {
       console.log("Chamando o construtor da classe UserAccount")
       this.cpf = cpf;
       this.name = name;
       this.age = age;
       this.transactions =
    }

    public getCpf(){return this.cpf}
    public setCpf(newCpf: string){this.cpf = newCpf}
   
    public getName(){return this.name}
    public setName(newName: string){this.name = newName}

    public getAge(){return this.age}
    public setAge(newAge: number){this.age = newAge}
    
  }

  let dados: Transaction = new Transaction ("12/12/2002", 320, "Deposito efetuado") 

  let people: UserAccount = new UserAccount("123", "joao bastista", 23, dados)
  let people2: UserAccount = new UserAccount("123555", "joao bastista moura", 28)
  console.log(people, people2)


  //1-a) ele serve para criar um objeto com as propriedades da classe, para chamar declara-se 
  //"const pessoa:UserAccount = new UserAccount()"

  //1-b) somente 1 vez para cada chamda do construtor

  //1-c) atraves do this, sendo utilizado dentro do metodo

  class Bank {
     private
  }

