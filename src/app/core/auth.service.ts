import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private _isLogged = new BehaviorSubject<boolean>(!!localStorage.getItem('mockToken'));
  isLogged$ = this._isLogged.asObservable();

  constructor(private router: Router) { }

  login(username: string, password: string): boolean {
    // mock credentials
    if (username === 'parents' && password === 'love22') {
      localStorage.setItem('mockToken', '1');
      this._isLogged.next(true);
      return true;
    }
    return false;
  }

  logout(): void {
    localStorage.removeItem('mockToken');
    this._isLogged.next(false);
    this.router.navigate(['/']);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('mockToken');
  }
}
