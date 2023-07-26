describe("Visibility", function(){

    it("Should support in typescript", function(){

        class Counter {
            private counter: number= 0;

            public inceremet(): void{
                this.counter++;
            }

            public getIncrement(): number {
                return this.counter;
            }
        }

        class CounterAlpha {
            protected counter: number = 0;

            public increment(): void {
                this.counter++;
            }

            public getCounter(): number {
               return this.counter;
            }

        }

        class DoubleCounter extends CounterAlpha {
            public increment(): void {
                this.counter += 2;
            }
        }

        const conter= new Counter()
        conter.inceremet()
        conter.getIncrement()
        console.info(conter)
        const ct = new DoubleCounter();
        ct.increment()
        console.log(ct)
   

    });

    it("Should support Parameter Properties", function(){
        class Person{
            constructor(public name: string= ""){
                
            }
        }

        const person = new Person();
        person.name= "Irawan";
        console.log(person)
    });
    
    it("Operator Intanceof", function(){
        class Employee {}
        class Manager{}

        const irawan = new Employee();
        const ilham = new Manager();
        expect(irawan instanceof Employee).toBe(true);
        expect(ilham instanceof Manager).toBe(true);
        // expect(ilham instanceof Employee).toBe(true)

        console.log({tes: typeof irawan, tes2: typeof ilham})
    })
});