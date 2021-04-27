import { ProfileSkillItem } from "../../data";


interface ProfileSkillBlockProps {
  item: ProfileSkillItem
}

export function ProfileSkillBlock({item}) {
  return <div className={`my-1 bg-red-50`}>{item.label}</div>
}
