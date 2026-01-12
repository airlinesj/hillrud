import { Component } from '@angular/core';

@Component({
  selector: 'app-family',
  templateUrl: './family.component.html',
  styleUrls: ['./family.component.scss']
})
export class FamilyComponent {
  kids = [
    { name: 'Child One', note: 'Loves painting', img: 'assets/images/kid1.jpg' },
    { name: 'Child Two', note: 'Soccer champ', img: 'assets/images/kid2.jpg' },
    { name: 'Child Three', note: 'Storyteller', img: 'assets/images/kid3.jpg' }
  ];
}
