export * from './column';
export * from './columns-gap';

//#region @browser
export * from './breakpoints.service';
export * from './columns.component';
//#endregion

//#region @browser
export * from './columns.module';
//#endregion

//#region @backend
export function backendUseInfo(): void {
  console.log('Static Columns should not be used on backend');
}
//#endregion
