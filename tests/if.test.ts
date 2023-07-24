describe("IF Statament", function(){
    it("Should support in typescript", function(){

        const value= 60;
        if(value > 80){
            console.info("Good")
        }else if(value > 60){
            console.info("Not Bad")
        }else{
            console.info("Try Again")
        }

    });

    it("shold support ternary operator", function (){

        const value= 93;

        const emoticon= value > 75 ? "Happy" : "Sad";
        console.info(emoticon)

    });

    it("shoul suppurt switch case", function(){

        function sayHello(name: string): string {
            switch(name){
                case "adi":
                    return "Hi adi";
                case "irawan":
                    return "Hi irawan";
                default :
                    return "hello aja"
            }
        }

        expect(sayHello("irawan")).toBe("Hi irawan");

    });
});