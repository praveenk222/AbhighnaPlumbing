import { CUSTOM_ELEMENTS_SCHEMA,  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule, provideHttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { spinnerInterceptor } from './services/spinner.interceptor';
import { NgxSpinner, NgxSpinnerModule } from 'ngx-spinner';

import { DialogModule } from 'primeng/dialog';
import { NgChartsModule } from 'ng2-charts';

import { ReactiveFormsModule} from '@angular/forms';
import { BaseChartDirective} from 'ng2-charts'



import { ProductDetailsComponent } from './product-details/product-details.component';
import { AddProductComponent } from './product-details/add-product/add-product.component';
import {NgModule} from '@angular/core';
import {A11yModule} from '@angular/cdk/a11y';
import {ClipboardModule} from '@angular/cdk/clipboard';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {PortalModule} from '@angular/cdk/portal';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatBadgeModule} from '@angular/material/badge';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTreeModule} from '@angular/material/tree';
import {OverlayModule} from '@angular/cdk/overlay';
import { NavComponent } from './nav/nav.component';
import {  GetallordersComponent } from './getallorders/getallorders.component';
import { CreateOrderComponent } from './getallorders/create-order/create-order.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { LoginComponent } from './login/login.component';
import { MeasuremetTypeComponent } from './LookUp/measuremet-type.component';
import { MesurmentLookupComponent } from './mesurment-lookup/mesurment-lookup.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { MaterialModule } from './Modules/material.module';
import { SuccessInterceptor } from './services/toastersuccess.interceptor';
import { InventoryComponent } from './inventory/inventory.component';
import { RecieptComponent } from './reciept/reciept.component';
import { PlumbingListComponent } from './inventory/plumbing-list/plumbing-list.component';
import { ElectricListComponent } from './inventory/electric-list/electric-list.component';
import { SantrylistComponent } from './inventory/santrylist/santrylist.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductDetailsComponent,
    AddProductComponent,
    GetallordersComponent,
    CreateOrderComponent,
    NavComponent,
    LoginComponent,
    MeasuremetTypeComponent,
    MesurmentLookupComponent,
    DashbordComponent,
    InventoryComponent,
    RecieptComponent,
    PlumbingListComponent,
    ElectricListComponent,
    SantrylistComponent,

  ],
  imports: [
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    RouterOutlet,
    BrowserAnimationsModule,
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule,
    DragDropModule,
    MaterialModule,
   
    NgChartsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: spinnerInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: SuccessInterceptor, multi: true },
    provideHttpClient(),
 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


