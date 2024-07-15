import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MainContentComponent } from './main-content/main-content.component';
import { TaskFilterComponent } from './task-filter/task-filter.component';
import { TaskService } from './task.service';

@NgModule({
  declarations: [
    AppComponent,
    MainContentComponent,
    TaskFilterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
