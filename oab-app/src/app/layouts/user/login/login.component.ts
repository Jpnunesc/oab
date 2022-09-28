import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { first } from 'rxjs/operators';
import { AuthenticationService } from '../../../components/service/authentication.service';
import { LoadingService } from '../../../components/service/loading.service';




@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})

export class LoginComponent implements OnInit {
  loading = false;
  submitted = false;
  error = '';
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private loadingService: LoadingService,
    private toastr: ToastrService
  ) { }
  form = this.formBuilder.group({
    nome: ['', [Validators.required]],
    senha: ['', [Validators.required]],
  });
  ngOnInit() {
    this.authenticationService.logout();
  }

  get f() { return this.form.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    this.loadingService.start();
    this.authenticationService.login(this.form.get('nome')?.value , this.form.get('senha')?.value)
      .pipe(first())
      .subscribe(
        data => {
          this.loadingService.stop();
          if (data.success) {
            this.toastr.success(data.message);
           this.router.navigate(['/product/list']);
          } else {
            this.toastr.error(data.message);
          }
          this.loading = false;
        }, () => { this.loadingService.stop(); });
  }
}
