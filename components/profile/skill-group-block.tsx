import { ProfileSkillItem } from '../../data'
import { ProfileSkillBlock } from './skill-block'

interface ProfileSkillGroupBlockProps {
  title: string
  items: ProfileSkillItem[]
}

export function ProfileSkillGroupBlock({
  title,
  items,
}: ProfileSkillGroupBlockProps) {
  return (
    <div className={`my-3 lg:my-1 mr-8 md:mr-12 lg:mr-0`}>
      <div className={`py-2`}>
        <span className={`font-bold text-md`}>{title}</span>
      </div>
      <div className={`lg:flex items-center flex-wrap`}>
        {items.map((item) => (
          <div className={`lg:w-1/2`}>
            <ProfileSkillBlock item={item} />
          </div>
        ))}
      </div>
    </div>
  )
}
