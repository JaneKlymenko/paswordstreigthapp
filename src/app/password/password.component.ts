import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-password',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section>
      <h2>You can check your password here</h2>
      <form>
        <input
          type="password"
          placeholder="Enter your password here"
          (input)="onPasswordInput($event)"
        />
      </form>

      <div class="strength-bars">
        <div [ngClass]="bar1Class"></div>
        <div [ngClass]="bar2Class"></div>
        <div [ngClass]="bar3Class"></div>
      </div>
    </section>
  `,
  styleUrl: './password.component.css',
})
export class PasswordComponent {
  bar1Class = 'bar';
  bar2Class = 'bar';
  bar3Class = 'bar';

  onPasswordInput(event: Event): void {
    const password = (event.target as HTMLInputElement).value;
    this.updateStrengthBars(password);
  }

  private updateStrengthBars(password: string): void {
    if (password.length === 0) {
      this.setBarsClass('bar gray');
    } else if (password.length < 8) {
      this.setBarsClass('bar red');
    } else {
      const hasLetters = /[a-zA-Z]/.test(password);
      const hasDigits = /\d/.test(password);
      const hasSymbols = /[^a-zA-Z\d]/.test(password);

      if (hasLetters && hasDigits && hasSymbols) {
        this.setBarsClass('bar green', 'bar green', 'bar green');
      } else if (
        (hasLetters && hasDigits) ||
        (hasLetters && hasSymbols) ||
        (hasDigits && hasSymbols)
      ) {
        this.setBarsClass('bar yellow', 'bar yellow', 'bar gray');
      } else {
        this.setBarsClass('bar red', 'bar gray', 'bar gray');
      }
    }
  }

  private setBarsClass(
    bar1: string,
    bar2: string = 'bar gray',
    bar3: string = 'bar gray'
  ): void {
    this.bar1Class = bar1;
    this.bar2Class = bar2;
    this.bar3Class = bar3;
  }
}
