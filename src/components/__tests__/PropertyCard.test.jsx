import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import PropertyCard from '../PropertyCard'

const mockProperty = {
  id: 'p1',
  title: 'Test Plot',
  location: 'Testville',
  image: '/mj_hero_plot.png',
  priceLabel: '₹28.0 Lakhs',
  ratePerSqFt: 1400,
  areaDisplay: '2,000 Sq.Ft',
  facing: 'East Facing',
  roadWidth: '30 Ft Tar Road',
  approvalStatus: 'CMDA & RERA Approved',
  featured: false
}

describe('PropertyCard buttons', () => {
  test('save button and details button trigger callbacks', async () => {
    const user = userEvent.setup()
    const onToggleSave = vi.fn()
    const onOpenDetail = vi.fn()

    render(<PropertyCard property={mockProperty} lang="en" isSaved={false} onToggleSave={onToggleSave} onOpenDetail={onOpenDetail} />)

    // find the save button by locating the button that contains the heart icon
    const allButtons = screen.getAllByRole('button')
    const saveBtn = allButtons.find(b => b.querySelector('.lucide-heart'))
    expect(saveBtn).toBeDefined()
    await user.click(saveBtn)
    expect(onToggleSave).toHaveBeenCalledWith('p1')

    const detailsBtn = screen.getByRole('button', { name: /Details|விபரம்/i })
    await user.click(detailsBtn)
    expect(onOpenDetail).toHaveBeenCalled()
  })
})
