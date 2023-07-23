    describe("any", function(){
        it("Shoul suppurt in typescript", function(){
            const person: any = {
                id : 1,
                name : "ilham adi irawan",
                age : 30
            };

            person.address= "Bandung City";

            console.info(person);
            console.info(person.name);
            console.info(person.address);
        });
    });