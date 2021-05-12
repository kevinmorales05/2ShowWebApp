import React from "react";
import {
  Form,
  Input,
  Checkbox,
  Button,
  InputNumber,
  DatePicker,
  Upload,
} from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { auth, db } from "../firebase";
import { useHistory } from "react-router-dom";

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 5,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 2,
    },
  },
};

export default function CreateShow() {
  const [form] = Form.useForm();
  if(auth.currentUser) {
      console.log('existe un usuario');
      
  }

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    createShow(values);
    history.push("/profile");
  };

  const createShow = async (values) => {
    //const user = await auth.currentUser();
    try {
     // writeEventData(values, user.uid);
     writeEventData(values);
      alert("Nuevo evento registrado con éxito!");
    } catch (error) {
      console.log("No fue posible registrar su evento en la base de datos");
    }
  };

  function writeEventData(values) {
      
    db.ref("events/").push({
      name: values.name,
      description: values.description,
      // banner : values.banner,
      costTicket: values.costTicket,
      ticketsAvailable: values.ticketsAvailable,
      //dateEvent: values.dateEvent,
      dateCreation:  Date.now(),
      urlEvent: values.urlEvent,
     // uid: uid,
    });
    console.log("upload complete!",  values.name);
  }

  //para subir la foto
  const normFile = (e) => {
    console.log("Upload event:", e);

    if (Array.isArray(e)) {
      return e;
    }

    return e && e.fileList;
  };

  let history = useHistory();

  

  return (
    <div>
      <Form
        {...formItemLayout}
        form={form}
        name="register"
        onFinish={onFinish}
        
        scrollToFirstError
      >
        <Form.Item
          name="name"
          label="Nombre del Evento"
          rules={[
            {
                required: true,
                message: "Por favor escriba el nombre del evento",
                whitespace: true,
              },
            
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="description"
          label="Descripción del Evento"
          tooltip="Describa el evento que está organizando, ¿De qué se trata?"
          rules={[
            {
              required: true,
              message: "Por favor escriba la descripción del evento",
              whitespace: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="costTicket"
          label="Costo del Ticket"
          rules={[
            {
              type: "number",
              required: true,
              min: 5,
              max: 100000,
            },
          ]}
        >
          <InputNumber />
        </Form.Item>
        <Form.Item
          name="ticketsAvailable"
          label="Tickets Disponibles"
          tooltip="Escriba la cantidad de tickets disponibles, mínimo 100"
          rules={[
            {
              type: "number",
              required: true,
              min: 100,
              max: 1000000,
            },
          ]}
        >
          <InputNumber />
        </Form.Item>

        <Form.Item
          label="Fecha del Evento"
          name="dateEvent"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <DatePicker />
        </Form.Item>

        <Form.Item
          name="banner"
          label="Subir Banner del Evento"
          tooltip="Suba una foto del afiche publicitario del evento"
          valuePropName="fileList"
          getValueFromEvent={normFile}
          extra="Suba su banner publicitario"
        >
          <Upload name="logo" action="/upload.do" listType="picture">
            <Button icon={<UploadOutlined />}>Click para subir</Button>
          </Upload>
        </Form.Item>

        <Form.Item
          name="urlEvent"
          label="Url del Evento"
          rules={[
            {
              required: true,
              message: "Por favor escriba el url de su evento!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="agreement"
          valuePropName="checked"
          rules={[
            {
              validator: (_, value) =>
                value
                  ? Promise.resolve()
                  : Promise.reject(new Error("Should accept agreement")),
            },
          ]}
          {...tailFormItemLayout}
        >
          <Checkbox>
            Estoy de acuerdo con los términos y <a href="">Condiciones</a>
          </Checkbox>
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Crear Evento
          </Button>
        </Form.Item>
      </Form>
      <Button type="primary" onClick={() => console.log("vista previa evento")}>
        Vista Previa del Evento
      </Button>{" "}
    </div>
  );
}
