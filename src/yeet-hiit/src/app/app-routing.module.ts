import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { YeetHiitBaseRoutes } from '../consts/yeet-hiit-base-routes';

@NgModule({
  imports: [RouterModule.forRoot(YeetHiitBaseRoutes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
