import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { PasswordStrengthService } from '../services/password-strength.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-strength-bar',
  templateUrl: './strangth-bar.component.html',
  styleUrls: ['./strangth-bar.component.css'],
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
})
export class StrangthBarComponent {
  @Input() passwordControl!: FormControl;

  constructor(private passwordStrengthService: PasswordStrengthService) {}

  get bar1Class(): string {
    return this.getBarClass(1);
  }

  get bar2Class(): string {
    return this.getBarClass(2);
  }

  get bar3Class(): string {
    return this.getBarClass(3);
  }

  private getBarClass(barNumber: number): string {
    const password = this.passwordControl.value || '';
    const strength = this.passwordStrengthService.calculateStrength(password);

    if (password.length === 0) {
      return 'bar gray';
    } else if (password.length < 8) {
      return barNumber === 1 ? 'bar red' : 'bar gray';
    }

    switch (strength) {
      case 'strong':
        return 'bar green';
      case 'medium':
        return barNumber < 3 ? 'bar yellow' : 'bar gray';
      case 'weak':
        return barNumber === 1 ? 'bar red' : 'bar gray';
      default:
        return 'bar gray';
    }
  }
}
