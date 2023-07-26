describe("Class Relantionship", function(){
    it("Should Support in Typescript", function(){

        class Person{
            constructor(name: string){

            }
        };

        class Customer{
            constructor(name: string){

            }
        }

        const fisrtPerson: Person = new Customer("Adi");
        console.log(fisrtPerson)
    });
});