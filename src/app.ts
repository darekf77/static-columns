//#region @notForNpm

//#region @browser
    import { NgModule } from '@angular/core';
    import { Component, OnInit } from '@angular/core';


    @Component({
      selector: 'app-static-columns',
      template: 'hello from static-columns'
    })
    export class StaticColumnsComponent implements OnInit {
      constructor() { }

      ngOnInit() { }
    }

    @NgModule({
      imports: [],
      exports: [StaticColumnsComponent],
      declarations: [StaticColumnsComponent],
      providers: [],
    })
    export class StaticColumnsModule { }
    //#endregion

    //#region @backend
    async function start(port: number) {
      console.log('hello world from backend');
    }

    export default start;

//#endregion

//#endregion