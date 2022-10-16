import { CommandInteraction } from "discord.js";
import { Discord, Slash } from "discordx";

@Discord()
export class PingCommand {
    @Slash({ description: "Ping Command", name: "ping" })
    async ping(interaction: CommandInteraction): Promise<void> {

        await interaction.deferReply();

        const timeTaken = Date.now() - interaction.createdTimestamp;

        await interaction.editReply(`Pong! This message had a latency of ${timeTaken}ms.`);
    }
}