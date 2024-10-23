import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductDetailsService } from '../services/product-details.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {
  productForm:FormGroup;
  measurements:any;

  constructor(private productService:ProductDetailsService,private pf:FormBuilder,private router:Router){
    this.getMeasurement()
   this.productForm =this.pf.group({
  
    name: ['', Validators.required],
    unitPrice: ['', [Validators.required, Validators.min(0)]],
    oldPrice: [''],
    discount: [''],
    unitInStock: ['', [Validators.required, Validators.min(0)]],
    productAvailable: [false],
    shortDescription: [''],
    supplierID: [4],  // Initialize with default values
    TypeID: [''],
    "MeasurementValue":'0',
    "categoryID":1,
    
    MesurmentID: [''],
    picturePath: ['/images/products/water-tank-500l.jpg'],
    note: ['Available in 2-layer and 3-layer variants.'],
    createdBy: ['Admin']


 

   })
  }

  submitForm() {
    const data=this.productForm.value;
    console.log(data)
    if (this.productForm.valid) {
      this.productService.addProduct(data).subscribe((res: any) => {
       console.log(res)
      this.productForm.reset();
    })
    }

}
getMeasurement(){
  this.productService.getMeasurement().subscribe((res: any) => {
    this.measurements=res
    console.log(res)
  
 })
}
goBack(){
  this.router.navigateByUrl('/')
}
}
