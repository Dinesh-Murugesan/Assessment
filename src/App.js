import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      menu: [
        {
          title: 'Twitter',
          para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  '
        },
        {
          title: 'Facebook',
          para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
        },
        {
          title: 'Instagram',
          para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
      ]
    }
  }
  render(){
    let ma= this.state.menu.map((men,index)=> {
         return(<div key = {index}  className={'App-menuHeader-'+index}>
              <div className={'App-sectionTitle-'+index}>{men.title}</div>
              <div className='App-para'>{men.para}</div>
            </div>)}
          )
    return (
      <div className="App">
        <header className='App-Header'>
          <h1>Social Medias</h1>
          {ma}
        </header>
      </div>
    );
  }
}

export default App;
