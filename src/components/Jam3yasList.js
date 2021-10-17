import { observer } from 'mobx-react'
import React from 'react'
//Component
import Jam3yaItem from './Jam3yaItem'
//Data
import coopStore from '../store/coopStore'

const Jam3yasList = () => {

    const jam3yaArray = coopStore.jam3yas.map((jam3ya) => (
        <Jam3yaItem key={ jam3ya._id } jam3ya={ jam3ya }/>
    ))
    console.log(`The array is: ${jam3yaArray.length}`)
    console.log(coopStore.jam3yas)
    
    return (
        <div>
            {jam3yaArray}
        </div>
    )
}

export default observer(Jam3yasList)
