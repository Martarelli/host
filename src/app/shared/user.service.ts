import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly storageKey = 'userName';
  private nameSubject = new BehaviorSubject<string | null>(null);
  name$ = this.nameSubject.asObservable();

  constructor() {
    const savedName = localStorage.getItem(this.storageKey);
    if (savedName) {
      this.nameSubject.next(savedName);
    }
   }

  setName(name: string) {
    this.nameSubject.next(name);
    localStorage.setItem(this.storageKey, name);
    console.log('Name set to:', name);
  }

  getName(): string | null {
    return this.nameSubject.value;
  }
}
