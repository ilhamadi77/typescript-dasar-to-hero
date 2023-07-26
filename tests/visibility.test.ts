describe("Visibility", function(){

    it("Should support in typescript", function(){

        class Counter {
            private counter: number= 0;

            public inceremet(): void{
                this.counter++;
            }

            public getIncrement(): number {
                return this.counter;
            }
        }

        class CounterAlpha {
            protected counter: number = 0;

            public increment(): void {
                this.counter++;
            }

            public getCounter(): number {
               return this.counter;
            }

        }

        class DoubleCounter extends CounterAlpha {
            public increment(): void {
                this.counter += 2;
            }
        }

        // const conter= new Counter()
        // conter.inceremet
        // conter.getIncrement
        // console.info(conter)

    })
});