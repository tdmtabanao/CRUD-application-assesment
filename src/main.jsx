import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'

// Import MDB CSS here once globally
import 'mdb-react-ui-kit/dist/css/mdb.min.css';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
