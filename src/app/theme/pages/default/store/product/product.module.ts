import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DefaultComponent } from '../../default.component';
import { LayoutModule } from '../../../../layouts/layout.module';

const routes: Routes = [
    {
        path: "",
        component: DefaultComponent,
        children: [
            {
                path: "",
                component: ProductComponent
            }
        ]
    },
];

@NgModule({
    imports: [
        CommonModule, RouterModule.forChild(routes),
        LayoutModule,
        NgbModule.forRoot(),
    ], declarations: [
        ProductComponent
    ]
})
export class ProductModule {
}