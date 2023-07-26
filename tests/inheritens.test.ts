describe("Inheritence Typescript", function(){
    it("should support in typescript", function(){

        class Employee {
            name: string

            constructor(name: string){
                this.name = name;
            }
        }

        class Manager extends Employee{
            // isi
        }

        class Directure extends Manager{

        }

    });

    it("interface Inheritance", function(){

        interface HashName{
            name: string;
        }

        interface CanSayHello{
            sayhello(name: string): void; 
        }
        
        class Person implements HashName,CanSayHello {
            name: string;

            constructor(name: string){
                this.name= name;
            }

            sayhello(name: string): void {
                console.info(`Hello ${name}, my name is ${this.name}`);
            }
        }

        const person = new Person("irawan");
        person.sayhello("adi")
        console.info(person)

    });

    it("should super Constructor", function(){

        class Person{
            name: string;

            constructor(name: string){
                this.name= name;
            }
        }

        class Employee extends Person {
            departement: string;

            constructor(name: string, departement: string){
                super(name)
                this.departement= departement
            }
        }

        const person = new Person("adi");
        // console.info(person);

        const firstEmployee= new Employee("irawan", "IT");
        console.info({person,firstEmployee})

    });

    it("should support method Overidding", function(){

        class Employee {
            name: string;

            constructor(name: string){
                this.name= name;
            }

            sayHello(name: string): void {
                console.info(`Hello ${name}, my name is ${this.name}`);
            }
        }

        class Manager extends Employee{
            sayHello(name: string): void {
                console.info(`Hello ${name}, my name is ${this.name}, i am your manager`)
            }
        }

        const manager= new Manager("adi");
        manager.sayHello("irawan")
        console.info(manager)

    });
    
    it("should support super method", function(){

        class Parent {
            name: string;

            constructor(name: string){
                this.name = name;
            }

            sayHello(name: string): void{
                console.info(`Hello ${name}, my name is ${this.name}`);
            }
        }

        class Child extends Parent{
            sayHello(name: string): void {
                super.sayHello(name);
                console.info("And , I am your Manager");
            }
        }

        const firstChild= new Child("Adi")
        firstChild.sayHello("irawan")
        console.info(firstChild)

    });
});