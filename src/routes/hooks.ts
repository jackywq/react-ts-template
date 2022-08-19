/*
 * @Author: quan.wang
 * @Date: 2022-08-19 09:32:16
 * @LastEditors: quan.wang
 * @LastEditTime: 2022-08-19 09:35:26
 */
import { lazy } from 'react'
import type { RouteProps } from './index'

const Hooks = lazy(() => import('@/pages/Hooks'))

const EffectHooks = lazy(() => import('@/pages/EffectHooks'))

const UseMemoHooks = lazy(() => import('@/pages/UseMemoHooks'))

const UseMemoAndCallbackHooks = lazy(() => import('@/pages/UseMemoAndCallbackHooks'))

const CustomerHooks = lazy(() => import('@/pages/CustomerHooks'))

const hooksRoutes: RouteProps[] = [
    {
        path: '/hooks',
        name: 'Hooks基本用法',
        component: Hooks,
    },
    {
        path: '/effectHooks',
        name: 'useEffect、useLayoutEffect区别',
        component: EffectHooks,
    },
    {
        path: '/useMemo',
        name: 'UseMemo钩子函数使用',
        component: UseMemoHooks,
    },
    {
        path: '/useMemoAndCallbackHooks',
        name: 'UseMemo和UseCallback结合使用',
        component: UseMemoAndCallbackHooks,
    },
    {
        path: '/customerHooks',
        name: '自定义hooks',
        component: CustomerHooks,
    },
]

export default hooksRoutes
