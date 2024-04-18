// Importaciones de módulos y componentes necesarios
import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Router } from '@angular/router';
import { LoaderService } from 'src/app/services/loader.service'; // Servicio de loader
import { Subscription } from 'rxjs'; // Importación para manejar suscripciones

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html', // Plantilla HTML del carrusel
  styleUrls: ['./carousel.component.scss'] // Estilos SCSS del carrusel
})
export class CarouselComponent implements OnInit, OnDestroy {
  // Arreglo de imágenes para el carrusel
  public images = [
    { src: 'assets/images/imagen1.jpeg', text: 'Presentando la primer imagen' },
    { src: 'assets/images/imagen2.jpeg', text: 'Presentando la segunda imagen' },
    { src: 'assets/images/imagen3.jpeg', text: 'Presentando la tercera imagen' },
    { src: 'assets/images/imagen4.jpeg', text: 'Presentando la cuarta imagen' },
    { src: 'assets/images/imagen5.jpeg', text: 'Presentando la quinta imagen' },
    // más imágenes...
  ];
  // Índice de la imagen actual en el carrusel
  public currentImageIndex = 0;
  // Bandera para controlar la visualización del carrusel
  public showCarousel: boolean = false;
  // Identificador del intervalo para cambiar las imágenes
  private imageInterval: any;
  // Suscripción al servicio de loader
  private subscription: Subscription = new Subscription(); 
  // Intervalo de tiempo entre cambios de imagen (configurable)
  @Input() interval: number = 2000;
  // Flag para rastrear si el loader estaba activo
  private loaderWasActive: boolean = false;

  constructor(private loaderService: LoaderService, private router: Router) {}

  // Método que se ejecuta al inicializar el componente
  ngOnInit() {
    // Suscripción al estado de carga del loader
    this.subscription = this.loaderService.isLoading.subscribe(isLoading => {
      // Verifica si el loader está activo
      if (isLoading) {
        this.loaderWasActive = true;  // Marca el loader como activo
      }
      // Verifica si el loader estaba activo y ahora no lo está
      if (this.loaderWasActive && !isLoading) {
        // Muestra el carrusel
        this.showCarousel = true;
        // Inicia el carrusel
        this.startCarousel();
        // Reinicia el flag de loader activo
        this.loaderWasActive = false;
      }
    });
    // Muestra el loader
    this.loaderService.show();
  }

  // Método privado para iniciar el carrusel
  private startCarousel() {
    let timesShown = 0; // Contador de veces que se ha mostrado una imagen
    // Inicia un intervalo para cambiar las imágenes
    this.imageInterval = setInterval(() => {
      // Cambia al siguiente índice de imagen
      this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
      timesShown++;
      // Verifica si se han mostrado todas las imágenes
      if (timesShown >= this.images.length) {
        // Detiene el intervalo y navega a la nueva página
        clearInterval(this.imageInterval);
        this.router.navigate(['/new-page']);
      }
    }, this.interval);
  }

  // Método que se ejecuta al destruir el componente
  ngOnDestroy() {
    // Limpieza o reinicio de estado cuando el componente se destruye
    this.currentImageIndex = 0; // Reinicia el índice de la imagen actual
    this.showCarousel = false; // Oculta el carrusel
    clearInterval(this.imageInterval); // Detiene el intervalo de cambio de imagen

    // Se desuscribe de la suscripción al servicio de loader
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
