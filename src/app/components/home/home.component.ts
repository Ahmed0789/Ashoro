import { QuoteComponent } from './forms/quote/quote.component';
import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatExpansionPanel } from '@angular/material/expansion';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  @ViewChild(MatExpansionPanel)
  expansionPanel!: MatExpansionPanel;
  expanded: boolean = false;
  constructor(private dialRef: MatDialog) {}

  openQuoteForm():void {
    const dialogRef = this.dialRef.open(QuoteComponent, {
      width: '65%',
      height: 'auto',
      data: null,
      closeOnNavigation: true,
    });
    dialogRef.afterClosed().subscribe(
      (res) => {
        if(res){
          if(res.event !== "cancel"){
            // this.searchButton();
          }
        }
       }
    );
  }

  getTouch(){
    if(this.expanded == false){
      this.expanded = true
    } else {
      this.expanded = false
    }
  }
}
