import Home from './components/Home.vue'
// import User from './components/user/User.vue'
// import UserStart from './components/user/UserStart.vue'
// import UserDetail from './components/user/UserDetail.vue'
// import UserEdit from './components/user/UserEdit.vue'
import Header from './components/Header.vue'
import Page404 from './components/Page404.vue'

const User = resolve => {
    require.ensure(['./components/user/User.vue'], () => {
        resolve(require('./components/user/User.vue'))
    }, 'user')
}

const UserStart = function(resolve) {
    require.ensure(['./components/user/UserStart.vue'], function () {
        resolve(require('./components/user/UserStart.vue'))
    }, 'user')
}

const UserDetail = resolve => {
    require.ensure(['./components/user/UserDetail.vue'], () => {
        resolve(require('./components/user/UserDetail.vue'))
    }, 'user')
}

const UserEdit = resolve => {
    require.ensure(['./components/user/UserEdit.vue'], () => {
        resolve(require('./components/user/UserEdit.vue'))
    }, 'user')
}

export const routes = [
    // sem 'router-named'
    //{ path: '', component: Home, name: 'home' },

    { path: '', name: 'home', components: {
        default: Home,
        'header-top': Header
    }},

    // via data
    // { path: '/user/:id', component: User }
    //via props
    //{ path: '/user/:id', component: User, props: true},
    //{ path: '/estatico', component: User, props: { id: '99'} }
    {
        // sem 'router-named'
        //path: '/user', component: User,

        path: '/user', components: {
            default: User,
            'header-bottom': Header
        },
        children: [
            // sem router-named
            //{ path: '', component: UserStart },
            
            { path: '', component: UserStart },
            { path: ':id', component: UserDetail, beforeEnter: (to, from, next) => {
                console.log('Dentro de rotas');
                next();
            } },
            { path: ':id/edit', component: UserEdit, props: true, name: 'userEdit' }
        ]
    },
    { path : '/brazil', redirect: { name: 'userEdit', params: { id: '5' } } },
    { path: '/404', component: Page404, name: '404'},
    { path: '*', redirect: { name: '404' }}
];