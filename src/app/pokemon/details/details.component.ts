import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

import { DetailsResult } from 'src/app/_models/details-result';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {

  details: DetailsResult;

  @Input() set url(value: string){
    
    //ici on va contacter l'api pour obtenir les détails du pokemon
    this.http.get<DetailsResult>(value)
      .subscribe(data => {
        this.details = data;
        this.data.splice(0); //je vide mon tableau afin de ne plus avoir le undefinied 
        this.data.push({
          label: data.name,
          data: [
            data.stats[1].base_stat,
            data.stats[2].base_stat,
            data.stats[0].base_stat,
            data.stats[3].base_stat,
            data.stats[4].base_stat,
            data.stats[5].base_stat
        
          ]
        })
      });
  }
  
  data: ChartDataSets[]= [];

labels: Label[] = ['Attaque', 'Point de vie', 'Defense Spéciale', 'Attaque Spéciale', 'Vitesse'];

  constructor(
    private modalCtrl: ModalController,
    private http: HttpClient
  ) { }

  ngOnInit() {}

  dismiss() {
    this.modalCtrl.dismiss();
  }

}
