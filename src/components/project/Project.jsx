
import { useState } from 'react'
import Popup from './Popup/popup'
import './Project.scss'
import ProjectCart from './ProjectCart'



const Project = () => {

  let projects = [
    {
      "id": 0,
      "imageUrl": "https://dodopizza.azureedge.net/static/Img/Products/f035c7f46c0844069722f2bb3ee9f113_584x584.jpeg",
      "name": "React Pizza",
      "description": "Копия интернет-магазина Dodo пиццы",
      "tehnologies": "React, Redux, redux-thunk, React Router, Axios, json-server",
      "url": "",
      "gitHub": "https://github.com/SobolAlexey/react-pizza-app-market",
    },
    {
      "id": 1,
      "imageUrl": "https://e7.pngegg.com/pngimages/34/887/png-clipart-online-chat-computer-icons-livechat-conversation-others-logo-online-chat.png",
      "name": "React Chat",
      "description": "Простой Чат",
      "tehnologies": "React, NodeJS / Express, Socket.IO",
      "url": "",
      "gitHub": "https://github.com/SobolAlexey/React-Express-Chat",
    },
    {
      "id": 2,
      "imageUrl": "https://lh6.ggpht.com/976WYw4s6QWDkdA1JVOzAu-nEzoTJKH7Jgfh2J6hyc8JUrTcvFRqjrm3zAHdUdNWLg",
      "name": "React To-Do",
      "description": "Список задач с добавлением по темам",
      "tehnologies": "ReactJS, Axios, json-server, React Router",
      "url": "",
      "gitHub": "https://github.com/SobolAlexey/ToDoList",
    },
    {
      "id": 3,
      "imageUrl": "https://thumbs.dreamstime.com/b/%D1%87%D0%B5%D1%80%D0%BD%D1%8B%D0%B9-%D0%B7%D0%BD%D0%B0%D1%87%D0%BE%D0%BA-%D0%B4%D0%BE%D1%81%D1%82%D1%83%D0%BF%D0%B0-%D0%B7%D0%B0%D1%89%D0%B8%D1%82%D1%8B-%D0%BF%D0%B0%D1%80%D0%BE%D0%BB%D0%B5%D0%BC-%D0%BD%D0%B0-%D0%B1%D0%B5%D0%BB%D0%BE%D0%BC-%D1%84%D0%BE%D0%BD%D0%B5-%D0%B8%D0%B7%D0%BE%D0%BB%D1%8F%D1%86%D0%B8%D0%B8-%D0%B8-196232274.jpg",
      "name": "Password Generator",
      "description": "Онлайн генератор паролей",
      "tehnologies": "React, Express, password-generator",
      "url": "https://glacial-chamber-28289.herokuapp.com",
      "gitHub": "",
    },
   
   
  ]
  const [popupActive, setPopupActive] = useState(false)
  return <div className='project'>

 { projects.map((obj) => <ProjectCart key={obj.id} {...obj} active={popupActive}  setActive={setPopupActive} />)}

 {popupActive && <Popup active={popupActive}  setActive={setPopupActive} >
          <h1>Извините действие недоступно.</h1>
        </Popup>}
        </div>

}
export default Project