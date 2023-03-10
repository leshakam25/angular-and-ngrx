import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {EffectsModule} from '@ngrx/effects'
import {RouterModule} from '@angular/router'
import {StoreModule} from '@ngrx/store'

import {FeedComponent} from 'src/app/shared/modules/feed/components/feed/feed.component'
import {reducers} from 'src/app/shared/modules/feed/store/reducers'
import {ErrorMessageModule} from 'src/app/shared/modules/errorMessage/errorMessage.module'
import {LoadingModule} from 'src/app/shared/modules/loading/loading.module'
import {PaginationModule} from 'src/app/shared/modules/pagination/pagination.module'
import {TagListModule} from '../tagList/tagList.module'
import {ArticleService} from '../shared/services/article.service'
import {GetArticleEffect} from 'src/app/article/store/effects/getArticle.effect'

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forFeature([GetArticleEffect]),
    StoreModule.forFeature('feed', reducers),
    RouterModule,
    ErrorMessageModule,
    LoadingModule,
    PaginationModule,
    TagListModule
  ],
  declarations: [FeedComponent],
  exports: [FeedComponent],
  providers: [ArticleService]
})
export class FeedModule {}
