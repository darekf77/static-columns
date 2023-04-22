//#region @browser
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PreviewComponent } from './preview.component';
import { StaticColumnsModule } from '../../lib/columns.module';

const routes: Routes = [
  {
    path: '',
    component: PreviewComponent,
  },
  // {
  //   path: 'anothermodulepath',
  //   loadChildren: () => import('anothermodule')
  //     .then(m => m.AnotherLazyModule),
  // },
];

@NgModule({
  imports: [
    StaticColumnsModule,
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [PreviewComponent],
})
export class PreviewModule { }
//#endregion
