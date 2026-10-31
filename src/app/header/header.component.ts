import { Component } from '@angular/core';

import { ButtonComponent } from '../button-yellow/button.component';

@Component({
    selector: 'app-header-nav',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    imports: [ButtonComponent]
})
export class HeaderComponent {
  isMenuOpen = false;
  
  toggleMobileMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
    console.log('mobile menu clicked', this.isMenuOpen)
  }
}
