import { Component } from '@angular/core';

@Component({
  selector: 'app-new-route',
  templateUrl: 'new-route.page.html',
  styleUrls: ['new-route.page.scss'],
})
export class NewRoutePage {
  items = [
    { img: 'https://source.unsplash.com/random/900x500?sig=1', title: 'Realidad Aumentada', content: 'Explorando realidades expandidas.' },
    { img: 'https://source.unsplash.com/random/900x500?sig=2', title: 'Blockchain', content: 'La revolución de las finanzas y más allá.' },
    { img: 'https://source.unsplash.com/random/900x500?sig=3', title: 'Inteligencia Artificial', content: 'Automatización y aprendizaje profundo.' },
    { img: 'https://source.unsplash.com/random/900x500?sig=4', title: 'IoT', content: 'Conectando el mundo físico y digital.' },
    { img: 'https://source.unsplash.com/random/900x500?sig=5', title: 'Robótica', content: 'Robots que cambian el mundo.' },
    { img: 'https://source.unsplash.com/random/900x500?sig=6', title: 'Vehículos Autónomos', content: 'El futuro del transporte.' },
    { img: 'https://source.unsplash.com/random/900x500?sig=7', title: 'Energías Renovables', content: 'Hacia un futuro sostenible.' },
    { img: 'https://source.unsplash.com/random/900x500?sig=8', title: 'Genómica', content: 'Revolucionando la medicina personalizada.' }
  ];
}
