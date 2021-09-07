import './App.css';
import React, { Component } from 'react'
import Profile from './Person.js';
import imgSrc from "./imageInSrc.jpg"
import {Button} from 'react-bootstrap';
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName :"Steven Paul Jobs",
      profession:"Entrepreneur ,Industrial designer ,Investor ,Media proprietor",
      bio:"Jobs became CEO of Apple in 1997, following his company's acquisition of NeXT. He was largely responsible for helping revive Apple, which had been on the verge of bankruptcy. He worked closely with designer Jony Ive to develop a line of products that had larger cultural ramifications, beginning in 1997 with the 'Think different' advertising campaign and leading to the iMac, iTunes, iTunes Store, Apple Store, iPod, iPhone, App Store, and the iPad. In 2001, the original Mac OS was replaced with the completely new Mac OS X (now known as macOS), based on NeXT's NeXTSTEP platform, giving the OS a modern Unix-based foundation for the first time. Jobs was diagnosed with a pancreatic neuroendocrine tumor in 2003. He died of respiratory arrest related to the tumor at age 56 on October 5, 2011."
      ,checker:null,
      timer:0
    }
  }
  state={
    isVisible: false
  }
  visibilityOn=()=>{
    this.setState({
      isVisible: !this.state.isVisible
    })
  }
  componentDidMount(){
    this.setState({
      checker:setInterval(()=>{
        this.setState({timer:this.state.timer +1});
      },1000)
    })
  }
  componentWillUnmount(){
    clearInterval(this.state.checker);
  }
  render() {
    return (
      <div>
        <div>
          
            <Button style={{color : "rebeccapurple" ,backgroundColor:"black"}} onClick={this.visibilityOn}>{this.state.isVisible?`Hide Profile`:`Show Profile`}</Button>
            {this.state.isVisible?
              <Profile fullName={this.state.fullName} profession={this.state.profession} bio={this.state.bio} time={this.state.timer}>
                <div>
                  <img src={imgSrc} alt="" width="728" height="455" controls/>
                </div>
              </Profile> :<h1 style={{color: "silver"}}>Profile hidden !</h1>
          }
        </div>
      </div>
    )
  }
}

