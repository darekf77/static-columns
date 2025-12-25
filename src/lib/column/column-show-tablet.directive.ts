//#region imports
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import {
  Component,
  Directive,
  ElementRef,
  OnInit,
  Renderer2,
} from '@angular/core';
import { Subject, takeUntil } from 'rxjs';

import { BreakpointsService } from '../breakpoints.service';

import { BaseHideShowDirective } from './base-hide-show.directive';
//#endregion

@Directive({
  selector: '[showTablet]',
  standalone: false,
})
export class DirectiveShowTablet extends BaseHideShowDirective {
  action(state: 'mobile' | 'tablet' | 'desktop') {
    if (state === 'tablet') {
      this.showElement();
    } else {
      this.hideElement();
    }
  }
}
