import { ProfileEducationItem, ProfileInterestItem } from '../../data'

interface ProfileInterestBlockProps {
  item: ProfileInterestItem
}

export function ProfileInterestBlock({ item }: ProfileInterestBlockProps) {
  return (
    <div className={`my-1`}>
      {item.label}
    </div>
  )
}
