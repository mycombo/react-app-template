import Header from '@/components/App/Header'
import NameForm from '@/components/App/NameForm'
import { useNameStore } from '@/store/name'

export default function App() {
  const name = useNameStore((state) => state.name)

  return (
    <>
      <Header />
      {name === '' && <NameForm />}
    </>
  )
}
