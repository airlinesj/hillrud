import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {
  images = new Array(9).fill(0).map((_,i)=>`assets/images/gallery${i+1}.jpg`);
}
