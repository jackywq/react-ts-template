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
        name: 'Context',
        component: Context,
    },
    {
        path: '/hooks',
        name: 'Hooks',
        component: Hooks,
    },
    {
        path: '/lifeCycle',
        name: 'LifeCycle',
        component: LifeCycle,
    },
    {
        path: '/setState',
        name: 'SetState',
        component: SetState,
    },
    {
        path: '/effectHooks',
        name: 'EffectHooks',
        component: EffectHooks,
    },
    {
        path: '/useMemo',
        name: 'UseMemoHooks',
        component: UseMemoHooks,
    },
    {
        path: '/useMemoAndCallbackHooks',
        name: 'useMemoAndCallbackHooks',
        component: UseMemoAndCallbackHooks,
    },
]

export default routes
