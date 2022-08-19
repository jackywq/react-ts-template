/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/prop-types */
/*
 * @Author: quan.wang
 * @Date: 2022-08-19 17:48:44
 * @LastEditors: quan.wang
 * @LastEditTime: 2022-08-19 17:50:10
 */
import React, { useState, useCallback } from 'react'
import { Button } from 'antd'

const Child = React.memo(({ callback }: any) => {
    return <div>{callback()}</div>
})

export default function Parent() {
    const [count, setCount] = useState(0)
    const [value, setValue] = useState(0)

    const callback = useCallback(() => {
        return count
    }, [count])

    return (
        <div>
            <Child callback={callback} />
            <Button onClick={() => setCount(count + 1)}>更新count</Button>
            <Button onClick={() => setValue(value + 1)}>更新value</Button>
        </div>
    )
}
