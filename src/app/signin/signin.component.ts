import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ToastComponent } from '../ui/toast/toast.component';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [RouterLink, FormsModule, ToastComponent],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {
  accountService = inject(AccountService);
  router = inject(Router);

  toastHeading = ""; toastDescription = ""; toastVisible = false;
  onLogin(form: NgForm) {
    if (form.valid) {
      console.log(form.value);
      this.accountService.logInAccount(form.value).subscribe({
        next: res => {
          form.reset();
          const responese = res as any;
          // console.log(responese.accountNumber̥);
          this.router.navigate(["dashboard"]);
          localStorage.setItem("account",responese.accountNumber);
        },
        error: err => {
          this.generateToast("Error", "Invalid username or password");
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