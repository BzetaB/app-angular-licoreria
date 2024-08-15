import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './dashboard/home/home.component';
import { ColaboradorListaComponent } from './dashboard/colaborador/colaborador-lista/colaborador-lista.component';
import { ClientesListaComponent } from './dashboard/clientes/clientes-lista/clientes-lista.component';
import { ProductoListaComponent } from './dashboard/producto/producto-lista/producto-lista.component';
import { VentaListaComponent } from './dashboard/venta/venta-lista/venta-lista.component';
import { CategoriaListaComponent } from './dashboard/categoria/categoria-lista/categoria-lista.component';
import { EntradaProductoListaComponent } from './dashboard/entrada-producto/entrada-producto-lista/entrada-producto-lista.component';
import { EntradaDetalleListaComponent } from './dashboard/entrada-detalle/entrada-detalle-lista/entrada-detalle-lista.component';
import { DetalleVentaListaComponent } from './dashboard/detalle-venta/detalle-venta-lista/detalle-venta-lista.component';
import { ComprobanteListaComponent } from './dashboard/comprobante/comprobante-lista/comprobante-lista.component';
import { DespachoListaComponent } from './dashboard/despacho/despacho-lista/despacho-lista.component';
import { authGuard } from './auth.guard';

export const routes: Routes = [
    {path: "login", component:LoginComponent},
    {path: "dashboard", component:DashboardComponent,
        canActivate:[authGuard],
        children:[
            {path:"home",component:HomeComponent},
            {path:"colaborador",component:ColaboradorListaComponent},
            {path:"cliente",component:ClientesListaComponent},
            {path:"producto",component:ProductoListaComponent},
            {path:"venta",component:VentaListaComponent},
            {path:"categoria",component:CategoriaListaComponent},
            {path:"entrada-producto",component:EntradaProductoListaComponent},
            {path:"entrada-detalle",component:EntradaDetalleListaComponent},
            {path:"detalle-venta",component:DetalleVentaListaComponent},
            {path:"comprobante",component:ComprobanteListaComponent},
            {path:"despacho",component:DespachoListaComponent},
        ]},
    {path: "", redirectTo: "login", pathMatch:"full"},
    {path: "**", component:PageNotFoundComponent},
    {path: "login", component:LoginComponent},
];
