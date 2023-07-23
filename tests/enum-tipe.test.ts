import {Custumer,CustomerType} from "../src/enum"

    describe("Enum type",function(){
        it("should support in typescript", function(){
            const custumer: Custumer ={
                id: "1",
                name: "Irawan",
                type: CustomerType.GOLD
            }

                console.info(custumer);
        });
    });