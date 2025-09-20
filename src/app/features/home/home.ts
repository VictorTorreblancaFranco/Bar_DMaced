import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router'; // 👈 importar esto

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink], // 👈 agregarlo aquí
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home implements OnInit {
  constructor(private meta: Meta, private title: Title) {}

  ngOnInit(): void {
    this.title.setTitle('Dmaced | Bar de Cocteles');
    this.meta.addTags([
      { name: 'description', content: 'Bar Dmaced - Cocteles, luces cálidas y ambiente único.' },
      { property: 'og:title', content: 'Bar Dmaced' },
      { property: 'og:description', content: 'Descubre nuestra carta de cocteles.' },
      { property: 'og:image', content: '/images/macedfondo.jpg' }
    ]);
  }
}
