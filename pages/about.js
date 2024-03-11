import { useRouter } from 'next/router'
import Header from '../components/Header.jsx'
// import Footer from '../components/Footer'

export default function About() {
  const router = useRouter()

  const handleNavigation = () => {
    router.push('/')
  }

  return (
    <div>
      <Header />
      <h1>About Page</h1>
      <button onClick={handleNavigation}>Go to Home</button>
      {/* <Footer /> */}
    </div>
  )
}