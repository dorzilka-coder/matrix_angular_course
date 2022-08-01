import { AbstractControl, ValidationErrors, ValidatorFn,FormGroup } from "@angular/forms";

export function verifPasswordValidator(password: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      let isMatch = password === control.value;
      return !isMatch ? {forbiddenName: {value: control.value}} : null;
    };
  }

