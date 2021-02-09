import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  menuMobileIsOpen = false;
  /* on évite les appuis trop rapide sur le bouton */
  freeBtnBurger = true;

  btnMenuMobileState = "";

  constructor() {}

  ngOnInit(): void {

  }

  /**
   * A l'aapui du bouton menu burger en fonction de son état =>
   *    show le menu déroulant, ou hide le menu déroulant
   */
  onToggleMenuBurgerBtn(){

      if(this.freeBtnBurger){
        this.freeBtnBurger = false;
        /* on évite les appuis trop rapide sur le bouton */
        window.setTimeout( () => {
          this.freeBtnBurger = true;
        },400);
        /* on change l'etat du menu à chaque clic */
        this.toggleMenuMobileIsOpen();
        /* lance l'animation du bouton burger*/
        this.launchAnimationBurgerBtn();
      }


  }

  /* close the menu on mobile when <a> is visited    */
  onToggleLink(){
    /* on force le menu ouvert */
    this.menuMobileIsOpen = true;

    this.btnMenuMobileState = "";
    this.menuMobileIsOpen = false;

  }

  /**
   * En fonction de la classe de id="burgerBtn" lance l'animation
   *  de fermeture; ouverture du bouton burge
   */
  launchAnimationBurgerBtn(){


      if(this.menuMobileIsOpen){
           /*
               ouverture du menu => animation croix
           */
      this.btnMenuMobileState = "closing";
       setTimeout( ()=>{
           this.btnMenuMobileState = "close";
       },300);

     }
     else {
           /*
               fermture du menu => animation bar
           */
       this.btnMenuMobileState = "opening";
       setTimeout( ()=>{
           this.btnMenuMobileState = "open";
       },300);

   }

  }

  /**
  *   inverse l'etat de menuMobileIsOpen
  */
  toggleMenuMobileIsOpen(){
      this.menuMobileIsOpen = !this.menuMobileIsOpen;
  }

}
