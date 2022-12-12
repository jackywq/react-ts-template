import { useState } from 'react'

// 更新异步state ---> 同class组件setState用法一致
const UseAsyncState = initialValue => {
    const [info, setInfo] = useState(initialValue)

    return [
        info,
        (val, fn) => {
            setInfo(val)
            fn(val)
        },
    ]
}

export default UseAsyncState
