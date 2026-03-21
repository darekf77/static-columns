//#region imports
import { LayoutModule } from '@angular/cdk/layout';
import { NgModule } from '@angular/core';

import { ColumnComponent, DirectiveGrow } from './column';
import { ColumnsComponent } from './columns.component';
//#endregion

const components = [
  ColumnsComponent,
  ColumnComponent,
  DirectiveGrow,
];

@NgModule({
  imports: [LayoutModule],
  exports: [LayoutModule, ...components],
  declarations: [...components],
})
export class StaticColumnsModule {}
