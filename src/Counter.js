import React,{Component} from 'react';
import {GoHeart} from 'react-icons/go';
import boo_image from './boo.jpg';
class Counter extends Component{
    constructor(props){
        super(props);
        this.state={
            number:0
        };
    }
    render(){
        const {number} = this.state;
        return(
            <div>
                <img 
                src={ boo_image }
                width='540'
                height='360'
                 
                />
                <h1>{number}</h1>
                <button
                onClick={()=>{
                    this.setState({number:number+1});
                    
                }}>
                <GoHeart/>
                    좋아요를 눌러
                </button>

            </div>
        );
    }
}
export default Counter;