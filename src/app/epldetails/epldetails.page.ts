import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SpursService } from '../services/spurs.service';

@Component({
  selector: 'app-epldetails',
  templateUrl: './epldetails.page.html',
  styleUrls: ['./epldetails.page.scss'],
})
export class EpldetailsPage implements OnInit {

  list: any;
  public last = {};

  constructor(private route: ActivatedRoute, private router: Router, private spursService: SpursService) {
    this.route.queryParams.subscribe(params => {
      if (params && params.special) {
        this.list = JSON.parse(params.special);
      }
      if (this.router.getCurrentNavigation().extras.state){
        this.list = this.router.getCurrentNavigation().extras.state.special
      }
    })
  }

  ngOnInit(): void {
    this.spursService.getLastMatch().subscribe(result => {
      this.last = result;
    })
  }

  trimString(string, length) {
    return string.length > length
      ? string.substring(0, length) + "..."
      : string;
  }
  
}
