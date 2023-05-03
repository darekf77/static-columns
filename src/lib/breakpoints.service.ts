import { BreakpointObserver, BreakpointState, Breakpoints } from '@angular/cdk/layout';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { _ } from 'tnp-core';

@Injectable({ providedIn: 'root' })
export class BreakpointsService {

  private sub = new Subject<'mobile' | 'tablet' | 'desktop'>();
  public listenTo = this.sub.asObservable();

  constructor(
    breakpointObserver: BreakpointObserver,
  ) {

    breakpointObserver.observe([Breakpoints.XSmall, Breakpoints.Tablet, Breakpoints.Web]).subscribe((state) => {
      // console.log(state.breakpoints)
      if (!_.isUndefined(Breakpoints.XSmall.split(', ').find(f => state.breakpoints[f]))) {
        this.sub.next('mobile');
      } else if (!_.isUndefined(Breakpoints.Tablet.split(', ').find(f => state.breakpoints[f]))) {
        this.sub.next('tablet');
      } else if (!_.isUndefined(Breakpoints.Web.split(', ').find(f => state.breakpoints[f]))) {
        this.sub.next('desktop');
      }
    });

    setTimeout(() => {
      if (breakpointObserver.isMatched([Breakpoints.XSmall])) {
        this.sub.next('mobile');
      }

      if (breakpointObserver.isMatched([Breakpoints.Tablet])) {
        this.sub.next('tablet');
      }

      if (breakpointObserver.isMatched([Breakpoints.Web])) {
        this.sub.next('desktop');
      }
    })
  }

}
