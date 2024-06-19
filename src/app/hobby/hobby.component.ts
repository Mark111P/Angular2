import { Component } from '@angular/core';

@Component({
  selector: 'app-hobby',
  standalone: true,
  imports: [],
  templateUrl: './hobby.component.html',
  styleUrl: './hobby.component.css'
})
export class HobbyComponent 
{
  name = 'Hobby1';
  desc = 'This is Hobby1';
  img1 = 'img1.jpg';
  img2 = 'img2.jpg';
}
