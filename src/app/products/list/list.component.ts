import { Component, OnInit } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { ProductsService } from '../../services/products.service';
@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ CommonModule, RouterModule ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {

  constructor(
    private router: Router,
    private productsService: ProductsService
  ) { }

  public products: any[] = [];

  ngOnInit(): void {
    this.getProducts();
  }
  
  getProducts() : void {
    this.productsService.getAll().subscribe(data => {
      console.log(data);
      this.products = data;
    })
  }
}
