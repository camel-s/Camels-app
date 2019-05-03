import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../services/usuario.service';
import { Usuario } from '../models/usuario.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  providers: [ UsuarioService ]
})
export class MenuComponent implements OnInit {

  private usuario: Usuario[]

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
   // this.usuario = this.usuarioService.getUsuario()
  }

}
