import { mount, asSvelteComponent } from "./support/svelte.js";
import CallbackComponent from "../src/CallbackComponent.svelte";

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
});