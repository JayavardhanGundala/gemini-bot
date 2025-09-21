import React, { useContext } from 'react'
import './main.css'
import assets from './../../assets/assets.js' 
import {Context} from '../../contex/contet.jsx'

const Main = () => {
    const {onSent,recentPrompt,showResult,loading,resultData,setInput,input}=useContext(Context)
  return (
    <div className='main'>
        <div className="nav">
            <p>Gemini</p>
            <img src={assets.user_icon} alt="" />
        </div>
        <div className="main-container">
               {!showResult?<>
                           <div className="greet">
                <p><span>Hello, Jay</span></p>
                <p>How can i help you today?</p>
            </div>
           {/* <div className="cards">
                <div className="card">
                    <p>Suggest beautiful places to see on an upcoming road trip</p>
                    <img src={assets.compass_icon}  alt="" />
                </div>
                <div className="card">
                    <p>Suggest beautiful places to see on an upcoming road trip</p>
                    <img src={assets.bulb_icon}  alt="" />
                </div>
                <div className="card">
                    <p>Suggest beautiful places to see on an upcoming road trip</p>
                    <img src={assets.message_icon}  alt="" />


                </div>
                <div className="card">
                    <p>Suggest beautiful places to see on an upcoming road trip</p>
                    <img src={assets.code_icon}  alt="" />
                </div>
                
            </div>*/}
               </>:<div className='Result'>
                     <div className="result-title">
                            <img src={assets.user_icon_left} alt="" />
                            <p>{recentPrompt}</p>
                      </div>
                      <div className="result-data">
                        <img src={assets.gemini_icon} alt="" />
                        {loading?<div className='loader'>
                            <hr />
                            <hr />
                            <hr />
                        </div>
                        :<p dangerouslySetInnerHTML={{__html:resultData}} ></p>}
                      </div>
                    </div>       }
        </div>
        <div className="main-bottom">
            <div className="search-box">
                <input type="text" placeholder='Enter the prompt here' onChange={(e)=>setInput(e.target.value) } value={input} />
                <div>
                    <img src={assets.gallery_icon} alt="" />
                    <img src={assets.mic_icon} alt="" />
                    <img onClick={()=>onSent()} src={assets.send_icon} alt="" />
                </div>
            </div>
            <div className="bottom-info">
                <p>Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps</p>
            </div>
        </div>
    </div>
  )
}

export default Main