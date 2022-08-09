import React, { FC } from 'react'

import { Button } from 'antd'
import nofound from '@/assets/images/nofound.png'

import './index.less'

interface IProps {
    history: {
        push: (p: string) => void
    }
}

const NotFound: FC<IProps> = ({ history }) => {
    return (
        <div className="no_found">
            <img src={nofound} alt="" className="no_found_image" />
            <div>
                <div className="big_title">敬请期待</div>
                <div className="coding">链接输入错误，请重新输入</div>
                {/* @ts-ignore */}
                <Button type="primary" onClick={() => history.push('/home')}>
                    返回首页
                </Button>
            </div>
        </div>
    )
}

export default NotFound
