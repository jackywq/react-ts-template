/*
 * @Author: quan.wang
 * @Date: 2021-09-13 23:40:01
 * @Last Modified by: quan.wang
 * @Last Modified time: 2022-08-09 15:29:37
 */
import React from 'react'
import { BackTop } from 'antd'
import { withRouter } from 'react-router'
import routes from '../routes'
import LeftMenu from './leftMenu'
import TopMenu from './topMenu'

import './index.less'

interface IProps {
    location: { pathname: string }
    children: React.ReactNode
}
class Layout extends React.Component<IProps> {
    componentDidMount() {
        let ascii = `
        _    _      _ _        __          __        _     _ 
       | |  | |    | | |       \\ \\        / /       | |   | |
       | |__| | ___| | | ___    \\ \\  /\\  / /__  _ __| | __| |
       |  __  |/ _ \\ | |/ _ \\    \\ \\/  \\/ / _ \\| '__| |/ _\` |
       | |  | |  __/ | | (_) |    \\  /\\  / (_) | |  | | (_| |
       |_|  |_|\\___|_|_|\\___/      \\/  \\/ \\___/|_|  |_|\\__,_|                                                                                                                                                                                  
      `
        console.log(`%c${ascii}`, 'color:#skyblue')
    }

    getCurrentKeys = () => {
        const {
            location: { pathname },
        } = this.props
        return []
    }

    render() {
        const { children } = this.props

        return (
            <div className="app_wrapper">
                <title>组件库操练场</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <div className="app_body">
                    <div className="app_left">
                        <LeftMenu />
                    </div>
                    <div className="app_right">
                        <TopMenu currentKeys={this.getCurrentKeys()} />
                        <div className="app_right_content">
                            <div>{children}</div>
                        </div>
                    </div>
                </div>
                <BackTop />
            </div>
        )
    }
}

export default withRouter(Layout)
