import { Guild, ChannelType, CategoryChannel, Permissions } from "discord.js"

class GuildChannelManager {
    private supportRoleName: string = "Support Test"
    private supportCategoryName: string = "Support"
    private supportCategoryId?: string;

    constructor() {
        this.supportCategoryId = undefined;
    }

    public storeSupportCategoryId(id: string): void {
        this.supportCategoryId = id;
    }

    public clearSupportCategoryId(): void {
        this.supportCategoryId = undefined;
    }

    public getSupportCategoryId(): string | undefined {
        return this.supportCategoryId;
    }

    public async getOrCreateSupportCategoryInGuildAsync(guild: Guild): Promise<CategoryChannel | undefined> {
        console.log("Executing getOrCreateSupportCategoryInGuildAsync");

        let supportCategoryId = this.getSupportCategoryId();

        // Not in cache so look for it in the guild.
        if (supportCategoryId == undefined) {
            supportCategoryId = await guildChannelManager.findSupportCategoryInGuildAsync(guild)
        }

        // Not in the guild so create it.
        if (supportCategoryId == undefined) {
            supportCategoryId = await guildChannelManager.createSupportCategoryInGuildAsync(guild)
        }

        if (this.supportCategoryId != undefined) {
            const supportCategory = await guild.channels.fetch(this.supportCategoryId);
            if (supportCategory == undefined || supportCategory.type != ChannelType.GuildCategory) {
                return;
            }

            return supportCategory;
        }

        return;
    }

    public async findSupportCategoryInGuildAsync(guild: Guild): Promise<string | undefined> {
        console.log("Executing findSupportCategoryInGuildAsync");

        var channels = await guild.channels.fetch();
        var foundChannel = channels?.find((item) => {
            return item?.name == this.supportCategoryName && item.type == ChannelType.GuildCategory
        })

        if (foundChannel != null && foundChannel != undefined) {
            guildChannelManager.storeSupportCategoryId(foundChannel.id);
        }

        return this.supportCategoryId;
    }

    public async createSupportCategoryInGuildAsync(guild: Guild): Promise<string | undefined> {
        console.log("Executing createSupportCategoryInGuildAsync");

        const supportCategory = await guild.channels.create({ name: "Support", type: ChannelType.GuildCategory });

        await this.setSupportCategoryPermissionsInGuildAsync(guild, supportCategory);

        if (supportCategory != undefined) {
            this.storeSupportCategoryId(supportCategory.id);
        }

        return this.supportCategoryId;
    }

    private async setSupportCategoryPermissionsInGuildAsync(guild: Guild, supportCategory: CategoryChannel): Promise<void> {
        console.log("Executing setSupportCategoryPermissionsInGuildAsync");

        const everyoneRole = guild.roles.everyone;
        await supportCategory.permissionOverwrites.create(everyoneRole, { ViewChannel: false })

        guild.roles.fetch()
            .then(async (roles) => {
                const supportRole = roles.find((item) => { return item.name == this.supportRoleName })
                if (supportRole != undefined) {
                    await supportCategory.permissionOverwrites.create(supportRole, { ViewChannel: true })
                }
            });
    }
}

export const guildChannelManager = new GuildChannelManager();