//#region @browser
import { NgModule } from '@angular/core';

import { ColumnComponent, DirectiveGrow } from './column';
import { ColumnsGapComponent } from './columns-gap/columns-gap.component';
import { ColumnsComponent } from './columns.component';

@NgModule({
  imports: [],
  exports: [
    ColumnsComponent,
    ColumnComponent,
    DirectiveGrow,
    ColumnsGapComponent,
  ],
  declarations: [
    ColumnsComponent,
    ColumnComponent,
    DirectiveGrow,
    ColumnsGapComponent,
  ],
  providers: [],
})
export class StaticColumnsModule { }
//#endregion