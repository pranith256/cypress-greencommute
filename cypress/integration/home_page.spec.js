import {Eyes , Hands , Dependencies, RobotEyes, RobotHands } from '../GreenRobots/GreenCommute/GreenCommute'

context("Search text ",()=>{
    const robotEyes = new RobotEyes();
    const robotHands = new RobotHands();
    const dependencies = new Dependencies();


describe("Testing green commute",()=>{
    beforeEach(()=>{
        dependencies.accessUrl("http://bc15-green-commute.dev-apps.io/")

    })
    it("Happy Path test ",()=>{
        robotHands.typeTextonClass('MuiInputBase-input',"Hyderaba{downarrow}{enter}")
        robotEyes.seesValueWithClass("MuiInputBase-input","Hyderabad, Telangana, India")
        robotHands.clickOnDomElement(".MuiButton-containedPrimary")
        robotHands.typeTextonClass('MuiInputBase-input',"Mum{downarrow}{enter}")
        robotEyes.seesValueWithClass("MuiInputBase-input","Mumbai, Maharashtra, India")
        robotHands.clickOnDomElement(".MuiButton-containedPrimary")
        robotHands.typeTextonDom('placeholder','Enter your skills','prod{downarrow}{enter}')
        robotHands.typeTextonDom('placeholder','Enter your skills','proj{downarrow}{enter}')
        robotHands.typeTextonDom('placeholder','Enter your skills','py{downarrow}{enter}')
        robotHands.clickOnDomElement(".MuiButton-containedPrimary")
        robotEyes.seesTextinUrl('findJobs')
        cy.get("[data-testid='location-placeholder']>h4").should("have.text","Hyderabad, Telangana, India")
        robotHands.wait(2000)



    })
    it("Skip Button test ",()=>{
        robotHands.clickOnDomElement(".MuiButton-outlinedPrimary")
        robotHands.clickOnDomElement(".MuiButton-outlinedPrimary")
        robotHands.clickOnDomElement(".MuiButton-containedPrimary")

        robotEyes.seesTextinUrl('findJobs')
        robotHands.wait(2000)



    })
    it("Skip job location test ",()=>{
        robotHands.typeTextonClass('MuiInputBase-input',"{downarrow}{downarrow}{downarrow}{downarrow}{enter}")
        robotHands.clickOnDomElement(".MuiButton-containedPrimary")
        robotHands.clickOnDomElement(".MuiButton-outlinedPrimary")
        robotHands.clickOnDomElement(".MuiButton-containedPrimary")
        robotEyes.seesTextinUrl('findJobs')
        robotHands.wait(2000)




    })
    it("my location Alert message Test ",()=>{
        robotHands.clickOnDomElement(".MuiButton-containedPrimary")
        cy.on('window:confirm',(mssg)=>{
            expect(mssg).to.be("please enter a location")
        })

    })
    it("job location Alert message Test ",()=>{
        robotHands.typeTextonClass('MuiInputBase-input',"Bang{downarrow}{enter}")
        robotHands.clickOnDomElement(".MuiButton-containedPrimary")
        robotHands.clickOnDomElement(".MuiButton-containedPrimary")
        cy.on('window:confirm',(mssg)=>{
            expect(mssg).to.be("please enter a location")
        })
        robotHands.clickOnDomElement(".MuiButton-outlinedPrimary")
        robotHands.typeTextonDom('placeholder','Enter your skills','java deve{downarrow}{enter} marketing')
        robotHands.clickOnDomElement(".MuiButton-containedPrimary")
        robotHands.wait(2000)


    })
    it("entering wrong locations ",()=>{
        robotHands.typeTextonClass('MuiInputBase-input',"champapet")
        robotHands.clickOnDomElement(".MuiButton-containedPrimary")
        cy.on('window:confirm',(mssg)=>{
            expect(mssg).to.be("please enter a location")
        })
        robotHands.clickOnDomElement(".MuiButton-outlinedPrimary")
        robotHands.typeTextonClass('MuiInputBase-input',"saidabad")
        robotHands.clickOnDomElement(".MuiButton-containedPrimary")
        cy.on('window:confirm',(mssg)=>{
            expect(mssg).to.be("please enter a location")
        })
        robotHands.clickOnDomElement(".MuiButton-outlinedPrimary")
        robotHands.clickOnDomElement(".MuiButton-containedPrimary")



    })
    
})


})