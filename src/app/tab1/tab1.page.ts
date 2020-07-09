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
  public player = {};

  constructor(private spursService: SpursService) {}

  ngOnInit(): void {
    this.spursService.getDetail().subscribe(result => {
      this.teams = result;
      this.teamname = result['teams']['strTeam'];
    })

    this.spursService.getLastMatch().subscribe(result => {
      this.last = result;
    })

    this.spursService.getPlayer().subscribe(result => {
      this.player = result;
    })
  }

  trimString(string, length) {
    return string.length > length
      ? string.substring(0, length) + "..."
      : string;
  }

}
