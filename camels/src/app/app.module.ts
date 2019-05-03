import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { SideComponent } from './side/side.component';
import { ContentInicialComponent } from './content/content-inicial/content-inicial.component';
import { ContentContrateComponent } from './content/content-contrate/content-contrate.component';
import { ContentOferecaComponent } from './content/content-ofereca/content-ofereca.component';
import { ContentPerfilComponent } from './content/content-perfil/content-perfil.component';
import { SideEspecializacaoComponent } from './side/side-especializacao/side-especializacao.component';
import { SideUsuarioComponent } from './side/side-usuario/side-usuario.component';
import { SideOfertaComponent } from './side/side-oferta/side-oferta.component';
import { SideServicoComponent } from './side/side-servico/side-servico.component';
import { SideLoginComponent } from './side/side-login/side-login.component';
import { MenuInicialComponent } from './menu/menu-inicial/menu-inicial.component';
import { MenuMainComponent } from './menu/menu-main/menu-main.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ContentComponent,
    FooterComponent,
    SideComponent,
    ContentInicialComponent,
    ContentContrateComponent,
    ContentOferecaComponent,
    ContentPerfilComponent,
    SideEspecializacaoComponent,
    SideUsuarioComponent,
    SideOfertaComponent,
    SideServicoComponent,
    SideLoginComponent,
    MenuInicialComponent,
    MenuMainComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
