import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../../services/search.service';
import { LoadingService } from '../../../services/loading.service';
import { FilterService } from '../../../services/filter.service';
import { forkJoin } from 'rxjs';
import { Category, Vehicle } from '../../../models/filter.model';
import { SearchProduct } from '../../../models/search.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent implements OnInit {

  vehicles: Vehicle[] = []
  vehiclesTemp: Vehicle[] = []
  categories: Category[] = []
  categoriesTemp: Category[] = []
  termCategory: string = '';
  termVehicle: string = '';

  selectedVehicles: string[] = []
  selectedCategories: string[] = [];
  constructor(
    public searchService: SearchService,
    public loadingService: LoadingService,
    private filterService: FilterService,
  ) { }

  ngOnInit(): void {
    this.loadingService.setLoading(true)
    forkJoin({
      vehicles: this.filterService.getVehicles(),
      categories: this.filterService.getCategories()
    }).subscribe(data => {
      this.vehicles = data.vehicles.content;
      this.categories = data.categories.content;
      this.categoriesTemp = data.categories.content;
      this.vehiclesTemp = data.vehicles.content;
    }).add(() => this.loadingService.setLoading(false))
  }

  addVehicle($ev: Event, selected: Vehicle): void {
    const checkbox = $ev.target as HTMLInputElement;
    if (checkbox.checked) {
      this.selectedVehicles.push(selected.nombre)
    } else {
      this.selectedVehicles = this.selectedVehicles.filter(car => car !== selected.nombre);
    }
    this.searchService.setSearchVehicle(this.selectedVehicles.join(', '))
    this.applySearchValues()
  }
  addCategory($ev: Event, selected: Category): void {
    const checkbox = $ev.target as HTMLInputElement;
    if (checkbox.checked) {
      this.selectedCategories.push(selected.nombre)
    } else {
      this.selectedCategories = this.selectedCategories.filter(cat => cat !== selected.nombre);
    }
    this.searchService.setSearchCategory(this.selectedCategories.join(', '))
    this.applySearchValues()
  }

  applySearchValues(): void {
    this.loadingService.setLoading(true)
    this.searchService.setSearchResult([])
    this.searchService.searchProduct().subscribe(data => {
      this.searchService.setSearchResult(data.results)
      this.searchService.setSearchCount(data.count)
    }).add(() => this.loadingService.setLoading(false))
  }

  changeCategory(): void {
    this.categoriesTemp = this.categories.filter(cat => cat.nombre.toLowerCase().includes(this.termCategory.toLowerCase()))
  }
  changeVehicle(): void {
    this.vehiclesTemp = this.vehicles.filter(ve => ve.nombre.toLowerCase().includes(this.termVehicle.toLowerCase()))
  }

  changeFilterPrice(event: any): void {
    let listSorter: SearchProduct[] = []
    switch (event.target.value) {
      case 'ma':
        listSorter = this.searchService.getSearchResult().sort((a, b) => b.precio - a.precio);
        this.searchService.setSearchResult(listSorter)
        break;
      case 'me':
        listSorter = this.searchService.getSearchResult().sort((a, b) => a.precio - b.precio);
        this.searchService.setSearchResult(listSorter)
        break;
    }
  }
}
