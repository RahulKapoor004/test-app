import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AddSampleComponent } from './add-sample/add-sample.component';
import { ViewSamplesComponent } from './view-samples/view-samples.component';
import { InvalidPageComponent } from './invalid-page/invalid-page.component';
import { FormsModule } from '@angular/forms';
import { ViewSamplesListviewComponent } from './view-samples-listview/view-samples-listview.component';
import { ReferenceLinksComponent } from './reference-links/reference-links.component';
import { ExecuteTestsComponent } from './execute-tests/execute-tests.component';
import { FormOneComponent } from './form-one/form-one.component';
import { FormTwoComponent } from './form-two/form-two.component';
import { FormThreeComponent } from './form-three/form-three.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidebarComponent,
    AddSampleComponent,
    ViewSamplesComponent,
    InvalidPageComponent,
    ViewSamplesListviewComponent,
    ReferenceLinksComponent,
    ExecuteTestsComponent,
    FormOneComponent,
    FormTwoComponent,
    FormThreeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
