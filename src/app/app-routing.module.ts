import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DictionaryWebComponent } from './dictionary-web/dictionary-web.component';


const routes: Routes = [
 
  { path: 'dict', component: DictionaryWebComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
