import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EbookTermPage } from './ebook-term.page';

describe('EbookTermPage', () => {
  let component: EbookTermPage;
  let fixture: ComponentFixture<EbookTermPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EbookTermPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EbookTermPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
