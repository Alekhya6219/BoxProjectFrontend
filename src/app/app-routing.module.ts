import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewtestComponent } from './viewtest/viewtest.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { NavComponent } from './nav/nav.component';
import { SportcardsComponent } from './sportcards/sportcards.component';
import { BookcomponentComponent } from './bookcomponent/bookcomponent.component';
import { NavsecondComponent } from './navsecond/navsecond.component';

const routes: Routes = [
  { path: 'viewdetails', component:  ViewtestComponent},
  { path: 'loginreq', component : LoginpageComponent},
  { path: '', component : NavComponent},
  { path: 'sportcards', component : SportcardsComponent},
  { path : 'bookcard', component : BookcomponentComponent},
  { path : 'navsec', component :NavsecondComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
