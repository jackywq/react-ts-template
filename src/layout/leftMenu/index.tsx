import React from 'react'
import { Menu, Layout } from 'antd'
import { useHistory, useLocation } from 'react-router-dom'
import routes from '../../routes'

import './index.less'

const { Sider } = Layout
const { SubMenu } = Menu

const findSelectedKeys = pathname => {
    let selectedKeys = []

    const recusive: (p?: any, o?: any) => any = (data, parentPaths) => {
        data.find(item => {
            if (item.path === pathname) {
                selectedKeys = [...(parentPaths ? parentPaths : []), item.path]
                return true
            }

            if (Array.isArray(item.children) && item.children.length) {
                recusive(item.children, [...(parentPaths ? parentPaths : []), item.path])
            }
            return false
        })
    }

    recusive(routes)

    return selectedKeys
}

const LeftMenu = () => {
    const history = useHistory()
    const { pathname } = useLocation()
    const selectedKeys = findSelectedKeys(pathname)

    const renderSubMenu = node => {
        if (Array.isArray(node.children) && node.children.length) {
            return (
                <SubMenu key={node.path} title={node.name}>
                    {node.children.map(sitem => renderSubMenu(sitem))}
                </SubMenu>
            )
        }

        return (
            <Menu.Item key={node.path} onClick={() => history.push(node.path)}>
                {node.name}
            </Menu.Item>
        )
    }

    return (
        <div className="leftMenu">
            <div className="logo" onClick={() => history.push('/home')}>
                {/* eslint-disable max-len */}
                <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K" alt="" height="20" />
                <span>React Template</span>
            </div>
            <Layout style={{ width: 256 }}>
                <Sider width="100%">
                    <Menu defaultSelectedKeys={selectedKeys} defaultOpenKeys={selectedKeys} theme="dark" mode="inline">
                        {routes.filter(p => p.path).map(item => renderSubMenu(item))}
                    </Menu>
                </Sider>
            </Layout>
        </div>
    )
}
export default LeftMenu
