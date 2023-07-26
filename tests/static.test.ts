describe("Static", function(){
    it("Should Support in typescript", function(){

        class Member {
            static NAME: string = "I Adi Irawan";
            static JOBTITLE: string = "Fullstack Dev";
            static AGE: number = 26;
            static ISLIFE: boolean = true;
        }

        console.log(Member.NAME)
        console.log(Member.JOBTITLE)
        console.log(Member.AGE)
        console.log(Member.ISLIFE)
    })

    it("Should support static method", function(){
        class MathUtils{
            static sum(...values: number[]): number {
                let total: number = 0;
                    for(let value of values){
                        total += value
                    }
                    return total;
            }
        }

        console.log(MathUtils.sum(1,2,3,4,5))
    })
});