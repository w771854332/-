import React from 'react';
import { connect } from 'dva';
import { List, InputItem, Button } from 'antd-mobile';
import { createForm } from 'rc-form';

class BasicInputExample extends React.Component {
  componentDidMount() {
  }
  submit = () => {
    this.props.form.validateFields((error, value) => {
      console.log(error, value);
      this.props.dispatch({ type: 'user/signIn', payload: value });
    });
  };
  render() {
    const { getFieldProps } = this.props.form;
    return (
      <div>
        <List>
          <InputItem
            {...getFieldProps('username')}
            clear
            ref={(el) => { this.autoFocusInst = el; }}
          >账号</InputItem>
          <InputItem
            {...getFieldProps('password')}
            clear
            type={'password'}
          >密码</InputItem>
          <Button onClick={this.submit}>登录</Button>
        </List>
      </div>
    );
  }
}

const BasicInputExampleWrapper = connect(mapStateToProps)(createForm()(BasicInputExample));
function mapStateToProps() {
  return {
  };
}
export default BasicInputExampleWrapper;
