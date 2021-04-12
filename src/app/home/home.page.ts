import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  firstName: string;

  chaine : string;

  nombre: number;

  date : Date;

  isAdmin : boolean;

  list: string [];

  constructor() { }

  ngOnInit() {
    this.firstName = "Pauline";
    this.chaine = "ma super chaine de caractere dans l'appli";
    this.nombre = 3.43223;
    this.date = new Date();
    this.isAdmin = false;
    this.list = ['Sel', 'poivre', 'piment'];
  }

  changeName() {
    this.firstName = 'Aurelien';

  }

}
