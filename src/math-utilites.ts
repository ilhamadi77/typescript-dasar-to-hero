export namespace MathUtil{
    export const PI: number = 3.14

    export function sum(...val: number[] ): number {
        let total: number = 0;
        for (let value of val){
            total += value;
        }
        return total
    }
}
