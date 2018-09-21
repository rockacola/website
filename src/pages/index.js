import React from 'react'

import Layout from '../components/layout'
import userImage from '../images/user.png'

const IndexPage = () => (
  <Layout>
    <div className="component view index">
      <div className="sandbox">
        <div className="wrapper">
          <div className="avatar">
            <img src={userImage} alt="" />
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
