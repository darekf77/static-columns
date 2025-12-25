//#region imports
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  TaonGithubForkMeCornerModule,
  TaonFullMaterialModule,
  TaonGithubForkMeRibbonModule,
} from 'taon-ui/src';

import { StaticColumnsModule } from '../../lib/columns.module';

import { PreviewComponent } from './preview.component';
//#endregion

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
