import {
  ProfileEducationItem,
  ProfileExperienceItem,
  ProfileInterestItem,
} from '../../data'

interface ProfileExperienceBlockProps {
  item: ProfileExperienceItem
}

export function ProfileExperienceBlock({ item }) {
  return <div className={`my-1`}>{item.id}</div>
}
