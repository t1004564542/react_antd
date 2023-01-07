export default [
  {
    path: '/login',
    exact: true,
    element: () => import('../component/login/login')
  },
  {
    path: '/',
    element: () => import('../component/home/home'),
    routes: [
      {
        path: '/logManager',
        exact: true,
        element: () => import()
      }
    ]
  }
]
