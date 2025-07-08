import { Header } from './header/Header'
import type { PropsWithChildren } from 'react'

export function Content({ children }: PropsWithChildren) {
	return (
		<div>
			<Header />
			<section>{children}</section>
		</div>
	)
}
