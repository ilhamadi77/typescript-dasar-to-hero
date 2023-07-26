import {MathUtil} from "../src/math-utilites"
describe("NameSpace", function(){
    it("Should support in Typescript", function(){
        expect(MathUtil.PI).toBe(3.14);
        expect(MathUtil.sum(1,2,3)).toBe(6)


        
console.log(MathUtil.PI)
console.log(MathUtil.sum(1,2,3))
    })
})