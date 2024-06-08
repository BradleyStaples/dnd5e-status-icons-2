const dnd5eStatusIcons2 = (() => {
  const defineStatusIcons = function () {
    window.CONFIG.statusEffects = [{
        "id": "advantage",
        "label": "Advantage",
        "icon": "modules/dnd5e-status-icons-2/img/conditions/advantage.png"
    },
    {
        "id": "baned",
        "label": "Baned",
        "icon": "modules/dnd5e-status-icons-2/img/conditions/baned.png"
    },
    {
        "id": "behind-cover",
        "label": "Behind Cover",
        "icon": "modules/dnd5e-status-icons-2/img/conditions/behind-cover.png"
    },
    {
        "id": "bleeding",
        "label": "Bleeding",
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
        "id": "burning",
        "label": "Burning",
        "icon": "modules/dnd5e-status-icons-2/img/conditions/on-fire.png"
    },
    {
        "id": "charmed",
        "label": "Charmed",
        "icon": "modules/dnd5e-status-icons-2/img/conditions/charmed.png"
    },
    {
        "id": "concentrating",
        "label": "Concentrating",
        "icon": "modules/dnd5e-status-icons-2/img/conditions/concentration.png"
    },
    {
        "id": "confused",
        "label": "Confused",
        "icon": "modules/dnd5e-status-icons-2/img/conditions/confused.png"
    },
    {
        "id": "cursed",
        "label": "Cursed",
        "icon": "systems/dnd5e/icons/svg/statuses/cursed.svg"
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
        "id": "dodging",
        "label": "Dodging",
        "icon": "modules/dnd5e-status-icons-2/img/conditions/dodge-action.png"
    },
    {
        "id": "dead",
        "label": "EFFECT.StatusDead",
        "icon": "icons/svg/skull.svg"
    },
    {
        "id": "diseased",
        "label": "Diseased",
        "icon": "systems/dnd5e/icons/svg/statuses/diseased.svg"
    },
    {
        "id": "entangled",
        "label": "Entangled",
        "icon": "modules/dnd5e-status-icons-2/img/conditions/entangled.png"
    },
    {
        "id": "ethereal",
        "label": "Ethereal",
        "icon": "systems/dnd5e/icons/svg/statuses/ethereal.svg"
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
        "id": "hiding",
        "label": "Hiding",
        "icon": "systems/dnd5e/icons/svg/statuses/hiding.svg"
    },
    {
        "id": "hexed",
        "label": "Hexed",
        "icon": "modules/dnd5e-status-icons-2/img/conditions/hex.png"
    },
    {
        "id": "incapacitated",
        "label": "Incapacitated",
        "icon": "modules/dnd5e-status-icons-2/img/conditions/incapacitated.png"
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
        "id": "marked",
        "label": "Marked",
        "icon": "modules/dnd5e-status-icons-2/img/conditions/mark.png"
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
        "id": "restrained",
        "label": "Restrained",
        "icon": "modules/dnd5e-status-icons-2/img/conditions/restrained.png"
    },
    {
        "id": "shell-defense",
        "label": "Shell Defense",
        "icon": "modules/dnd5e-status-icons-2/img/conditions/shell-defense.png"
    },
    {
        "id": "silenced",
        "label": "Silenced",
        "icon": "systems/dnd5e/icons/svg/statuses/silenced.svg"
    },
    {
        "id": "sleeping",
        "label": "Sleeping",
        "icon": "systems/dnd5e/icons/svg/statuses/sleeping.svg"
    },
    {
        "id": "slowed",
        "label": "Slowed",
        "icon": "modules/dnd5e-status-icons-2/img/conditions/slowed.png"
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
        "id": "surprised",
        "label": "Surprised",
        "icon": "systems/dnd5e/icons/svg/statuses/surprised.svg"
    },
    {
        "id": "transformed",
        "label": "Transformed",
        "icon": "systems/dnd5e/icons/svg/statuses/transformed.svg"
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
    }];

  };

  Hooks.once("ready", function () {
    defineStatusIcons();
  });
})();
