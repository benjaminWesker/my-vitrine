import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { Planete } from '../model/planete';

@Component({
  selector: 'app-box-planete',
  templateUrl: './box-planete.component.html',
  styleUrls: ['./box-planete.component.scss']
})
export class BoxPlaneteComponent implements OnInit {
  @Input()
  planete!: Planete;

  constructor() {  }

  ngOnInit(): void {
    this.setColor();
  }

  setColor(){
    document.documentElement.style.setProperty('--planete-color',this.planete.planeteBackgroundColor);
  }

}
