import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/hero';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.scss']
})

//The form layout and details are defined in the HeroFormComponent class.
export class HeroFormComponent implements OnInit {


  powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];
  planets = ['Mars', 'Venus', 'Mattia', 'Jupiter'];

  model = new Hero(18, 'Dr. IQ', this.powers[0], 'Chuck.27', this.planets[0], 'Cheese', 'Titanium');

  submitted = false;

  onSubmit() { this.submitted = true; }

  //create new Hero
  newHero() {
    this.model = new Hero(0, '', '','','','','');
  }


  constructor() { }

  ngOnInit(): void {
  }

}
