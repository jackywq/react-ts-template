import React from 'react'
import { render } from 'react-dom'
import zhCN from 'antd/lib/locale/zh_CN'
import { BrowserRouter } from 'react-router-dom'
import { ConfigProvider } from 'antd'
import App from './App'

render(
    <ConfigProvider locale={zhCN} getPopupContainer={trigger => (trigger ? trigger.parentElement : document.body)}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </ConfigProvider>,
    document.getElementById('app')
)
