import { Component, OnInit } from '@angular/core';
import { SpursService } from '../services/spurs.service';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  public teams = {};
  public epl_list = '';

  constructor(private spursService: SpursService) {}

  ngOnInit(): void {
    this.spursService.getAllTeams().subscribe(result => {
      this.teams = result;
    })
  }

}
