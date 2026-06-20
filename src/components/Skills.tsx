import { skillsCard } from "../constantes/Constante"
import SkillCard from "./SkillCard"


const Skills = () => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 my-10">
        {skillsCard.map((item, index)=>(
          <SkillCard percentage={item.percentage} title={item.title} description={item.description} key={index}/>
        ))}
    </div>
  )
}

export default Skills