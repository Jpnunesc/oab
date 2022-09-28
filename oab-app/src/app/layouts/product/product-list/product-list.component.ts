import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { LoadingService } from 'src/app/components/service/loading.service';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  data: any[] = [];
  opemModal = false;
  idItemDelete = 0;
  totalItems = 0;
  formFilter: any;
  constructor(private ProductService: ProductService,
    private fb: FormBuilder,
    private loadingService: LoadingService,
    private toastr: ToastrService,) { }
  ngOnInit(): void {

    this.formFilter = this.fb.group({
      name: [''],
      page:[''],
      pageSize: ['']
    });
    
    this.formFilter.get('page').setValue('1');
    this.formFilter.get('pageSize')?.setValue('50');
    this.getProduct();
  }
  getProduct() {
    this.loadingService.start();
    this.ProductService.getByFilter(this.formFilter.value).subscribe((element) => {
      this.loadingService.stop();
      if (element && element.status) {
        this.data = element.object.product;
        this.totalItems = element.object.totalItems;
      } else {
        this.data = [];
      }
    }), ((error: any) => {
      this.loadingService.stop();
      this.toastr.error(error);
    })
  }
  deleteItem() {
    if (this.idItemDelete) {
      this.ProductService.httpDelete(this.idItemDelete).subscribe(data => {
        this.opemModal = false;
        if (data && data.status) {
          this.toastr.success(data.message);
          this.getProduct();
        } else {
          this.toastr.error(data.message);
        }
      }), (error: any) => {
        this.toastr.error('Internal error!');
        console.log(error);
      }
    }
  }
}
