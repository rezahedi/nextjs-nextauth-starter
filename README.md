# Next.js Next-Auth Starter Template

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This project have two [Routing Groups](https://nextjs.org/docs/app/building-your-application/routing/route-groups) `(home)` and `(admin)` to have multiple root layouts for each. You can start editing the home page by modifying `app/(home)/page.tsx`. The page auto-updates as you edit the file.

## Learn More

This project build by [Next.js 13](https://nextjs.org/docs/app) [APP Router](https://nextjs.org/docs/app/building-your-application/routing#the-app-router), using [NextAuth](https://next-auth.js.org/getting-started/introduction) for authentication, [Modal Intercepting Routing](https://nextjs.org/docs/app/building-your-application/routing/intercepting-routes) for `/login` modal or route, and styled by Tailwind. This project also included a sample protected route and sub-routes too, It is useful for making admin dashboard. I used [Route Groups](https://nextjs.org/docs/app/building-your-application/routing/route-groups) to make multiple root layouts for each of home page and admin dashboard separatly.

I made this project to help me understand how to use Next.js 13 APP Router structure and how to setup NextAuth, also to have a simple starter template for my future projects that need authentication.

## Upcoming actions:

- Implement authorization for API routes.
- Utilize the Prisma provider for efficient token and user management.
- Incorporate a secure Login with email / password functionality.
