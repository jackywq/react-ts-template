import React from 'react'
import { Button } from 'antd'

import UseAsyncState from './useAsyncState'

const Index: React.FC<any> = () => {
    const [val, setVal] = UseAsyncState('foo')

    return (
        <div style={{ padding: 50 }}>
            <div>{val}</div>
            <Button
                type="primary"
                onClick={() => {
                    setVal('bar', newVal => {
                        console.log('newVal :>> ', newVal)
                    })
                }}>
                渲染
            </Button>
        </div>
    )
}

export default Index
