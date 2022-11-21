export const pageTitle = `//h1`;
export const billions = `(//div[@class="maincounter-number"]/span/span)[2]`;
export const millions = `(//div[@class="maincounter-number"]/span/span)[4]`;
export const thousands = `(//div[@class="maincounter-number"]/span/span)[6]`;
export const hundreds = `(//div[@class="maincounter-number"]/span/span)[8]`;
export const birthsTodayTitle = `(//div[@class="sec-text"])[1]`;
export const bTodayThousands = `(//span[@rel="births_today"]/span)[2]`;
export const bTodayHundreds = `(//span[@rel="births_today"]/span)[4]`;
export const deathsTodayTitle = `(//div[@class="sec-text"])[2]`;
export const dTodayThousands = `(//span[@rel="dth1s_today"]/span)[2]`;
export const dTodayHundreds = `(//span[@rel="dth1s_today"]/span)[4]`;
export const growthTodayTitle = `(//div[@class="sec-text"])[3]`;
export const gTodayThousands = `(//span[@rel="absolute_growth"]/span)[2]`;
export const gTodayHundreds = `(//span[@rel="absolute_growth"]/span)[4]`;
export const birthsYearTitle = `(//div[@class="sec-text"])[4]`;
export const bYearMillions = `(//span[@rel="births_this_year"]/span)[2]`;
export const bYearThousands = `(//span[@rel="births_this_year"]/span)[4]`;
export const bYearHundreds = `(//span[@rel="births_this_year"]/span)[6]`;
export const deathsYearTitle = `(//div[@class="sec-text"])[5]`;
export const dYearMillions = `(//span[@rel="dth1s_this_year"]/span)[2]`;
export const dYearThousands = `(//span[@rel="dth1s_this_year"]/span)[4]`;
export const dYearHundreds = `(//span[@rel="dth1s_this_year"]/span)[6]`;
export const growthYearTitle = `(//div[@class="sec-text"])[6]`;
export const gYearMililons = `(//span[@rel="absolute_growth_year"]/span)[2]`;
export const gYearThousands = `(//span[@rel="absolute_growth_year"]/span)[4]`;
export const gYearHundreds = `(//span[@rel="absolute_growth_year"]/span)[6]`;

export async function getCurrentData(timeout) {
  const startTime = Date.now() / 1000;
  let endTime = Date.now() / 1000;
  let seconds = timeout;
  while (seconds <= timeout && seconds >= 0) {
    const counterTitle = await $(pageTitle).getText();
    let billion = await $(billions).getText();
    let million = await $(millions).getText();
    let thousand = await $(thousands).getText();
    let hundred = await $(hundreds).getText();
    const bTodayTitle = await $(birthsTodayTitle).getText();
    let bThousand = await $(bTodayThousands).getText();
    let bHundred = await $(bTodayHundreds).getText();
    const dTodayTitle = await $(deathsTodayTitle).getText();
    let dThousand = await $(dTodayThousands).getText();
    let dHundred = await $(dTodayHundreds).getText();
    const gTodayTitle = await $(growthTodayTitle).getText();
    let gThousand = await $(gTodayThousands).getText();
    let gHundred = await $(gTodayHundreds).getText();
    const bYearTitle = await $(birthsYearTitle).getText();
    let bYearMillion = await $(bYearMillions).getText();
    let bYearThousand = await $(bYearThousands).getText();
    let bYearHundred = await $(bYearHundreds).getText();
    const dYearTitle = await $(deathsYearTitle).getText();
    let dYearMillion = await $(dYearMillions).getText();
    let dYearThousand = await $(dYearThousands).getText();
    let dYearHundred = await $(dYearHundreds).getText();
    const gYearTitle = await $(growthYearTitle).getText();
    let gYearMillion = await $(gYearMililons).getText();
    let gYearThousand = await $(gYearThousands).getText();
    let gYearHundred = await $(gYearHundreds).getText();
    console.log(`
            \n| WORLD COUNTER
            \n| - ${counterTitle}: ${billion},${million},${thousand},${hundred}\n
            \n| TODAY
            \n| - ${bTodayTitle}: ${bThousand},${bHundred}
            \n| - ${dTodayTitle}: ${dThousand},${dHundred}
            \n| - ${gTodayTitle}: ${gThousand},${gHundred}\n
            \n| THIS YEAR
            \n| - ${bYearTitle}: ${bYearMillion},${bYearThousand},${bYearHundred}
            \n| - ${dYearTitle}: ${dYearMillion},${dYearThousand},${dYearHundred}
            \n| - ${gYearTitle}: ${gYearMillion},${gYearThousand},${gYearHundred}\n
        `);
    endTime = Date.now() / 1000;
    seconds = endTime - startTime;
  }
  console.log(`Total elapsed time: ${seconds} seconds.`);
}

export * from "./World.js";
