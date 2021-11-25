import React from 'react'
import ApyForm from './Form/ApyForm'
import FormulaCard from './FormulaCard/FormulaCard'

const DashBoard = () => {
    return (
        <div style={{display:'flex',justifyContent:'space-evenly'}}>
            <ApyForm/>
            <FormulaCard/>
        </div>
    )
}

export default DashBoard
