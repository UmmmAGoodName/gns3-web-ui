import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Controller } from '@models/controller';

export interface OnboardingWizardData {
  controller: Controller;
}

@Component({
  selector: 'app-onboarding-wizard',
  templateUrl: './onboarding-wizard.component.html',
  styleUrls: ['./onboarding-wizard.component.scss'],
})
export class OnboardingWizardComponent {
  constructor(
    public dialogRef: MatDialogRef<OnboardingWizardComponent>,
    @Inject(MAT_DIALOG_DATA) public data: OnboardingWizardData,
    private router: Router
  ) {}

  get controllerId(): number {
    return this.data.controller.id;
  }

  navigateTo(path: string) {
    this.dialogRef.close();
    this.router.navigate(['/controller', this.controllerId, path]);
  }

  close() {
    this.dialogRef.close();
  }
}
