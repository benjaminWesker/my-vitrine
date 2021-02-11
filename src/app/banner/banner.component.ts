import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  menuMobileIsOpen = false;
  btnMenuMobileState = "";

  constructor() {}

  ngOnInit(): void {

  }

  onToggleMenuBurgerBtn(){

    /* on change l'etat du menu à chaque clic */
    this.menuMobileIsOpen = !this.menuMobileIsOpen;

    if(this.menuMobileIsOpen){
      this.btnMenuMobileState = "close";
    }
    else {
        this.btnMenuMobileState = "opening";
        this.btnMenuMobileState = "open";
    }

  }

  /* close the menu on mobile when <a> is visited    */
  onToggleLink(){
    this.menuMobileIsOpen = true;
    this.btnMenuMobileState = "";
    this.menuMobileIsOpen = false;
  }

}
