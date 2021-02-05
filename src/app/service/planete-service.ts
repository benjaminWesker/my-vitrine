import { Planete } from "../model/planete";

export class PlaneteService{

  mars : Planete
    ={
      planeteSize: '200px',
      planeteBackgroundColor: 'blue',
      planeteBorderColor: 'rgba(240, 240, 199, 0.925)',
      planeteShadowColor:  'rgba(88, 1, 1, 0.288)',
      planeteLightColor:  'yellow',
      planeteMargin: '25% 50% 25% 50%'
    };

  constructor(){

  }

  getMars(){
    return this.mars;
  }
}
