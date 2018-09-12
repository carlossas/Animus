import { NgModule } from '@angular/core';
// MODULO NECESARIO
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
// RUTAS
import { RouterModule } from '@angular/router';
// MODULOS DE HTTP
import { HttpModule, Http } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { BrowserModule } from '@angular/platform-browser';

// SERVICIOS
import { VistaService } from './services/vista.service';
import { PreloaderService } from './preloader/preloader.service';


// COMPONENTES
import { HeaderComponent } from './header/header.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { FooterComponent } from './footer/footer.component';
import { LoadingComponent } from './loading/loading.component';

@NgModule({
   declarations: [
        HeaderComponent,
        NopagefoundComponent,
        FooterComponent,
        LoadingComponent,
 ],
    exports: [
        NopagefoundComponent,
        HeaderComponent,
        FooterComponent,
        LoadingComponent
     ],
    imports: [
        BrowserModule,
    //HTTP
        HttpModule, 
        CommonModule,
        RouterModule,
        FormsModule,
        HttpClientModule
     ],
     providers:[
        VistaService,
        PreloaderService
     ]
})

export class SharedModule { }
