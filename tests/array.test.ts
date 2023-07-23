    describe("array",function(){
        it("should same with javascript", function(){
            const name: string[] = ["Ilham", "Adi", "Irawan"];
            const values: number[] = [1,2,3,4,5];

            console.info(name);
            console.info(values);
        });

        it("should support read only array",function(){
            // hanya bisa di baca saja, tidak bisa untuk dimodifikasi
            const hobbies: ReadonlyArray<string> = ["Membaca", "berenang", "Proggraming", "Badminton", "workout"];
            console.info(hobbies);
            // hobbies[0]="main game"; // error
            // console.info(hobbies[1]) // ini bisa dibuka

        });

        it("should support tupple",function (){
            /* tupple adalah jenis array yang panjang dan tipe data nya sudah ditentukan dan tidak bisa di modifikasi */
            
            const person: readonly[string, string, number] = ["irawan","bandung",10_000_000];
            console.info(person);
            console.info(person[0]);
            console.info(person[2]);
            // person[1]= "Eko"; // error because readonly property

        });
    });