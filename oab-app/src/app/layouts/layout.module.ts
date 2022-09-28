import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LayoutRoutes } from './layout.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductFormComponent } from './product/product-form/product-form.component';
import { ProductListComponent } from './product/product-list/product-list.component'; 
import { ModalComponent } from '../components/modal/modal.component';
import { FieldErrorsComponent } from '../components/field-errors/field-errors.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './user/login/login.component';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { LayoutBaseComponent } from './layout-base/layout-base.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ModalModule } from 'ngx-bootstrap/modal';




@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(LayoutRoutes),
    ReactiveFormsModule,
    NgxPaginationModule,
    FormsModule,
    ModalModule.forRoot()
  ],
  declarations: [
    ProductFormComponent,
    ProductListComponent,
    ModalComponent,
    FieldErrorsComponent,
    UserComponent,
    LoginComponent,
    NavbarComponent,
    LayoutBaseComponent,

  ],
  exports: [
    ModalComponent,
    FieldErrorsComponent,
    NavbarComponent
  ]
  
})

export class LayoutModule {}
