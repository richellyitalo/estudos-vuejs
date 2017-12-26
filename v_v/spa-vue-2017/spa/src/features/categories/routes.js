import index from './'
import form from './form'

export default [
  {
    path: '/categories',
    name: 'categories.index',
    component: index,
    children: [
      {
        path: '/categories/form/:id?',
        name: 'categories.form',
        component: form
      }
    ]
  }
]
