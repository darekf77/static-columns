//#region imports
import * as os from 'os'; // @backend

import { AsyncPipe, JsonPipe, NgFor } from '@angular/common'; // @browser
import {
  inject,
  Injectable,
  APP_INITIALIZER,
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  isDevMode,
  mergeApplicationConfig,
  provideZonelessChangeDetection,
  signal,
} from '@angular/core'; // @browser
import { Component } from '@angular/core'; // @browser
import { VERSION } from '@angular/core'; // @browser
import {
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';
import {
  provideRouter,
  Router,
  RouterLinkActive,
  RouterModule,
  RouterOutlet,
  ActivatedRoute,
  Routes,
  Route,
} from '@angular/router';
import { provideServiceWorker } from '@angular/service-worker';
import { provideServerRendering, withRoutes } from '@angular/ssr';
import { RenderMode, ServerRoute } from '@angular/ssr';
import Aura from '@primeng/themes/aura'; // @browser
import { providePrimeNG } from 'primeng/config'; // @browser
import { toSignal } from '@angular/core/rxjs-interop'; // @browser
import { BehaviorSubject, Observable, map, switchMap } from 'rxjs';
import { MatCardModule } from '@angular/material/card'; // @browser
import { MatIconModule } from '@angular/material/icon'; // @browser
import { MatDividerModule } from '@angular/material/divider'; // @browser
import { MatButtonModule } from '@angular/material/button'; // @browser
import { MatListModule } from '@angular/material/list'; // @browser
import { MatTabsModule } from '@angular/material/tabs'; // @browser
import {
  Taon,
  TaonBaseContext,
  TAON_CONTEXT,
  EndpointContext,
  TaonBaseAngularService,
  TaonEntity,
  StringColumn,
  TaonBaseAbstractEntity,
  TaonBaseCrudController,
  TaonController,
  GET,
  TaonMigration,
  TaonBaseMigration,
} from 'taon/src';
import { Utils, UtilsOs } from 'tnp-core/src';

import { HOST_CONFIG } from './app.hosts';
// @placeholder-for-imports

//#endregion

const firstHostConfig = (Object.values(HOST_CONFIG) || [])[0];
console.log('Your backend host ' + firstHostConfig?.host);
console.log('Your frontend host ' + firstHostConfig?.frontendHost);

//#region static-columns component

//#region @browser
@Component({
  selector: 'app-root',

  imports: [
    // RouterOutlet,
    // AsyncPipe,
    MatCardModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    MatListModule,
    MatTabsModule,
    RouterModule,
    // JsonPipe,
  ],
  template: `
    @if (itemsLoaded()) {
      <router-outlet />
    }
  `,
})
export class StaticColumnsApp {
  itemsLoaded = signal(false);
  navItems =
    StaticColumnsClientRoutes.length <= 1
      ? []
      : StaticColumnsClientRoutes.filter(r => r.path !== undefined).map(r => ({
          path: r.path === '' ? '/' : `/${r.path}`,
          label: r.path === '' ? 'Home' : `${r.path}`,
        }));

  activatedRoute = inject(ActivatedRoute);

  get activePath(): string {
    return globalThis?.location.pathname?.split('?')[0];
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log(globalThis?.location.pathname);
    // TODO set below from 1000 to zero in production
    Taon.removeLoader(1000).then(() => {
      this.itemsLoaded.set(true);
    });
  }

  taonMode = UtilsOs.isRunningInWebSQL() ? 'websql' : 'normal nodejs';
  angularVersion = VERSION.full;
  userApiService = inject(UserApiService);
  router = inject(Router);
}
//#endregion

//#endregion

//#region  static-columns api service

//#region @browser
@Injectable({
  providedIn: 'root',
})
export class UserApiService extends TaonBaseAngularService {
  userController = this.injectController(UserController);

  getAll(): Observable<User[]> {
    return this.userController
      .getAll()
      .request()
      .observable.pipe(map(r => r.body.json));
  }
}
//#endregion

//#endregion

//#region  static-columns routes
//#region @browser
export const StaticColumnsServerRoutes: ServerRoute[] = [
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
];
export const StaticColumnsClientRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: () => {
      if (StaticColumnsClientRoutes.length === 1) {
        return '';
      }
      return StaticColumnsClientRoutes.find(r => r.path !== '')!.path!;
    },
  },
  // PUT ALL ROUTES HERE
  // @placeholder-for-routes
  // @app-ts-generated
  {
    path: 'preview',

    loadChildren: () =>
      import('./app/preview/preview.routes').then(m => m.PreviewRoutes),
  },
];
//#endregion
//#endregion

