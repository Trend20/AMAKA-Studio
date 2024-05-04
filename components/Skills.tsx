import {skills} from "@/data/skills";
import Link from "next/link";

const Skills = () => {
    return(
        <div className="grid grid-cols-4">
            {
                skills.map((skill, i) => (
                    <Link key={skill.id} href={`/skills/${skill.name}`}>
                        {skill.name}
                    </Link>
                ))
            }
        </div>
    )
}

export default Skills;