import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-detailnext',
  templateUrl: './detailnext.page.html',
  styleUrls: ['./detailnext.page.scss'],
})
export class DetailnextPage implements OnInit {

  asu: any;

  constructor(private route: ActivatedRoute, private router: Router) { 
    this.route.queryParams.subscribe(params => {
      if (params && params.special) {
        this.asu = JSON.parse(params.special);
      }
    })
  }

  ngOnInit() {
  }

}
