import {pgTable,text, uuid, integer, boolean, timestamp} from 'drizzle-orm/pg-core'
import { relations } from 'drizzle-orm'

export const files = pgTable("file", {
    id: uuid("id").defaultRandom().primaryKey(),

    // basic file.floder information
    name: text("name").notNull(),
    path: text("path").notNull(), // /document/project
    size: integer("size").notNull(),
    type: text("type").notNull(), // "Folder"


    // storage info
    fileUrl: text("text_url").notNull(), // url to access file
    thumbnail: text("thumbnail_url"),

    //  Ownership 
    userId: text("user_id").notNull(),
    parentId: uuid("parent_id"), // parent folder if (null for root items)

    // file/folder flags
    isFolder: boolean("is_folder").default(false).notNull(),
    isStarred: boolean("is_starred").default(false).notNull(),
    isTrash: boolean("is_trash").default(false).notNull(),


    // Timestamps
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").defaultNow().notNull(),

})
