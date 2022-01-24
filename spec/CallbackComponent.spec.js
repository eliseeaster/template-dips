import { mount, asSvelteComponent } from "./support/svelte.js";
import CallbackComponent from "../src/CallbackComponent.svelte";
import { tick } from "svelte";
import { price, 
  fetch as fetchPrice, 
  rewire$fetch, 
  restore } from "../src/stores/price.js";

import PriceModule from "../src/stores/price.js";


// const fetchOkResponse = data =>
//   Promise.resolve({ ok: true, json: () => Promise.resolve(data) });

// describe(CallbackComponent.name, () => {
//   asSvelteComponent();

//   beforeEach(() => {
//     global.window = {};
//     global.window.fetch = () => ({});
//     const t = jest.spyOn(window, "fetch")
//       .mockReturnValue(fetchOkResponse({ price: 99.99 }));
//   });


//   it("makes a GET request to /price", () => {
//     mount(CallbackComponent);
//     expect(window.fetch).toHaveBeenCalledWith("/price", { method: "GET" });
//   });

//   it("sets the price when API returned", async () => {
//     mount(CallbackComponent);
//     await tick();
//     await tick();
//     expect(container.textContent).toContain("The price is: $99.99");
//   });


//   //Testing stores
//   it("displays the initial price", () => {
//     price.set(99.99);
//     mount(CallbackComponent);
//     expect(container.textContent).toContain("The price is: $99.99");
//   });

//   it("updates when the price changes", async () => {
//     mount(CallbackComponent);
//     price.set(123.45);
//     await tick();
//     expect(container.textContent).toContain("The price is: $123.45");
//   });
// });




describe(CallbackComponent.name, () => {
  asSvelteComponent();

  beforeEach(() => {


    
    //jest.mock("../src/stores/price.js", fetchPrice() => false);
    //fetchPrice = jest.fn().mockReturnValue(() => 42)
    //global.window = {};
    // priceModule.fetch = () => ({});
    // jest.spyOn(priceModule, "fetch").mockReturnValue( () => 42 );
    //priceModule.fetch = jest.fn().mockReturnValue({ someObjectProperty: 42 });
    //const t = jest.spyOn(fetchPrice)
    //CallbackComponent.hei = jest.fn();

    // global.window = {};
    // window.hei = () => ({});
    //let spy = jest.spyOn(CallbackComponent, "hei").mockReturnValue( () => 1)
    // const t = jest.spyOn(window, "hei")
    //rewire$fetch(CallbackComponent.hei)

    //rewire$fetch(jest.fn());
    // rewire$fetch(jasmine.createSpy());
    // rewire&fetch(jest.spyOn(window, "fetch"));
    // rewire$fetch(spy = jest.spyOn());
    // rewire$fetch(jest.fn(fetch)); 

    //let spy = jest.spyOn(PriceModule, "fetch");
  });


  afterEach(() => {
    restore();
  });

  it("displays the initial price", () => {
        price.set(99.99);
        mount(CallbackComponent);
        expect(container.textContent).toContain("The price is: $99.99");
  });

  it("updates when the price changes", async () => {
      mount(CallbackComponent);
      price.set(123.45);
      await tick();
      expect(container.textContent).toContain("The price is: $123.45");
  });
  // ... previous two tests ...

  it("fetches prices on mount", async () => {
    const spy = jest.spyOn(CallbackComponent.prototype, "hei");
    let m = mount(CallbackComponent);
    m.update();
    await tick();
    expect(spy).toHaveBeenCalled();
  });




  // it("calls on hei", () => {
  //   mount(CallbackComponent);
  //   hei();
  //   expect(window.hei).toHaveBeenCalled();
  // });
});