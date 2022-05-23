import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './page/auth/auth.component';
import { HomeComponent } from './page/home/home.component';

const routes: Routes = [
{
  path:'',
  component:AuthComponent
},
{
  path:'home',
  component:HomeComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
