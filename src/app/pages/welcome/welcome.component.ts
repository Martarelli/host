import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  imports: [],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})

export class WelcomeComponent {

  name: string = '';
  isButtonEnabled = false;

  constructor(private router: Router) {}

  onInputChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.name = input.value;
    this.isButtonEnabled = this.name.length > 1;
  }

  onSubmit(): void {
    console.log('Submitted:', this.name);
    this.router.navigate(['/clients']);
  }

}
