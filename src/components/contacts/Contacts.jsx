import './Contacts.scss'
import vk from '../../img/vk.svg'
import phone from '../../img/phone.svg'
import gitHub from '../../img/github.svg'

const Contacts = () => {
  return <div className='contacts'>
    
    <div className='contacts__vk'>
      <img className='contacts__img' src={vk} alt='vk' />
      <div>
        <a className='contacts__a' href='https://vk.com/alexeysobol2000' >
          https://vk.com/alexeysobol2000
        </a>
      </div>

    </div>
    <div className='contacts__phone'>
      <img className='contacts__img' src={phone} alt='phone' />
      <div>
        <a href="tel:+78142332211">+7(922)-338-40-28</a>
      </div>

    </div>
    <div className='contacts__gitHub'>
      <img className='contacts__img' src={gitHub} alt='gitHub' />
      <div>
        <a className='contacts__a' href='https://github.com/SobolAlexey' color='#212'>
          https://github.com/SobolAlexey
        </a>
      </div>

    </div>
  </div>
}

export default Contacts