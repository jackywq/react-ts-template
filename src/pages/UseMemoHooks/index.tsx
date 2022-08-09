/* eslint-disable react/display-name */
import React, { useState, useMemo } from 'react'
import { Button, Input } from 'antd'

export default function UseMemoHooks() {
    const [count, setCount] = useState(1)
    const [val, setValue] = useState('')

    // 当依赖项发生改变时，useMemo内部的函数才会被执行，返回被缓存的值
    // 当input发生改变时，useMemo内部的函数不会被执行
    // useMemo可以接收多个依赖项
    const getCount = useMemo(() => {
        console.log('getCount')
        return count
    }, [count])

    return (
        <div>
            <h4>当前count：{getCount}</h4>
            <Button type="primary" onClick={() => setCount(count + 1)}>
                增加
            </Button>
            <Input value={val} onChange={event => setValue(event.target.value)} />
        </div>
    )
}
