import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ToastService } from '../services/toast.service';
import { LoaderService } from '../services/loader.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  Items: any;
  dummy = Array(10);
  constructor(private authService: AuthService,
    private toastService: ToastService,
    private loader: LoaderService,
    private router: Router) {

    this.MasterEbook();
  }
  ngOnInit() {
  }
  MasterEbook() {
    this.loader.loadingPresent();

    this.authService.GetMasterEbook().subscribe(
      (res: any) => {
        console.log(res);
        this.dummy = [];
        if (res.status === true) {
          this.loader.loadingDismiss();
          this.Items = res.result;

        }
        else {
          this.loader.loadingDismiss();
          this.dummy = [];
          this.toastService.presentToast(res.msg);
        }

      },
      (error: any) => {
        this.dummy = [];
        this.loader.loadingDismiss();
        if (JSON.stringify(error.error.errors) != null) {
          this.toastService.presentToast(JSON.stringify(error.error.errors));
        }
        else {
          this.toastService.presentToast("Network Issue...");
        }
      }
    );
    // this.postData.Suppliers = JSON.stringify(this.data['to_name']);
  }


  getEbookTerm(id, name, type) {
    localStorage.setItem('ebook-term', id);
    localStorage.setItem('term', name);
    localStorage.setItem('type', type);
    this.router.navigateByUrl('ebook-term');

  }
}


