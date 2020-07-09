import { Component, OnInit } from '@angular/core';
import { SpursService } from '../services/spurs.service';
import { LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-table',
  templateUrl: './table.page.html',
  styleUrls: ['./table.page.scss'],
})
export class TablePage implements OnInit {

  public table = {};

  constructor(private spursService: SpursService, public loadingController: LoadingController) { }

  async ngOnInit(): Promise<void> {
    const loading = await this.loadingController.create({
      message: 'Fetching data...',
      duration: 5000,
      backdropDismiss: true
    });

    await loading.present(); {
      this.spursService.getTable().subscribe(result => {
        this.table = result;
      })
    }
    
    await loading.onDidDismiss();
}

}
