//#region @browser
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PreviewComponent } from './preview.component';
import { StaticColumnsModule } from '../../lib/columns.module';
import {
  TaonGithubForkMeCornerModule,
  TaonFullMaterialModule,
  TaonGithubForkMeRibbonModule,
} from 'taon-ui/src';

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
    TaonGithubForkMeRibbonModule,
    TaonGithubForkMeCornerModule,
    TaonFullMaterialModule,
    StaticColumnsModule,
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [PreviewComponent],
})
export class PreviewModule {}
//#endregion
