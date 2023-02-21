import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {TagListComponent} from "./components/loading/tagList.component";


@NgModule({
  imports: [CommonModule],
  declarations: [TagListComponent],
  exports: [TagListComponent]
})
export class TagListModule {}
