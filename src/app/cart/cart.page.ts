import { Component, OnInit } from '@angular/core';
import { Article } from '../_models/article';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  newItem: string; //lier à l'input

  items: Article[]; // lier à la liste

  constructor() { }

  ngOnInit() {
    this.items = []; //initialiser la liste au depart qu'elle soit nulle
  }

  add(){
    if(this.newItem){ //si j'ai un element alors j'ajoute et si rien n'ajoute pas de ligne
    this.items.push({name: this.newItem, isChecked: false}); //je pousse mon nouvel item dans ma liste d'items
    this.newItem= null; // je réinititalise ma liste vide
    }
  }
}
