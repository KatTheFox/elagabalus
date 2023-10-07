import { CommandInteraction, SlashCommandBuilder } from "discord.js";
import { enigmaCommand } from "./enigma";
import { calyptraCommand } from "./calyptra";
import { chancelCommand } from "./chancel";
export const commands = new Map<
  string,
  {
    data: SlashCommandBuilder;
    execute: (interaction: CommandInteraction) => void;
  }
>([
  [enigmaCommand.data.name, enigmaCommand],
  [calyptraCommand.data.name, calyptraCommand],
  [chancelCommand.data.name, chancelCommand],
]);
