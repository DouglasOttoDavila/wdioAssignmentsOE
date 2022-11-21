import * as World from "../page/World";

describe("WebdriverIO Assignment #2", () => {
  it("User access the WorldOmeter page.", async () => {
    await browser.url(`https://www.worldometers.info/world-population/`);
    await browser.maximizeWindow();
  });

  it("User keeps getting the count of specific metrics.", async () => {
    await World.getCurrentData(20);
  });
});
