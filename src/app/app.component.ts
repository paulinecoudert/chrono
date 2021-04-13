import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
   
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Chrono', url: '/chrono', icon: 'stopwatch' },
    { title: 'Shopping cart', url: '/cart', icon: 'cart' },
    { title: 'Gender', url: '/gender', icon: 'star' },
    { title: 'Pokemon', url: '/pokemon', icon: 'rocket' },

  ];

  constructor() {}
}
