import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { redirect } from 'next/navigation'
import HubClient from './HubClient'

export default async function HubPage() {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect('/hub/login')
  }

  return <HubClient user={session.user} />
}
