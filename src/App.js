import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Layout } from "antd";
import Routes from "./components/Routes";
import Menu2 from "./components/Menu2";

const { Header, Footer, Content } = Layout;

function App() {
  return (
    <Router>
      <Layout>
        <Header className="header">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <div>
              <img
                className="logo"
                src="https://firebasestorage.googleapis.com/v0/b/showwebapp-ba70f.appspot.com/o/WebPageImages%2FiconoBlanco.png?alt=media&token=1d7c7f80-a3e4-4535-8381-4c9238621518"
                width="50px"
                height="40px"
              />
            </div>
            <h1 className="textBig textLogo">2Show</h1>
          </div>

          <div className="menu2">
            <Menu2 />
          </div>
        </Header>
        <Layout>
          <Content>
            <div className="content">
              <Routes />
            </div>
          </Content>
        </Layout>
        <Footer className="footer" style={{ color: "white" }}>
          <Menu2 />© Copyright 2Show 2021 by i-Code Tech
        </Footer>
      </Layout>
    </Router>
  );
}

export default App;
