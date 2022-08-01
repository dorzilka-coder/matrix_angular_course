import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function regexValidator(pattern: RegExp): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const valid = pattern.test(control.value);
      return !valid ? {forbiddenName: {value: control.value}} : null;
    };
  }