import React, { useState, useContext, useEffect } from "react";
import FirebaseContext from '../context/firebaseContext'
import { Form, Input, Checkbox, Button } from "antd";
import { useHistory } from "react-router-dom";
import Register from './Register';
import {auth} from '../firebase';
import 'firebase/auth';

export default function SingIn() {
  const [register, setRegister] = useState(false);
  let {singIn, setSingIn} = useContext(FirebaseContext);
  
  let history = useHistory();

//Login Function
  function signInWithEmailPassword(email, password) {

    auth.signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        
        let user = userCredential.user;
        console.log("Impresion de usuario",user.uid);
        console.log("Impresion de password",password);
        console.log("Impresion de email",user.email);
        setSingIn()
        history.push('/myprofile');
        alert('Bienvenido a 2Show!');
      })
      .catch((error) => {
        
        alert('Datos erroneos');
        history.push('/');
      });
    
  }

//funcion mejorada




  
  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 8,
    },
  };
  const tailLayout = {
    wrapperCol: {
      offset: 8,
      span: 8,
    },
  };

  const onFinish = (values) => {

    console.log("username", values.username);

    signInWithEmailPassword(values.username, values.password)
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div style={{ marginTop: 30 }}>
      {register ? (
        <Register />
      ) : (
        <Form
          {...layout}
          name="basic"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Correo Electrónico"
            name="username"
            rules={[
              {
                required: true,
                message: "Por favor escriba su correo electrónico!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Clave"
            name="password"
            rules={[
              {
                required: true,
                message: "Por favor escriba su Clave!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item {...tailLayout} name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Ingresar
            </Button>
          </Form.Item>
          <Button type="primary"
          onClick={
              ()=> setRegister(true)
          }
          >Registrase</Button>
        </Form>
      )}
    </div>
  );
}
