import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Blackwatch is the best JS dev</h1>
      <Link href='/users'>Navigate to users</Link>
      <br />
      <Link href='/posts'>Navigate to posts</Link>
    </>
    )
}
