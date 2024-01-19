-- CreateTable
CREATE TABLE "nextauthstarter_accounts" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "providerAccountId" TEXT NOT NULL,
    "refresh_token" TEXT,
    "access_token" TEXT,
    "expires_at" INTEGER,
    "token_type" TEXT,
    "scope" TEXT,
    "id_token" TEXT,
    "session_state" TEXT,

    CONSTRAINT "nextauthstarter_accounts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "nextauthstarter_sessions" (
    "id" TEXT NOT NULL,
    "sessionToken" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "nextauthstarter_sessions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "nextauthstarter_users" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "email" TEXT,
    "emailVerified" TIMESTAMP(3),
    "image" TEXT,

    CONSTRAINT "nextauthstarter_users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "nextauthstarter_verificationtokens" (
    "identifier" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL
);

-- CreateTable
CREATE TABLE "nextauthstarter_posts" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT,
    "published" BOOLEAN NOT NULL DEFAULT false,
    "authorId" TEXT,

    CONSTRAINT "nextauthstarter_posts_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "nextauthstarter_accounts_provider_providerAccountId_key" ON "nextauthstarter_accounts"("provider", "providerAccountId");

-- CreateIndex
CREATE UNIQUE INDEX "nextauthstarter_sessions_sessionToken_key" ON "nextauthstarter_sessions"("sessionToken");

-- CreateIndex
CREATE UNIQUE INDEX "nextauthstarter_users_email_key" ON "nextauthstarter_users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "nextauthstarter_verificationtokens_token_key" ON "nextauthstarter_verificationtokens"("token");

-- CreateIndex
CREATE UNIQUE INDEX "nextauthstarter_verificationtokens_identifier_token_key" ON "nextauthstarter_verificationtokens"("identifier", "token");

-- AddForeignKey
ALTER TABLE "nextauthstarter_accounts" ADD CONSTRAINT "nextauthstarter_accounts_userId_fkey" FOREIGN KEY ("userId") REFERENCES "nextauthstarter_users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "nextauthstarter_sessions" ADD CONSTRAINT "nextauthstarter_sessions_userId_fkey" FOREIGN KEY ("userId") REFERENCES "nextauthstarter_users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "nextauthstarter_posts" ADD CONSTRAINT "nextauthstarter_posts_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "nextauthstarter_users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
