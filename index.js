const puppeteer = require('puppeteer')

const data = require('./config.json') 

let noOfPosts = process.argv[2]

(async () => {
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  await page.goto('https://www.instagram.com/' , {waitUntil: 'networkidle2'})

   await page.type("input[name='username']" , data.user, {delay: 100}),
   await page.type("input[name='password']" , data.pwd, {delay: 100}),

   await Promise.all({
       page.waitForNavigation({waitUntil: 'networkidle2'}),
       page.click("button[type='submit']"),
   })

   await page.type("input[placeholder='Search']", 'coding')
   await page.waitForSelector(".2M76.uyeeR.Ap253", {visible: true})

   await Promise.all({
    page.waitForNavigation({waitUntil: 'networkidle2'}),
    page.click(".2M76.uyeeR.Ap253"),
   })

   await page.waitForSelector("._9AhH0", {visible:btrue})
   await Promise.all({
    page.waitForNavigation({waitUntil: 'networkidle2'}),
    page.click("._9AhH0"),
   })

   let i = 0

   do {
    await page.waitForSelector(".wp06b.QBdPU", {visible: true})
    await Promise.all({
     page.waitForNavigation({waitUntil: 'networkidle2'}),
     page.click(".wp06b.QBdPU"),

     await Promise.all({
        page.waitForNavigation({waitUntil: 'networkidle2'}),
        page.click("._65Bje.coreSpriteRightPaginationArrow"),
       })
    })
   }
   while(i < noOfPosts) {
   }


})(); 