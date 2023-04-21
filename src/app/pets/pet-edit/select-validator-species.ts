import { AbstractControl, FormGroup } from '@angular/forms';

export function SelectValidatorSpecies(control: AbstractControl) {
  if (control?.value === 'null') {
    return { speciesInvalid: false };
  }
  return null;
}