import * as Home from "../page/Home";

describe('WebdriverIO Assignment #1', () => {
    it('User access the Practice Page.', async () => {
        await browser.url(`https://rahulshettyacademy.com/AutomationPractice/`);
        await browser.maximizeWindow();
    });

    it('User selects any radio button and prints the value.', async () => {
        await Home.selectRadioButtonAndPrint(2);
    });

    it('User enters "ind" in the suggestion box and selects "India" value from dropdown and print the selected value.', async () => {
        await Home.enterTextOnBox('ind');
        await Home.clickSuggestionAndPrint('India');
    });

    it('User selects any option from dropdown list and print the value.', async () => {
        await Home.selectFromDropdownAndPrint(3);
    });

    it('User selects any checkbox and prints the value.', async () => {
        await Home.selectCheckboxAndPrint(1);
    });

    it('User clicks "Open Window" button and print some data.', async () => {
        await Home.openNewWindowAndPrint();
    });

    it('User clicks "Open Tab" button and print some data.', async () => {
        await Home.openNewTabAndPrint();
    });

    it('User switches to the iframe and print the page header.', async () => {
        await Home.switchToIframeAndPrint();
    });
});

