import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { YaoumiArticleService } from '../../core/service/yaoumi-article.service';
import { Feed } from '../../shared/model/Feed';

@Component({
    selector: 'app-article-list',
    templateUrl: './article-list.component.html',
    styleUrls: ['./article-list.component.css'],
    providers: [YaoumiArticleService]
})
export class ArticleList implements OnInit {
    //paramId: number;
    //paramCat: number;
    baseUrl: string;
    articles: Feed[];
    categorie: string;

    constructor(private route: ActivatedRoute, private service: YaoumiArticleService, @Inject('BASE_URL') baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    ngOnInit() {
        // this.route.params.subscribe(routeParams => {
            // this.service.getArticles(routeParams.cat, routeParams.id).subscribe(result => {
                // this.articles = result;
                // this.categorie = this.service.mediaCategory[routeParams.cat -1];
                ////Debug
                // console.error("ArticleList  ", this.articles);
            // }, error => console.error(error));
        // });
    }
}
