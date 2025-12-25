//#region imports
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
//#endregion

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss'],
  standalone: false,
})
export class PreviewComponent implements OnInit, OnDestroy {
  handlers: Subscription[] = [];

  constructor() {}

  ngOnInit() {}

  ngOnDestroy(): void {
    this.handlers.forEach(h => h.unsubscribe());
  }
}
