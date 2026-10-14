import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import AdminPortal from '../AdminPortal'

const mockProps = [{ id: 'p1', title: 'A', image: '/ms_hero_plot.png', location: 'L', priceLabel: '₹10 Lakhs', areaDisplay: '1000 Sq.Ft', approvalStatus: 'CMDA & RERA Approved', featured: false }]
const mockLeads = [{ id: 'l1', name: 'John', phone: '+91 99999', date: '2026-01-01', propTitle: 'A', status: 'New', message: 'Hi' }]

describe('AdminPortal buttons', () => {
  test('tab buttons and create listing button work', async () => {
    const user = userEvent.setup()
    const onAddProperty = vi.fn()
    const onUpdateStatus = vi.fn()
    const onToggleFeatured = vi.fn()
    const onDeleteProperty = vi.fn()
    const onUpdateLeadStatus = vi.fn()

    render(<AdminPortal properties={mockProps} onAddProperty={onAddProperty} onUpdateStatus={onUpdateStatus} onToggleFeatured={onToggleFeatured} onDeleteProperty={onDeleteProperty} leads={mockLeads} onUpdateLeadStatus={onUpdateLeadStatus} lang="en" />)

    const addTabBtn = screen.getByRole('button', { name: /Add Property|Add Property/i })
    await user.click(addTabBtn)
    const publishBtn = await screen.findByRole('button', { name: /Publish Property|Publish Property/i })
    expect(publishBtn).toBeInTheDocument()
  })
})
