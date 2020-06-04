import { NgModule } from '@angular/core';
import {Routes, RouterModule, Router, ActivatedRoute, NavigationStart, Event as NavigationEvent, NavigationEnd} from '@angular/router';
import { IroLibraryComponent } from './components/iro-library/iro-library.component';
import { IroButtonComponent } from './components/iro-button/iro-button.component';
import { IrobuttonDemoComponent } from './demo/irobutton-demo/irobutton-demo.component';
import { IroInputboxComponent } from './components/iro-inputbox/iro-inputbox.component';
import { IroinputDemoComponent } from './demo/iroinput-demo/iroinput-demo.component';


const routes: Routes = [
  { path: '', redirectTo: '/lib/button', pathMatch: 'full' },
  { path: 'lib', component: IroLibraryComponent,
    children: [
      { path: 'input', component: IroinputDemoComponent },
      { path: 'button', component: IrobuttonDemoComponent }
    ]
  }    
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  constructor(private router: Router, public activatedRouter: ActivatedRoute) {
    router.events.forEach((event: NavigationEvent) => {
      if ( event instanceof NavigationEnd) {
        if ((<any>window).Intercom) {
          (<any>window).Intercom('update');
        }
      }
    });
  }
}
