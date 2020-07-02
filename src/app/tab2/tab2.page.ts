import { Component, OnInit } from '@angular/core';
import { SpursService } from '../services/spurs.service';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{
  public nextmatchList;
  constructor(private spursService: SpursService, private router: Router) {}

  ngOnInit(): void {
    this.spursService.getNextMatch().subscribe(result => {
      this.nextmatchList = result['events'];
    });
  }

}
