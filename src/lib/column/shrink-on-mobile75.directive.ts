import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import {
  Component,
  Directive,
  ElementRef,
  Host,
  OnInit,
  Optional,
  Renderer2,
} from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { BreakpointsService } from '../breakpoints.service';
import { BaseHideShowDirective } from './base-hide-show.directive';
import { DirectiveShrinkOnTablet } from './shrink-on-tablet.directive';

@Directive({
  selector: '[shrinkOnMobile]',
})
export class DirectiveShrinkOnMobile extends BaseHideShowDirective {
  scaleFactor = 75;
  constructor(
    public e: ElementRef,
    public renderer: Renderer2,
    public breakpoints: BreakpointsService,
    // @Optional() @Host() public tablet75: DirectiveShrinkOnTablet
  ) {
    super(e, renderer, breakpoints);
  }

  action(state: 'mobile' | 'tablet' | 'desktop') {
    if (state === 'mobile') {
      this.scale(0.75);
    } else {
      // if (state === 'tablet' && this.tablet75) {

      // } else {
      this.scale();
      // }
    }
  }
}
