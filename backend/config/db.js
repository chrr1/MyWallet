import {neon} from "@neondatabase/serverless"

import "dotenv/config";

// Create a SQL Connection using our DB URL
export const sql = neon(process.env.DATABASE_URL);