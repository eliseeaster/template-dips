import { mount, asSvelteComponent } from "./support/svelte.js";
import CallbackComponent from "../src/CallbackComponent.svelte";
import * as CallbackComponent2 from "../src/CallbackComponent.svelte";
import {newMethod} from "../src/CallbackComponent.svelte";
import { tick } from "svelte";
import { price } from "../src/stores/price.js";
import {
  fetch as fetchPrice,
  rewire$fetch,
  restore
} from "../src/stores/price.js";

const fetchOkResponse = data =>
  Promise.resolve({ ok: true, json: () => Promise.resolve(data) });

describe(CallbackComponent.name, () => {
  asSvelteComponent();

  beforeEach(() => {
    global.window = {};
    global.window.fetch = () => ({});
    // const t = jest.spyOn(window, "fetch")
    //   .and.returnValue(fetchOkResponse({ price: 99.99 }));
    const t = jest.spyOn(window, "fetch")
      .mockReturnValue(fetchOkResponse({ price: 99.99 }));
  });

//   const mockDateNow = jest
//     .spyOn(global.Date, 'now')
//     .mockImplementation(() => new Date(NOW).getTime());

  it("makes a GET request to /price", () => {
    mount(CallbackComponent);
    expect(window.fetch).toHaveBeenCalledWith("/price", { method: "GET" });
  });

  it("sets the price when API returned", async () => {
    mount(CallbackComponent);
    await tick();
    await tick();
    expect(container.textContent).toContain("The price is: $99.99");
  });

  
  //Testing stores
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
});

describe(CallbackComponent.name, () => {
  asSvelteComponent();

  beforeEach(() => {
    rewire$fetch(jest.fn());
  });

  afterEach(() => {
    restore();
  });

  //... previous two tests ...

  it("test", () => {
    const stub = jest.fn();
    stub();
    expect(stub).toBeCalled();
  })

  // it("test2", () => {
  //   rewire$fetch(jest.spyOn(window, "fetch"));
  //   mount(CallbackComponent);
  //   expect(fetchPrice).toHaveBeenCalledTimes(0);
  // })

  it("test3", () => {
    //mount(CallbackComponent);
   // rewire$fetch(jest.spyOn(CallbackComponent, "newMethod"));
   const hei = jest.fn().mockImplementation(() => "hei2")
   const result = newMethod();
   expect(result).toBe("hei2")
    
    //expect(newMethod).toHaveBeenCalledTimes(0);
  })

    // test('spyOn .toBeCalled()', () => {
  //   const somethingSpy = jest.spyOn(myObj, 'doSomething');
  //   myObj.doSomething();
  //   expect(somethingSpy).toBeCalled();
  // });

    // it("fetches prices on mount", () => {
  //   mount(CallbackComponent);
  //   expect(fetchPrice).toHaveBeenCalled();
  // });

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

  // test('spyOn .toBeCalled()', () => {
  //   const somethingSpy = jest.spyOn(myObj, 'doSomething');
  //   myObj.doSomething();
  //   expect(somethingSpy).toBeCalled();
  // });



});