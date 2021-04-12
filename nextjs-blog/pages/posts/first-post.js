import Link from 'next/link'

export default function FirstPost() {
  return (
    <>
      <h1>My name is Choijeho</h1>
      <p>My hobby is to sing a song</p><h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  )
}