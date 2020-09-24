import React from 'react';
import Header from '../Header/Header';
import './Home.css';
import rectanghle1 from '../../image/rectanghle1.png';
import sajek from '../../image/sajek.png';
import sreemongol from '../../image/sreemongol.png';
import { Link } from 'react-router-dom';

const Home = () => {

    return (
        <div className="home">
            <Header></Header>
            <div className="homebody flex-container">
                <div className="textContent">
                    <h1>COX'S BAZAR</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, non necessitatibus consequatur ratione nesciunt ea! Impedit harum sit necessitatibus illo quo voluptatibus, repudiandae fugiat dolore ut odio possimus dolor facilis, debitis porro, excepturi dicta expedita libero veniam enim labore. Pariatur fuga, ipsum consequuntur architecto vel temporibus vero quod commodi nulla officia optio tempora repellat illo quisquam cum dicta? Adipisci consectetur voluptas quos, harum nam voluptates incidunt! Minus tempore maxime tenetur distinctio? Qui nesciunt, perferendis reiciendis ad culpa tempora quas quaerat provident vitae possimus cumque? Accusamus corporis nobis, qui molestias recusandae deserunt tenetur, consequatur exercitationem tempore beatae modi expedita, placeat cumque.</p>
                </div>
                <div className="flex-container">
                    <div className="likeCard">
                        <Link to="/bookroom"><img src={rectanghle1} alt="" /></Link> 
                        <p>Cox's Bazar</p>
                    </div>
                    <div className="likeCard">
                        <Link to="/bookroom"><img src={sajek} alt="" /></Link> 
                        <p>Sajek</p>
                    </div>
                    <div className="likeCard">
                        <Link to="/bookroom"><img src={sreemongol} alt="" /></Link>
                        <p>Sreemongol</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;