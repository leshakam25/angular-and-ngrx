import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FeedTogglerComponent} from "./components/feedToggler/feedToggler.component";


@NgModule({
  imports: [CommonModule],
  declarations: [FeedTogglerComponent],
  exports: [FeedTogglerComponent]
})
export class FeedTogglerModule {
}
