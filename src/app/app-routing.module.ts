import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArchiveToolComponent } from './archive-tool/archive-tool.component';
import { DbluesComponent } from './dblues/dblues.component';
import { MainPageComponent } from './main-page/main-page.component';
import { MynaComponent } from './myna/myna.component';
import { PublishFixComponent } from './publish-fix/publish-fix.component';
import { RadarComponent } from './radar/radar.component';
import { XarcComponent } from './xarc/xarc.component';
import { ApiService} from './api.service';

const routes: Routes = [
  { path: '', component: MainPageComponent, children: [
    {path:'archive-tool', component: ArchiveToolComponent},
    {path:'publish-fix', component: PublishFixComponent},
    {path:'myna', component: MynaComponent},
    {path:'xarc', component: XarcComponent},
    {path:'dblues', component: DbluesComponent},
    {path:'radar', component: RadarComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
