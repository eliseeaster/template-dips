import { mount, asSvelteComponent } from "./support/svelte.js";
import CallbackComponent from "../src/CallbackComponent.svelte";
import { tick } from "svelte";
import { price } from "../src/stores/price.js";

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