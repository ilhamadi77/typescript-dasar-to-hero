describe("Loop", function(){
    it("should support for loop", function(){

        const names: string[] = ["ilham", "adi", "irawan"];

        for(let i= 0; i< names.length; i++){
            console.log(names[i])
        }

        for(let name of names){
            console.table(name)
        }

        for (let index in names){
            console.info(names[index])
        }

    });

    it("should support while loop", function(){

        let counter: number = 0;
        while(counter < 5 ){
            console.info(counter)
            counter++;
        }

    });
    
    it("should do while", function(){

        let counter: number = 0;
        do {
            console.info(counter)
            counter++;
        } while(counter < 3 )
    });

    it("Should support break and continue", function(){

        let counter: number = 0
        do{
            counter++;

            if(counter == 8){
                break;
            }

            if(counter % 2 == 0){
                continue;
            }

            console.info(counter)
        }while(true)

    })
});