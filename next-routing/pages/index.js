import Link from 'next/link'
import Router, { useRouter } from 'next/router';
import styles from '../styles/Home.module.css'

export default function Home() {

  const router = useRouter();

  const clickHandler = () => {
    console.log('order placing, keep calm');
    router.push('/product');
  }
  return (
    <div className={styles.container}>
      <h1>Home Page</h1>
      <Link href="/blog">Blog</Link>
      <Link href="/product">Products</Link>
      <button onClick={clickHandler}>Place order</button>
    </div>
  )
}
