import { Header } from './header/Header'
import type { PropsWithChildren } from 'react'

export function Content({ children }: PropsWithChildren) {
	return (
		<div style={{ flex: '1 1 0%' }}>
			<Header />
			<section className='p-layout'>{children}</section>
		</div>
	)
}
