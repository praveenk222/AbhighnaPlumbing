import { Component, ViewChild } from '@angular/core';
import { ProductService } from '../services/product.service';
import { ProductDetailsService } from '../services/product-details.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  displayedColumns: string[] = ['ProductID', 'Name','Type', 'Measurement','UnitPrice', 'OldPrice', 'Discount', 'UnitInStock', 'ProductAvailable', 'ShortDescription','actions'];
  dataSource = new MatTableDataSource<any>([]);
  pageSizeOptions: number[] = [5, 10, 20];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private productService: ProductDetailsService) {
    this.getProduct();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  getProduct() {
    this.productService.getProductDetails().subscribe((res: any) => {
      this.dataSource.data = res;
    });
  }
  editProduct(product: any) {
    this.productService.updateProduct(product.ProductID,product).subscribe((res) => {
    console.log(res)
   });
    console.log('Edit Product:', product);
    // this.dialog.open(EditProductDialog, { data: product });
  }

  // Delete product
  deleteProduct(product: any) {
    if (confirm('Are you sure you want to delete this product?')) {
      this.productService.deleteProduct(product.ProductID,product).subscribe((res) => {
        console.log(res)
      });
    }


}
}