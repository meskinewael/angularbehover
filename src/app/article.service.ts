import { Injectable } from '@angular/core';
import {articlesData} from 'src/assets/articleList';
import {Articles} from './Modules/Articles';
import { Subject, Observable, BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  post: Array<Articles> = [];
  constructor() {
    this.post = articlesData;
   }

  articlesData: BehaviorSubject<Articles[]> = new BehaviorSubject<Articles[]>(articlesData);

  updatedDataSelection(ELEMENT){   

    this.articlesData.next(ELEMENT); 
    
    }
    data = this.articlesData.asObservable();

   edit(Article: Articles) {
      let findElem = this.post.find(p => p.id == Article.id);
  
      findElem.titre = Article.titre;
      findElem.contenu = Article.contenu;
      findElem.auteur = Article.auteur;
      findElem.date = Article.date;
      this.articlesData.next(this.post);
    }
}
