import React, { Component } from 'react';
import './contact.css';

const user1 = {
    name: "Skyblack",
    avatar:
      "https://parismatch.be/app/uploads/2018/04/Macaca_nigra_self-portrait_large-e1524567086123-1100x715.jpg",
    online: true
  };
  const user2 = {
    name: "Charly",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRuZeQqB1tOuGc3PM_7zELwLIRku6H5G7yVcJx4c35haWBmvTBD",
    online: true
  };
  const user3 = {
    name: "Astrid",
    avatar:
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",
    online: false
  };

class Contact extends Component{ 


    render(){
        return(
            <div className="Contacts">
                <div className="Contact">    
                    <img className="avatar" src={user1.avatar} />
                    <div className="ContactStatus">
                    <h1 className="name">{user1.name}</h1>
                        <div className="status">
                            <div className={user1.online === true ? "status-online" : "status-offline"}></div>
                            <p className="status-text">{user1.online === true ? "Online" : "Offline"}</p>
                        </div>
                    </div>
                </div>
                <div className="Contact">  
                    <img className="avatar" src={user2.avatar} />
                    <div className="ContactStatus">
                    <h1 className="name">{user2.name}</h1>
                        <div className="status">
                            <div className={user2.online === true ? "status-online" : "status-offline"}></div>
                            <p className="status-text">{user2.online === true ? "Online" : "Offline"}</p>
                        </div>
                    </div>
                </div>
                <div className="Contact"> 
                   <img className="avatar" src={user3.avatar} /> 
                    <div className="ContactStatus">
                        <h1 className="name">{user3.name}</h1>
                        <div className="status">
                            <div className={user3.online === true ? "status-online" : "status-offline"}></div>
                            <p className="status-text">{user3.online === true ? "Online" : "Offline"}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
}
}

export default Contact;