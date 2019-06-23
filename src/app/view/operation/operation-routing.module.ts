import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { SubcategoryComponent } from './subcategory/subcategory.component';


const routes :Routes=[
  {
    path: '',
    data: {
      title: 'Operation'
    },
    children: [
      {
        path: '',
        redirectTo: 'category'
      },
      {
        path: 'category',
        component: CategoryComponent,
        data: {
          title: 'Category List'
        }
      },
      {
        path: 'subcategory',
        component: SubcategoryComponent,
        data: {
          title: 'Sub Category List'
        }
      }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OperationRoutingModule { }
