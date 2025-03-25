import HomePage from '@/pages/home/page'
import NotFoundPage from '@/pages/not-found/page'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export const AppRouter = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='*' element={<NotFoundPage />} />
			</Routes>
		</BrowserRouter>
	)
}
