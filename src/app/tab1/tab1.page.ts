import { Component, OnInit } from '@angular/core';
import { SpursService } from '../services/spurs.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  public teams = {};
  public teamname = '';
  public last = {};

  constructor(private spursService: SpursService) {}

  ngOnInit(): void {
    this.spursService.getDetail().subscribe(result => {
      this.teams = result;
      this.teamname = result['teams']['strTeam'];
    })

    this.spursService.getLastMatch().subscribe(result => {
      this.last = result;
    })
  }

}
