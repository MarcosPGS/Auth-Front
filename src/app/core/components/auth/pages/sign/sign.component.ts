import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ChildActivationStart, Route, Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.scss'],
})
export class SignComponent implements OnInit {
  formAuth!: FormGroup;
  msgError!: string;
  constructor(private formBuild: FormBuilder, private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.formAuth = this.formBuild.group({
      email: [null, [ Validators.required, Validators.email]],
      password: [null, [Validators.required]]
    });
  }

  submitForm(): void {
    if(this.formAuth.valid){
      this.authService.sign(this.formAuth.value).subscribe({
        next: (res) => {
          this.router.navigate(['/admin']);
        },
        error: (err) => {
          this.msgError = err;
        },
      })
    }
  }
}
