import { Component, OnInit } from '@angular/core';
import {Hero}  from '../hero'

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent implements OnInit {


  powers = ['Really Smart', 'Super Flexible',
  'Super Hot', 'Weather Changer'];

model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');
submitted = false;

onSubmit() { 
  this.submitted = true;
  this.model= new Hero(1,this.model.name,this.model.power,this.model.alterEgo)
  console.log(JSON.stringify(this.model));

}

// TODO: Remove this when we're done
get diagnostic() { return JSON.stringify(this.model); }

  constructor() { }

  ngOnInit() {
  }



  newHero() {
    this.model = new Hero(42, '', '');
  }

}
