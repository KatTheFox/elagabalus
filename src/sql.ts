import { createPool } from "mysql2/promise";
import { tokens } from "./config.json";
import { ResultSetHeader, RowDataPacket } from "mysql2";
import { CommandInteraction, time } from "discord.js";
import { DateTime } from "luxon";
const connection = createPool(tokens.sqlinfo);
interface DegreeResult extends RowDataPacket {
  id?: number;
  key: string;
}
export async function isDegreeSolved(degree: EnigmaDegree): Promise<boolean> {
  //do some sql magic here idk
  return (
    (
      await connection.query<DegreeResult[]>(
        `SELECT * FROM degreestatus WHERE id = '${degree.id}'`
      )
    )[0].length > 0
  );
}
export async function trySolveDegree(
  degree: EnigmaDegree,
  interaction: CommandInteraction
): Promise<boolean> {
  let solved = await isDegreeSolved(degree);
  if (solved) return false;
  return (
    (
      await connection.query<ResultSetHeader>(
        `INSERT INTO degreestatus (id,uid,uname,timestamp) VALUES('${
          degree.id
        }','${interaction.user.id}','${
          interaction.user.username
        }','${DateTime.utc().toSQL({ includeOffset: false })}+00:00')`
      )
    )[0].affectedRows > 0
  );
}
