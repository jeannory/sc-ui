import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { RoleGuardService } from 'app/services/role-guard.service';
import { HomeComponent } from 'app/home/home.component';

export const AdminLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }


    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [RoleGuardService],
        data: {
            expectedRole: ['user', 'manager']
        }
    },
    {
        path: 'user-profile',
        component: UserProfileComponent,
        canActivate: [RoleGuardService],
        data: {
            expectedRole: ['user', 'manager']
        }
    },
    {
        path: 'table-list',
        component: TableListComponent,
        canActivate: [RoleGuardService],
        data: {
            expectedRole: ['manager']
        }
    },
    {
        path: 'typography',
        component: TypographyComponent,
        canActivate: [RoleGuardService],
        data: {
            expectedRole: ['user', 'manager']
        }
    },
    {
        path: 'icons',
        component: IconsComponent,
        canActivate: [RoleGuardService],
        data: {
            expectedRole: ['user', 'manager']
        }
    },
    {
        path: 'maps',
        component: MapsComponent,
        canActivate: [RoleGuardService],
        data: {
            expectedRole: ['user', 'manager']
        }
    },
    {
        path: 'notifications',
        component: NotificationsComponent,
        canActivate: [RoleGuardService],
        data: {
            expectedRole: ['user', 'manager']
        }
    },
    {
        path: 'upgrade',
        component: UpgradeComponent,
        canActivate: [RoleGuardService],
        data: {
            expectedRole: ['user', 'manager']
        }
    },
];
