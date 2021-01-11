import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { WalletSelectorComponent } from './wallet-selector.component';

describe('WalletSelectorComponent', () => {
  let component: WalletSelectorComponent;
  let fixture: ComponentFixture<WalletSelectorComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ WalletSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WalletSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
