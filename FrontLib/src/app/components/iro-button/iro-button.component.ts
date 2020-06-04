import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-iro-button',
  templateUrl: './iro-button.component.html',
  styleUrls: ['./iro-button.component.scss']
})
export class IroButtonComponent implements OnInit {

  @Input() title: string;
  @Input() color: string;
  @Input() isDisabled: string;
  @Input() fill: boolean;
  @Input() type = 'button';
  @Input() rounded :boolean= false;

  fillClass: string;

  constructor() { }

  ngOnInit() {
    if (this.fill) {
      this.fillClass = 'fill';
    } else {
      this.fillClass = '';
    }
  }

}
