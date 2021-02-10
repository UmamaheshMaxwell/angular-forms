import { Component } from '@angular/core';
import { Country } from './models/country.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-forms';
  email =''

  countryList: Country[] = [
    new Country(1, 'India'),
    new Country(2, 'USA'),
    new Country(3, 'Japan')
  ];

  onSubmit(user:any){
    console.log(user.value)
  }

}
