import { Component, inject } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';
import { ToastComponent } from '../ui/toast/toast.component';
import { CurrencyPipe } from '@angular/common';
import { HeaderComponent } from "../header/header.component";
import { SidebarComponent } from "../sidebar/sidebar.component";
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-withdrawal',
  standalone: true,
  templateUrl: './withdrawal.component.html',
  styleUrl: './withdrawal.component.css',
  imports: [ModalComponent, ToastComponent, CurrencyPipe, HeaderComponent, SidebarComponent]
})
export class WithdrawalComponent {
  accountService = inject(AccountService);
  totalRecord: Array(10);
  modalVisible = false;
  toastHeading = "";
  toastDescription = "";
  toastVisible = false;
}
