import './App.css'
import React from 'react'
import axios from 'axios'

class App extends React.Component {
    state = {
        adivce: ''
    }

    componentDidMount () {
        this.fetchAdvice();
    }
    fetchAdvice = async () => {
      const response = await axios.get(`https://api.adviceslip.com/advice`);
      try{
          const {advice} = response.data.slip;
          this.setState({ advice })
        
      }catch(error){
          console.log(error.message);
          
      }
    }
    render () {
        const {advice} = this.state;
        return (
            <div className="container">
                <div className="card">
                     <p className="heading">{advice ? advice : 'loading...'}</p>
                     <button className="button" onClick={this.fetchAdvice}>
                         <span>GIVE ME SOME ADVICE</span>
                     </button>
                </div>
                
            </div>
        )
    }
}

export default App;