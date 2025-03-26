import CartPage from '@/pages/cart/CartPage'
import ContactsPage from '@/pages/contacts/ContactsPage'
import FavoritePage from '@/pages/favorite/FavoritePage'
import HomePage from '@/pages/home/HomePage'
import NotFoundPage from '@/pages/not-found/NotFoundPage'
import ProfilePage from '@/pages/profile/ProfilePage'
import RecipesPage from '@/pages/recipes/RecipesPage'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainLayout from '../layout/MainLayout'

export const AppRouter = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<MainLayout />}>
					<Route path='/' element={<HomePage />} />

					<Route path='/recipes' element={<RecipesPage />} />
					<Route path='/contacts' element={<ContactsPage />} />

					<Route path='/favorite' element={<FavoritePage />} />
					<Route path='/cart' element={<CartPage />} />
					<Route path='/profile' element={<ProfilePage />} />
				</Route>

				<Route path='*' element={<NotFoundPage />} />
			</Routes>
		</BrowserRouter>
	)
}
