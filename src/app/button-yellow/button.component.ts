import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'], 
})
export class ButtonComponent implements OnInit {
  @Input() name!: string;

  @HostBinding('cta_link') heroButton: boolean = false;
  // @HostBinding('header-item__button') menuButton: boolean = false;
  // @HostBinding('youtube-href') youTube: string = "https://www.youtube.com/@angelbunnyapiary1790";

  ngOnInit() {
    console.log(this.name);
    this.heroButton = true;
    // this.menuButton = true;
    // this.youTube = true;
  }
}
