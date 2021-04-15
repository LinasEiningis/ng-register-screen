import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from '../core/core.module';
import { LoginFriendsComponent } from './friends/friends.component';

@NgModule({
    declarations: [
        RegisterComponent,
        LoginFriendsComponent
    ],
    imports: [
    CommonModule,
        FormsModule,
        ReactiveFormsModule,
        CoreModule,
        RouterModule.forChild([
            {
                path: '',
                component: RegisterComponent
            }
        ])
    ]
})
export class RegisterModule {}
