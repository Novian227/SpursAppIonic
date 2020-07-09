import { Component, OnInit } from '@angular/core';
import { SpursService } from '../services/spurs.service';
import { NavigationExtras, Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{
  public nextmatchList;
  public last = {};
  constructor(private spursService: SpursService, private router: Router, public loadingController: LoadingController) {}

  // ngOnInit(): void {
  //   this.spursService.getNextMatch().subscribe(result => {
  //     this.nextmatchList = result['events'];
  //   });

  //   this.spursService.getDetail().subscribe(result => {
  //     this.last = result;
  //   })
  // }

  async ngOnInit(): Promise<void> {
    const loading = await this.loadingController.create({
      message: 'Please wait...',
      duration: 1000,
      backdropDismiss: true
    });

    await loading.present(); {
      this.spursService.getNextMatch().subscribe(result => {
        this.nextmatchList = result['events'];
      });

      this.spursService.getDetail().subscribe(result => {
        this.last = result;
      })

    }
    
    await loading.onDidDismiss();
}

  nextdetail(t:string): void{
    let asu = {
      title: t['strEvent'],
      league: t['strLeague'],
      season: t['strSeason'],
      type: t['strSport'],
      round: t['intRound'],
      time: t['strTime'],
      date: t['dateEvent'],
    };
  
    let extras: NavigationExtras = {
      state: {
        special: asu
      }
    };
    this.router.navigate(['/detailnext'], extras);
  
  }

  

}
