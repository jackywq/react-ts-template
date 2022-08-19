/*
 * @Author: quan.wang
 * @Date: 2022-08-14 15:33:05
 * @LastEditors: quan.wang
 * @LastEditTime: 2022-08-19 09:35:17
 */
import { lazy } from 'react'
import hooksRoutes from './hooks'
export interface RouteProps {
    name?: string
    path?: string
    component?: any
    exact?: boolean
    children?: Array<RouteProps>
}

const Home = lazy(() => import('@/pages/home'))

const LifeCycle = lazy(() => import('@/pages/LifeCycle/parent'))

const Context = lazy(() => import('@/pages/Context'))

const SetState = lazy(() => import('@/pages/SetState'))

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
        children: hooksRoutes,
    },
]

export default routes
