import { Component, OnInit, ViewEncapsulation, ViewChildren, QueryList } from '@angular/core';
import { ColumnComponent } from './column';

@Component({
    selector: 'columns-container',
    template: require('./columns.component.html'),
    styles: [require('./columns.component.scss')],
    directives: [ColumnComponent]
})
export class ColumnsComponent implements OnInit {
    @ViewChildren(ColumnComponent) childrens: QueryList<ColumnComponent>;

    constructor() {

    }
    ngOnInit() { }
}
