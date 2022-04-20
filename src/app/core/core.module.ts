import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CoreRoutingModule } from './core-routing.module';
import { SignComponent } from './components/auth/pages/sign/sign.component';
import { AuthService } from './services/auth.service';


@NgModule({
  declarations: [
    SignComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    ReactiveFormsModule,
  ],
  exports: [ SignComponent],
  providers: [AuthService]
})
export class CoreModule { }
