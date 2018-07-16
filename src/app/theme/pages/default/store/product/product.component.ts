import { ScriptLoaderService } from '../../../../../_services/script-loader.service';
import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';

const now = new Date();

@Component({
    selector: ".m-grid__item.m-grid__item--fluid.m-wrapper",
    templateUrl: "./product.component.html",
    encapsulation: ViewEncapsulation.None,
})
export class ProductComponent implements OnInit,AfterViewInit {

    constructor(private _script: ScriptLoaderService) {

    }
    ngOnInit() {

    }
    ngAfterViewInit() {
        this._script.loadScripts('app-validation-form-controls',
            ['assets/demo/default/custom/components/forms/validation/form-controls.js']);

    }
}