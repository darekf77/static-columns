import { NgModule } from '@angular/core';

import { ColumnComponent, DirectiveGrow } from './column';
import { ColumnsComponent } from './columns.component';

@NgModule({
    imports: [],
    exports: [ColumnsComponent, ColumnComponent, DirectiveGrow],
    declarations: [ColumnsComponent, ColumnComponent, DirectiveGrow],
    providers: [],
})
export class StaticColumnsModule { }
