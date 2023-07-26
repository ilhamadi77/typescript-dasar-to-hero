describe("Error Handling", function(){
    it("should support in typescript", function(){
        class ValidationError extends Error {
            constructor(messagae: string){
                super(messagae)
            }
        };

        function doubleIt(val: number): number{
            if(val < 0){
                throw new ValidationError("value kurang dari 0 kamu error");
            }
            return val*2;
        };

        try{
            const result= doubleIt(2);
            console.log(result);

        }catch(e){
            if(e instanceof ValidationError){
                console.log(e.message);
            }
        }
    })
})