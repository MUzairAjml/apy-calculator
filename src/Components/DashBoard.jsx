import React from 'react'
import ApyForm from './Form/ApyForm'
import FormulaCard from './FormulaCard/FormulaCard'
import './DashBoard.css';
import AnnouncementCard from './AnnouncementCard/AnnouncementCard';

const DashBoard = () => {
    return (
        <>
        <div className="dashboard">
            <ApyForm/>
            <FormulaCard/>
        </div>
        <AnnouncementCard/>
        </>
    )
}

export default DashBoard
