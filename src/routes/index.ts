/*
 * @Author: quan.wang
 * @Date: 2022-08-14 15:33:05
 * @LastEditors: wuyue.nan
 * @LastEditTime: 2022-08-14 21:30:16
 */
import { lazy } from 'react'
export interface RouteProps {
    name?: string
    path?: string
    component?: any
    exact?: boolean
    children?: Array<RouteProps>
}

const Home = lazy(() => import('@/pages/home'))

const Hooks = lazy(() => import('@/pages/Hooks'))

const LifeCycle = lazy(() => import('@/pages/LifeCycle/parent'))

const Context = lazy(() => import('@/pages/Context'))

const SetState = lazy(() => import('@/pages/SetState'))

const EffectHooks = lazy(() => import('@/pages/EffectHooks'))

const UseMemoHooks = lazy(() => import('@/pages/UseMemoHooks'))

const UseMemoAndCallbackHooks = lazy(() => import('@/pages/UseMemoAndCallbackHooks'))

const routes: RouteProps[] = [
    {
        path: '/home',
        component: Home,
        exact: true,
        name: 'home',
    },
    {
        path: '/context',
        name: 'Context上下文',
        component: Context,
    },
    {
        path: '/lifeCycle',
        name: 'React生命周期',
        component: LifeCycle,
    },
    {
        path: '/setState',
        name: 'React SetState用法',
        component: SetState,
    },
    {
        path: '/hooks',
        name: 'React Hooks',
        children: [
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
        ],
    },
]

export default routes
