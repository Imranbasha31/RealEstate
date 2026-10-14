import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import HeroSearch from '../HeroSearch'

describe('HeroSearch buttons', () => {
  test('rental pill and post ad buttons call onNavigate', async () => {
    const user = userEvent.setup()
    const onNavigate = vi.fn()
    const onResetFilters = vi.fn()

    render(<HeroSearch lang="en" activeCategory="all" setActiveCategory={() => {}} selectedDistrict="all" setSelectedDistrict={() => {}} budget="all" setBudget={() => {}} facing="all" setFacing={() => {}} searchTerm="" setSearchTerm={() => {}} onResetFilters={onResetFilters} onNavigate={onNavigate} />)

    const rentalPill = screen.getByText(/Rental Agreement/i)
    await user.click(rentalPill)
    expect(onNavigate).toHaveBeenCalledWith('rental-agreement')

    const postBtn = screen.getByRole('button', { name: /Post Free Property Ad/i })
    await user.click(postBtn)
    expect(onNavigate).toHaveBeenCalledWith('post-property')
  })
})
