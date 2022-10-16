import { CommandInteraction, ApplicationCommandOptionType, ChannelType } from "discord.js";
import { Discord, Slash, SlashOption } from "discordx";
import { guildChannelManager } from "../core/guildChannelManager.js"

@Discord()
export class TicketCommand {
    @Slash({ description: "Ticket Command", name: "ticket" })
    async ticket(
        @SlashOption({
            description: "description",
            name: "description",
            required: true,
            type: ApplicationCommandOptionType.String
        })
        description: string,
        interaction: CommandInteraction): Promise<void> {

        await interaction.deferReply();

        // todo: permissions
        
        const supportCategory = await guildChannelManager.getOrCreateSupportCategoryInGuildAsync(interaction.guild!);

        // todo: not able to find or create a support category so error out.
        if (supportCategory == undefined) {
            return;
        }

        const username = interaction.user.username;
        let createdTextChannel = await supportCategory?.guild.channels.create({ name: `Support Ticket ${username}`, type: ChannelType.GuildText, parent: supportCategory });

        await createdTextChannel.permissionOverwrites.create(interaction.user, {ViewChannel: true});

        createdTextChannel.send(`description of the ticket:\n\n ${description}`)

        await interaction.editReply(`channel: <#${createdTextChannel.id}>`);
    }
}