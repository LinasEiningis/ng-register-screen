import { Injectable } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators, AbstractControl, ValidatorFn } from '@angular/forms';

// Hardcoded for testing purposes
const REGISTERED_EMAILS = [
    'testas@testas.lt'
];

const emailExsistsValidator: ValidatorFn = (control: AbstractControl) => {
    const fieldValue = control.value;
    if (REGISTERED_EMAILS.includes(fieldValue)) {
        return {
            emailInDb: true
        };
    }
    return null;
};

const passwordConfirmValidator: ValidatorFn = (control: AbstractControl) => {
    if (control.get('password')?.value !== control.get('passwordConfirm')?.value) {
        return {
            mismatch: true
        };
    }
    return null;
};

@Injectable()
export class LoginFormService {
    loginForm = new FormGroup({
        name: new FormControl('', Validators.required),
        email: new FormControl('', [
            Validators.required,
            Validators.email,
            emailExsistsValidator
        ]),
        passwords: new FormGroup({
            password: new FormControl('', [
                Validators.required
            ]),
            passwordConfirm: new FormControl('', [
                Validators.required
            ])
        }, [
            passwordConfirmValidator
        ])
    });
}
