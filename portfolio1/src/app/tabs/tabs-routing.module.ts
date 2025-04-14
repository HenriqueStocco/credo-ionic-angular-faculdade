import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'password',
        loadChildren: () => import('../password/password.module').then(m => m.PasswordPageModule)
      },
      {
        path: 'user',
        loadChildren: () => import('../user/user.module').then(m => m.UserPageModule)
      },
      // {
      //   path: 'tab3',
      //   loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
      // },
      {
        path: '',
        redirectTo: '/tabs/password',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/password',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule { }
