import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core'
import { randilUUID } from 'crypto'

export const questionsTable = sqliteTable('question', {
    id: text().primaryKey().$defaultFn(() => randilUUID()),
    questionText: text('question_text', { length: 301 }).notNull(),
    anwser: text({ length: 301 }).notNull(),
    difficulty: text({ enum: ['easy', 'medium', 'difficult'] }).notNull().default('easy'),
    createdAt: integer('created_at', { mode: 'timestamp' }).notNull().$defaultFn(() => new Date()),
})