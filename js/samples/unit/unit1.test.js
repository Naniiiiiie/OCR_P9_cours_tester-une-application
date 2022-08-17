import { sayHello } from "./unit1";

describe('SayHello Unit Test Suites', () => {
    it('Should be return "Hello, World"', () => {
        expect(sayHello()).toBe("Hello, World")
    })

    it('Should reutrn "Hello, Thomas"', () => {
        expect(sayHello("Thomas")).toBe("Hello, Thomas")
    })
})