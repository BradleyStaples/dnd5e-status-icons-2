const dnd5eStatusIcons2 = (() => {
  const defineStatusIcons = function () {
    window.CONFIG.statusEffects = [{
        "id": "advantage",
        "label": "Advantage",
        "icon": "modules/dnd5e-status-icons-2/img/conditions/advantage.png"
    },
    {
        "id": "ancenstral-protectors",
        "label": "Ancenstral Protectors",
        "icon": "modules/dnd5e-status-icons-2/img/conditions/ancenstral-protectors.png"
    },
    {
        "id": "armor-of-agathys",
        "label": "Armor of Agathys",
        "icon": "modules/dnd5e-status-icons-2/img/conditions/armor-of-agathys.png"
    },
    {
        "id": "baned",
        "label": "Baned",
        "icon": "modules/dnd5e-status-icons-2/img/conditions/baned.png"
    },
    {
        "id": "bears-endurance",
        "label": "Bear's Endurance",
        "icon": "modules/dnd5e-status-icons-2/img/conditions/bears-endurance.png"
    },
    {
        "id": "bleeding-out",
        "label": "Bleeding Out",
        "icon": "modules/dnd5e-status-icons-2/img/conditions/bleeding-out.png"
    },
    {
        "id": "blessed",
        "label": "Blessed",
        "icon": "modules/dnd5e-status-icons-2/img/conditions/blessed.png"
    },
    {
        "id": "blinded",
        "label": "Blinded",
        "icon": "modules/dnd5e-status-icons-2/img/conditions/blinded.png"
    },
    {
        "id": "blink",
        "label": "Blink",
        "icon": "modules/dnd5e-status-icons-2/img/conditions/blink.png"
    },
    {
        "id": "blur",
        "label": "Blur",
        "icon": "modules/dnd5e-status-icons-2/img/conditions/blur.png"
    },
    {
        "id": "bulls-strength",
        "label": "Bull's Strength",
        "icon": "modules/dnd5e-status-icons-2/img/conditions/bulls-strength.png"
    },
    {
        "id": "cats-grace",
        "label": "Cat's Grace",
        "icon": "modules/dnd5e-status-icons-2/img/conditions/cats-grace.png"
    },
    {
        "id": "cause-of-fear",
        "label": "Cause of Fear",
        "icon": "modules/dnd5e-status-icons-2/img/conditions/cause-of-fear.png"
    },
    {
        "id": "charmed",
        "label": "Charmed",
        "icon": "modules/dnd5e-status-icons-2/img/conditions/charmed.png"
    },
    {
        "id": "compelled-duel",
        "label": "Compelled Duel",
        "icon": "modules/dnd5e-status-icons-2/img/conditions/compelled-duel.png"
    },
    {
        "id": "concentration",
        "label": "Concentration",
        "icon": "modules/dnd5e-status-icons-2/img/conditions/concentration.png"
    },
    {
        "id": "confused",
        "label": "Confused",
        "icon": "modules/dnd5e-status-icons-2/img/conditions/confused.png"
    },
    {
        "id": "deafened",
        "label": "Deafened",
        "icon": "modules/dnd5e-status-icons-2/img/conditions/deafened.png"
    },
    {
        "id": "disadvantage",
        "label": "Disadvantage",
        "icon": "modules/dnd5e-status-icons-2/img/conditions/disadvantage.png"
    },
    {
        "id": "divine-favor",
        "label": "Divine Favor",
        "icon": "modules/dnd5e-status-icons-2/img/conditions/divine-favor.png"
    },
    {
        "id": "dodge-action",
        "label": "Dodge Action",
        "icon": "modules/dnd5e-status-icons-2/img/conditions/dodge-action.png"
    },
    {
        "id": "dead",
        "label": "EFFECT.StatusDead",
        "icon": "icons/svg/skull.svg"
    },
    {
        "id": "eagles-splendor",
        "label": "Eagle's Splendor",
        "icon": "modules/dnd5e-status-icons-2/img/conditions/eagles-splendor.png"
    },
    {
        "id": "entangled",
        "label": "Entangled",
        "icon": "modules/dnd5e-status-icons-2/img/conditions/entangled.png"
    },
    {
        "id": "exhausted",
        "label": "Exhausted",
        "icon": "modules/dnd5e-status-icons-2/img/conditions/exhausted.png"
    },
    {
        "id": "flying",
        "label": "Flying",
        "icon": "modules/dnd5e-status-icons-2/img/conditions/flying.png"
    },
    {
        "id": "foxs-cunning",
        "label": "Fox's Cunning",
        "icon": "modules/dnd5e-status-icons-2/img/conditions/foxs-cunning.png"
    },
    {
        "id": "frightened",
        "label": "Frightened",
        "icon": "modules/dnd5e-status-icons-2/img/conditions/frightened.png"
    },
    {
        "id": "grappled",
        "label": "Grappled",
        "icon": "modules/dnd5e-status-icons-2/img/conditions/grappled.png"
    },
    {
        "id": "hasted",
        "label": "Hasted",
        "icon": "modules/dnd5e-status-icons-2/img/conditions/hasted.png"
    },
    {
        "id": "hex",
        "label": "Hex",
        "icon": "modules/dnd5e-status-icons-2/img/conditions/hex.png"
    },
    {
        "id": "hexblades-curse",
        "label": "Hexblade's Curse",
        "icon": "modules/dnd5e-status-icons-2/img/conditions/hexblades-curse.png"
    },
    {
        "id": "highlighted",
        "label": "Highlighted",
        "icon": "modules/dnd5e-status-icons-2/img/conditions/highlighted.png"
    },
    {
        "id": "holding-action",
        "label": "Holding Action",
        "icon": "modules/dnd5e-status-icons-2/img/conditions/holding-action.png"
    },
    {
        "id": "incapacitated",
        "label": "Incapacitated",
        "icon": "modules/dnd5e-status-icons-2/img/conditions/incapacitated.png"
    },
    {
        "id": "insightful-fighting",
        "label": "Insightful Fighting",
        "icon": "modules/dnd5e-status-icons-2/img/conditions/insightful-fighting.png"
    },
    {
        "id": "inspired",
        "label": "Inspired",
        "icon": "modules/dnd5e-status-icons-2/img/conditions/inspired.png"
    },
    {
        "id": "invisible",
        "label": "Invisible",
        "icon": "modules/dnd5e-status-icons-2/img/conditions/invisible.png"
    },
    {
        "id": "mage-armor",
        "label": "Mage Armor",
        "icon": "modules/dnd5e-status-icons-2/img/conditions/mage-armor.png"
    },
    {
        "id": "mark",
        "label": "Mark",
        "icon": "modules/dnd5e-status-icons-2/img/conditions/mark.png"
    },
    {
        "id": "mirror-image",
        "label": "Mirror Image",
        "icon": "modules/dnd5e-status-icons-2/img/conditions/mirror-image.png"
    },
    {
        "id": "on-fire",
        "label": "On Fire",
        "icon": "modules/dnd5e-status-icons-2/img/conditions/on-fire.png"
    },
    {
        "id": "owls-wisdom",
        "label": "Owl's Wisdom",
        "icon": "modules/dnd5e-status-icons-2/img/conditions/owls-wisdom.png"
    },
    {
        "id": "paralyzed",
        "label": "Paralyzed",
        "icon": "modules/dnd5e-status-icons-2/img/conditions/paralyzed.png"
    },
    {
        "id": "petrified",
        "label": "Petrified",
        "icon": "modules/dnd5e-status-icons-2/img/conditions/petrified.png"
    },
    {
        "id": "poisoned",
        "label": "Poisoned",
        "icon": "modules/dnd5e-status-icons-2/img/conditions/poisoned.png"
    },
    {
        "id": "possessed",
        "label": "Possessed",
        "icon": "modules/dnd5e-status-icons-2/img/conditions/possessed.png"
    },
    {
        "id": "prone",
        "label": "Prone",
        "icon": "modules/dnd5e-status-icons-2/img/conditions/prone.png"
    },
    {
        "id": "raging",
        "label": "Raging",
        "icon": "modules/dnd5e-status-icons-2/img/conditions/raging.png"
    },
    {
        "id": "reaction-used",
        "label": "Reaction Used",
        "icon": "modules/dnd5e-status-icons-2/img/conditions/reaction-used.png"
    },
    {
        "id": "restrained",
        "label": "Restrained",
        "icon": "modules/dnd5e-status-icons-2/img/conditions/restrained.png"
    },
    {
        "id": "sanctuary",
        "label": "Sanctuary",
        "icon": "modules/dnd5e-status-icons-2/img/conditions/sanctuary.png"
    },
    {
        "id": "shell-defense",
        "label": "Shell Defense",
        "icon": "modules/dnd5e-status-icons-2/img/conditions/shell-defense.png"
    },
    {
        "id": "shield-of-faith",
        "label": "Shield of Faith",
        "icon": "modules/dnd5e-status-icons-2/img/conditions/shield-of-faith.png"
    },
    {
        "id": "shifted",
        "label": "Shifted",
        "icon": "modules/dnd5e-status-icons-2/img/conditions/shifted.png"
    },
    {
        "id": "slayers-prey",
        "label": "Slayer's Prey",
        "icon": "modules/dnd5e-status-icons-2/img/conditions/slayers-prey.png"
    },
    {
        "id": "spirit-guardians",
        "label": "Spirit Guardians",
        "icon": "modules/dnd5e-status-icons-2/img/conditions/spirit-guardians.png"
    },
    {
        "id": "stabilized",
        "label": "Stabilized",
        "icon": "modules/dnd5e-status-icons-2/img/conditions/stabilized.png"
    },
    {
        "id": "stunned",
        "label": "Stunned",
        "icon": "modules/dnd5e-status-icons-2/img/conditions/stunned.png"
    },
    {
        "id": "summoning",
        "label": "Summoning",
        "icon": "modules/dnd5e-status-icons-2/img/conditions/summoning.png"
    },
    {
        "id": "symbiotic-entity",
        "label": "Symbiotic Entity",
        "icon": "modules/dnd5e-status-icons-2/img/conditions/symbiotic-entity.png"
    },
    {
        "id": "truesight",
        "label": "Truesight",
        "icon": "modules/dnd5e-status-icons-2/img/conditions/truesight.png"
    },
    {
        "id": "unconcious",
        "label": "Unconcious",
        "icon": "modules/dnd5e-status-icons-2/img/conditions/unconcious.png"
    },
    {
        "id": "warding-bond",
        "label": "Warding Bond",
        "icon": "modules/dnd5e-status-icons-2/img/conditions/warding-bond.png"
    }];
    // removed wounded because it was the only red icon
    // plus it made for a better 8x8 grid of icon
    // {
    //     "id": "wounded",
    //     "label": "Wounded",
    //     "icon": "modules/dnd5e-status-icons-2/img/conditions/wounded.svg"
    // }
  };

  Hooks.once("ready", function () {
    defineStatusIcons();
  });
})();
