import { CurrencyPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { HeaderComponent } from '../header/header.component';
import { ModalComponent } from '../modal/modal.component';
import { ToastComponent } from '../ui/toast/toast.component';
import { FormsModule, NgForm } from '@angular/forms';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-deposite',
  standalone: true,
  imports: [CurrencyPipe, SidebarComponent, HeaderComponent, ModalComponent, ToastComponent, FormsModule],
  templateUrl: './deposite.component.html',
  styleUrl: './deposite.component.css'
})
export class DepositeComponent {
  accountService = inject(AccountService);
  totalRecord = Array(10);
  modalVisible = false;
  toastHeading = "";
  toastDescription = "";
  toastVisible = false;

  onDeposite(form: NgForm) {
    if (form.valid) {
      const balance = form.value.balance;
      this.accountService.depositBalance(balance)
        .subscribe({
          next: res => {
            this.generateToast("Sucess", " Successfully Deposited");

            form.reset(); // clear the form after successful submission
          },
          error: err => {
            console.log(err);

            const error = err.error;
            this.generateToast(error['error'], error['message'])
          }
        });
    }
  }
  generateToast(heading: string, description: string) {
    this.toastHeading = heading;
    this.toastDescription = description;
    this.toastVisible = true;

    setTimeout(() => {
      this.toastVisible = false;
    }, 3000);
  }
}
