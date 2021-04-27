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
    <div className={`bg-blue-50 my-4`}>
      <div className={`py-2`}>
        <span className={`font-bold text-md`}>{title}</span>
      </div>
      <div>
        {items.map((item) => (
          <ProfileSkillBlock item={item} />
        ))}
      </div>
    </div>
  )
}
