import { Component, OnInit } from '@angular/core';
import {PokeResult} from'../_models/poke-result';
import { HttpClient } from '@angular/common/http';
import { ModalController } from '@ionic/angular';
import { DetailsComponent } from './details/details.component';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.page.html',
  styleUrls: ['./pokemon.page.scss'],
})
export class PokemonPage implements OnInit {

  result: PokeResult ;



  constructor (   
    private http: HttpClient,
    private modalCtrl: ModalController

    ) { }

  ngOnInit() {
    // 1.get all Poke
    this.load('https://pokeapi.co/api/v2/pokemon');

  }

  previous(){
     // 2.bouton et liste previous()
    this.load(this.result.previous);

  }

  next(){
    // 2.bouton et liste next()
  this.load(this.result.next);
  }

  //Dans le .2 je declare une fonction que j'utilise dans les methodes next() previous() et ngOnInit() afin de ne pas 
  //repeter mon code.
  private load(url:string){
    this.http.get<PokeResult>(url)
    .subscribe(data => {
      this.result = data;
    });
  }

//affichage des details de la modale
  async affDetail(url: string){
  const modal = await this.modalCtrl.create({component: DetailsComponent, componentProps:{ //le componentProps permet de récupérer l'url propre du pokemon
  url: url
}
});
  modal.present();

}

  }


