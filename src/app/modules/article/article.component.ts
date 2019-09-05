import { Component, Inject, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article',
  templateUrl: '../../modules/article/article.component.html'
})
export class Article {
  public articles: Feed[];
  private sub;
  @Input('input-id') inputId: number;
  @Input('input-cat') inputCat: number;
  baseUrl: string;
  url = 'https://www.lemonde.fr/rss/une.xml';

  constructor(@Inject('BASE_URL') baseUrl: string) {
    this.baseUrl = baseUrl;
    this.inputId;
    this.inputCat;
  }

  ngOnInit() {
    this.setArticle();
  }

  setArticle() {
    // this.http.get<Feed[]>(this.baseUrl + 'api/Article/GetArticle/' + this.inputCat + '/' + this.inputId).subscribe(result => {
      // this.articles = result;
      //Debug
      //console.error(result)
    //}, error => console.error(error));
  }
}

interface Feed {
  title: string;
  description: string;
  image_url: string;
  //categories: string;
  //links: string;
  //astUpdated: string;
  //published: string;
}
