import { Component, OnInit } from '@angular/core';
import { Planete } from '../model/planete';
import { PlaneteService } from '../service/planete-service';

@Component({
  selector: 'app-space-travel',
  templateUrl: './space-travel.component.html',
  styleUrls: ['./space-travel.component.scss']
})
export class SpaceTravelComponent implements OnInit {

  constructor(private planeteService : PlaneteService) { }

  ngOnInit(): void {
  }

  getMars(){
    return this.planeteService.getMars();
  }

}
