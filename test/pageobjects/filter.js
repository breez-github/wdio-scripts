export default class Filter {


async selectVal (value){

    let selValue = $(`//a/div/div[text()='${value}']`)
    await selValue.waitForDisplayed()
    await selValue.click()
    
}

get search(){
    return $('//input[@data-testid="typeAhead-input"]')
}

async selectFlow (dropDownName , values){

    let lists = [...values]
    console.log(lists)
    let dropDown = $(`//div[text()="${dropDownName}"]`)
    await this.search.moveTo()
    //await browser.pause()

    for(let val of lists){
        await dropDown.waitForDisplayed()
        await dropDown.scrollIntoView()
        await dropDown.moveTo()
        await dropDown.click()
        await this.selectVal(val)
       

    }

    this.search.waitForDisplayed()
    this.search.scrollIntoView()
    this.search.moveTo()
}

}