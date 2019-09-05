import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './core/nav-menu/nav-menu.component';
import { HomeComponent } from './modules/home/home.component';
import { Article } from './modules/article/article.component';
import { ArticleList } from './modules/article/article-list.component';

@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        HomeComponent,
        Article,
        ArticleList
    ],
    imports: [
        BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
        HttpModule,
        FormsModule,
        Ng2SearchPipeModule,
        RouterModule.forRoot([
            { path: 'modules/', component: HomeComponent, pathMatch: 'full' },
            { path: 'modules/articles/:cat/:id', component: ArticleList },
            { path: '**', component: HomeComponent }
        ])
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
