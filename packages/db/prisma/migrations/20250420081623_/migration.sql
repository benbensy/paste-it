-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Pastebin" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "visibility" TEXT NOT NULL DEFAULT 'PUBLIC',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdById" TEXT,
    CONSTRAINT "Pastebin_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Pastebin" ("content", "createdAt", "createdById", "id", "title", "visibility") SELECT "content", "createdAt", "createdById", "id", "title", "visibility" FROM "Pastebin";
DROP TABLE "Pastebin";
ALTER TABLE "new_Pastebin" RENAME TO "Pastebin";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
