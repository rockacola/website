import {
  ProfileEducationItem,
  ProfileExperienceItem,
  ProfileInterestItem,
} from '../../data'

interface ProfileExperienceBlockProps {
  item: ProfileExperienceItem
}

export function ProfileExperienceBlock({ item }: ProfileExperienceBlockProps) {
  return (
    <div className={`my-6`}>
      <div className={`font-bold text-gray-800`}>{item.title}</div>
      <div className={`flex items-center`}>
        <div className={`flex-grow text-profile-primary opacity-60`}>
          {item.company}
        </div>
        <div className={`flex-grow-0 text-profile-primary opacity-60`}>
          {item.duration}
        </div>
      </div>
      <div className="py-1">{item.description}</div>
    </div>
  )
}
