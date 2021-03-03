import { Component, ViewChildren, QueryList } from '@angular/core';

import { Platform, IonRouterOutlet } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  @ViewChildren(IonRouterOutlet) routerOutlets: QueryList<IonRouterOutlet>;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.statusBar.backgroundColorByHexString("1F58BE");


      this.platform.backButton.subscribe(() => {
        document.addEventListener("backbutton", () => {
          this.routerOutlets.forEach((outlet: IonRouterOutlet) => {


            if (outlet && outlet.canGoBack()) {
              outlet.pop();
            } else if (this.router.url === "/home") {
              navigator['app'].exitApp(); // work for ionic 4
            } else if (!outlet.canGoBack()) {
              navigator['app'].exitApp(); // work for ionic 4
            }
            else {
              window.history.back();
            }
          });
        });
      });
    });
  }
}
