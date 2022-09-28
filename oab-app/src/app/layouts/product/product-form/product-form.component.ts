import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { imageHelper } from 'src/app/components/helps/image-help';
import { LoadingService } from 'src/app/components/service/loading.service';
import { UserService } from '../../user/user.service';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  listStatus = [
    { id: 1, name: 'Ativo' },
    { id: 0, name: 'Desativado' }
  ];
  disabled = false;
  retunrUrl = '../list'
  listDepartament = [];
  routerId = 0;
  imagePath: any;
  imgURL: any;
  message: string = '';
  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private loadingService: LoadingService,
    private productService: ProductService,
    public activeRoute: ActivatedRoute) { }
  form = this.fb.group({
    id: [''],
    sku: ['', [Validators.required]],
    name: ['', [Validators.required]],
    status: ['', [Validators.required]],
    description: [''],
    image: [''],
    price: ['', [Validators.required]],
  });

  ngOnInit(): void {
    this.routerId = this.activeRoute.snapshot.params['id'];
    if (this.routerId) {
      this.disabled = this.activeRoute.snapshot.data['detail'] ? true : false;
      this.retunrUrl = '../../list'
      this.getById(this.routerId);
    }
  }
  getById(id: any) {
    this.productService.httpGetId(id).subscribe(data => {
      if (data && data.status) {
        this.form.patchValue(data.object);
        this.imgURL = data.object.image;
      }
    }), (error: any) => {
      console.log(error);
    };
    ;
  }
  formClear() {
    this.message = '';
    this.imgURL = null;
    this.imagePath = '';
    this.form.reset();
  }
  save() {
    if (!this.form.valid) return;

    this.loadingService.start();
    if (this.activeRoute.snapshot.params['id']) {
      this.productService.httpPut(this.form.value).subscribe((data) => {
        this.loadingService.stop();

        if (data && data.status) {
          this.formClear();
          this.toastr.success(data.message);
        } else {
          this.toastr.error(data.message);
        }
      }), (error: any) => {
        this.toastr.error(error);
        this.loadingService.stop();
      }
    } else {
      this.productService.post(this.form.value, (data: { status: any; message: string; }) => {
        this.loadingService.stop();
        if (data && data.status) {
          this.formClear();
          this.toastr.success(data.message);
        } else {
          this.toastr.error(data.message);
        }
      }), (error: any) => {
        this.toastr.error(error);
        this.loadingService.stop();
      }
    }

  }
  preview(files: any) {
    const imageh = new imageHelper();
    const image = imageh.preview(files);
    setTimeout(() => {
      this.message = image.message;
      this.imgURL = image.imgURL;
      this.imagePath = image.imagePath;
      this.form.get('image')?.setValue(image.image);
    }, 50);

  }
}