import { Component, OnInit, ViewEncapsulation, ViewChildren, QueryList } from '@angular/core';
import { ColumnComponent } from './column';
// import { Log, Level } from 'ng2-logger/browser';
// const log = Log.create('test');
// log.i('asdas')

@Component({
    selector: 'columns-container',
    templateUrl: './columns.component.html',
    styleUrls: ['./columns.component.scss']
})
export class ColumnsComponent implements OnInit {
    @ViewChildren(ColumnComponent) childrens: QueryList<ColumnComponent>;

    constructor() {

    }
    ngOnInit() { }
}
