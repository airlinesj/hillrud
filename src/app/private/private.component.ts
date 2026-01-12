import { Component } from '@angular/core';
import { AuthService } from '../core/auth.service';

@Component({
  selector: 'app-private',
  template: `<div class="card"><h2>Private Memories</h2><p style="color:var(--muted)">This area is protected by a mock login.</p><button mat-button (click)="auth.logout()">Logout</button></div>`,
})
export class PrivateComponent {
  constructor(public auth: AuthService) {}
}
