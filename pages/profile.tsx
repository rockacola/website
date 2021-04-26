import Link from 'next/link'
import Layout from '../components/layout'
import ProfileSectionHeader from '../components/profile/section-header'
import ProfileSocialLink from '../components/profile/social-link'
// import '../styles/profile.css'

const SidebarSection = () => (
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
      <div className="items">TBA</div>
    </div>
    <div className="block-container interest mx-4 my-6">
      <ProfileSectionHeader label="Interest" />
      <div className="items">TBA</div>
    </div>
  </div>
)

const BodySection = () => <>BODY</>

const ProfilePage = () => (
  <Layout>
    <div className={`container mx-auto font-roboto`}>
      <div
        className={`my-8 mx-4 lg:mx-0 lg:flex flex-row-reverse filter drop-shadow`}
      >
        <div className={`flex-grow-0 flex-shrink-0 lg:w-60`}>
          {SidebarSection()}
        </div>
        <div className={`flex-grow bg-white`}>{BodySection()}</div>
      </div>
    </div>
  </Layout>
)

export default ProfilePage
