import {skills} from "@/data/skills";
import Link from "next/link";
import {Skill} from "@/types/skill";

const Skills = () => {
    return(
        <div className="flex flex-col w-full px-4 mt-5  border-t py-5 border-stroke">
            <p className="flex text-lg font-semibold">Skills</p>
            <div className="grid lg:grid-cols-4 grid-cols-2 gap-3 w-full mt-5">
                {
                    skills.map((skill:Skill) => (
                        <Link key={skill.id} href={`/skills/${skill.name}`}
                              className="flex text-[10px] items-center justify-center font-semibold uppercase bg-stroke dark:border dark border-bodydark dark:bg-transparent rounded-full w-auto px-2 py-3">
                            {skill.name}
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default Skills;