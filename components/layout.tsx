import React, { ReactNode } from 'react'
import Head from 'next/head'

type LayoutProps = {
  children?: ReactNode
  title?: string
}

export function Layout({ children, title = 'TravisLin.com' }: LayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Travis lin, all web tech thinking." />
      </Head>
      {children}
    </>
  )
}
