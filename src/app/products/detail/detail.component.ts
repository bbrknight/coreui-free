import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss'
})
export class DetailComponent {
  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) { }

  public product: any;

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct() : void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.productsService.get(id).subscribe(data => {
      console.log(data);
      this.product = data;
    })
  }
}
