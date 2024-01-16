import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {ContactComponent} from "./components/contact/contact.component";
import {AboutComponent} from "./components/about/about.component";
import {SigninComponent} from "./components/signin/signin.component";
import {NotFoundComponent} from "./components/not-found/not-found.component";
import {UsuariosComponent} from "./components/usuarios/usuarios.component";
import {PostComponent} from "./components/post/post.component";

const routes: Routes = [
  {path: "", component: UsuariosComponent},
  {path: "contact", component: ContactComponent},
  {path: "about", component: AboutComponent},
  {path: "signin", component: SigninComponent},
  {path: "posts", component: PostComponent},
  {path: "**", component: NotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
