import { ProfileEducationItem } from '../../data'

interface ProfileEducationBlockProps {
  item: ProfileEducationItem
}

export function ProfileEducationBlock({ item }: ProfileEducationBlockProps) {
  return (
    <div className="my-4">
      <div className="">{item.degree}</div>
      <div className="opacity-80">{item.institute}</div>
      <div className="opacity-80">{item.duration}</div>
    </div>
  )
}
