import { Component } from '@angular/core';

@Component({
  selector: 'app-header-nav',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isMenuOpen = false;
  
  toggleMobileMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
    console.log('mobile menu clicked', this.isMenuOpen)
  }
}
