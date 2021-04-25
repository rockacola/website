import Link from 'next/link'
import Layout from '../components/Layout'

const ProfilePage = () => (
  <Layout>
    <div
      className={`container mx-4 md:mx-auto max-w-4xl my-8 bg-red-100 filter drop-shadow`}
    >
      <div className={`lg:flex flex-row-reverse`}>
        <div className={`flex-grow-0 flex-shrink-0 lg:w-60 bg-blue-100 p-4`}>
          RIGHT
        </div>

        <div className={`flex-grow flex-shrink-0 p-4`}>
          <h1>Profile</h1>
        </div>
      </div>
    </div>
  </Layout>
)

export default ProfilePage
