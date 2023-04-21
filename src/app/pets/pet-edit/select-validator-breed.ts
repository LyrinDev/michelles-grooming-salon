import { AbstractControl } from '@angular/forms';

export function SelectValidatorBreed(control: AbstractControl) {
  console.log('control: ' + control.value);
  if (control?.value === 'null') {
    return { breedInvalid: false };
  }
  return null;
}