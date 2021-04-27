import { ProfileSkillItem } from '../../data'

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
          <div className={`my-1 bg-red-50`}>{item.label}</div>
        ))}
      </div>
    </div>
  )
}
