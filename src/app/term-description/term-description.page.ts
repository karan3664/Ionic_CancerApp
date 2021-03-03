import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ToastService } from '../services/toast.service';
import { LoaderService } from '../services/loader.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-term-description',
  templateUrl: './term-description.page.html',
  styleUrls: ['./term-description.page.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TermDescriptionPage implements OnInit {
  Defination: any;
  grade1: any;
  grade2: any;
  grade3: any;
  grade4: any;
  grade5: any;
  navigational_note: any;
  Term: any;
  id: any;
  dummy = Array(10);
  Items: any;
  DrugId: any;
  Drugdescription: any;
  type: any;

  disease_site_and_stage: any;
  trial_heading: any;
  criterion: any;
  study_contact: any;
  constructor(private authService: AuthService,
    private toastService: ToastService,
    private loader: LoaderService,) {
    this.Term = localStorage.getItem('namedesc');
    this.id = localStorage.getItem('iddesc');
    this.DrugId = localStorage.getItem('DrugId');
    this.type = localStorage.getItem('type');

    setTimeout(() => {
      if (this.type == 'CTCAE') {
        this.MasterEbook();
      }
      if (this.type == 'Drug') {
        this.GetDrugTermDescription();
      }
      if (this.type == 'form') {
        this.GetCriticalNameDescription();
      }

    }, 500);
  }
  ionViewWillEnter() {

  }
  ngOnInit() {
  }

  MasterEbook() {
    this.loader.loadingPresent();
    const data = {
      TermID: this.id
    }
    this.authService.GetTermDescription(data).subscribe(
      (res: any) => {
        console.log(res);
        this.dummy = [];
        if (res.status === true) {
          this.loader.loadingDismiss();

          this.Items = res.result;
          this.Defination = res.result.definition;
          this.grade1 = res.result.grade1;
          this.grade2 = res.result.grade2;
          this.grade3 = res.result.grade3;
          this.grade4 = res.result.grade4;
          this.grade5 = res.result.grade5;
          this.navigational_note = res.result.navigational_note;

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

  GetDrugTermDescription() {
    this.loader.loadingPresent();

    this.authService.GetDrugTermDescription(this.id).subscribe(
      (res: any) => {
        console.log(res);
        this.dummy = [];
        if (res.status === true) {
          this.loader.loadingDismiss();


          this.Drugdescription = res.result.description;


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

  GetCriticalNameDescription() {
    this.loader.loadingPresent();

    this.authService.GetCriticalNameDescription(this.id).subscribe(
      (res: any) => {

        this.dummy = [];
        if (res.status === true) {
          this.loader.loadingDismiss();

          console.log("Form==> " + JSON.stringify(res));
          this.disease_site_and_stage = res.result[0].disease_site_and_stage;
          this.trial_heading = res.result[0].trial_heading;
          this.criterion = res.result[0].criterion;
          this.study_contact = res.result[0].study_contact;


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
}
