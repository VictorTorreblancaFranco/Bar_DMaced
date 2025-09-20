import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home implements OnInit {
  constructor(private meta: Meta, private title: Title) { }

  ngOnInit(): void {
    this.title.setTitle('Dmaced | Bar de Cocteles');
    this.meta.addTags([
      { name: 'description', content: 'Bar Dmaced - Cocteles, luces cálidas y ambiente único.' },
      { property: 'og:title', content: 'Bar Dmaced' },
      { property: 'og:description', content: 'Descubre nuestra carta de cocteles en un ambiente con luces cálidas y vibrantes.' },
      { property: 'og:image', content: 'https://images.unsplash.com/photo-1521017432531-fbd92d768814?q=80&w=1200&auto=format&fit=crop' }
    ]);
  }
}
