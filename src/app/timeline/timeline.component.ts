import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent {
  @ViewChild('scroller', { static: false }) scroller!: ElementRef<HTMLDivElement>;
  selectedImage: string | null = null;
  selectedImageText: string = '';

  milestones = [
    { year: 2004, text: 'The first born : Tino(Dani)', img: 'assets/images/tino.jpeg' },
    { year: 2010, text: 'The Second born : RooneyTamaz(Birdie)', img: 'assets/images/runya.jpeg' },
    { year: 2015, text: 'The last born: Chiko Trinity(Daddy\'s princess)', img: 'assets/images/chiko.jpeg' },
    { year: 2025, text: '22 years and counting', img: 'assets/images/couple.jpeg' }
  ];

  next() {
    if (!this.scroller) return;
    const el = this.scroller.nativeElement;
    const scrollAmount = Math.round(el.clientWidth * 0.8);
    el.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  }

  prev() {
    if (!this.scroller) return;
    const el = this.scroller.nativeElement;
    const scrollAmount = Math.round(el.clientWidth * 0.8);
    el.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  }

  onKey(event: KeyboardEvent) {
    if (event.key === 'ArrowRight') this.next();
    if (event.key === 'ArrowLeft') this.prev();
  }

  openImageModal(imageSrc: string, imageText: string) {
    this.selectedImage = imageSrc;
    this.selectedImageText = imageText;
  }

  closeImageModal() {
    this.selectedImage = null;
    this.selectedImageText = '';
  }
}
