import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root' // Se proporciona en el módulo raíz de la aplicación
})
export class LoaderService {
  // BehaviorSubject para controlar el estado de carga del loader
  private _isLoading = new BehaviorSubject<boolean>(false);
  // Observable para permitir la suscripción a los cambios de estado de carga
  public isLoading = this._isLoading.asObservable();
  // Variable configurable para el tiempo de espera del loader
  private _displayTime = 1000;

  constructor() {}

  // Método para mostrar el loader con un tiempo de espera opcional
  show(displayTime?: number) {
    // Asigna el tiempo de espera proporcionado o el tiempo predeterminado
    this._displayTime = displayTime || this._displayTime;
    // Establece el estado de isLoading como true
    this._isLoading.next(true);
    // Oculta el loader después del tiempo de espera
    setTimeout(() => {
      this._isLoading.next(false);
    }, this._displayTime);
  }

  // Método para ocultar el loader
  hide() {
    // Establece el estado de isLoading como false
    this._isLoading.next(false);
  }

  // Getter y setter para la variable _displayTime
  set displayTime(ms: number) {
    this._displayTime = ms;
  }

  get displayTime(): number {
    return this._displayTime;
  }
}
