interface ProfileSocialLinkProps {
  faName: string
  href: string
  label: string
}

export function ProfileSocialLink({
  faName,
  href,
  label,
}: ProfileSocialLinkProps) {
  return (
    <div>
      <span className="pr-2">
        <i className={`fa ${faName}`} />
      </span>
      <span>
        <a href={href} target="_blank" rel="noopener">
          {label}
        </a>
      </span>
    </div>
  )
}
