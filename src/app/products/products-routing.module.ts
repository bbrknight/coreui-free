import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent} from './create/create.component';	
import { ListComponent} from './list/list.component';
import { UpdateComponent } from './update/update.component';
import { DetailComponent } from './detail/detail.component';

const routes: Routes = [
  {
    path: 'products',
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      {
        path: 'create',
        component: CreateComponent
      },
      {
        path: 'list',
        component: ListComponent
      },
      {
        path: 'update/:id',
        component: UpdateComponent
      },
      {
        path: 'detail/:id',
        component: DetailComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
