import { Component, OnInit } from '@angular/core';
import { YaoumiArticleService } from '../../core/service/yaoumi-article.service';
import { FeedEntry } from '../../shared/model/feed-entry';
import { Feed } from '../../shared/model/Feed';
import { Medias } from '../../shared/data/medias';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    providers: [YaoumiArticleService]
})
export class HomeComponent implements OnInit {
    baseUrl: string;
    randNumber: number;
	actuFeedList = Medias.actuFeedList;
	scienceFeedList = Medias.scienceFeedList;
	cultureFeedList = Medias.cultureFeedList;
	sportFeedList = Medias.sportFeedList;
    actuArticles: Array<FeedEntry> = [] ;
    scienceArticles: Array<FeedEntry> = [] ;
    cultureArticles: Array<FeedEntry> = [] ;
    sportArticles: Array<FeedEntry> = [] ;
    
    constructor(private service: YaoumiArticleService) {
        this.randNumber = 0;
    }

    ngOnInit() {
        for (var url of this.actuFeedList)
        {       
            this.service.getAllArticles(url).subscribe(result => {
                for (var item of result.items)
                {  
                    this.setArticles(item, 1); 
                }
                //Debug
                //console.error("result.items  ", result.items);
            }, error => console.error(error));
        }
        for (var url of this.scienceFeedList)
        {       
            this.service.getAllArticles(url).subscribe(result => {
                for (var item of result.items)
                {  
                    this.setArticles(item, 2); 
                }
                //Debug
                //console.error("result.items  ", result.items);
            }, error => console.error(error));
        }
        for (var url of this.cultureFeedList)
        {       
            this.service.getAllArticles(url).subscribe(result => {
                for (var item of result.items)
                {  
                    this.setArticles(item, 3); 
                }
                //Debug
                //console.error("result.items  ", result.items);
            }, error => console.error(error));
        }
        for (var url of this.sportFeedList)
        {       
            this.service.getAllArticles(url).subscribe(result => {
                for (var item of result.items)
                {  
                    this.setArticles(item, 4); 
                }
                //Debug
                //console.error("result.items  ", result.items);
            }, error => console.error(error));
        }
        //console.error("ngOnInit ", this.articles);
    }
    
    setArticles(article: FeedEntry, media: any) {
        if (media === 1)
        {
            this.actuArticles.push(article);
        }
        else if (media === 2)
        {
            this.scienceArticles.push(article);
        }
        else if (media === 3)
        {
            this.cultureArticles.push(article);
        }
        else if (media === 4)
        {
            this.sportArticles.push(article);
        }
        //console.error("setArticle article ", article);
    }
}