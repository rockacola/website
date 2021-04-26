import { Layout } from '../components/layout'

const IndexPage = () => (
  <Layout>
    <div className={`h-screen relative`} style={{ backgroundColor: '#e8e6ea' }}>
      <div
        className={`absolute inset-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full border-8 border-pink-300 opacity-80 transition duration-700 hover:opacity-90`}
        style={{ width: 120, height: 120 }}
      >
        <img
          src="/images/user.png"
          alt="That's all there is to it, for now"
          width="120"
          height="120"
        />
      </div>
    </div>
  </Layout>
)

export default IndexPage
