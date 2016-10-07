import { Component, OnInit, Input, HostBinding } from '@angular/core';

@Component({
    selector: 'column',
    template: '<ng-content></ng-content>',
    styles: [require('./column.component.scss')]
})
export class ColumnComponent implements OnInit {
    @HostBinding('style.flex.basis.px') @HostBinding('style.minWidth.px') @Input() width: number;

    constructor() {
        // this.ccwidth = 90;
    }

    ngOnInit() { }

}
