//#region @browser
import { NgModule } from '@angular/core';
import { LayoutModule } from '@angular/cdk/layout';
import { ColumnComponent, DirectiveGrow, DirectiveHideTablet } from './column';
import { DirectiveHideMobile } from './column/column-hide-mobile.directive';
import { ColumnsGapComponent } from './columns-gap/columns-gap.component';
import { ColumnsComponent } from './columns.component';

@NgModule({
  imports: [
    LayoutModule,
  ],
  exports: [
    LayoutModule,
    ColumnsComponent,
    ColumnComponent,
    DirectiveGrow,
    DirectiveHideMobile,
    DirectiveHideTablet,
    ColumnsGapComponent,
  ],
  declarations: [
    ColumnsComponent,
    ColumnComponent,
    DirectiveGrow,
    DirectiveHideMobile,
    DirectiveHideTablet,
    ColumnsGapComponent,
  ],
  providers: [],
})
export class StaticColumnsModule { }
//#endregion
