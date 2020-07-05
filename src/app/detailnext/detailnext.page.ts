import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import Swal from 'sweetalert2';


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
      if (this.router.getCurrentNavigation().extras.state){
        this.asu = this.router.getCurrentNavigation().extras.state.special
      }
    })
  }

  ngOnInit() {
  }

  async save() {
    let data    = JSON.parse(localStorage.getItem('fav')) || [],
        isExist = data.findIndex((obj) => {
          // Disini semua value akan di kompare untuk di validasi berdasarkan "keunikannya"
          return obj.date == this.asu.date && obj.time == this.asu.time && obj.round == this.asu.round && obj.title == this.asu.title; 
        }) != -1;
  
    if (isExist) {
      Swal.fire({
        icon: 'error',
        title: 'Gagal!',
        text: 'Match yang difavorit tidak boleh sama!',
        confirmButtonColor: '#d33',
      })
    } else {
      Swal.fire(
        {
          title: 'Sukses!',
          text: 'Match berhasil difavoritkan!',
          icon: 'success',
          confirmButtonColor: '#28a745',
        }
      )
      data.push(this.asu);
      localStorage.setItem('fav', JSON.stringify(data));
    }


  }

}
