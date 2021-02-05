import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  menuMobileIsOpen = false;
  /* on évite les appuis trop rapide sur le bouton */
  freeBtnBurger = true;

  constructor() { }

  ngOnInit(): void {
    let div: HTMLElement | null | undefined;
    div = document.getElementById("burgerBtn");
    div?.classList.add('init');

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
        },400
        );
        /* lance l'animation du menu mobile*/
        this.launchAnimationMenuMobile();
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
    /* lance l'animation du menu mobile*/
    this.launchAnimationMenuMobile();

    let burgerBtn: HTMLElement | null | undefined;
    burgerBtn = document.getElementById("burgerBtn");

    if(burgerBtn){
      /* on clean toutes les classes de burgerBtn */
      const clr = ['close', 'closing','open', 'opening'];
      burgerBtn.classList.remove(...clr);
      /* puis on ajoute la classe clos pour afficher l'animation de fermeture du bouton burger */
      burgerBtn.classList.add('init');
    }

    /* lance l'animation du bouton burger*/
  //  this.launchAnimationBurgerBtn();
    /* on force le menu fermé */
    this.menuMobileIsOpen = false;

  }

  /**
   * En fonction de la classe de id="burgerBtn" lance l'animation
   *  de fermeture; ouverture du bouton burge
   */
  launchAnimationBurgerBtn(){

    let div: HTMLElement | null | undefined;
    div = document.getElementById("burgerBtn");

    if(div){
        if( div.classList.contains('open')){
              /*
                  ouverture du menu => animation croix
              */
          div.classList.remove('open');
          div.classList.add('closing');
          setTimeout( ()=>{
            if(div){
               div.classList.remove('closing');
              div.classList.add('close');
            }
          },300);

        }
        else if (div.classList.contains('close') ){
              /*
                  fermture du menu => animation bar
              */
          div.classList.remove('close');
          div.classList.add('opening');
          setTimeout( ()=>{
            if(div){
               div.classList.remove('opening');
              div.classList.add('open');
            }
          },300);



      }
      else if(div.classList.contains('init')){
        /*
            ouverture du menu => animation bar
        */
        div.classList.remove('init');
        div.classList.add('closing');
        setTimeout( ()=>{
          if(div){
             div.classList.remove('closing');
            div.classList.add('close');
          }
        },300);
      }
      else{
        div.classList.add('init');
      }

    }

  }
  /**
   * En fonction de la classe de id="burgerBtn" lance l'animation
   *  de fermeture; ouverture du menu déroulant pour mobile
   */
  launchAnimationMenuMobile(){
    let div: HTMLElement | null | undefined;
    div = document.getElementById("menuMobileToDisplay");

    if(div)
    {
        if (!this.menuMobileIsOpen){
          div.classList.add('show');
          div.classList.remove('hide');
          div.style.display = "block";
        }
        else{
          div.classList.add('hide');
          div.classList.remove('show');
          /*=== decommenter si on veut une animation lors de la fermeture ===*/
          //setTimeout( ()=>{
          //if(div){
                div.style.display = "none";
          //}
          //},300);
        }
    }
  }
  /**
  *   inverse l'etat de menuMobileIsOpen
  */
  toggleMenuMobileIsOpen(){
      this.menuMobileIsOpen = !this.menuMobileIsOpen;
  }

}
