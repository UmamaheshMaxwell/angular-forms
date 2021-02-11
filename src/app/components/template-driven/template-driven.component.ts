import { Component, OnInit } from '@angular/core';
import { Country } from 'src/app/models/country.model';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent  {

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
