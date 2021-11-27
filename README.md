# Pastetry

Web app to share text easily using [Next.js and Tailwind CSS](https://tailwindcss.com/docs/guides/nextjs).

## Environment Variables

Environment variables should be declared in the `.env` file (will be ignored by Git).

| Key            | Description                             | Recommended Value                                                |
| -------------- | --------------------------------------- | ---------------------------------------------------------------- |
| `DATABASE_URL` | URL of Postgres database used by Prisma | `"postgresql://root:root@localhost:5432/pastetry?schema=public"` |

## Development

### Prerequisites

- [Docker](https://www.docker.com/) is used to run an instance of [Postgres](https://hub.docker.com/_/postgres) with a volume linked to the `.db` directory (created in the local directory when ran).

### Setup

1. Install dependencies: `yarn`
2. Start Docker: `yarn docker`
3. Push Prisma schema to dev DB: `yarn prisma db push`
4. Run locally: `yarn dev`
