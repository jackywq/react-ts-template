// 参考： https://www.jianshu.com/p/b71e56ea2fda
/* useCallback & useMemo综合使用 */
import React, { useState, useCallback } from 'react'
import { Button, Input, Space } from 'antd'

export default function UseCallbackHooks() {
    const [count, setCount] = useState(1)
    const [val, setValue] = useState('')

    // 推荐
    const getCount = useCallback(() => {
        return count
    }, [count])

    // 不推荐
    // const getCount = () => {
    //     return count
    // }

    return (
        <div>
            <Child getCount={getCount} />
            <Space>
                <Button type="primary" onClick={() => setCount(count + 1)}>
                    增加
                </Button>
            </Space>

            <article style={{ marginTop: 10 }}>
                <Input value={val} onChange={event => setValue(event.target.value)} />
            </article>
        </div>
    )
}

// 推荐
interface IProps {
    getCount: any
}

const Child: React.FC<IProps> = React.memo(props => {
    // 仅当count发生改变时，Child才会被渲染；而val变化时，Child组件是不会重新渲染的
    console.log('Child组件渲染了')
    // eslint-disable-next-line react/prop-types
    return <h4>当前count: {props.getCount()}</h4>
})

// 不推荐，消耗性能
// const Child = ({ getCount }) => {
//     // count和value发生改变时，Child才会被渲染
//     console.log('Child组件渲染了')
//     return <h4>当前count: {getCount()}</h4>
// }
