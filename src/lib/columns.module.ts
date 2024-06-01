//#region @browser
import { NgModule } from '@angular/core';
import { LayoutModule } from '@angular/cdk/layout';
import {
  ColumnComponent,
  DirectiveGrow,
  DirectiveHideDesktop,
  DirectiveHideTablet,
  DirectiveHideMobile,
  DirectiveShowDesktop,
  DirectiveShowMobile,
  DirectiveShowTablet,
  DirectiveShrinkOnMobile50,
  DirectiveShrinkOnMobile,
  DirectiveShrinkOnTablet,
} from './column';
import { ColumnsGapComponent } from './columns-gap/columns-gap.component';
import { ColumnsComponent } from './columns.component';
import { BreakpointsService } from './breakpoints.service';

const components = [
  ColumnsComponent,
  ColumnComponent,
  DirectiveGrow,
  DirectiveHideMobile,
  DirectiveHideTablet,
  DirectiveHideDesktop,
  DirectiveShowTablet,
  DirectiveShowMobile,
  DirectiveShowDesktop,
  ColumnsGapComponent,
  DirectiveShrinkOnMobile50,
  DirectiveShrinkOnMobile,
  DirectiveShrinkOnTablet,
];

@NgModule({
  imports: [LayoutModule],
  exports: [LayoutModule, ...components],
  declarations: [...components],
  providers: [BreakpointsService],
})
export class StaticColumnsModule {}
//#endregion
