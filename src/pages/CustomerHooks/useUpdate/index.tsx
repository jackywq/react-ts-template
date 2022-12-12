import { Button } from 'antd'
import React from 'react'
import useUpdate from './useUpdate'

const Index: React.FC<any> = () => {
    const update = useUpdate()

    return (
        <div style={{ padding: 50 }}>
            <div>时间：{Date.now()}</div>
            <Button type="primary" onClick={update}>
                更新时间
            </Button>
        </div>
    )
}

export default Index
