import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ToastService } from '../services/toast.service';
import { LoaderService } from '../services/loader.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-searchpage',
  templateUrl: './searchpage.page.html',
  styleUrls: ['./searchpage.page.scss'],
})
export class SearchpagePage implements OnInit {
  id: any;
  dummy = Array(10);
  Term: any;
  dummyRest: any[] = [];
  allData: any;
  constructor(private authService: AuthService,
    private toastService: ToastService,
    private loader: LoaderService,
    private router: Router) {
    this.Term = localStorage.getItem('term');
    this.id = localStorage.getItem('ebook-term');
    this.MasterEbook();
  }

  ngOnInit() {

  }

  MasterEbook(event?) {
    this.loader.loadingPresent();
    const data = {
      MEbookID: this.id,
      TermChar: ''
    }
    console.log(data);

    this.authService.GetEbookTerm(data).subscribe(
      (res: any) => {

        // this.dummy = [];
        // this.allData = [];
        // this.dummyRest = [];
        if (res.status === true) {
          // console.log(JSON.stringify(res.result));
          this.loader.loadingDismiss();
          // this.allData = res.result;
          // console.log(JSON.stringify(this.allData));
          for (let i = 0; i < res.result.length; i++) {
            this.allData = res.result[i].terms;

            if (this.allData != null) {

              console.log(JSON.stringify(this.allData));
              this.allData.forEach(ele => {
                this.allData.push(ele);
                this.dummyRest.push(ele);
                console.log(JSON.stringify(ele));
              });

            }
          }



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

  onSearchChange(event) {
    console.log(event.detail.value);

    this.allData = this.dummyRest.filter((ele: any) => {

      return ele.term.toLowerCase().includes(event.detail.value.toLowerCase());
    });
  }

  getEbookTermDescription(id, name) {
    localStorage.setItem('iddesc', id);
    localStorage.setItem('namedesc', name);
    this.router.navigateByUrl('term-description');
  }


}
