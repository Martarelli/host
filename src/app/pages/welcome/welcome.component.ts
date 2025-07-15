import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../shared/user.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-welcome',
  imports: [FormsModule],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})

export class WelcomeComponent {

  name: string = '';
  isButtonEnabled = false;

  constructor(private userService: UserService, private router: Router) {}

  onInputChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.name = input.value;
    this.isButtonEnabled = this.name.length > 1;
  }

  onSubmit(): void {
    this.userService.setName(this.name);
    console.log('Submitted:', this.name);
    console.log('GetName Service:', this.userService.getName());
    this.router.navigate(['/clients']);
  }

}
