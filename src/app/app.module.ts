import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ArchiveToolComponent } from './archive-tool/archive-tool.component';
import { PublishFixComponent } from './publish-fix/publish-fix.component';
import { MynaComponent } from './myna/myna.component';
import { XarcComponent } from './xarc/xarc.component';
import { DbluesComponent } from './dblues/dblues.component';
import { RadarComponent } from './radar/radar.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    ArchiveToolComponent,
    PublishFixComponent,
    MynaComponent,
    XarcComponent,
    DbluesComponent,
    RadarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
