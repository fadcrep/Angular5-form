import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero'

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent implements OnInit {

  hero=new Hero(1,"","");
  submitted=false;

  constructor() { }

  ngOnInit() {
  }



  onSubmit(){

    this.submitted=true;
    this.hero=new Hero(1,this.hero.nom,this.hero.prenom);
  }

}
