import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AnimationComponent } from './animation/animation.component';


const routes: Routes = [
  {path:'login',component:LoginComponent},
    {path:'animation',component:AnimationComponent},
  {path:'register',component:RegisterComponent},
  {path:'',redirectTo:'./app.component.html',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
