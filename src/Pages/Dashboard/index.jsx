import React from 'react';
import Search from '../../Components/search';
import Sidebar from '../../Components/Sidebar';
import { Card } from 'antd';
import { Modal } from 'antd';
import './style.scss';

function Dashboard() {
    const [user, setUser] = React.useState([]);
    const [modal, setModal] = React.useState(false)
    const [actualUser, setActualUser] = React.useState({
        name: "",
        description: "",
        title:"",
        direction:"",
        email:"",
        phone:""
    })
    const { Meta } = Card;

    const openModal = (index) =>{        
        setModal(true)
        setActualUser({
            name: user[index].name.first +' '+ user[index].name.last,
            description: user[index].location.timezone.description,
            title:user[index].name.title,
            direction: user[index].location.street.name,
            email:user[index].email,
            phone:user[index].phone
        })        
    }
    const handleCancel = () => {
        setModal(false)
    }
    React.useEffect(() => {
        fetch('https://randomuser.me/api/?results=6')
        .then(response => response.json())
        .then(json => {            
            console.log(json.results)
            setUser(json.results)                
        })       
    },[] );    

    return (
        <div className="dashboard">
            <div className="dashboard__menu">
                <Sidebar></Sidebar>
            </div>
            <div className="dashboard__main">
                <Search />
                <h2>
                    Usuarios
                </h2>

                <div className="userscontainer">
                {user.map ((person, index) => (
                    <div key={person.cell}>
                        <Card  onClick={()=>openModal(index) }
                        hoverable
                        style={{ width: 150 }}
                        cover={<img alt={person.name.first} src={person.picture.large} />}
                        >
                        <Meta title={person.name.first} description={person.cell} />
                        </Card>                      
                     </div>
                ))}  
                
                    <Modal title={actualUser.name} visible={modal}   footer={null} onCancel={handleCancel}>                                             
                        <p>{actualUser.description}</p>
                        <p> 
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-device-mobile" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="#6c63ff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <rect x="7" y="4" width="10" height="16" rx="1" />
                            <line x1="11" y1="5" x2="13" y2="5" />
                            <line x1="12" y1="17" x2="12" y2="17.01" />
                            </svg> 
                        {actualUser.title}</p>
                        <p>
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-map-pin" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="#6c63ff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <circle cx="12" cy="11" r="3" />
                            <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
                            </svg>
                            {actualUser.direction}</p>

                        <p>
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-mail" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="#6c63ff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <rect x="3" y="5" width="18" height="14" rx="2" />
                            <polyline points="3 7 12 13 21 7" />
                            </svg>
                            {actualUser.email}</p>                        
                    </Modal>
                </div>                 
            </div>
        </div>
    )
}

export default Dashboard
