# Next.js Next-Auth Starter Template

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

![Homepage Screenshot](https://github.com/rezahedi/nextjs-nextauth-starter/blob/main/public/Screenshot_2023-07-19_180913.png)

## Getting Started

Create your .env file as the following or from the `.env.example` and fill it with your credentials, in the case of database I used Postgres hosted on Vercel with Prisma ORM, setup your database and fill the `POSTGRES_PRISMA_URL` and `POSTGRES_URL_NON_POOLING` with your database credentials.

```bash
# Only required for localhost
NEXTAUTH_URL=http://localhost:3000
# Only for production – generate one here: https://generate-secret.vercel.app/32
NEXTAUTH_SECRET=""
GITHUB_CLIENT_ID=""
GITHUB_SECRET_ID=""
GOOGLE_CLIENT_ID=""
GOOGLE_SECRET_ID=""
POSTGRES_PRISMA_URL=""
POSTGRES_URL_NON_POOLING=""
```

Then, install all packages and run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This project have two [Routing Groups](https://nextjs.org/docs/app/building-your-application/routing/route-groups) `(home)` and `(admin)` to have seperate root layouts for each. The `(home)` is for our root segment `/` that you can start editing the home page by modifying `app/(home)/page.tsx`. The `(admin)` is for our admin dashboard segment `/admin` that you can start editing the admin dashboard by modifying `app/(admin)/admin/page.tsx`.

Here a screenshot of admin page with CRUD functions under `/posts` folder, by reviewing the codes you can learn more about how to use server actions in client side, how to create modal and forms and much more:

![Admin CRUD section with edit page opened as a modal](https://github.com/rezahedi/nextjs-nextauth-starter/blob/main/public/Screenshot_2023-09-18_180914.png)

## Learn More

This project build by [Next.js 13](https://nextjs.org/docs/app) [APP Router](https://nextjs.org/docs/app/building-your-application/routing#the-app-router), using [NextAuth](https://next-auth.js.org/getting-started/introduction) for authentication, [Modal Intercepting Routing](https://nextjs.org/docs/app/building-your-application/routing/intercepting-routes) for `/login` modal or route, and styled by Tailwind. This project also included a sample protected route and sub-routes too, It is useful for making admin dashboard. I used [Route Groups](https://nextjs.org/docs/app/building-your-application/routing/route-groups) to make multiple root layouts for each of home page and admin dashboard separatly.

I made this project to help me understand how to use Next.js 13 APP Router structure and how to setup NextAuth, also to have a simple starter template for my future projects that need authentication.

## Upcoming actions:

- Implement authorization for API routes.
- Utilize the Prisma provider for efficient token and user management.
- Incorporate a secure Login with email / password functionality.
