describe("Union Type", function(){
    it("Should support in typescript",function(){
        let sample: string | number | boolean= "Irawan";
        
        console.info(sample);
        
        sample= 20_000
        console.info(sample);
        
        sample= false
        console.info(sample);

        // sample= []; // error karena tidak didefinisikan
       // console.info(sample)

        });

        it("Should support typeof operator",function(){
            function process(value: number | string | boolean){
                if(typeof value === "string"){
                    return value.toUpperCase();
                }else if(typeof value === "number"){
                    return value + 2;
                }else {
                    return !value;
                }
            }

            expect(process("Irawan")).toBe("IRAWAN");
            expect(process(100)).toBe(102);
            expect(process(true)).toBe(false);

            console.info(process("irawan"))
            console.info(process(100))
            console.info(process(true))
            
        });
});