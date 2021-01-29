import React,{useState} from 'react';
import profile from './kimwest00.PNG';
import unknown_profile from './profile.PNG'
import boo_image from './boo.jpg';
import {FcLike} from 'react-icons/fc';
import './Template.scss';
const Template = () => {
    const [number, setNumber] = useState(0);
    
    const onIncrease = () => {
        setNumber(number + 1);
  }
  const [names,setNames] = useState([
    {id:1, text:'리액트 과제나 하렴~'}
]);
    const [InputText,setInputText]=useState('');
    const [nextId,setNextId] = useState(2);
    const onChange=e=>setInputText(e.target.value);
    const onClick = () =>{
        const nextNames = names.concat({
            id:nextId,
            text:InputText
        });
        setNextId(nextId+1);
        setNames(nextNames);
        setInputText('');
    };
    const namesList= names.map(name=> <li key={name.id}>{name.text}</li>)
    return(
        <div className="Template">
            <div className="profile-title">
                <img 
                src ={profile}
                width='79'
                height='64'/>kimwest00</div>
        
        <div className = "content">
        <img 
        src={ boo_image }
        width='540'
        height='360'
        />
        kimwest00 석양이..진다...★
        <h1><FcLike/>{number}</h1>
        <button onClick={onIncrease}>
        <FcLike/>
        </button>
        <input value = {InputText} onChange={onChange}/>
        <button onClick={onClick}><img 
        src={ unknown_profile }
        width='22'
        height='18'
        />댓글다시겠습니까?</button>
        <ul>{namesList}</ul>
    </div>
    </div>
    );
};
export default Template;