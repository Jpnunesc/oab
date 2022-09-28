import { Routes } from '@angular/router';
import { AuthGuard } from '../components/auth/auth.guard';
import { ProductFormComponent } from './product/product-form/product-form.component';
import { ProductListComponent } from './product/product-list/product-list.component';


export const LayoutRoutes: Routes = [
    { path: 'product/list', canActivate: [AuthGuard], component: ProductListComponent },
    { path: 'product/create', canActivate: [AuthGuard], data: {detail:false}, component: ProductFormComponent },
    { path: 'product/detail/:id', canActivate: [AuthGuard], data: {detail:true}, component: ProductFormComponent },
    { path: 'product/edit/:id', canActivate: [AuthGuard], data: {detail:false}, component: ProductFormComponent }
];
