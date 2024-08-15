import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { MaterialModule } from '../angular-material/material/material.module';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterOutlet,MaterialModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  constructor(private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService
  ){

  }

  irHome(){
    this.router.navigate(["home"], {relativeTo: this.route})
  }
  irProducto(){
    this.router.navigate(["producto"], {relativeTo: this.route})
  }
  irCategoria(){
    this.router.navigate(["categoria"], {relativeTo: this.route})
  }
  irVenta(){
    this.router.navigate(["venta"], {relativeTo: this.route})
  }
  irColaborador(){
    this.router.navigate(["colaborador"], {relativeTo: this.route})
  }
  irCliente(){
    this.router.navigate(["cliente"], {relativeTo: this.route})
  }
  irDetalleVenta(){
    this.router.navigate(["detalle-venta"], {relativeTo: this.route})
  }
  irDespacho(){
    this.router.navigate(["despacho"], {relativeTo: this.route})
  }
  irComprobante(){
    this.router.navigate(["comprobante"], {relativeTo: this.route})
  }
  irEntradaProducto(){
    this.router.navigate(["entrada-producto"], {relativeTo: this.route})
  }
  irDetalleEntrada(){
    this.router.navigate(["entrada-detalle"], {relativeTo: this.route})
  }

  salir(){
    this.authService.logout()
    this.router.navigateByUrl("/login")
  }


}
