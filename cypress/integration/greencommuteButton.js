import {RobotEyes,RobotHands,Dependencies} from '../GreenRobots/GreenCommute/GreenCommute'

context("Search text ",()=>{
    const robotEyes = new RobotEyes();
    const robotHands = new RobotHands();
    const dependencies = new Dependencies();


describe("Testing green commute",()=>{
    beforeEach(()=>{
        dependencies.accessUrl("http://bc15-green-commute.dev-apps.io/findJobs")

    })

    it("saving job using greencommute",()=>{

        robotHands.ClickOnTextWithClassAndIndex("data-testid","jobCard-placeholder",0)
        robotHands.clickDomclassChild("jss68","button")
        cy.get('[data-testid="commute-options"]').find('[data-testid="commuteRoutes-placeholder"]').find('[data-testid="car"]').click()
        robotEyes.hasLengthForDomWithClass("data-testid","cabOptions-placeholder","div",3)
        robotEyes.containsTextwithDomClass("data-testid","commute-options","Book now")
        cy.get('[data-testid="commute-options"]').find('[data-testid="commuteRoutes-placeholder"]').find('[data-testid="bus"]').click()
        robotEyes.containsTextwithDomClass("data-testid","commute-options","Catch a bus")
        cy.get(".jss89> .MuiButton-outlinedPrimary").click()
        dependencies.accessUrl("http://bc15-green-commute.dev-apps.io/savedJobs")
        robotEyes.containsTextwithDomClass("data-testid","jobCard-placeholder","User Interface DesignerZemoso")


        

    })

    it("removing job using greencommute ",()=>{
        dependencies.accessUrl("http://bc15-green-commute.dev-apps.io/savedJobs")
        cy.get('[data-testid="jobCard-placeholder"]').should('contain.text',"User Interface DesignerZemoso").click()
        robotHands.clickOnClasswithButtonTagandIndex(".MuiButton-containedPrimary",-1)
        robotHands.clickOnDomClass("MuiButton-outlinedPrimary")



    })






    })



})