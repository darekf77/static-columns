//#region imports
import {
  Component,
  OnInit,
  ViewEncapsulation,
  ViewChildren,
  QueryList,
} from '@angular/core';

import { ColumnComponent } from './column';
//#endregion


@Component({
  selector: 'columns-container',
  templateUrl: './columns.component.html',
  styleUrls: ['./columns.component.scss'],
  standalone: false,
})
export class ColumnsComponent {
  @ViewChildren(ColumnComponent) childrens: QueryList<ColumnComponent>;
}
