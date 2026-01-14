import { Routes } from "@angular/router";
import { PreviewComponent } from "./preview.component";

export const PreviewRoutes: Routes = [
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
