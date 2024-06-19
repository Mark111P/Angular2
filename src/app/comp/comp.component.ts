import { Component } from '@angular/core';

@Component({
  selector: 'app-comp',
  standalone: true,
  imports: [],
  templateUrl: './comp.component.html',
  styleUrl: './comp.component.css'
})
export class User
{
  name: string;
  numbers: Array<string>;
  email: string;
  city: string;
  exp: Exp;
  skills: Array<Skill>;
  photoUrl: string;
  birthDate: Date;

  constructor()
  {
    this.name = 'Name1';
    this.numbers = ['123-123-123', '445-556-667', '880-990-110'];
    this.email = 'email@gmail.com';
    this.city = 'city1';
    this.exp = new Exp(['Exp1', 'Exp2']);
    this.skills = [new Skill('C#', '2 years'), new Skill('SQL', '1 year'), new Skill('JS', '3 months')];
    this.photoUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvRzSGyoPFkAK611PRdY8mApcrkJOHxX_rXw&s';
    this.birthDate = new Date(2000, 5, 10);
  }
}
class Skill
{
  name: string;
  desc: string;
  constructor(name: string, desc: string)
  {
    this.name = name;
    this.desc = desc;
  }
  show() : string
  {
    return this.name + ": " + this.desc;
  }
}
class Exp
{
  exps: Array<string>
  constructor(exps: Array<string>)
  {
    this.exps = exps;
  }
  show() : string
  {
    return this.exps.join('; ');
  }
}