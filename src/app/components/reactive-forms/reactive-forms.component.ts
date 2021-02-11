import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl } from '@angular/forms'
import { Country } from 'src/app/models/country.model';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent {

  contactForm = new FormGroup({
    firstName: new FormControl(),
    lastName: new FormControl(),
    email: new FormControl(),
    gender: new FormControl(),
    isMarried: new FormControl(),
    country: new FormControl(),
    address: new FormGroup({
      city: new FormControl(),
      state: new FormControl(),
      pincode: new FormControl()
    })
  })

  countryList: Country[] = [
    new Country(1, 'India'),
    new Country(2, 'USA'),
    new Country(3, 'Japan')
  ];

  onSubmit(){
    console.log(this.contactForm.value)
  }

}
