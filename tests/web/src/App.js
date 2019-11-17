import React from 'react';
import logo from './logo.svg';
import './App.css';
import oneshop from 'oneshop';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {};
  }

  componentDidMount(){
    let os = new oneshop();
    os.setWebMode();
    os.mall.article.get()
    .then(articles => {
      this.setState({articles : articles})
    }).catch(error => {
      alert(error.messages)
    });
  }

  render(){
    return (
      <div>
        <pre>
          {this.state.articles ? JSON.stringify(this.state.articles, null, 2) : "hahaha"} 
        </pre>
      </div>
    )
  }
}

export default App;
