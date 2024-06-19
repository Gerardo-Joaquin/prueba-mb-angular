import { Component, OnInit } from '@angular/core';
import { LandingService } from '../../../services/home/landing.service';
import { SearchService } from '../../../services/search.service';
import { CartService } from '../../../services/home/cart.service';
import { Router } from '@angular/router';
import { LoadingService } from '../../../services/loading.service';
import { User } from '../../../models/user.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {

  term: string = '';
  userData!: User;
  constructor(
    private searchService: SearchService,
    private router: Router,
    public cartService: CartService,
    private loadingService: LoadingService,
  ) {}

  ngOnInit(): void {
    const userData = localStorage.getItem('user-session')
    if (userData) {
      this.userData = JSON.parse(userData);
    }
  }

  searchTerm(): void {
    this.searchService.setSearchResult([])
    this.loadingService.setLoading(true)
    this.searchService.setSearchTerm(this.term)
    this.searchService.searchProduct().subscribe(data => {
      this.searchService.setSearchResult(data.results);
      this.searchService.setSearchCount(data.count)
    }).add(() => this.loadingService.setLoading(false))
    this.router.navigateByUrl('/home/search')
  }
  closeSession(): void {
    localStorage.removeItem('user-session')
    window.location.reload()
  }

}
