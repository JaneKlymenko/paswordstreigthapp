import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

import { PasswordInputComponent } from './password-input/password-input.component';
import { StrangthBarComponent } from './strangth-bar/strangth-bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PasswordInputComponent, StrangthBarComponent, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  passwordControl = new FormControl('');
}
