describe("Polimorphism", function(){
    it("Should support in typescript",function(){
        class Employee {
            constructor(public name: string){

            }
        }

        class Manager extends Employee{

        }

        class VicePresidents extends Manager{}

        let employee: Employee = new Employee("Irawan");
        console.log(employee);

        employee = new Manager("Adi");
        console.log(employee);

        employee = new VicePresidents("ilham")
        console.info(employee);        
        
    });

    it("Should support method polymorphism",function(){
        class Employee {
            constructor(public name: string){

            }
        }

        class Manager extends Employee{

        }

        class VicePresidents extends Manager{}

       function sayHello(employee: Employee): void{
        console.log(`Hello ${employee.name}`);
       }    

       sayHello(new Employee("irawan"));
       sayHello(new Manager("adi"));
       sayHello(new VicePresidents("ilham"))
        
    });

    it("Should support type cast polymorphism",function(){
        class Employee {
            constructor(public name: string){

            }
        }

        class Manager extends Employee{

        }

        class VicePresidents extends Manager{}

        // harus child paling bawah yang diletakan di awal pengecekan
       function sayHello(employee: Employee): void{
            if(employee instanceof VicePresidents){
                const vp = employee as VicePresidents
                console.log(`Hello VP ${vp.name}`)
            }else if(employee instanceof Manager){
                const manager = employee as Manager;
                console.log(`Hello Manager ${manager.name}`);
            }else{
                console.log(`Hello employee ${employee.name}`)
            }
       }   
       
       sayHello(new Employee("Irawan"))
       sayHello(new Manager("Ilham"))
       sayHello(new VicePresidents("Adi"))
        
    });
});