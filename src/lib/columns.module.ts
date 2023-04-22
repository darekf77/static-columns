//#region @browser
import { NgModule } from '@angular/core';
import { LayoutModule } from '@angular/cdk/layout';
import { ColumnComponent, DirectiveGrow, DirectiveHideTablet, DirectiveShowMobile } from './column';
import { DirectiveHideMobile } from './column/column-hide-mobile.directive';
import { ColumnsGapComponent } from './columns-gap/columns-gap.component';
import { ColumnsComponent } from './columns.component';

const components = [
  ColumnsComponent,
  ColumnComponent,
  DirectiveGrow,
  DirectiveHideMobile,
  DirectiveHideTablet,
  DirectiveShowMobile,
  ColumnsGapComponent,
];

@NgModule({
  imports: [
    LayoutModule,
  ],
  exports: [
    LayoutModule,
    ...components,
  ],
  declarations: [
    ...components,
  ],
  providers: [],
})
export class StaticColumnsModule { }
//#endregion
