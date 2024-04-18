import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoaderService } from 'src/app/services/loader.service'; // Servicio de loader
import { Subscription } from 'rxjs'; // Importación para manejar suscripciones

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html', // Plantilla HTML del loader
  styleUrls: ['./loader.component.scss'] // Estilos SCSS del loader
})
export class LoaderComponent implements OnInit, OnDestroy {
  // Bandera para indicar si el loader está activo o no
  isLoading: boolean = false;
  // Suscripción al estado de carga del loader
  private subscription: Subscription = new Subscription();

  constructor(private loaderService: LoaderService) {}

  // Método que se ejecuta al inicializar el componente
  ngOnInit() {
    // Suscripción al estado de carga del loader
    this.subscription = this.loaderService.isLoading.subscribe(status => {
      // Actualiza el estado de isLoading con el estado recibido del servicio
      this.isLoading = status;
    });
  }

  // Método que se ejecuta al destruir el componente
  ngOnDestroy() {
    // Se desuscribe de la suscripción al servicio de loader
    this.subscription.unsubscribe();
  }
}
