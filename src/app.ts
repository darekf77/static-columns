//#region @notForNpm
//#region imports
import { Firedev } from 'firedev';
import { HOST_BACKEND_PORT } from './app.hosts';
//#region @browser
import { NgModule, NgZone, ViewEncapsulation } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

//#endregion
//#endregion

//#region @browser

//#region routes
const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./app/preview/preview.module')
      .then(m => m.PreviewModule),
  },
];
//#endregion

//#region main component
@Component({
  selector: 'app-static-columns',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./app.scss'],
  templateUrl: './app.html',
})
export class StaticColumnsComponent {
  constructor(
    private ngZone: NgZone
  ) { }

}
//#endregion

//#region main module
@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      preloadingStrategy: PreloadAllModules,
      enableTracing: false,
    }),
  ],
  exports: [StaticColumnsComponent],
  declarations: [StaticColumnsComponent],
  providers: [],
})
export class StaticColumnsModule { }
//#endregion
//#endregion

//#region firedev start function
async function start() {
  const host = `http://localhost:${HOST_BACKEND_PORT}`;
  // Firedev.enableProductionMode();

  const context = await Firedev.init({
    host,
    controllers: [
      // PUT FIREDEV CONTORLLERS HERE
    ],
    entities: [
      // PUT FIREDEV ENTITIES HERE
    ],
    //#region @websql
    config: {
      type: 'better-sqlite3',
      database: 'tmp-db.sqlite',
      logging: false,
    }
    //#endregion
  });
  //#region @backend
  // if (Firedev.isNode) {
  //   context.node.app.get('/hello', (req, res) => {
  //     res.send('Hello static-columns')
  //   })
  // }
  //#endregion
}
//#endregion

export default start;
//#endregion
