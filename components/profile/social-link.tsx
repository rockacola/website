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
    <div className={`my-1`}>
      <span className="pr-2">
        <i className={`fa ${faName}`} />
      </span>
      <span>
        <a
          href={href}
          target="_blank"
          rel="noopener"
          className={`hover:underline`}
        >
          {label}
        </a>
      </span>
    </div>
  )
}
