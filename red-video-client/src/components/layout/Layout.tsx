import { Content } from './content/Content'
import { Sidebar } from './sidebar/Sidebar'
import type { PropsWithChildren } from 'react'

export function Layout({ children }: PropsWithChildren) {
	return (
		<main>
			<Sidebar />
			<Content>{children}</Content>
		</main>
	)
}
