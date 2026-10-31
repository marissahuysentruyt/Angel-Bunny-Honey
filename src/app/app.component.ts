import { Component, ChangeDetectionStrategy } from '@angular/core';
import { HeroBannerComponent } from './hero-banner/hero-banner.component';
import { AboutComponent } from './about/about.component';
import { VideosComponent } from './videos/videos.component';
import { HoneyFormComponent } from './honey-form/honey-form.component';
import { FooterComponent } from './footer/footer.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [HeroBannerComponent, AboutComponent, VideosComponent, HoneyFormComponent, FooterComponent]
})
export class AppComponent {
  title = 'angel-bunny-honey';
}
