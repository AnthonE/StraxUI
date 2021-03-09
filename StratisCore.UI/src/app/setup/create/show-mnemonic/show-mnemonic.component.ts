import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { WalletCreation } from '@shared/models/wallet-creation';
import { GlobalService } from '@shared/services/global.service';
import { ClipboardService } from 'ngx-clipboard';
import { SnackbarService } from 'ngx-snackbar';

@Component({
  selector: 'app-show-mnemonic',
  templateUrl: './show-mnemonic.component.html',
  styleUrls: ['./show-mnemonic.component.scss']
})
export class ShowMnemonicComponent implements OnInit, OnDestroy {
  constructor(private route: ActivatedRoute, private router: Router, private globalService: GlobalService, private clipboardService: ClipboardService, private snackbarService: SnackbarService) { }
  private mnemonic: string;
  private subscription: Subscription;
  private newWallet: WalletCreation;
  public mnemonicArray: string[];

  ngOnInit(): void {
    this.subscription = this.route.queryParams.subscribe(params => {
      this.newWallet = new WalletCreation(
        params["name"],
        params["mnemonic"],
        params["password"],
        params["passphrase"]
      )
    });

    this.showMnemonic();
  }

  private showMnemonic(): void {
    this.mnemonic = this.newWallet.mnemonic;
    this.mnemonicArray = this.mnemonic.split(" ");
  }

  public copyToClipboard(): void {
    this.clipboardService.copyFromContent(this.mnemonic);
    this.snackbarService.add({
      msg: `Secret words have been copied to your clipboard.`,
      customClass: 'notify-snack-bar',
      action: {
        text: null
      }
    });
  }

  public onContinueClicked(): void {
    this.router.navigate(['/setup/create/confirm-mnemonic'], { queryParams : { name: this.newWallet.name, mnemonic: this.newWallet.mnemonic, password: this.newWallet.password, passphrase: this.newWallet.passphrase }});
  }

  public onCancelClicked(): void {
    this.router.navigate(['']);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
