import { Component } from '@angular/core';
import { SnackbarService } from '../core/services/snackbar.service';
import { RegisterFormService } from './services/form.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [
    RegisterFormService
  ]
})
export class RegisterComponent {

  constructor(
    private snackbarService: SnackbarService,
    public formService: RegisterFormService
  ) { }

  get loginForm(): FormGroup {
    return this.formService.loginForm;
  }

  get passwordGroup(): FormGroup {
    return this.formService.loginForm.get('passwords') as FormGroup;
  }

  formControlHasError(controlName: string, errorType: string): boolean {
    const control = this.loginForm.get(controlName);
    if (!control) {
      return true;
    }
    const errors = control.errors;
    return control.touched && (errors && errors[errorType]);
  }

  onSubmit(): void {
    console.log('Your data:');
    console.log(this.loginForm.getRawValue());
    this.snackbarService.showSuccess('All good');
  }

}
