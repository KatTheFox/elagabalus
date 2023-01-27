import { CommandInteraction, SlashCommandBuilder } from "discord.js"
import {enigma} from "./enigma"
export const commands=new Map<string,{data:SlashCommandBuilder,execute:(interaction:CommandInteraction)=>void}>([[enigma.data.name,enigma]])