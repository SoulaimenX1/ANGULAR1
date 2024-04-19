import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CustomerlistComponent } from './customerlist/customerlist.component';
import { EditUserComponent } from './viewprofil/edit-user.component';
import { ViewprojectComponent } from './viewproject/viewproject.component';
import { ViewComponent } from './viewproject/view/view.component';
import { EditComponent } from './viewproject/edit/edit.component';
import { CreateComponent } from './viewproject/create/create.component';
import { GerersectionComponent } from './gerersection/gerersection.component';
import { ViewpropertiesComponent } from './viewproperties/viewproperties.component';

@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    RegisterComponent,
    CustomerlistComponent,
    EditUserComponent,
    ViewprojectComponent,
    ViewComponent,
    EditComponent,
    CreateComponent,
    GerersectionComponent,
    ViewpropertiesComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    HttpClientModule,
    FormsModule 
  ]
})
export class AuthModule { }
