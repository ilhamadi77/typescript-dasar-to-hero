describe("Abstract Class", function(){
    it("Should Support in typescript", function(){

       abstract class Customer{
            readonly id: number;
            abstract name: string;

            constructor (id: number){
                this.id = id;
            }

            abstract sayHello(name: string): void;
        };

        class RegulerCustomer extends Customer {
            name: string;

            constructor(id: number, name: string){
                super(id)
                this.name= name
            }

            sayHello(name: string): void {
                console.log(`Hello ${name}, my name is ${this.name}`)
            }
        }

        const customerOne= new RegulerCustomer(1,"adi");
        customerOne.sayHello("irawan");
        console.log(customerOne)

    });
});