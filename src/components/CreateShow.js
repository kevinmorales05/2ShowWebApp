import React, {useState} from "react";
import {
  Form,
  Input,
  Checkbox,
  Button,
  InputNumber,
  DatePicker,
} from "antd";
import { auth, db, storage } from "../firebase";
import { useHistory } from "react-router-dom";
import FileUploader from "react-firebase-file-uploader";
import Modal from "antd/lib/modal/Modal";
import VistaPrevia from "./VistaPrevia";

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

export default function CreateShow({uidUser}) {
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
      banner : urlImagen,
      costTicket: values.costTicket,
      ticketsAvailable: values.ticketsAvailable,
      //dateEvent: values.dateEvent,
      dateCreation:  Date.now(),
      urlEvent: values.urlEvent,
      uid: uidUser,
    });
    console.log("upload complete!",  values.name);
  }

  

  let history = useHistory();

  
//Funciones para manejar las imagenes
const handleUploadStart = () => {
  setProgreso(0)
  setSubiendo(true)

}
const handleUploadError = (error) => {
  setSubiendo(false)
  console.log(error)
}
const handleUploadSuccess = async (nombre) => {
  setProgreso(100)
  setSubiendo(false)
  //almacenar la url de destino
  const url = await storage.ref("bannerEvents")
  .child(nombre)
  .getDownloadURL();
  console.log(url)
  setUrlImagen(url)

}

const handleProgress = (progreso) => {
  setProgreso(progreso)
  console.log(progreso)
}

//states para las imagenes
const [subiendo, setSubiendo] = useState(false)
const [progreso, setProgreso] = useState(0)
const [urlImagen, setUrlImagen] = useState('')

//states para vista previa
//nameEvent, descripEvent, costEvent, ticketDisp, urlImagen
const [nameEvent, setNameEvent] = useState('')
const [descripEvent, setDescripEvent] = useState('')
const [costEvent, setCostEvent] = useState('')
const [ticketDisp, setTicketDisp] = useState(0)

const [isModalVisible, setIsModalVisible] = useState(false);
const showModal = () => {
  setIsModalVisible(true);
};

const handleOk = () => {
  setIsModalVisible(false);
};

const handleCancel = () => {
  setIsModalVisible(false);
};

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
          <Input  />
        </Form.Item>

        <Form.Item
          name="description"
          label="Descripción:"
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
          label="Banner del Evento"
          tooltip="Suba una foto del afiche publicitario del evento"
          valuePropName="fileList"
         
         
        >
          <FileUploader
                  accept="image/*"
                  id="imagen"
                  name="imagen"
                  randomizeFilename
                  storageRef={storage.ref("bannerEvents")}
                  onUploadStart={handleUploadStart}
                  onUploadError={handleUploadError}
                  onUploadSuccess={handleUploadSuccess}
                  onProgress ={handleProgress}

              />
              {subiendo && (
                <div className="barra">
                  <div className="avance" style={{width: `${progreso}%`}}>
                    {progreso} %
                    </div>
                </div>
              )
              }
              {
                urlImagen && (
                  <p className="successText">
                    La imagen se subió correctamente
                  </p>
                )
              }
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
          tooltip="Suba el link generado en Youtube para transmitir su evento"
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
          <Button type="primary" htmlType="submit" className="btn2Show">
            Crear Evento
          </Button>
        </Form.Item>
      </Form>
      <Button type="primary" onClick={showModal} className="btn2Show">
        Vista Previa del Evento
      </Button>{" "}
      <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <VistaPrevia />
      </Modal>
    </div>
  );
}
