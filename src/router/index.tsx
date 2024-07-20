import { createHashRouter } from 'react-router-dom'
import App from '@/components/App'

const router = createHashRouter([
  {
    path: '/',
    element: <App />,
  },
])

export default router
