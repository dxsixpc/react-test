import React from 'react';
import { Wrapper } from './Styled';
import { Form, Button } from 'antd';
// import { FormRichText } from './components';
import { FormRichText } from 'dxsix-form-components';
// import { FormRichText } from '@21epub/epub-form-components';

// import { npmBig } from './white';

const App: React.FC<any> = () => {
  const [form] = Form.useForm();

  const onValuesChange = (change: any, value: any) => {
    console.log(value);
  };

  const onClick = () => {
    console.log('设置初始值');
    form.setFieldsValue({
      FormRichText: '测试的内容',
    });
  };

  return (
    <Wrapper className="App">
      <Button onClick={onClick}>按钮</Button>
      <Form form={form} layout="vertical" onValuesChange={onValuesChange}>
        <Form.Item label="富文本" name="FormRichText">
          <FormRichText />
        </Form.Item>
      </Form>
    </Wrapper>
  );
};

export default App;
