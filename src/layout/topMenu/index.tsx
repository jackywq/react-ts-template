/*
 * @Author: quan.wang
 * @Date: 2021-09-13 23:40:04
 * @Last Modified by: quan.wang
 * @Last Modified time: 2022-07-21 18:06:43
 */
import React, { FC } from 'react'
import { Breadcrumb } from 'antd'
import './index.less'

interface IProps {
    currentKeys: Array<Record<string, any>>
}

const TopMenu: FC<IProps> = ({ currentKeys }) => {
    return (
        <div className="topMenu">
            {/* @ts-ignore */}
            <Breadcrumb className="breadCrumb">
                {currentKeys.map((item, i) => (
                    // @ts-ignore
                    <Breadcrumb.Item key={i}>
                        <span>{item.name}</span>
                    </Breadcrumb.Item>
                ))}
            </Breadcrumb>
        </div>
    )
}

export default TopMenu
