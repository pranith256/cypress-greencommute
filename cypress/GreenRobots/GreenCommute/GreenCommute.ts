import { BaseHands, BaseEyes, BaseDependencies } from '../BaseGreenCommute'




export class RobotEyes extends BaseEyes{

    seesValuewithClass(){
        this.seesValueWithClass("MuiInputBase-input","Hyderabad, Telangana, India")

    }
    
   
}

export class RobotHands extends BaseHands{

    typeTextOnClass(){
        this.typeTextonClass('MuiInputBase-input',"Hyderaba{downarrow}{enter}");

    }

    
    
}

export class Dependencies extends BaseDependencies {
     
    visitGreencommute(){
        this.accessUrl("http://bc15-green-commute.dev-apps.io/")
    }
    
    
 }