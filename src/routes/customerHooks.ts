import { lazy } from 'react'
import type { RouteProps } from './index'

const AHooks = lazy(() => import('@/pages/CustomerHooks/ahooks'))

const UseCreation = lazy(() => import('@/pages/CustomerHooks/useCreation'))

const customerHooksRoutes: RouteProps[] = [
    {
        path: '/aHooks',
        name: 'aHooks演练',
        component: AHooks,
    },
    {
        path: '/useCreation',
        name: 'useCreation',
        component: UseCreation,
    },
]

export default customerHooksRoutes
