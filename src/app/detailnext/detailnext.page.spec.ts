import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailnextPage } from './detailnext.page';

describe('DetailnextPage', () => {
  let component: DetailnextPage;
  let fixture: ComponentFixture<DetailnextPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailnextPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailnextPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
