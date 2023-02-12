import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  expand: boolean = false
  expandNavBar(){
    if(this.expand == false){
      this.expand = true
    } else {
      this.expand = false
    }

  }
}
