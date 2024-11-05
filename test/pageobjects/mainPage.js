export default class mainPage {

    get Option(){
        return $('//a[text()="PARFUM"]')
    }

    get alertButton(){
        return $('>>>#uc-center-container button[data-testid="uc-accept-all-button"]')
    }

    get filterInfo(){
        return $$('//div[button[contains(text(),"Alle Filter")]]/button')
    }

    async textOfInfo(){
        let resArr = await this.filterInfo
        let filterText = resArr.map(async (val)=> await val.getText())
        return filterText
    }

    async validateResult(selectedValues){
        var result = await this.textOfInfo()

        for(let val of selectedValues)
            {
            console.log("Input Values are : "+selectedValues)
            console.log("PresentValues are : "+result)
            if(!(result.includes(val))){
                return false
            }
        }
        return true
    }
        
    }