import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ButtonComponent } from '../button-yellow/button.component';

@Component({
    selector: 'app-videos',
    templateUrl: './videos.component.html',
    styleUrls: ['./videos.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [ButtonComponent]
})
export class VideosComponent {

}
