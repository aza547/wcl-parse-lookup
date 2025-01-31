export const GearDisplay = ({ gear }) => {
    const filtered = gear.filter((item) => item.id);

    const renderSlotIcon = (item) => {
        let tooltipUrl = `https://www.wowhead.com/item=${item.id}?`;

        if (item.gems && item.gems.length > 0) {
            tooltipUrl += "gems=";
            tooltipUrl += item.gems.map((gem) => gem.id).join(":");
        }

        if (item.permanentEnchant) {
            tooltipUrl += "&ench=";
            tooltipUrl += item.permanentEnchant;
        }

        if (item.bonusIDs && item.bonusIDs.length > 0) {
            tooltipUrl += "&bonus=";
            tooltipUrl += item.bonusIDs.join(":");
        }

        const highlightClassName =
            item.id === 228411
                ? " border-4 animate-pulse duration-2000 border-yellow-500"
                : "";

        return (
            <div
                className="slot bg-gray-300 w-10 h-10 border border-gray-400 flex justify-center items-center"
                key={item.id}
            >
                <a href={tooltipUrl} className={item.quality}>
                    <img
                        src={`https://assets.rpglogs.com/img/warcraft/abilities/${item.icon}`}
                        className={highlightClassName}
                    ></img>
                </a>
            </div>
        );
    };

    return (
        <div className="grid grid-cols-2 grid-rows-8 gap-2 grid-flow-col">
            {filtered.map(renderSlotIcon)}
        </div>
    );
};

export default GearDisplay;
