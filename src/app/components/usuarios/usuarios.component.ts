import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css'
})
export class UsuariosComponent {

  constructor(private router: Router) {
  }
  navegateToPosts(){
    this.router.navigate(["/posts"])
  }
}
