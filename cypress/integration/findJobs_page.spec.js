import {Eyes , Hands , Dependencies, RobotEyes, RobotHands } from '../GreenRobots/GreenCommute/GreenCommute'


context("Search text ",()=>{
    const robotEyes = new RobotEyes();
    const robotHands = new RobotHands();
    const dependencies = new Dependencies();
describe("Testing find jobs ",()=>{
    beforeEach(()=>{
        dependencies.accessUrl("http://bc15-green-commute.dev-apps.io/findJobs")
    })
    it("Happy path test ",()=>{

        robotHands.typeTextonDom('placeholder','Location','hyd{downarrow}{enter}')
        robotHands.clickonDomusingLocator("data-testid","filterButton")
        robotHands.checkDomClass('input[name="Yes"]')
        robotHands.checkDomClass('input[name="0-10 kms"]')
        robotHands.checkDomClass('input[name="10-20 kms"]')
        robotHands.clickOnClasswithButtonTagandIndex("button",-1)
        robotHands.typeTextonDom('placeholder','Search skills','ux{downarrow}{enter}')
        robotHands.clickOnClasswithButtonandIndex("MuiButton-containedPrimary",0)
        robotEyes.hasLengthForDomWithClass("class","MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-9 MuiGrid-item MuiGrid-justify-xs-center","div",4)

    })
   
    
    it("no location and skills ",()=>{

        robotHands.clickonDomusingLocator("data-testid","filterButton")
        robotHands.checkDomClass('input[name="Yes"]')
        robotHands.checkDomClass('input[name="0-10 kms"]')
        robotHands.checkDomClass('input[name="10-20 kms"]')

        robotHands.clickOnClasswithButtonTagandIndex("button",-1)


        robotEyes.hasLengthForDomWithClass("class","MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-9 MuiGrid-item MuiGrid-justify-xs-center","div",15)

    })
    it("no filtering",()=>{

        robotHands.typeTextonDom('placeholder','Location','mum{downarrow}{enter}')
        robotHands.typeTextonDom('placeholder','Search skills','{downarrow}{downarrow}{downarrow}{downarrow}{downarrow}{enter}')

        robotHands.clickOnClasswithButtonandIndex("MuiButton-containedPrimary",0)
        robotEyes.hasLengthForDomWithClass("class","MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-9 MuiGrid-item MuiGrid-justify-xs-center","div",3)

    })
    it("not entering skills ",()=>{

        robotHands.typeTextonDom('placeholder','Location','bang{downarrow}{enter}')
        robotHands.clickonDomusingLocator("data-testid","filterButton")

        robotHands.checkDomClass('input[name="Yes"]')
        robotHands.checkDomClass('input[name="0-10 kms"]')

        robotHands.clickOnClasswithButtonTagandIndex("button",-1)
        robotEyes.hasLengthForDomWithClass("class","MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-9 MuiGrid-item MuiGrid-justify-xs-center","div",3)

    })
    it("not entering location ",()=>{

        robotHands.typeTextonDom('placeholder','Search skills','soft{downarrow}{enter}')
        robotHands.clickonDomusingLocator("data-testid","filterButton")

        robotHands.checkDomClass('input[name="Yes"]')
        robotHands.checkDomClass('input[name="0-10 kms"]')

        robotHands.clickOnClasswithButtonTagandIndex("button",-1)

        robotEyes.hasLengthForDomWithClass("class","MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-9 MuiGrid-item MuiGrid-justify-xs-center","div",3)

    })
})
})