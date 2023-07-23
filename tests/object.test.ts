    describe("Object type", function (){
        it("should support in typescript", function(){

            const person: {id: number, name: string, description?: string} = {
                id: 1,
                name: "Adi"
            };

            person.id= 2;
            person.name= "irawan";

            console.info(person);
        });
    });