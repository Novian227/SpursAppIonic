import { Component, OnInit } from '@angular/core';
import { SpursService } from '../services/spurs.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.page.html',
  styleUrls: ['./table.page.scss'],
})
export class TablePage implements OnInit {

  public table = {};

  constructor(private spursService: SpursService) { }

  ngOnInit(): void {
    this.spursService.getTable().subscribe(result => {
      this.table = result;
    })
  }

}
