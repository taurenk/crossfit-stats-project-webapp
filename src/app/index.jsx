import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';

class Root extends Component {

  render() {
      return <div style={{height: '300px', position: 'relative'}}>
        <Layout fixedHeader>
            <Header title={<span><span style={{ color: '#ddd' }}></span><strong>Crossfit Games Project</strong></span>}>
                <Navigation>
                    <a href="">Link</a>
                </Navigation>
            </Header>
            <Drawer title="Menu">
                <Navigation>
                    <a href="">Link</a>
                </Navigation>
            </Drawer>
            <Content />
        </Layout>
    </div>

  };

}


ReactDOM.render(<Root/>, document.getElementById('mount'));
