import React from 'react'
import { AppRouter } from './providers/router'
import { useInitCardProducts } from './store/product/CardProducts/lib/useInitCardProducts'
import './styles/global.scss'

const App = () => {
	useInitCardProducts()

	return <AppRouter />
}

export default App
