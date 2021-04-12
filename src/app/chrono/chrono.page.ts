import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { TimeInterval } from 'rxjs';

@Component({
  selector: 'app-chrono',
  templateUrl: './chrono.page.html',
  styleUrls: ['./chrono.page.scss'],
})
export class ChronoPage implements OnInit {

time: number;

idInterval : any ; //definit n'importe quoi le any

times : number[]; //tableau pour enragistrer mes temps

  constructor(private alertCtrl: AlertController) {
    
   }

  ngOnInit() {
    this.time = 0; //initialisation du timer
    this.times = [];
  }

  stop(){
    this.alertCtrl.create({ // presentation d'une alert
      header: 'Confirmation',
      message: 'Etes vous sur de vouloir arrêter le chrono?',
      buttons: [{
        text:'Ok', 
        handler: () =>{ clearInterval(this.idInterval); //l'interval du temps calculé va s'arrêter avec la methode clear interval
        this.idInterval = null;
      }
    },'cancel']
    }).then(a => a.present());

  
  }

  start(){
        this.times = [];
      const start = Date.now(); //j'etablis le temps de depart

      this.idInterval= setInterval( () => {
        this.time = Date.now() - start // difference du temps de depart intitial et du noveau
      }, 1);
  }


  save(){
this.times.push(this.time); //je sauvegarde avec le push
  }
}
