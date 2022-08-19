/*
 * @Author: quan.wang
 * @Date: 2022-08-18 19:10:22
 * @LastEditors: quan.wang
 * @LastEditTime: 2022-08-18 19:12:53
 */
import { useEffect } from 'react'

const UseMount = (fn: () => void) => {
    useEffect(() => {
        fn?.()
    }, [])
}

export default UseMount
