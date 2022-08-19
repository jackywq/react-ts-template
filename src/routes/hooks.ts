/*
 * @Author: quan.wang
 * @Date: 2022-08-19 09:32:16
 * @LastEditors: quan.wang
 * @LastEditTime: 2022-08-19 18:00:40
 */
import { lazy } from 'react'
import type { RouteProps } from './index'

const Hooks = lazy(() => import('@/pages/Hooks'))

const EffectHooks = lazy(() => import('@/pages/Hooks/EffectHooks'))

const UseMemoHooks = lazy(() => import('@/pages/Hooks/UseMemoHooks'))

const UseCallbackHooks = lazy(() => import('@/pages/Hooks/UseCallbackHooks'))

const UseMemoAndCallbackHooks = lazy(() => import('@/pages/Hooks/UseMemoAndCallbackHooks'))

const UseCallbackAndReactMemo = lazy(() => import('@/pages/Hooks/UseCallbackAndReactMemo'))

const CustomerHooks = lazy(() => import('@/pages/Hooks/CustomerHooks'))

const AHooks = lazy(() => import('@/pages/Hooks/AHooks'))

const hooksRoutes: RouteProps[] = [
    {
        path: '/basicHooks',
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
        name: 'UseMemo使用',
        component: UseMemoHooks,
    },
    {
        path: '/useCallback',
        name: 'UseCallback使用',
        component: UseCallbackHooks,
    },
    {
        path: '/useCallbackAndReactMemo',
        name: 'UseCallback和React Memo综合使用',
        component: UseCallbackAndReactMemo,
    },
    {
        path: '/useMemoAndCallbackHooks',
        name: 'UseMemo和UseCallback综合使用',
        component: UseMemoAndCallbackHooks,
    },
    {
        path: '/customerHooks',
        name: '自定义hooks',
        component: CustomerHooks,
    },
    {
        path: '/aHooks',
        name: 'aHooks演练',
        component: AHooks,
    },
]

export default hooksRoutes
