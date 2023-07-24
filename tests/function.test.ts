describe("Funtion",function(){
    it("should support in typescript", function(){

        // function ini mengembalikan nilai string
        function sayHello(name: string): string {
            return `Hello ${name}`;
        }

        expect(sayHello("irawan")).toBe("Hello irawan");

        // function ini tidak mengembalikan nilai/ void
        function printHai(name: string): void{
            console.info(`Hai ${name}`)
        }

        printHai("adi")

    });
    
    it("should support default value param", function(){

        function sayHello(name: string = "Guest"): string {
            return `Hello ${name}`;
        }

        expect(sayHello("irawan")).toBe("Hello irawan");
        expect(sayHello()).toBe("Hello Guest");

    });

    it("Should support rest parameter", function(){

        function sum(...values: number[]): number{
            let total: number = 0;

            for(const value of values){
                total += value
            }
            return total;
        }

        expect(sum(1,2,3,4,5)).toBe(15);

    });
    
    it("Should support option parameter",function(){

        function sayFullName(firstName: string, lastName?: string): string{
            if(lastName){
                return `Hello, Welcome mr/ms ${firstName} ${lastName}`
            }else{
                return `Hello, Welcome mr/ms ${firstName}`
            }
        }

        expect(sayFullName("irawan","ilham")).toBe("Hello, Welcome mr/ms irawan ilham")
        expect(sayFullName("irawan")).toBe("Hello, Welcome mr/ms irawan");

    });

    it("should support function overloading", function(){
        function callMe(val: number): number;
        function callMe(val: string): string;
        function callMe(val: any): any {
            if(typeof val === "string"){
                return val.toUpperCase();
            }else if(typeof val === "number"){
                return val * 10;
            }
        }

        expect(callMe(10)).toBe(100);
        expect(callMe("irawan")).toBe("IRAWAN")
    });

    it("should support function as parameter", function(){

        function sayHello(name: string, filterString: (name: string) => string){
            return `hello ${filterString(name)}`
        }

        function toUpper(name: string): string{
            return name.toUpperCase();
        }

        function toLower(name: string): string{
            return name.toLowerCase();
        }

        console.info(sayHello("irawan",toUpper))
        expect(sayHello("adi",toUpper)).toBe("hello ADI")

        // menggunakan anonymous function
        expect(sayHello("adi", function (name: string): string {
            return name.toUpperCase();
        })).toBe("hello ADI")
        expect(sayHello("iLham",toLower)).toBe("hello ilham")

        // menggunakan arrow funtion
        expect(sayHello("ILHAM",(name: string): string => name.toLowerCase())).toBe("hello ilham")
    });
});