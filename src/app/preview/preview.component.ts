//#region imports
import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { StaticColumnsModule } from 'static-columns/src';
import { Subscription } from 'rxjs';
import {
  TaonGithubForkMeCornerModule,
  TaonFullMaterialModule,
  TaonGithubForkMeRibbonModule,
} from 'taon-ui/src';
//#endregion

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss'],
  imports: [
    TaonGithubForkMeRibbonModule,
    TaonGithubForkMeCornerModule,
    TaonFullMaterialModule,
    StaticColumnsModule,
    CommonModule,
  ],
})
export class PreviewComponent implements OnInit, OnDestroy {
  handlers: Subscription[] = [];

  constructor() {}

  ngOnInit() {}

  ngOnDestroy(): void {
    this.handlers.forEach(h => h.unsubscribe());
  }
}
