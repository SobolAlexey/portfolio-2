import './Skils.scss'
import reactImg from '../../img/react.svg'
import apollo from '../../img/apollo.svg'
import bootstrap from '../../img/bootstrap.svg'
import css3 from '../../img/css3.svg'
import git from '../../img/git.svg'
import graphql from '../../img/graphql.svg'
import html from '../../img/html.svg'
import redux from '../../img/redux.svg'
import javascript from '../../img/javascript.svg'
import photoshop from '../../img/photoshop.svg'
import sass from '../../img/sass.svg'
import sketch from '../../img/sketch.svg'
const Skils = () => {
  return <div className='skils'>
    <div className="skils_img">
      <img src={reactImg} alt='react' />
      <img src={apollo} alt='apollo' />
      <img src={bootstrap} alt='bootstrap' />
      <img src={css3} alt='css3' />
      <img src={git} alt='git' />
      <img src={graphql} alt='graphql' />
      <img src={html} alt='html' />
      <img src={redux} alt='redux' />
      <img src={javascript} alt='javascript' />
      <img src={photoshop} alt='photoshop' />
      <img className='imgBlock__img' src={sass} alt='sass' />
      <img className='imgBlock__img' src={sketch} alt='sketch' />
    </div>

    <div className="skils_text">
      <div className="skils_text_main">
        <h2>Основной Стэк:</h2>
        <h1>Html, CSS, SCSS, JavaScript , TS, React, Redux, Jest</h1>
      </div>
      <div className="skils_text_labs">
        <h3>Библиотеки которые использовал в проектах: </h3>
        <h2>MobX, redux-thunk, react router, axios, json-server,
          <br></br> express, socket.IO, classNames, Formik, react-form,
          <br></br> Ant-Design, Material-UI, React-Bootstrap, react-sceleton,
          <br></br>  react-select, reselect</h2>
      </div>

      <h3>- Уверенное знание: HTML+CSS,SASS/LESS</h3>
      <h3>- Отличное знание нативного JavaScript</h3>
      <h3>- Уверенное знание React/Redux</h3>
      <h3>- Понимание основных принципов кросс-браузерной и адаптивной вёрстки</h3>
      <h3>- Опыт работы с ситемой контроля версиями GIT</h3>
      <h3>- Знание TypeScript</h3>
      <h3>- Опыт написания unit тестов</h3>
    </div>
  </div>
}
export default Skils