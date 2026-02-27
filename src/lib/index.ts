export { CoreModels } from 'tnp-core/src';

export * from './column';
export * from './columns-gap';
export * from './breakpoints.service'; //@browser
export * from './columns.component'; // @browser
export * from './columns.module'; // @browser

//#region @backend
export function backendUseInfo(): void {
  console.log('Static Columns should not be used on backend');
}
//#endregion
