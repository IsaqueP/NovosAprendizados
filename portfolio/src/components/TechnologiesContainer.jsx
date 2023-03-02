import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiNodejsSmall,
  DiMysql,
  DiReact
} from 'react-icons/di'

import '../styles/components/technologiescontainer.sass'

const technologies = [
  {id: "html", name: "HTML5", icon: <DiHtml5 />, about: "HTML usando tags semânticas para melhorar a acessibilidade e o SEO"},
  {id: "css", name: "CSS3", icon: <DiCss3 />, about: "CSS usando display flex e grid para estilizar as páginas com responsividade para usuários mobile"},
  {id: "js", name: "JavaScript", icon: <DiJsBadge />, about: "JS fazendo customizações mais inteligentes com consumo de API´s"},
  {id: "react", name: "React", icon: <DiReact />, about: "React usando componentização e estado para fazer páginas mais dinâmicas"},
]

export function TechnologiesContainer(){

  return(
    <section className='technologies-container'>
      <h2>Tecnologias</h2>
      <div className="technologies-grid">
        {technologies.map((tech) => (
          <div className="technology-card" id={tech.id} key={tech.id}>
            {tech.icon}
            <div className="technologies-info">
              <h3>{tech.name}</h3>
              <p>{tech.about}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}