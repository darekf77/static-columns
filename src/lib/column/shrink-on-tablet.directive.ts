import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, Directive, ElementRef, Host, OnInit, Optional, Renderer2 } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { BreakpointsService } from '../breakpoints.service';
import { BaseHideShowDirective } from './base-hide-show.directive';
// import { DirectiveShrinkOnMobile50 } from './shrink-on-mobile50.directive';
// import { DirectiveShrinkOnMobile } from './shrink-on-mobile75.directive';

@Directive({
  selector: '[shrinkOnTablet]'
})
export class DirectiveShrinkOnTablet extends BaseHideShowDirective {

  constructor(
    public e: ElementRef,
    public renderer: Renderer2,
    public breakpoints: BreakpointsService,
    // @Optional() @Host() public mobile50: DirectiveShrinkOnMobile50,
    // @Optional() @Host() public mobile75: DirectiveShrinkOnMobile,
  ) {
    super(e, renderer, breakpoints);
  }
  action(state: 'mobile' | 'tablet' | 'desktop') {
    // if (state === 'tablet') {
    //   this.scale(0.75)
    // } else {
    //   if (state === 'mobile' && (this.mobile50 || this.mobile75)) {

    //   } else {
    //     this.scale()
    //   }
    // }
  }
}
