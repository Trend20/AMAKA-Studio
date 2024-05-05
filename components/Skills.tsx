import {skills} from "@/data/skills";
import Link from "next/link";
import {Skill} from "@/types/skill";

const Skills = () => {
    return(
        <div className="flex flex-col w-full px-4 mt-5  border-t py-5 border-stroke">
            <p className="flex text-lg font-semibold">Skills</p>
            <div className="grid grid-cols-3 gap-3 w-3/4">
                {
                    skills.map((skill:Skill) => (
                        <Link key={skill.id} href={`/skills/${skill.name}`}
                              className="flex text-xs items-center justify-center font-normal uppercase bg-stroke rounded-full w-auto px-2 py-3">
                            {skill.name}
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default Skills;