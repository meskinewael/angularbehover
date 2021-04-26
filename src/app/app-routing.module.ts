import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddArticleComponent } from './add-article/add-article.component';
import { AppComponent } from './app.component';
import { ListeArticleComponent } from './liste-article/liste-article.component';


const routes: Routes = [
  {path:'',component :AppComponent},
  {path:'addArticle',component: AddArticleComponent},
  {path:'listArticle',component: ListeArticleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
