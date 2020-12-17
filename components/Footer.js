import {FaHeart, FaDev, FaGithub} from 'react-icons/fa';

export default function Footer(){
  return(
    <footer className='Footer'>
      <div> 
        <p>
          Feito com amor no <FaHeart className='faicon'/> Cerrado <br/> 
        </p>
        <p className='last'>
          Contact: <a href="https://dev.to/reis_h" target='_'><FaDev className='faicon'/></a>
          <a href="https://github.com/victorvhs" target='_'><FaGithub className='faicon'/></a>        </p>
      
      </div>
    </footer>
  )
}