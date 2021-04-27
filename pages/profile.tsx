import { Layout } from '../components/layout'
import { ProfileSectionHeader } from '../components/profile/section-header'
import { ProfileEducationBlock } from '../components/profile/education-block'
import { ProfileSocialLink } from '../components/profile/social-link'
import { profile, ProfileProps } from '../data'
import { ProfileInterestBlock } from '../components/profile/interest-block'

export async function getStaticProps() {
  return {
    props: {
      profile,
    },
  }
}

const SidebarSection = (profile: ProfileProps) => (
  <div className={`pb-4 bg-profile-secondary text-white`}>
    <div className="bg-profile-primary px-6 py-8 text-center">
      <img
        className="inline-block rounded-full"
        src="/images/trv8306-160.jpg"
        alt=""
      />
      <h1 className="mt-4 text-3xl">Travis Lin</h1>
      <h3 className="mt-2 text-md">Solution Architect</h3>
    </div>
    <div className="block-container contact mx-4 my-6">
      <ProfileSocialLink
        faName="fa-linkedin"
        label="LinkedIn Profile"
        href="https://www.linkedin.com/in/travislinau/"
      />
      <ProfileSocialLink
        faName="fa-github"
        label="GitHub Profile"
        href="https://github.com/rockacola"
      />
    </div>
    <div className="block-container education mx-4 my-6">
      <ProfileSectionHeader label="Education" />
      <div className="my-2">
        {profile.educations.map((item) => (
          <ProfileEducationBlock key={item.institute} item={item} />
        ))}
      </div>
    </div>
    <div className="block-container interest mx-4 my-6">
      <ProfileSectionHeader label="Interest" />
      <div className="my-2">
        {profile.interests.map((item) => (
          <ProfileInterestBlock key={item.key} item={item} />
        ))}
      </div>
    </div>
  </div>
)

const BodySection = (profile: ProfileProps) => <>BODY</>

interface ProfilePageProps {
  profile: ProfileProps
}

function ProfilePage({ profile }: ProfilePageProps) {
  return (
    <Layout>
      <div className={`container mx-auto font-roboto`}>
        <div
          className={`my-8 mx-4 lg:mx-0 lg:flex flex-row-reverse filter drop-shadow`}
        >
          <div className={`flex-grow-0 flex-shrink-0 lg:w-60`}>
            {SidebarSection(profile)}
          </div>
          <div className={`flex-grow bg-white`}>{BodySection(profile)}</div>
        </div>
      </div>
    </Layout>
  )
}

export default ProfilePage