//#region  static-columns app configs
//#region @browser
export const StaticColumnsAppConfig: ApplicationConfig = {
  providers: [
    provideZonelessChangeDetection(),
    {
      provide: TAON_CONTEXT,
      useFactory: () => StaticColumnsContext,
    },
    providePrimeNG({
      theme: {
        preset: Aura,
      },
    }),
    {
      provide: APP_INITIALIZER,
      multi: true,
      useFactory: () => StaticColumnsStartFunction,
    },
    provideBrowserGlobalErrorListeners(),
    provideRouter(StaticColumnsClientRoutes),
    provideClientHydration(withEventReplay()),
    provideServiceWorker('ngsw-worker.js', {
      enabled: !isDevMode(),
      registrationStrategy: 'registerWhenStable:30000',
    }),
  ],
};

export const StaticColumnsServerConfig: ApplicationConfig = {
  providers: [provideServerRendering(withRoutes(StaticColumnsServerRoutes))],
};

export const StaticColumnsConfig = mergeApplicationConfig(
  StaticColumnsAppConfig,
  StaticColumnsServerConfig,
);
//#endregion
//#endregion

//#region  static-columns entity
@TaonEntity({ className: 'User' })
class User extends TaonBaseAbstractEntity {
  //#region @websql
  @StringColumn()
  //#endregion
  name?: string;

  getHello(): string {
    return `hello ${this.name}`;
  }
}
//#endregion

//#region  static-columns controller
@TaonController({ className: 'UserController' })
class UserController extends TaonBaseCrudController<User> {
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  entityClassResolveFn = () => User;

  @GET()
  helloWorld(): Taon.Response<string> {
    //#region @websqlFunc
    return async (req, res) => 'hello world';
    //#endregion
  }

  @GET()
  getOsPlatform(): Taon.Response<string> {
    //#region @websqlFunc
    return async (req, res) => {
      //#region @backend
      return os.platform(); // for normal nodejs backend return real value
      //#endregion

      return 'no-platform-inside-browser-and-websql-mode';
    };
    //#endregion
  }
}
//#endregion

//#region  static-columns migration

//#region @websql
@TaonMigration({
  className: 'UserMigration',
})
class UserMigration extends TaonBaseMigration {
  userController = this.injectRepo(User);

  async up(): Promise<any> {
    const superAdmin = new User();
    superAdmin.name = 'super-admin';
    await this.userController.save(superAdmin);
  }
}
//#endregion

//#endregion

//#region  static-columns context
var StaticColumnsContext = Taon.createContext(() => ({
  ...HOST_CONFIG['StaticColumnsContext'],
  contexts: { TaonBaseContext },

  //#region @websql
  /**
   * In production use specyfic for this context name
   * generated migration object from  ./migrations/index.ts.
   */
  migrations: {
    UserMigration,
  },
  //#endregion

  controllers: {
    UserController,
  },
  entities: {
    User,
  },
  database: true,
  // disabledRealtime: true,
}));
//#endregion

//#region  static-columns start function
const StaticColumnsStartFunction = async (
  startParams?: Taon.StartParams,
): Promise<void> => {
  await StaticColumnsContext.initialize();
  // @placeholder-for-contexts-init

  // INIT ALL ACTIVE CONTEXTS HERE

  //#region @backend
  if (
    startParams?.onlyMigrationRun ||
    startParams?.onlyMigrationRevertToTimestamp
  ) {
    process.exit(0);
  }
  //#endregion

  //#region @backend
  console.log(`Hello in NodeJs backend! os=${os.platform()}`);
  //#endregion
};
//#endregion

export default StaticColumnsStartFunction;
