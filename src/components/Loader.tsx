/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import { InfinitySpin } from 'react-loader-spinner'

const Loader = ({ type = 'default' }: { type: 'table' | 'page' | 'default' }) => {
    return (
        <InfinitySpin
            width="200"
            color="#4fa94d"
        />
    )
}

export default Loader