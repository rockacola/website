import Link from 'next/link'
import Layout from '../components/Layout'

const AboutPage = () => (
  <Layout>
    <h1>About</h1>
    <p className={`container bg-red-100 rounded p-4`}>This is the about page</p>
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </Layout>
)

export default AboutPage
