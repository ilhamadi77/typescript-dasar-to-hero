    describe("tipe data", function(){
        it("should must declare", function (){

            let name: string = "Ilham Adi Irawan";
            let salary: number = 35_000_000;
            let isVip: boolean = true;

            console.info(name);
            console.info(salary);
            console.info(isVip);

            /* jika si program ini menggunakan babel untuk melakukan test maka akan bisa di jalankan walaupun tipe data 
            yang diubah itu berbeda karena sipat dari babel jest itu menghapus tipe data yang ada di typescript yang kemudian 
            diubah menjadi javascript */
           // name = 1000; // di npm test menggunakan jest succes
           // salary = "ini bisa dikompilisasi dengan babel"; // di npm test menggunakan jest succes
           // isVip = 21; // di npm test menggunakan jest succes

            /* jika dikompilasi menggunakan npx tsc maka akan terjadi error */

            /* solusinya sebelum di test menggunakan babel jest harus di kompilasi dulu dengan tsc , menggunkan kode tsc --watch 
            membantu untuk mengecek terus atau diperhatikan oleh tsc ketika ada kode atau tipe data yang berbeda */

        });
    });