import React, { useState } from 'react';
import { Form, Input, Button, Card } from 'antd';
import './ApyForm.css';

const ApyForm = () => {
  const [reward,setReward]=useState();
  const [fee,setFee]=useState(0);
  const [tvl,setTvl]=useState();
  const [apy,setApy]=useState();

    const onFinish = (values) => {
        const APY=((reward*365+fee)/tvl)*100
        setApy(APY.toFixed(2));

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
        label="Distributed Reward"
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

      {/* APY CAL */}

    <div className="label">
    <Card style={{ width: 300,height:'62px' }}>
    <p className='apy'>
      <h3>APY is : </h3>
      <h4 style={{color:'red'}}>{apy}</h4>
    </p>
  </Card>

  </div>

        </div>
    )
}

export default ApyForm
