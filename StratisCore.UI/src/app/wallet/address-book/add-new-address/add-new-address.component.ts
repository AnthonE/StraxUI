import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ModalService } from '@shared/services/modal.service';
import { AddressLabel } from '@shared/models/address-label';
import { AddressBookService } from "@shared/services/address-book-service";
import { Animations } from '@shared/animations/animations';
import { SnackbarService } from 'ngx-snackbar';

@Component({
  selector: 'app-add-new-address',
  templateUrl: './add-new-address.component.html',
  styleUrls: ['./add-new-address.component.scss'],
  animations : Animations.fadeIn
})
export class AddNewAddressComponent {
  constructor(
    private activeModel: NgbActiveModal,
    private snackbarService: SnackbarService,
    private addressBookService: AddressBookService,
    private genericModalService: ModalService,
    private fb: FormBuilder) {
    this.buildAddressForm();
  }

  public addressForm: FormGroup;

  public formErrors = {
    'label': '',
    'address': ''
  };

  public validationMessages = {
    'label': {
      'required': 'Please enter a label for your address.',
      'minlength': 'A label needs to be at least 2 characters long.',
      'maxlength': 'A label can\'t be more than 40 characters long.'
    },
    'address': {
      'required': 'Please add a valid address.'
    }
  };

  private buildAddressForm(): void {
    this.addressForm = this.fb.group({
      // eslint-disable-next-line @typescript-eslint/unbound-method
      'label': ['', Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(40)])],
      // eslint-disable-next-line @typescript-eslint/unbound-method
      'address': ['', Validators.required],
    });

    this.addressForm.valueChanges
      .subscribe(() => this.onValueChanged());
  }

  public onValueChanged(): void {
    if (!this.addressForm) {
      return;
    }
    const form = this.addressForm;
    for (const field in this.formErrors) {
      this.formErrors[field] = '';
      const control = form.get(field);
      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += `${String(messages[key])} `;
        }
      }
    }
  }

  public createClicked(): void {
    const addressLabel = new AddressLabel(this.addressForm.get('label').value, this.addressForm.get('address').value, "");
    this.addressBookService.addAddressBookAddress(addressLabel)
      .then(() => {
        this.activeModel.close();
        setTimeout(() => {
          this.snackbarService.add({
            msg: `Contact ${addressLabel.label} has been created.`,
            customClass: 'notify-snack-bar',
            action: {
              text: null
            }
          });
        },500);

      }
      );
  }

  public closeClicked(): void {
    this.activeModel.close();
  }
}
