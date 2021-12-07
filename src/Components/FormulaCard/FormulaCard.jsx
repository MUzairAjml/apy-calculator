import React from 'react'
import { Card } from 'antd';
import Formula from '../../images/apy-formula.png';
import SimpleFormula from '../../images/simplified-formula.png'
import './FormulaCard.css';

const { Meta } = Card;

const FormulaCard = () => {
    return (
        <div className='side-card'>
            <Card
    title={<h2>Formula</h2>}
    hoverable
    style={{ width: 260 }}
    cover={<img alt="example" src={Formula} />}
  >
  </Card>
  
  {/* Simplified Formula */}

        </div>
    )
}

export default FormulaCard
