import {Eyes , Hands , Dependencies, RobotEyes, RobotHands } from '../GreenRobots/GreenCommute/GreenCommute'


context("Search text ",()=>{
    const robotEyes = new RobotEyes();
    const robotHands = new RobotHands();
    const dependencies = new Dependencies();




describe("Testing Saved jobs ",()=>{
    beforeEach(()=>{
        dependencies.accessUrl("http://bc15-green-commute.dev-apps.io/savedJobs")
    })

    it("saving same job again ",()=>{
        dependencies.accessUrl("http://bc15-green-commute.dev-apps.io/findJobs")
        robotHands.ClickOnTextWithClassAndIndex('data-testid',"jobCard-placeholder",0)   
        robotHands.clickOnDomElement(".MuiButton-outlinedPrimary")
        dependencies.accessUrl("http://bc15-green-commute.dev-apps.io/findJobs")
        robotHands.ClickOnTextWithClassAndIndex('data-testid',"jobCard-placeholder",6)   
        robotHands.clickOnDomElement(".MuiButton-outlinedPrimary")
        dependencies.accessUrl("http://bc15-green-commute.dev-apps.io/findJobs")
        robotHands.ClickOnTextWithClassAndIndex('data-testid',"jobCard-placeholder",9)   
        robotHands.clickOnDomElement(".MuiButton-outlinedPrimary")
        dependencies.accessUrl("http://bc15-green-commute.dev-apps.io/findJobs")
        robotHands.ClickOnTextWithClassAndIndex('data-testid',"jobCard-placeholder",4)   
        robotHands.clickOnDomElement(".MuiButton-outlinedPrimary")
        dependencies.accessUrl("http://bc15-green-commute.dev-apps.io/findJobs")
       robotHands.ClickOnTextWithClassAndIndex('data-testid',"jobCard-placeholder",0)   
       robotHands.clickOnDomElement(".MuiButton-outlinedPrimary")
       dependencies.accessUrl("http://bc15-green-commute.dev-apps.io/savedJobs")
       dependencies.accessUrl("http://bc15-green-commute.dev-apps.io/findJobs")
       robotHands.ClickOnTextWithClassAndIndex('data-testid',"jobCard-placeholder",4)   
        robotHands.clickOnDomElement(".MuiButton-outlinedPrimary")
        robotHands.wait(3000)
        dependencies.accessUrl("http://bc15-green-commute.dev-apps.io/savedJobs")

    })
    it("removing the saved jobs ",()=>{
        robotHands.ClickOnTextWithClassAndIndex('data-testid',"jobCard-placeholder",0)   
        robotHands.clickOnDomElement(".MuiButton-outlinedPrimary")
        robotHands.ClickOnTextWithClassAndIndex('data-testid',"jobCard-placeholder",0)   
        robotHands.clickOnDomElement(".MuiButton-outlinedPrimary")
        robotHands.ClickOnTextWithClassAndIndex('data-testid',"jobCard-placeholder",0)   
        robotHands.clickOnDomElement(".MuiButton-outlinedPrimary")
        robotHands.ClickOnTextWithClassAndIndex('data-testid',"jobCard-placeholder",0)   
        robotHands.clickOnDomElement(".MuiButton-outlinedPrimary")
 
        robotHands.wait(3000)
        dependencies.accessUrl("http://bc15-green-commute.dev-apps.io/savedJobs")
    })

    it("saving  and removing a job ",()=>{
        dependencies.accessUrl("http://bc15-green-commute.dev-apps.io/findJobs")
        robotHands.typeTextonDom('placeholder','Search skills',"Soft{downarrow}{enter}")
        robotHands.typeTextonDom('placeholder','Location',"hyde{downarrow}{enter}")
        robotHands.clickOnClasswithButtonandIndex("MuiButton-containedPrimary",0)
        robotHands.ClickOnTextWithClassAndIndex('data-testid',"jobCard-placeholder",2)   
        robotHands.clickOnDomElement(".MuiButton-outlinedPrimary")
        dependencies.accessUrl("http://bc15-green-commute.dev-apps.io/savedJobs")
        robotHands.clickonDomusingLocator('data-testid','jobCard-placeholder')
        robotHands.clickOnDomElement(".MuiButton-outlinedPrimary")
        robotHands.wait(3000)


        
    })
})
})