import { Component, OnInit, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'column',
  template: '<ng-content></ng-content>',
  styleUrls: ['./column.component.scss'],
  standalone: false,
})
export class ColumnComponent implements OnInit {
  @HostBinding('style.flex.basis.px')
  @HostBinding('style.minWidth.px')
  @Input()
  width: number;

  constructor() {
    // this.ccwidth = 90;
  }

  ngOnInit() {}
}
