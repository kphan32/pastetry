# Pastetry

Web app to share text easily using [Next.js and Tailwind CSS](https://tailwindcss.com/docs/guides/nextjs).

## Environment Variables

Environment variables should be declared in the `.env` file (will be ignored by Git).

| Key            | Description                             | Recommended Value                                            |
| -------------- | --------------------------------------- | ------------------------------------------------------------ |
| `DATABASE_URL` | URL to Postgres database used by Prisma | `"postgresql://root:root@localhost:5432/mydb?schema=public"` |

## Development

- [Docker](https://www.docker.com/) is used to run an instance of [Postgres](https://hub.docker.com/_/postgres) with a volume linked to the `.db` directory (created in the local directory when ran).
