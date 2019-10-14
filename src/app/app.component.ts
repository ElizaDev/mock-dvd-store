import { Component, Inject } from '@angular/core';
import { MatIconRegistry} from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Router } from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'DVD Store';

  constructor(
    public dialog: MatDialog, 
    iconRegistry: MatIconRegistry, 
    sanitizer: DomSanitizer,
    private router: Router
    ) {
    iconRegistry.addSvgIcon(
      'shopping-cart',
      sanitizer.bypassSecurityTrustResourceUrl('../assets/icons/shopping_cart-24px.svg'));
  }

  goHome(): void {
    this.router.navigate(['/products']);
  }


  openDialog():void {
    const dialogRef = this.dialog.open(ShoppingCartDisplayDialog, {
      width: '250px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}

@Component({
  selector: 'shopping-cart-display-dialog',
  templateUrl: 'shopping-cart-display-dialog.html',
})
export class ShoppingCartDisplayDialog {

  constructor(
    public dialogRef: MatDialogRef<ShoppingCartDisplayDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
