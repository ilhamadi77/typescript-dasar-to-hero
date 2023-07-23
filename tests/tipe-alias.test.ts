import {Category, Product} from "../src/tipe-alias";
    describe("tipe alias", function() {
        it("should support in typescript", function (){
            const category: Category ={
                id: 1,
                name: "Handphone",
                description: "new realease" // option properti
            };
            const product: Product = {
                id: "1",
                name: "Samsung s23 Ultra",
                price: 13_000_000,
                category: category
            }

            console.info(category);
            console.info(product);
        });
    });