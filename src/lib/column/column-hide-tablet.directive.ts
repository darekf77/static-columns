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

@Directive({
  selector: '[hideTablet]',
  standalone: false,
})
export class DirectiveHideTablet extends BaseHideShowDirective {
  action(state: 'mobile' | 'tablet' | 'desktop') {
    if (state === 'tablet') {
      this.hideElement();
    } else {
      this.showElement();
    }
  }
}
