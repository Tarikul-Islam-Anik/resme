import { withAuth } from 'next-auth/middleware';

export default withAuth({
  pages: {
    signIn: '/auth',
  },
  callbacks: {
    authorized: ({ req, token }) => req.nextUrl.pathname === '/' || !!token,
  },
});
