import React, { Suspense, lazy } from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import { Spin } from 'antd'
import ReactDocumentTitle from 'react-document-title'
import Layout from './layout'
import routes from './routes'
import './App.less'

const NotFound = lazy(() => import('./pages/notFound'))

function RouteWithSubRoutes(route) {
    return (
        <ReactDocumentTitle title={route.name}>
            {route.path ? <Route {...route} /> : <Route component={NotFound} />}
        </ReactDocumentTitle>
    )
}

function flatRoutes(routes) {
    const recusive = data => {
        return data.reduce((acc, cur) => {
            if (Array.isArray(cur.children) && cur.children.length) {
                acc.push(...recusive(cur.children))
            } else {
                acc.push(cur)
            }
            return acc
        }, [])
    }

    return recusive(routes)
}

function App() {
    const newRoutes = flatRoutes(routes)

    return (
        <Layout>
            <Suspense fallback={<Spin size="large" />}>
                <Switch>
                    <Route path="/" exact render={() => <Redirect to="/home" />} />
                    {newRoutes.map((route, i) => (
                        <RouteWithSubRoutes key={i} {...route} />
                    ))}
                    <Route component={NotFound} />
                </Switch>
            </Suspense>
        </Layout>
    )
}

export default App
