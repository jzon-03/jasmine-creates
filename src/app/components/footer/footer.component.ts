import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.css',
    standalone: false
})
export class FooterComponent {
  year = new Date().getFullYear();

  constructor(
    private _snackbar: MatSnackBar
  ){
  }

  underConstruction(){
    this._snackbar.open("Under contruction. Check back later.", "Dimiss", {
      duration: 4000
    })
  }
}
