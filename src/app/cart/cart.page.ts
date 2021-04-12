import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { Article } from '../_models/article';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  newItem: string; //lier à l'input

  items: Article[]; // lier à la liste

  constructor(
    private actionSheetCtrl: ActionSheetController
  ) { }

  ngOnInit() {
    this.items = []; //initialiser la liste au depart qu'elle soit nulle
  }

  add(){
    if(this.newItem){ //si j'ai un element alors j'ajoute et si rien n'ajoute pas de ligne
    this.items.push({name: this.newItem, isChecked: false}); //je pousse mon nouvel item dans ma liste d'items
    this.newItem= null; // je réinititalise ma liste vide
    }
  }


  removeAll(){
   //si j'ai un element alors j'ajoute et si rien n'ajoute pas de ligne
     //je pousse mon nouvel item dans ma liste d'items
    //this.items= null;  je recrai une liste vide
    this.items.splice(0);  //methode qui vide la liste 
  }



    async openActionSheet(item: Article){ //methode qui prend en parametre l'element sur lequel je click l'article
      const as = await this.actionSheetCtrl.create({ //le as = await nouvelle syntaxte du .then
        header: '',
        buttons: [
          { text: item.isChecked ? 'Décocher' : 'Cocher', handler: () => 
          {item.isChecked= !item.isChecked;}}, //mettre l'inverse pour cocher décocher
          { text: 'Supprimer', handler: () =>{ //supression de l'article dans la liste
            const i = this.items.indexOf(item);
            this.items.splice(i, 1);
        }}
      ]
      });
       as.present();
       
  }
  
}
