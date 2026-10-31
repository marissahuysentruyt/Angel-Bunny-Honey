import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { ButtonComponent } from '../button-yellow/button.component';


@Component({
    selector: 'app-hero-banner',
    templateUrl: './hero-banner.component.html',
    styleUrls: ['./hero-banner.component.scss'],
    imports: [HeaderComponent, ButtonComponent]
})
export class HeroBannerComponent {
}
