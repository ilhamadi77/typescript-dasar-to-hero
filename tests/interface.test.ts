import {Seller} from "../src/seller"
import {Employee,Manager} from "../src/employee"
import {Person} from "../src/person"

describe("Interface type",function(){
    it("should support in typescript", function(){

        const seller: Seller={
            id: 1,
            name: "Toko ABC",
            address: "Bandung", // option properties
            nip: "12121233",
            npwp: "90900"
        }
        seller.name= "Toko Irawan";
       // seller.nip= "122334144" tidak bisa diubah karena sudah di deklarasikan hanya dibaca saja


        console.info(seller);
    });

    it("Should support function interface", function(){

    interface addFunction {
        (param: number, param2: number): number
    }

    const add: addFunction = (val: number, val2: number): number =>{
            return val + val2;
    }

    const equal: addFunction = (val: number, val2: number): number =>{
        return val * val2;
    }

    console.info("ini ada function add",add(2,1))
    expect(add(1,2)).toBe(3);
    expect(equal(2,3)).toBe(6);

    });
    it("should support indexable interface", function (){
        // array pada javascript
        interface StringArray {
            [index: number]: string
        }
        const names: StringArray= ["Adi", "ilhan","alexander"];

        console.info(names)
    });
    it("should support indexable typescript for non number", function(){

        interface StringDictinory {
            [key: string]: string | string[]
        }

        const person: StringDictinory = {
            nama: "Irawan",
            address: "Banda Neira",
            hobby: ["workout", "badminton", "reading"]
        }

        console.info(person)
       // console.info("nama: ",person["nama"])
       // console.info("hobi: ",person.hobi[0])

       //pengecekan 
       expect(person["nama"]).toBe("Irawan");
       expect(person.hobby[0]).toBe("workout")

    });

    it("should support extends in typescript", function(){

        const employee: Employee ={
            id: "1",
            name: "irawan",
            division: "IT"
        }

        const manager: Manager = {
            id: "1",
            name: "Ilham Adi",
            division: "IT",
            numberOfEmployees: 10,
        }

        console.info(employee)
        console.info(manager.numberOfEmployees)

    });

    it("should support function in interface", ()=>{
        const person: Person = {
            name: "Irawan",
            sayHello: function (name: string): string {
                return `hello ${name}, my name is ${this.name}`
            }
        }

        console.info(person.sayHello("ilham"))

    });
    it("Should support intersection types",function(){

        interface HashName{
            name: string;
        }
        
        interface HashId{
            id: number;
        }

        type Domain = HashId & HashName;

        const domain: Domain ={
            id: 1,
            name: "ilhamadi77"
        }

        console.info(domain)

    });
    
    it("should support type assertion", function(){
        // mengubah type data
        const person: any = {
            name: "irawan",
            age: 27
        }

        const person2: Person= person as Person;
        person2.sayHello
        console.info(person2)

    });
});