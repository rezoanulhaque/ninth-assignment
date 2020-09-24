import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../Header/Header';
import './Bookroom.css';

const Bookroom = () => {
    
    const history = useHistory();
    const handleProceedCheckout = () =>{
        history.push('/roomdetails');
    }
    return (
        <div className="bookroom">
            <Header></Header>
            <div className="flex-container">
                <div className="leftContent">
                    <h1>COX'S BAZAR</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, non necessitatibus consequatur ratione nesciunt ea! Impedit harum sit necessitatibus illo quo voluptatibus, repudiandae fugiat dolore ut odio possimus dolor facilis, debitis porro, excepturi dicta expedita libero veniam enim labore. Pariatur fuga, ipsum consequuntur architecto vel temporibus vero quod commodi nulla officia optio tempora repellat illo quisquam cum dicta? Adipisci consectetur voluptas quos, harum nam voluptates incidunt! Minus tempore maxime tenetur distinctio? Qui nesciunt, perferendis reiciendis ad culpa tempora quas quaerat provident vitae possimus cumque? Accusamus corporis nobis, qui molestias recusandae deserunt tenetur, consequatur exercitationem tempore beatae modi expedita, placeat cumque.</p>
                </div>
                <div className="formContent">
                    <form action="">
                        <p>Origin</p>
                        <input type="text" />
                        <p>Destination</p>
                        <input type="text" />
                        <div className="flex-container">
                            <div>
                                <p>From</p>
                                <input type="date" name="" id=""/>
                            </div>
                            <div>
                                <p>To</p>
                                <input type="date" name="" id=""/>
                            </div>
                        </div>
                        <button onClick={handleProceedCheckout}>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Bookroom;