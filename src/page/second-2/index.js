import React, { Fragment } from 'react'
import { useState, useMemo, useCallback, useEffect } from 'react'

// 产品名称列表
const nameList = ['apple', 'peer', 'banana', 'lemon']

const Example = (props) => {
    // 产品名称、价格
    const [price, setPrice] = useState(0)
    const [name, setName] = useState('apple')

    // 假设有一个业务函数  获取产品的名字
    function getProductName() {
        console.log('getProductName触发')
        return name
    }

    // 只对price响应
    useEffect(() => {
        console.log('price effect触发')
    }, [price])

    // 只对name响应
    useEffect(() => {
        console.log('name effect触发')
        getProductName()
    }, [name])

    // memo化的name属性
    const memo_name = useMemo(()=>{
        console.log('name memo 触发')
        return () => name
    }, [name])

    return (
        <Fragment>
            <p>{ name }</p>
            <p>{ price }</p>
            <p>普通的name：{ getProductName() }</p>
            <p>memo化的：{memo_name()}</p>
            <button onClick={() => setPrice(price+1)}> 价钱+1 </button>
            <button onClick={() => setName(nameList[Math.random() * nameList.length << 0])}> 修改名字 </button>
        </Fragment>
    )
}
export default Example
