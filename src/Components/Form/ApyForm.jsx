import React, { useState } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
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
      console.log(apy);
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
      <h2><b>APY is :</b></h2>
      <h2>
        {apy}
      </h2>
    </div>
        </div>
    )
}

export default ApyForm
