import { NgModule } from '@angular/core';
import { SignComponent } from './components/auth/pages/sign/sign.component';

//components
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: SignComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class CoreRoutingModule { }
