import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/layout/admin/admin.component';
import { DashboarComponent } from './admin/page/dashboar/dashboar.component';
import { ProductComponent } from './admin/page/product/product.component';
import { TodoComponent } from './admin/page/todo/todo.component';
import { UserComponent } from './admin/page/user/user.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'admin'
  },
  {
    path: 'admin',
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboar'
      },
      {
        path: 'dashboar',
        canActivate: [AuthGuard],
        component: DashboarComponent,
      },
      {
        path: 'dashboar',
        component: DashboarComponent,
      },
      {
        path: 'product',
        component: ProductComponent,
      },
      {
        path: 'user',
        component: UserComponent,
      },
      {
        path: 'todo',
        component: TodoComponent,
      }
    ],
    component:AdminComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
