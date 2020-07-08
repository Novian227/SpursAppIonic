import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.page.html',
  styleUrls: ['./banner.page.scss'],
})
export class BannerPage implements OnInit {

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

  ngOnInit() {
  }

}
