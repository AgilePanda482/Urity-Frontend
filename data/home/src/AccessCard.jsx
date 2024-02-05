// eslint-disable-next-line react/prop-types
import inIcon from './assets/inIcon.svg'
import outIcon from './assets/outIcon.svg'

// import ReactLogo from './assets/'
// eslint-disable-next-line react/prop-types
export function Access ({ children, code, info, ubication }) {

  if (ubication == true) {
    ubication = outIcon
  } else ubication = inIcon 

  return (
    <article className='ac-accessCard'>
      <header className='ac-accessCard-header'>
        <img className='ac-accessCard-avatar' alt='' src={`https://unavatar.io/${code}`}/>

        {/* <div className='ac-accessCard-info'>
          <p>{children}</p>
          <div>
            <span className='ac-accessCard-UserCode'>{code}</span>
            <span className='ac-accessCard-UserInfo'>{info}</span>
          </div>
        </div> */}
      </header>
      
      <div className='ac-accessCard-info'>
          <p>{children}</p>
          <div>
            <span className='ac-accessCard-UserCode'>{code}</span>
            <span className='ac-accessCard-UserInfo'>{info}</span>
          </div>
      </div>
      
      <aside className="ac-accessCard-aside">
        <span className="ac-accessCard-time">07:55</span>
        <img className="ac-accessCard-ubi" alt="" src={ubication}/>
      </aside>
    </article>
  )
}