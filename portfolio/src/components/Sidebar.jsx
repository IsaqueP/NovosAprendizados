import Avatar from '../img/pic-profile.jpg'

import { SocialNetworks } from './SocialNetworks'
import { InformationContainer } from './InformationContainer'

import '../styles/components/sidebar.sass'


export function Sidebar(){

  return(
    <aside id="sidebar">
      <img src={Avatar} alt="foto de perfil" />
      <p className="title">Desenvolvedor Front-End</p>
      <SocialNetworks />
      <InformationContainer />
      <a href="" className="btn">Download currículo</a>
    </aside>
  )
}