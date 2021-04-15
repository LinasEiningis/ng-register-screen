import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SnackbarService } from './services/snackbar.service';

const MATERIAL_MODULES = [
    MatCardModule,
    MatInputModule,
    MatSnackBarModule,
    MatButtonModule
];
@NgModule({
    declarations: [],
    imports: [
        MATERIAL_MODULES
    ],
    exports: [
        MATERIAL_MODULES
    ],
    providers: [
        SnackbarService
    ],
})
export class CoreModule {}
