import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

// TODO: refactor to DI config value
const DEFAULT_DURATION = 3000;
const DEFAULT_ALERT_TEXT = 'x';

type SnackbarClasses = 'snbr-success' | 'snbr-alert';

interface SnackbarOptions {
    message: string;
    class: SnackbarClasses;
    alert?: string;
}

@Injectable({
    providedIn: 'root'
})
export class SnackbarService {
    constructor(private snackBar: MatSnackBar) {}

    showSuccess(message: string, alert?: string): void {
        this.showSnackbar({
            message,
            alert,
            class: 'snbr-success'
        });
    }

    showAlert(message: string, alert?: string): void {
        this.showSnackbar({
            message,
            alert,
            class: 'snbr-alert'
        });
    }

    private showSnackbar(options: SnackbarOptions): void {
        const alertText = options.alert || DEFAULT_ALERT_TEXT;
        this.snackBar.open(options.message, alertText, {
            duration: DEFAULT_DURATION,
            panelClass: options.class
        });
    }
}
