export const suggestionField = `//input[@id="autocomplete"]`;
export const dropdownExample = `//select[@id="dropdown-class-example"]`;
export const openWindowBtn = `//button[@id="openwindow"]`;
export const openTab = `//a[@id="opentab"]`;
export const iframe = `//iframe[@id="courses-iframe"]`;

export async function selectRadioButtonAndPrint(radioNumber) {
  const radioButton = `//input[@value='radio${radioNumber}']`;
  $(radioButton).click();
  const radioBtnValue = await $(radioButton).getValue();
  console.log(`The radio button value is: ${radioBtnValue}`);
}

export async function enterTextOnBox(textInput) {
  await $(suggestionField).setValue(textInput);
}

export async function clickSuggestionAndPrint(expectedSuggestion) {
  const listItem = `//div[text()='${expectedSuggestion}']`;
  const output = await $(listItem).getText();
  await $(listItem).click();
  console.log(`The suggested result is: ${output}`);
}

export async function selectFromDropdownAndPrint(option) {
  await $(dropdownExample).click();
  const dropdownList = await $(dropdownExample).selectByAttribute(
    "value",
    `option${option}`
  );
  const dropdownValue = await $(dropdownExample).getValue();
  console.log(`The selected dropdown value is: ${dropdownValue}`);
}

export async function selectCheckboxAndPrint(option) {
  const checkbox = `//input[@value='option${option}']`;
  await $(checkbox).click();
  const checkboxValue = await $(checkbox).getValue();
  console.log(`The checkbox value is: ${checkboxValue}`);
}

export async function openNewWindowAndPrint() {
  let parentWindow = await browser.getWindowHandle();
  console.log(`Parent window handle is: ${parentWindow}`);
  await $(openWindowBtn).click();
  await browser.pause(3000);
  var handles = await browser.getWindowHandles();
  for (var i = 0; i < handles.length; i++) {
    if (handles[i] != parentWindow) {
      await browser.switchToWindow(handles[i]);
      console.log(`Current window handle is: ${handles[i]}`);
      const pageUrl = await browser.getUrl();
      const pageTitle = await browser.getTitle();
      console.log(
        `The page URL is ${pageUrl} and the page title is ${pageTitle}`
      );
      await browser.pause(3000);
      await browser.closeWindow();
      break;
    }
  }
  await browser.pause(1000);
  await browser.switchToWindow(parentWindow);
}

export async function openNewTabAndPrint() {
  let parentTab = await browser.getWindowHandle();
  console.log(`Parent tab handle is: ${parentTab}`);
  await $(openTab).click();
  await browser.pause(3000);
  var handles = await browser.getWindowHandles();
  for (var i = 0; i < handles.length; i++) {
    if (handles[i] != parentTab) {
      await browser.switchToWindow(handles[i]);
      console.log(`Current tab handle is: ${handles[i]}`);
      const pageUrl = await browser.getUrl();
      const pageTitle = await browser.getTitle();
      console.log(
        `The tab URL is ${pageUrl} and the tab title is ${pageTitle}`
      );
      await browser.pause(3000);
      await browser.closeWindow();
      break;
    }
  }
  await browser.pause(1000);
  await browser.switchToWindow(parentTab);
}

export async function switchToIframeAndPrint() {
  const iframe = await $("#courses-iframe");
  await iframe.scrollIntoView();
  await browser.switchToFrame(iframe);
  const email = await $(
    `//li[text() = " contact@rahulshettyacademy.com"]`
  ).getText();
  const registerBtn = await $(`//a[text() = "Register"]`).getText();
  const loginBtn = await $(`//a[text() = "Login"]`).getText();
  const iframeTitle = await browser.getTitle();
  console.log(
    `The iFrame title is: ${iframeTitle}.
        \nHeader elements:
        \n${email},
        \n${registerBtn},
        \n${loginBtn}`
  );
  await browser.switchToParentFrame();
}

export * from "./Home.js";
