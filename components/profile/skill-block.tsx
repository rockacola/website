import { ProfileSkillItem } from '../../data'

interface ProfileSkillBlockProps {
  item: ProfileSkillItem
}

export function ProfileSkillBlock({ item }: ProfileSkillBlockProps) {
  const dotCount = Math.ceil(item.proficiency / 2)

  return (
    <div className="my-1 lg:mr-12">
      <div className={`flex items-center`}>
        <div className={`flex-grow flex-shrink-0 w-1/2`}>{item.label}</div>
        <div className="flex-grow flex-shrink-0 w-1/2">
          <div className={`h-4 bg-gray-100 rounded-lg flex overflow-hidden`}>
            {[1, 2, 3, 4, 5].map((i) => {
              if (i <= dotCount) {
                const opacityClass = `opacity-${i * 10 + 50}`
                return (
                  <div
                    key={i}
                    className={`bg-profile-primary h-full w-1/5 ${opacityClass}`}
                  />
                )
              }
              return null
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
