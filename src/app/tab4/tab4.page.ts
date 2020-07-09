import { Component, OnInit } from '@angular/core';
import { SpursService } from '../services/spurs.service';
import { NavigationExtras, Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  public teams = {};
  public epl_list = '';
  public teamdetails = {};

  constructor(private spursService: SpursService, private router: Router, public loadingController: LoadingController) {}


  async ngOnInit(): Promise<void> {
    const loading = await this.loadingController.create({
      message: 'Please wait...',
      duration: 3000,
      backdropDismiss: true
    });

    await loading.present(); {
      this.spursService.getAllTeams().subscribe(result => {
        this.teams = result;
        this.teamdetails = result['teams'];
      })
    }
    await loading.onDidDismiss();
}

  eplel(epl:string): void {
    let list = {
      name: epl['strTeam'],
      formed: epl['intFormedYear'],
      badge: epl['strTeamBadge'],
      league: epl['strLeague'],
      kit: epl['strTeamJersey'],
      stadiumname: epl['strStadium'],
      stadiumimg: epl['strStadiumThumb'],
      stadiumdesc: epl['strStadiumDescription'],
      stadiummap: epl ['strStadiumLocation'],
      desc: epl['strDescriptionEN'],
    }

    let extras: NavigationExtras = {
      state: {
        special: list
      }
    };
    this.router.navigate(['/epldetails'], extras);
  
  }

  banner(epl:string): void {
    let list = {
      name: epl['strTeam'],
      pic1: epl['strTeamFanart1'],
      pic2: epl['strTeamFanart2'],
      pic3: epl['strTeamFanart3'],
      pic4: epl['strTeamFanart4'],
    }

    let extras: NavigationExtras = {
      state: {
        special: list
      }
    };
    this.router.navigate(['/banner'], extras);
  
  }


}
