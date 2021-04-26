interface ProfileSectionHeaderProps {
  faName?: string
  label: string
}

function ProfileSectionHeader({ faName, label }: ProfileSectionHeaderProps) {
  return (
    <div className={`py-2`}>
      {!!faName && (
        <span>
          <i className={`fa ${faName}`}></i>
        </span>
      )}
      <span className={`uppercase font-bold text-lg`}>{label}</span>
    </div>
  )
}

export default ProfileSectionHeader
