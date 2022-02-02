const puppeteer = require('puppeteer')

async function scrape() {
    const browser = await puppeteer.launch({})
    const page = await browser.newPage()

    await page.goto('https://editorial.rottentomatoes.com/guide/2021-best-movies/')
    for(i = 1; i < 6; i++){
     var element = await page.waitForSelector("#row-index-" + i + " > div.col-sm-18.col-full-xs.countdown-item-content > div.row.countdown-item-title-bar > div.col-sm-20.col-full-xs > div > div > h2 > a")
     var text = await page.evaluate(element => element.textContent, element)
     console.log(text)
    }
    browser.close()
}
scrape()