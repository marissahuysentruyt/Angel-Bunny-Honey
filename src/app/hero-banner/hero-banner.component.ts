import { Component, ChangeDetectionStrategy } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { ButtonComponent } from '../button-yellow/button.component';


@Component({
    selector: 'app-hero-banner',
    templateUrl: './hero-banner.component.html',
    styleUrls: ['./hero-banner.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [HeaderComponent, ButtonComponent]
})
export class HeroBannerComponent {
}
