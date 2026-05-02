import Link from 'next/link';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { getCookieName, verifySessionToken } from '@/lib/auth';

function NavLink({ href, label }) {
  return <Link href={href}>{label}</Link>;
}

export default function DashboardLayout({ children }) {
  const token = cookies().get(getCookieName())?.value;
  const session = verifySessionToken(token);

  if (!session) {
    redirect('/login');
  }

  return (
    <div className="admin-layout shell">
      <aside className="sidebar">
        <h2>Admin Bhuwana</h2>
        <nav>
          <NavLink href="/dashboard" label="Overview" />
          <NavLink href="/dashboard/news" label="Kelola Berita" />
          <NavLink href="/dashboard/gallery" label="Kelola Galeri" />
          <form action="/api/auth/logout" method="post">
            <button type="submit">Logout</button>
          </form>
        </nav>
      </aside>
      <main className="main">{children}</main>
    </div>
  );
}
