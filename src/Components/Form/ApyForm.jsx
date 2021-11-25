import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
import './ApyForm.css';

const ApyForm = () => {
  const [reward,setReward]=useState();
  const [fee,setFee]=useState();
  const [tvl,setTvl]=useState();
  const [apy,setApy]=useState();

    const onFinish = (values) => {
        const APY=(((((((reward*365+fee*52)/tvl)/365)+1)**365)-1)*100)
        setApy(APY);
      };
    
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };   
    return (
        <div className="form-div">
              <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Reward in Value"
        type="number"
        name="reward"
        rules={[{ required: true, message: 'Please input reward!' }]}
        value={reward}
        onChange={(e)=>setReward(e.target.value)}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="7 Days Fee"
        name="fee"
        rules={[{ required: true, message: 'Please input your fee!' }]}
        value={fee}
        onChange={(e)=>setFee(e.target.value)}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="TVL"
        name="tvl"
        rules={[{ required: true, message: 'Please input your TVL!' }]}
        value={tvl}
        onChange={(e)=>setTvl(e.target.value)}
      >
        <Input />
      </Form.Item>


      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Calculate
        </Button>
      </Form.Item>
     
    </Form>
    <div className="label">
      <h2><b>APY is : </b></h2>
      <h2 style={{marginLeft:'8px',color:'red'}}>
        {apy}
      </h2>
    </div>
    <div className="formula-div">
      <h3><b>Formula Used : </b></h3>
      <span className="formula">
      <h4 style={{color:'green'}}>A= reward in dollar</h4>
      <h4 style={{color:'purple'}}>B = (A x 365) + fees generated</h4>
      <h4 style={{color:'#F90422'}}>C = B / TVL</h4>
      <h4 style={{color:'#F94E04'}}>D = C / 364</h4>
      <h4 style={{color:'#2F2FD3'}}>E= 1 + D</h4>
      <h4 style={{color:'blue'}}>F = E ^ 365</h4>
      <h4 style={{color:'red'}}>Final APY = F - 1</h4>
      </span>
      </div>
        </div>
    )
}

export default ApyForm
