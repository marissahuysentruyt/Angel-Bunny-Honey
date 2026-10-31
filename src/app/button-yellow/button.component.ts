import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-button',
    templateUrl: './button.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() name!: string;
}
