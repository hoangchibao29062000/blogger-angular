import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { AdminComponent } from './admin/layout/admin/admin.component';
import { HeaderComponent } from './admin/layout/block/header/header.component';
import { FooterComponent } from './admin/layout/block/footer/footer.component';
import { SidebarComponent } from './admin/layout/block/sidebar/sidebar.component';
import { UserComponent } from './admin/page/user/user.component';
import { ProductComponent } from './admin/page/product/product.component';
import { DashboarComponent } from './admin/page/dashboar/dashboar.component';
import { FormComponent } from './admin/page/user/childs/form/form.component';
import { ListComponent } from './admin/page/user/childs/list/list.component';
import { HightlightDirective } from './directives/hightlight.directive';
import { TuoiPipe } from './pipes/tuoi.pipe';
import { TodoComponent } from './admin/page/todo/todo.component';
import { LoginComponent } from './admin/page/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    AdminComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    UserComponent,
    ProductComponent,
    DashboarComponent,
    FormComponent,
    ListComponent,
    HightlightDirective,
    TuoiPipe,
    TodoComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
