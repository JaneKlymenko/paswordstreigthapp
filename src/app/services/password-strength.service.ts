import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PasswordStrengthService {
  constructor() {}

  calculateStrength(password: string): string {
    // if (password.length === 0) {
    //   return 'empty';
    // } else if (password.length < 8) {
    //   return 'weak';
    // }

    const hasLetters = /[a-zA-Z]/.test(password);
    const hasDigits = /\d/.test(password);
    const hasSymbols = /[^a-zA-Z\d]/.test(password);

    if (hasLetters && hasDigits && hasSymbols) {
      return 'strong';
    } else if (
      (hasLetters && hasDigits) ||
      (hasLetters && hasSymbols) ||
      (hasDigits && hasSymbols)
    ) {
      return 'medium';
    } else {
      return 'weak';
    }
  }
}
