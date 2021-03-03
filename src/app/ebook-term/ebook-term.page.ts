import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { LoaderService } from '../services/loader.service';
import { ToastService } from '../services/toast.service';
import { AuthService } from '../services/auth.service';
import { IonInfiniteScroll, IonVirtualScroll, IonInfiniteScrollContent, IonContent } from '@ionic/angular';
import * as faker from 'faker';

@Component({
  selector: 'app-ebook-term',
  templateUrl: './ebook-term.page.html',
  styleUrls: ['./ebook-term.page.scss'],
})
export class EbookTermPage implements OnInit {
  @ViewChild(IonVirtualScroll) virtualScroll: IonVirtualScroll;
  @ViewChild(IonContent, { static: false }) private content: any;

  id: any;
  dummy = Array(10);
  Term: any;
  dummyRest: any[] = [];

  allData: any[] = [];
  Newdata: any[] = [];
  AllDrugs: any[] = [];
  AllDrugsDummy: any[] = [];
  type: any;
  Form: any[] = [];
  FormDummy: any[] = [];


  FruitList: any;
  FruitList_temp: any;
  UnitList: any[];
  UnitList_temp: any;
  DataStatus: any;
  showFruitList = false;
  showUnitList: any;
  showData = true;

  SelectedQty: any;
  SelectedFruit: any;

  constructor(private authService: AuthService,
    private toastService: ToastService,
    private loader: LoaderService,
    private router: Router) {
    this.Term = localStorage.getItem('term');
    this.id = localStorage.getItem('ebook-term');
    this.type = localStorage.getItem('type');
    console.log(this.type);



    if (this.type == 'CTCAE') {
      this.MasterEbook();
      this.MasterEboo2();
    }
    if (this.type == 'Drug') {
      this.GetDrugTerm();
    }
    if (this.type == 'form') {
      this.GetCriticalName();
    }

    // this.Search();
  }
  ngOnInit() {
  }

  MasterEbook(event?) {
    this.loader.loadingPresent();
    const data = {
      MEbookID: this.id,
      TermChar: ''
    }

    this.authService.GetEbookTermAlphabetical(data).subscribe(
      (res: any) => {

        // this.dummy = [];
        // this.allData = [];
        // this.dummyRest = [];
        if (res.status === true) {
          this.loader.loadingDismiss();
          this.allData = res.result;


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
  }

  MasterEboo2(event?) {
    // this.loader.loadingPresent();
    const data = {
      MEbookID: this.id,
      TermChar: ''
    }
    console.log(data);

    this.authService.GetEbookTerm(data).subscribe(
      (res: any) => {


        if (res.status === true) {
          // console.log(JSON.stringify(res.result));
          // this.loader.loadingDismiss();
          this.Newdata = res.result;
          // console.log(JSON.stringify(this.allData));
          res.result.forEach(ele => {
            this.Newdata.push(ele);
            this.dummyRest.push(ele);
            console.log(JSON.stringify(ele));
          });




        }
        else {
          // this.loader.loadingDismiss();
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


  Reset() {
    this.showData = true;

  }
  checkFocus() {
   
    if (this.showData == true) {
      console.log(false);
      this.showData = !this.showData;
     
    } else {
      console.log(true);
      this.showData = this.showData;
    }
  }




  GetDrugTerm(event?) {
    this.loader.loadingPresent();
    const data = {
      // MEbookID: this.id,
      // TermChar: ''
    }

    this.authService.GetDrugTerm(data).subscribe(
      (res: any) => {

        if (res.status === true) {
          console.log(JSON.stringify(res.result));
          this.loader.loadingDismiss();
          // this.AllDrugs = res.result;

          res.result.forEach(element => {
            this.AllDrugs.push(element);
            this.AllDrugsDummy.push(element)
          });

        }
        else {
          this.loader.loadingDismiss();
          this.toastService.presentToast(res.msg);
        }

      },
      (error: any) => {
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


  GetCriticalName(event?) {
    this.loader.loadingPresent();
    const data = {
      // MEbookID: this.id,
      // TermChar: ''
    }

    this.authService.GetCriticalName(data).subscribe(
      (res: any) => {

        if (res.status === true) {
          console.log(JSON.stringify(res.result));
          this.loader.loadingDismiss();
          // this.Form = res.result;

          res.result.forEach(element => {
            this.Form.push(element);
            this.FormDummy.push(element);
          });
        }
        else {
          this.loader.loadingDismiss();
          this.toastService.presentToast(res.msg);
        }

      },
      (error: any) => {
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
  PositonItem(data) {
    console.log(data);
    let titleELe = document.getElementById(data).offsetTop;
    this.content.scrollToPoint(0, titleELe, 500);
  }
  getEbookTermDescription(id, name) {
    localStorage.setItem('iddesc', id);
    localStorage.setItem('namedesc', name);
    localStorage.setItem('type', this.type);
    this.router.navigateByUrl('term-description');
  }

  onSearchChange(event) {
    console.log(event.detail.value);
    // this.allData = [];

   

    this.Newdata = this.dummyRest.filter((ele: any) => {

      return ele.term.toLowerCase().includes(event.detail.value.toLowerCase());
    });
  





  }
  onSearchChangeDrug(event) {
    console.log(event.detail.value);

    this.AllDrugs = this.AllDrugsDummy.filter((ele: any) => {
      console.log(ele.term);

      return ele.term.toLowerCase().includes(event.detail.value.toLowerCase());
    });
  }

  onSearchChangeForm(event) {
    console.log(event.detail.value);

    this.Form = this.FormDummy.filter((ele: any) => {

      return ele.name.toLowerCase().includes(event.detail.value.toLowerCase());
    });
  }



}
