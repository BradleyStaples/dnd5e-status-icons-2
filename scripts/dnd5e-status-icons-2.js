const dnd5eStatusIcons2 = (() => {
  const defineStatusIcons = function () {
    window.CONFIG.statusEffects = [{
        "id": "advantage",
        "label": "Advantage",
        "icon": "modules/dnd5e-status-icons/conditions/advantage.png"
    },
    {
        "id": "ancenstral-protectors",
        "label": "Ancenstral Protectors",
        "icon": "modules/dnd5e-status-icons/conditions/ancenstral-protectors.png"
    },
    {
        "id": "armor-of-agathys",
        "label": "Armor of Agathys",
        "icon": "modules/dnd5e-status-icons/conditions/armor-of-agathys.png"
    },
    {
        "id": "baned",
        "label": "Baned",
        "icon": "modules/dnd5e-status-icons/conditions/baned.png"
    },
    {
        "id": "bears-endurance",
        "label": "Bear's Endurance",
        "icon": "modules/dnd5e-status-icons/conditions/bears-endurance.png"
    },
    {
        "id": "bleeding-out",
        "label": "Bleeding Out",
        "icon": "modules/dnd5e-status-icons/conditions/bleeding-out.png"
    },
    {
        "id": "blessed",
        "label": "Blessed",
        "icon": "modules/dnd5e-status-icons/conditions/blessed.png"
    },
    {
        "id": "blinded",
        "label": "Blinded",
        "icon": "modules/dnd5e-status-icons/conditions/blinded.png"
    },
    {
        "id": "blink",
        "label": "Blink",
        "icon": "modules/dnd5e-status-icons/conditions/blink.png"
    },
    {
        "id": "blur",
        "label": "Blur",
        "icon": "modules/dnd5e-status-icons/conditions/blur.png"
    },
    {
        "id": "bulls-strength",
        "label": "Bull's Strength",
        "icon": "modules/dnd5e-status-icons/conditions/bulls-strength.png"
    },
    {
        "id": "cats-grace",
        "label": "Cat's Grace",
        "icon": "modules/dnd5e-status-icons/conditions/cats-grace.png"
    },
    {
        "id": "cause-of-fear",
        "label": "Cause of Fear",
        "icon": "modules/dnd5e-status-icons/conditions/cause-of-fear.png"
    },
    {
        "id": "charmed",
        "label": "Charmed",
        "icon": "modules/dnd5e-status-icons/conditions/charmed.png"
    },
    {
        "id": "compelled-duel",
        "label": "Compelled Duel",
        "icon": "modules/dnd5e-status-icons/conditions/compelled-duel.png"
    },
    {
        "id": "concentration",
        "label": "Concentration",
        "icon": "modules/dnd5e-status-icons/conditions/concentration.png"
    },
    {
        "id": "confused",
        "label": "Confused",
        "icon": "modules/dnd5e-status-icons/conditions/confused.png"
    },
    {
        "id": "deafened",
        "label": "Deafened",
        "icon": "modules/dnd5e-status-icons/conditions/deafened.png"
    },
    {
        "id": "disadvantage",
        "label": "Disadvantage",
        "icon": "modules/dnd5e-status-icons/conditions/disadvantage.png"
    },
    {
        "id": "divine-favor",
        "label": "Divine Favor",
        "icon": "modules/dnd5e-status-icons/conditions/divine-favor.png"
    },
    {
        "id": "dodge-action",
        "label": "Dodge Action",
        "icon": "modules/dnd5e-status-icons/conditions/dodge-action.png"
    },
    {
        "id": "dead",
        "label": "EFFECT.StatusDead",
        "icon": "icons/svg/skull.svg"
    },
    {
        "id": "eagles-splendor",
        "label": "Eagle's Splendor",
        "icon": "modules/dnd5e-status-icons/conditions/eagles-splendor.png"
    },
    {
        "id": "entangled",
        "label": "Entangled",
        "icon": "modules/dnd5e-status-icons/conditions/entangled.png"
    },
    {
        "id": "exhausted",
        "label": "Exhausted",
        "icon": "modules/dnd5e-status-icons/conditions/exhausted.png"
    },
    {
        "id": "flying",
        "label": "Flying",
        "icon": "modules/dnd5e-status-icons/conditions/flying.png"
    },
    {
        "id": "foxs-cunning",
        "label": "Fox's Cunning",
        "icon": "modules/dnd5e-status-icons/conditions/foxs-cunning.png"
    },
    {
        "id": "frightened",
        "label": "Frightened",
        "icon": "modules/dnd5e-status-icons/conditions/frightened.png"
    },
    {
        "id": "grappled",
        "label": "Grappled",
        "icon": "modules/dnd5e-status-icons/conditions/grappled.png"
    },
    {
        "id": "hasted",
        "label": "Hasted",
        "icon": "modules/dnd5e-status-icons/conditions/hasted.png"
    },
    {
        "id": "hex",
        "label": "Hex",
        "icon": "modules/dnd5e-status-icons/conditions/hex.png"
    },
    {
        "id": "hexblades-curse",
        "label": "Hexblade's Curse",
        "icon": "modules/dnd5e-status-icons/conditions/hexblades-curse.png"
    },
    {
        "id": "highlighted",
        "label": "Highlighted",
        "icon": "modules/dnd5e-status-icons/conditions/highlighted.png"
    },
    {
        "id": "holding-action",
        "label": "Holding Action",
        "icon": "modules/dnd5e-status-icons/conditions/holding-action.png"
    },
    {
        "id": "incapacitated",
        "label": "Incapacitated",
        "icon": "modules/dnd5e-status-icons/conditions/incapacitated.png"
    },
    {
        "id": "insightful-fighting",
        "label": "Insightful Fighting",
        "icon": "modules/dnd5e-status-icons/conditions/insightful-fighting.png"
    },
    {
        "id": "inspired",
        "label": "Inspired",
        "icon": "modules/dnd5e-status-icons/conditions/inspired.png"
    },
    {
        "id": "invisible",
        "label": "Invisible",
        "icon": "modules/dnd5e-status-icons/conditions/invisible.png"
    },
    {
        "id": "mage-armor",
        "label": "Mage Armor",
        "icon": "modules/dnd5e-status-icons/conditions/mage-armor.png"
    },
    {
        "id": "mark",
        "label": "Mark",
        "icon": "modules/dnd5e-status-icons/conditions/mark.png"
    },
    {
        "id": "mirror-image",
        "label": "Mirror Image",
        "icon": "modules/dnd5e-status-icons/conditions/mirror-image.png"
    },
    {
        "id": "on-fire",
        "label": "On Fire",
        "icon": "modules/dnd5e-status-icons/conditions/on-fire.png"
    },
    {
        "id": "owls-wisdom",
        "label": "Owl's Wisdom",
        "icon": "modules/dnd5e-status-icons/conditions/owls-wisdom.png"
    },
    {
        "id": "paralyzed",
        "label": "Paralyzed",
        "icon": "modules/dnd5e-status-icons/conditions/paralyzed.png"
    },
    {
        "id": "petrified",
        "label": "Petrified",
        "icon": "modules/dnd5e-status-icons/conditions/petrified.png"
    },
    {
        "id": "poisoned",
        "label": "Poisoned",
        "icon": "modules/dnd5e-status-icons/conditions/poisoned.png"
    },
    {
        "id": "possessed",
        "label": "Possessed",
        "icon": "modules/dnd5e-status-icons/conditions/possessed.png"
    },
    {
        "id": "prone",
        "label": "Prone",
        "icon": "modules/dnd5e-status-icons/conditions/prone.png"
    },
    {
        "id": "raging",
        "label": "Raging",
        "icon": "modules/dnd5e-status-icons/conditions/raging.png"
    },
    {
        "id": "reaction-used",
        "label": "Reaction Used",
        "icon": "modules/dnd5e-status-icons/conditions/reaction-used.png"
    },
    {
        "id": "restrained",
        "label": "Restrained",
        "icon": "modules/dnd5e-status-icons/conditions/restrained.png"
    },
    {
        "id": "sanctuary",
        "label": "Sanctuary",
        "icon": "modules/dnd5e-status-icons/conditions/sanctuary.png"
    },
    {
        "id": "shell-defense",
        "label": "Shell Defense",
        "icon": "modules/dnd5e-status-icons/conditions/shell-defense.png"
    },
    {
        "id": "shield-of-faith",
        "label": "Shield of Faith",
        "icon": "modules/dnd5e-status-icons/conditions/shield-of-faith.png"
    },
    {
        "id": "shifted",
        "label": "Shifted",
        "icon": "modules/dnd5e-status-icons/conditions/shifted.png"
    },
    {
        "id": "slayers-prey",
        "label": "Slayer's Prey",
        "icon": "modules/dnd5e-status-icons/conditions/slayers-prey.png"
    },
    {
        "id": "spirit-guardians",
        "label": "Spirit Guardians",
        "icon": "modules/dnd5e-status-icons/conditions/spirit-guardians.png"
    },
    {
        "id": "stabilized",
        "label": "Stabilized",
        "icon": "modules/dnd5e-status-icons/conditions/stabilized.png"
    },
    {
        "id": "stunned",
        "label": "Stunned",
        "icon": "modules/dnd5e-status-icons/conditions/stunned.png"
    },
    {
        "id": "summoning",
        "label": "Summoning",
        "icon": "modules/dnd5e-status-icons/conditions/summoning.png"
    },
    {
        "id": "symbiotic-entity",
        "label": "Symbiotic Entity",
        "icon": "modules/dnd5e-status-icons/conditions/symbiotic-entity.png"
    },
    {
        "id": "truesight",
        "label": "Truesight",
        "icon": "modules/dnd5e-status-icons/conditions/truesight.png"
    },
    {
        "id": "unconcious",
        "label": "Unconcious",
        "icon": "modules/dnd5e-status-icons/conditions/unconcious.png"
    },
    {
        "id": "warding-bond",
        "label": "Warding Bond",
        "icon": "modules/dnd5e-status-icons/conditions/warding-bond.png"
    },
    {
        "id": "wounded",
        "label": "Wounded",
        "icon": "modules/dnd5e-status-icons/conditions/wounded.svg"
    }];
  };

  Hooks.once("ready", function () {
    defineStatusIcons();
  });
})();
