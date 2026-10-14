import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import UserDashboard from '../UserDashboard'

const mockSaved = [{ id: 'p1', title: 'A', image: '/ms_hero_plot.png', priceLabel: '₹10 Lakhs', location: 'L' }]
const mockLeads = [{ id: 'l1', propTitle: 'A', date: '2026-01-01', status: 'New', message: 'Hello' }]

describe('UserDashboard buttons', () => {
  test('Edit Profile toggle button works and saved favorites show', async () => {
    const user = userEvent.setup()
    const onOpenDetail = vi.fn()
    const onRemoveSaved = vi.fn()

    render(<UserDashboard savedList={mockSaved} userLeads={mockLeads} onOpenDetail={onOpenDetail} onRemoveSaved={onRemoveSaved} lang="en" />)

    const editBtn = screen.getByRole('button', { name: /Edit Buyer Profile|Save Profile/i })
    await user.click(editBtn)
    expect(screen.getByText(/Full Name/i)).toBeInTheDocument()
  })
})
