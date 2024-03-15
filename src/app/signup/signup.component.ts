import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { AccountService } from '../services/account.service';
import { ToastComponent } from '../ui/toast/toast.component';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [RouterLink,FormsModule, ToastComponent],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  accountService = inject(AccountService);
 

  toastHeading = ""; toastDescription = ""; toastVisible = false
  onSubmit(form: NgForm) {
    if (form.valid) {
      this.accountService.createAccount(form.value)
        .subscribe({
          next: res => {
            this.generateToast("Sucess", "Account created successfully");
           
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