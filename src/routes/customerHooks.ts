import { lazy } from 'react'
import type { RouteProps } from './index'

const UseCreation = lazy(() => import('@/pages/CustomerHooks/useCreation'))

const UseUpdate = lazy(() => import('@/pages/CustomerHooks/useUpdate'))

const UseReactive = lazy(() => import('@/pages/CustomerHooks/useReactive'))

const UseAsyncState = lazy(() => import('@/pages/CustomerHooks/useAsyncState'))

const customerHooksRoutes: RouteProps[] = [
    {
        path: '/useCreation',
        name: 'useCreation',
        component: UseCreation,
    },
    {
        path: '/useUpdate',
        name: 'useUpdate',
        component: UseUpdate,
    },
    {
        path: '/useReactive',
        name: 'useReactive',
        component: UseReactive,
    },
    {
        path: '/useAsyncState',
        name: 'useAsyncState',
        component: UseAsyncState,
    },
]

export default customerHooksRoutes
