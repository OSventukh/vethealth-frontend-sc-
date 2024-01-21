import Link from 'next/link';
import Logo from '@/components/logo';
import UserMenu from '@/app/(dashboard)/admin/users/components/UserMenu';
import { auth } from '@/lib/next-auth/auth';

type Props = {
  className?: string;
};

export default async function Header({ className }: Props) {
  const session = await auth();
  return (
    <div className={className}>
      <div className="w-full h-full flex justify-between items-center">
        <Link href="/admin">
          <Logo />
        </Link>
        <UserMenu userId={session?.user.id} />
      </div>
    </div>
  );
}
