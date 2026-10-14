import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Header from '../Header'

describe('Header component buttons', () => {
  test('renders saved button and calls onOpenSaved when clicked', async () => {
    const user = userEvent.setup()
    const onOpenSaved = vi.fn()
    const setLang = vi.fn()
    const setCurrentView = vi.fn()

    render(<Header lang="en" setLang={setLang} savedCount={2} onOpenSaved={onOpenSaved} currentView="buyer" setCurrentView={setCurrentView} onOpenAuthModal={() => {}} user={null} />)

    const savedBtn = screen.getByTitle('Saved Properties')
    expect(savedBtn).toBeInTheDocument()
    await user.click(savedBtn)
    expect(onOpenSaved).toHaveBeenCalled()

    const langBtn = screen.getByRole('button', { name: /தமிழ்|English/ })
    await user.click(langBtn)
    expect(setLang).toHaveBeenCalled()

    const buyerTab = screen.getByRole('button', { name: /Buyer Search/i })
    await user.click(buyerTab)
    expect(setCurrentView).toHaveBeenCalled()
  })
})
