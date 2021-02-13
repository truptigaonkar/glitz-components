import React, { useState } from 'react';
import { styled } from '@glitz/react';
import { Style } from '@glitz/type';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import BasicGlitz from './components/BasicGlitz';
import Pseudoelement from './components/Pseudoelement';
import Boxmodel from './components/Boxmodel';
import DeepStyleComposition from './components/DeepStyleComposition';
import HeadersFlexbox from './components/HeadersFlexbox';
import DynamicStylingUsingProps from './components/DynamicStylingUsingProps';
import Animation from './components/Animation';
import Home from './components/Home';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import StandaloneStyleObject from './components/StandaloneStyleObject';
import GlobalStyling from './components/GlobalStyling';
import {
  Navbar,
  NavbarBrand,
} from 'reactstrap';

function App() {
  const [activeTab, setActiveTab] = useState('1');
  const toggle = (tab: any) => {
    if (activeTab !== tab) setActiveTab(tab);
  }
  const containerStyle : Style = { 
    display: 'flex', 
    margin: { xy: '10em' },
  };

  return (
    <Router>
      <Navbar color="dark" dark expand="md" style={{display: 'flex', justifyContent: 'center'}}>
        <NavbarBrand>Glitz React Playground with TypeScript</NavbarBrand>
      </Navbar>
      <styled.Div css={containerStyle}>
        <Nav tabs vertical pills>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === '1' })}
              onClick={() => { toggle('1'); }}
            >
              <li><Link to="/">Home</Link></li>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === '2' })}
              onClick={() => { toggle('2'); }}
            >
              <li><Link to="/animation">Animation</Link></li>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === '3' })}
              onClick={() => { toggle('3'); }}
            >
              <li><Link to="/header">HeadersFlexbox</Link></li>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === '4' })}
              onClick={() => { toggle('4'); }}
            >
              <li><Link to="/basicGlitz">BasicGlitz</Link></li>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === '5' })}
              onClick={() => { toggle('5'); }}
            >
              <li><Link to="/boxmodel">Boxmodel</Link></li>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === '6' })}
              onClick={() => { toggle('6'); }}
            >
              <li><Link to="/deepStyleComposition">DeepStyleComposition</Link></li>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === '7' })}
              onClick={() => { toggle('7'); }}
            >
              <li><Link to="/pseudoelement">Pseudoelement</Link></li>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === '8' })}
              onClick={() => { toggle('8'); }}
            >
              <li><Link to="/dynamicStylingUsingProps">DynamicStylingUsingProps</Link></li>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === '9' })}
              onClick={() => { toggle('9'); }}
            >
              <li><Link to="/standaloneStyleObject">StandaloneStyleObject</Link></li>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === '10' })}
              onClick={() => { toggle('10'); }}
            >
              <li><Link to="/globalStyling">GlobalStyling</Link></li>
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col sm="12">
                <h4>Glitz React Playground with TypeScript</h4>
                <Route exact path="/" component={Home} />
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <Col sm="12">
                <Route path="/animation" component={Animation} />
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="3">
            <Row>
              <Col sm="12">
                <Route path="/header" component={HeadersFlexbox} />
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="4">
            <Row>
              <Col sm="12">
                <Route path="/basicGlitz" component={BasicGlitz} />
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="5">
            <Row>
              <Col sm="12">
                <Route path="/boxmodel" component={Boxmodel} />
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="6">
            <Row>
              <Col sm="12">
                <Route path="/deepStyleComposition" component={DeepStyleComposition} />
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="7">
            <Row>
              <Col sm="12">
                <Route path="/pseudoelement" component={Pseudoelement} />
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="8">
            <Row>
              <Col sm="12">
                <Route path="/dynamicStylingUsingProps" component={DynamicStylingUsingProps} success color="blue" />
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="9">
            <Row>
              <Col sm="12">
                <Route path="/standaloneStyleObject" component={StandaloneStyleObject} success color="blue" />
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="10">
            <Row>
              <Col sm="12">
                <Route path="/globalStyling" component={GlobalStyling} success color="blue" />
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </styled.Div>
    </Router>
  );
}

export default App;

