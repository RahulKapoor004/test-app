import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddSampleComponent } from './add-sample/add-sample.component';
import { ViewSamplesComponent } from './view-samples/view-samples.component';
import { InvalidPageComponent } from './invalid-page/invalid-page.component';
import { ReferenceLinksComponent } from './reference-links/reference-links.component';
import { ExecuteTestsComponent } from './execute-tests/execute-tests.component';
import { FormOneComponent } from './form-one/form-one.component';
import { FormTwoComponent } from './form-two/form-two.component';
import { FormThreeComponent } from './form-three/form-three.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'add-sample',
    component: AddSampleComponent
  },
  {
    path: 'view-samples',
    component: ViewSamplesComponent
  },
  {
    path: 'reference-links',
    component: ReferenceLinksComponent
  },
  {
    path: 'execute-tests',
    component: ExecuteTestsComponent,
    children: [
      { path: 'form-one', component: FormOneComponent },
      { path: 'form-two', component: FormTwoComponent },
      { path: 'form-three', component: FormThreeComponent },
      { path: '', redirectTo: 'form-one', pathMatch: 'full' } // Redirect to form-one as default
    ]
  },
  {
    path: '**',
    component: InvalidPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
