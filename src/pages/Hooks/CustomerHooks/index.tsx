/*
 * @Author: quan.wang
 * @Date: 2022-08-18 19:05:36
 * @LastEditors: quan.wang
 * @LastEditTime: 2022-08-18 19:13:45
 */
import React from 'react'
import UseMount from './useMount'

export default function CustomerHooks() {
    UseMount(() => {
        console.log('我是UseMount, 我只加载一次')
    })

    return <div>自定义hooks</div>
}
