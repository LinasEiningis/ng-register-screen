import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiteComponent } from './site.component';
import { Routes, RouterModule } from '@angular/router';

const SITE_ROUTES: Routes = [
    {
        path: '',
        component: SiteComponent
    }
];

@NgModule({
    declarations: [
        SiteComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(SITE_ROUTES)
    ]
})

export class SiteModule {}
