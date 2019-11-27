import React from 'react'
import Link from 'next/link'
import PageTitle from '../../../components/organisms/PageTitle'

const SecondPage = () => {
  return (
    <>
      <PageTitle title="Second Page - %%APPNAME%%" />
      <main>
        <p>This is another page at a different URL.</p>
        <p>
          Return to the
          <Link href="/">homepage</Link>
        </p>
      </main>
    </>
  )
}

export default SecondPage
