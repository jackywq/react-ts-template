import React, { useState, useCallback, useEffect } from 'react'
import { Button, Input } from 'antd'

// 参考：https://blog.csdn.net/sinat_17775997/article/details/94453167?spm=1001.2101.3001.6650.2&utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-2-94453167-blog-124398867.pc_relevant_multi_platform_whitelistv4&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-2-94453167-blog-124398867.pc_relevant_multi_platform_whitelistv4&utm_relevant_index=4
export default function Parent() {
    const [count, setCount] = useState(1)
    const [val, setVal] = useState('')

    const callback = useCallback(() => {
        return count
    }, [count])
    return (
        <div>
            <h4>{count}</h4>
            <Child callback={callback} />
            <div>
                <Button onClick={() => setCount(count + 1)}>+</Button>
                <Input value={val} onChange={event => setVal(event.target.value)} />
            </div>
        </div>
    )
}

// eslint-disable-next-line react/prop-types
function Child({ callback }) {
    const [count, setCount] = useState(() => callback())
    useEffect(() => {
        setCount(callback())
    }, [callback])

    return <div>{count}</div>
}
