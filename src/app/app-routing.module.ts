import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { ForumComponent } from './forum/forum.component';
import { FaqComponent } from './faq/faq.component';

const routes: Routes = [
{ path: 'login', component: LoginComponent },
 { path: 'signup', component: SignupComponent},
 { path: 'home', component: HomeComponent},
 { path: 'blog', component: BlogComponent},
 { path: 'contact', component: ContactComponent},
 { path: 'forum', component: ForumComponent},
 { path: 'faq', component: FaqComponent},
 { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
