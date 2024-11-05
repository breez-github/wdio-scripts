import Filter  from "../pageobjects/filter.js"
import mainPage from "../pageobjects/mainPage.js"
import filtersVal from "../testData/filtersVal.json"

let filters = new Filter
let main = new mainPage


describe('My Login application', () => {


    before(async function(){
        await browser.url('https://www.douglas.de/de')
    })
    
    it('Alert Handling', async () => {
        
        await main.alertButton.waitForDisplayed()

        await main.alertButton.click()

    })

    it('Click on Perfum',async ()=>{  
 
        await main.Option.waitForDisplayed()

        await main.Option.click()
        
    })

    filtersVal.forEach(({filterName,selectedValues}) => {
    it(`List product based on Filters for ${filterName}`, async ()=>{  

        await filters.selectFlow(filterName,selectedValues)
    
        let result = await main.validateResult(selectedValues)

         expect(result).toBe(true)
 
    })

    })

    

})


