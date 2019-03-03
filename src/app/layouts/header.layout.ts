import { Component } from '@angular/core';

@Component({
    selector: 'app-header-layout',
    template: `
        <header>
            <nav class="navbar navbar-light bg-light">
                <div class="container">
                    <a routerLink="/" class="navbar-brand">Shop</a>
                    <div class="form-inline">
                        <app-minicart></app-minicart>
                    </div>
                </div>
            </nav>
        </header>
    `
})
export class HeaderLayout {
    constructor() {}
}