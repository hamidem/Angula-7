import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import { Feed } from '../../shared/model/feed';

@Injectable()
export class YaoumiArticleService {

	public article: Feed;
	mediaCategory = ['Actu', 'Science', 'Culture', 'Sport'];
	private rssToJsonServiceBaseUrl: string = 'https://rss2json.com/api.json?rss_url=';

	constructor(private http: Http) {
		this.http = http;
	}

	getAllArticles(url: string): Observable<Feed> {
		return this.http.get(this.rssToJsonServiceBaseUrl + url)
			.map(this.extractFeeds)
			.catch(this.handleError);
	}

	private extractFeeds(res: Response): Feed {
		let feed = res.json();
		return feed || { };
	}

	private handleError (error: any) {
		// In a real world app, we might use a remote logging infrastructure
		// We'd also dig deeper into the error to get a better message
		let errMsg = (error.message) ? error.message :
		  error.status ? `${error.status} - ${error.statusText}` : 'Server error';
		console.error(errMsg); // log to console instead
		return Observable.throw(errMsg);
	}
}
