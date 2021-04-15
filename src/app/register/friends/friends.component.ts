import { Component } from '@angular/core';
import { FormArray, FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { RegisterFormService } from '../services/form.service';

@Component({
    selector: 'app-login-friends',
    templateUrl: './friends.component.html',
    styleUrls: [
        './friends.component.scss'
    ]
})
export class LoginFriendsComponent {

    friendList = new FormArray([]);

    constructor(private formService: RegisterFormService) {
        this.formService.loginForm.addControl('friends', this.friendList);
        this.addField();
    }

    getFormGroup(value: any): any {
        return value;
    }

    addField(): void {
        this.friendList.push(new FormGroup({
            name: new FormControl('', [
                Validators.required
            ]),
            email: new FormControl('', [
                Validators.required,
                Validators.email
            ])
        }));
    }

    formControlHasError(controlName: string, errorType: string, group: AbstractControl): boolean {
        const control = group.get(controlName);
        if (!control) {
          return true;
        }
        const errors = control.errors;
        return control.touched && (errors && errors[errorType]);
      }
}
