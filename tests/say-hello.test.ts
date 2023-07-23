import { sayHello } from "../src/say-hello";

describe("Say Hello", function ():void{
    it("Should Say Hello Irawan", function(): void{
        expect(sayHello("Irawan")).toBe("Hello Irawan");
    });
});