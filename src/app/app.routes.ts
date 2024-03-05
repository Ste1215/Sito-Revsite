import { Routes } from '@angular/router';
import { DashboardComponent } from './componenti/dashboard/dashboard.component';
import { LoginComponent } from './componenti/login/login.component';
import { RegisterComponent } from './componenti/register/register.component';
import { CategorieComponent } from './componenti/categorie/categorie.component';
import { RecensioniComponent } from './componenti/recensioni/recensioni.component';
import { Pagina3Component } from './componenti/pagina3/pagina3.component';
import { AuthGuard } from './auth/auth.guard';
import { NotfoundComponent } from './componenti/notfound/notfound.component';
import { HomeComponent } from './componenti/home/home.component';
import { ElettronicaComponent } from './componenti/elettronica/elettronica.component';
import { StreamingComponent } from './componenti/streaming/streaming.component';
import { ValutazioniComponent } from './componenti/valutazioni/valutazioni.component';
import { ECommerceComponent } from './componenti/e-commerce/e-commerce.component';
import { RecensioniStreamingComponent } from './componenti/recensioni-streaming/recensioni-streaming.component';
import { ValutazioniStreamingComponent } from './componenti/valutazioni-streaming/valutazioni-streaming.component';

export const routes: Routes = [
    { path: 'homepage', component: HomeComponent },
    {
        path: '', component: DashboardComponent,canActivate: [AuthGuard],
        children:[
        {path:'',redirectTo: '/categorie',pathMatch:'full'},
        {path:'categorie',component:CategorieComponent},
        {path:'recensioni',component:RecensioniComponent},
        {path:'pagina3',component:Pagina3Component},
        {path: 'elettronica',component: ElettronicaComponent},
        {path: 'streaming',component: StreamingComponent},
        {path: 'E-commerce',component: ECommerceComponent},
        {path: 'valutazioni',component: ValutazioniComponent},
        {path: 'recensioni/recensioneStreaming',component: RecensioniStreamingComponent},
        {path: 'streaming/ValutazioniStreaming',component: ValutazioniStreamingComponent},
    ]},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: '404', component: NotfoundComponent},
    {path: '**', redirectTo:''},
];
