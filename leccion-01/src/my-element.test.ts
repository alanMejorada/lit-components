import { expect, fixture } from "@open-wc/testing";
import { Utils } from "./service/utils";
import { LitElement, css, html } from "lit";
import { MyTester } from "./my-tester.ts";

describe("My Primera prueba", () => {
  it("Mi primera prueba", () => {
    expect(true).equal(true);
  });

  it("Test functions sum", () => {
    const utils_service = new Utils();

    const result: number = utils_service.sum(10, 5);

    expect(result).equal(15);

    const result_2: number = utils_service.sum(10, 10);

    expect(result_2).equal(20);
  });

  it("Test functions with other type", () => {
    let other_type: any = "Hola";

    const utils_service = new Utils();

    const result = utils_service.sum(other_type, 20);

    expect(result).equal(0);

    const result_2 = utils_service.sum(20, other_type);

    expect(result_2).equal(0);
  });

  it("Test function - restar", () => {
    const utils_service = new Utils();

    const result = utils_service.resta(10, 20);

    expect(result).equal(10);
  });

  it("Test function should throw exception - restar ", () => {
    const utils_service = new Utils();
    expect(() => utils_service.resta(-10, 20)).to.throw();

    try {
      utils_service.resta(-20, 10);
    } catch (error: any) {
      expect(error.message).equal("Esto es una excepcion");
    }
  });

  it("can semantically compare full dom trees", async () => {
    let element: MyTester;
    element = await fixture(html`<my-tester></my-tester>`);
    expect(element).to.be.instanceOf(MyTester);
    expect(element).shadowDom.equal("<p>Hola, Mundo Testing!</p>");
  });

  it("testing fizzbuzz function",()=>{
    const utils_service = new Utils();
    const result:string[]= utils_service.fizzBuzz(5);
    expect(result).to.deep.equal([ '1', '2', 'Fizz', '4', 'Buzz' ]);
  });


  it("fizzbuzz should throw an Exception",async ()=>{
    const utils_service = new Utils();
    //expect(() => utils_service.fizzBuzz(-2)).to.throw();
    try {
      const res = utils_service.fizzBuzz(-2);
    } catch (error: any) {
      expect(error.message).equal("Introduce un valor positivo");
    }
  })
});