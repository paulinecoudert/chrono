
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-gender',
  templateUrl: './gender.page.html',
  styleUrls: ['./gender.page.scss'],
})
export class GenderPage implements OnInit {

  firstName: string;

  result: any;

  constructor(
  private http: HttpClient
  )
  { }

  ngOnInit() {
  }

  search(){
      this.http.get('https://api.genderize.io?name=' + this.firstName)
      .subscribe(data => {
        this.result = data;
        console.log(data);
    });
  }
}
