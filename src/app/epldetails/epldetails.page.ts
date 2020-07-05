import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-epldetails',
  templateUrl: './epldetails.page.html',
  styleUrls: ['./epldetails.page.scss'],
})
export class EpldetailsPage implements OnInit {

  list: any;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe(params => {
      if (params && params.special) {
        this.list = JSON.parse(params.special);
      }
      if (this.router.getCurrentNavigation().extras.state){
        this.list = this.router.getCurrentNavigation().extras.state.special
      }
    })
  }

  ngOnInit() {}

  trimString(string, length) {
    return string.length > length
      ? string.substring(0, length) + "..."
      : string;
  }
  
}
