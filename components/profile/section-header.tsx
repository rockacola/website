interface ProfileSectionHeaderProps {
  faName?: string
  label: string
}

export function ProfileSectionHeader({
  faName,
  label,
}: ProfileSectionHeaderProps) {
  return (
    <div className={`py-2 flex items-center`}>
      {!!faName && (
        <span className={`pr-2`}>
          <i className={`fa ${faName}`}></i>
        </span>
      )}
      <span className={`uppercase font-bold text-lg`}>{label}</span>
    </div>
  )
}
