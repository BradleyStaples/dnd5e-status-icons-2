# D&D 5E Status Icons 2

A FoundryVTT module for 5E-specific token markers for various conditions.

## Credit

The icons were created by [u/JinxShadow](https://www.reddit.com/user/JinxShadow/) on Reddit and can be found on [GoogleDrive](https://drive.google.com/drive/folders/1p8PTqBHkgSrKVqqOyI2_kFcPmbgLcX72). If you appreciate the icons, tips can be sent to JinxShadow through PayPal at jinxshadow8086@gmail.com.

Furthermore, this repo was forked from [orangetruth](https://github.com/orangetruth/dnd5e-status-icons), which seems to be defunct and was uninstallable in a recent version of Foundry.

## Details

This module contains 64 condition markers:

||||||
|----------|----------|----------|----------|----------|
|Advantage|Charmed|Fox's Cunning|Mark|Shell Defense|
|Ancenstral Protectors|Compelled Duel|Frightened|Mirror Image|Shield of Faith|
|Armor of Agathys|Concentration|Grappled|On Fire|Shifted|
|Baned|Confused|Hasted|Owl's Wisdom|Slayer's Prey|
|Bear's Endurance|Dead|Hex|Paralyzed|Spirit Guardians|
|Bleeding Out|Deafened|Hexblade's Curse|Petrified|Stabilized|
|Blessed|Disadvantage|Highlighted|Poisoned|Stunned|
|Blinded|Divine Favor|Holding Action|Possessed|Summoning|
|Blink|Dodge Action|Incapacitated|Prone|Symbiotic Entity|
|Blur|Eagle's Splendor|Insightful Fighting|Raging|Truesight|
|Bull's Strength|Entangled|Inspired|Reaction Used|Unconcious|
|Cat's Grace|Exhausted|Invisible|Restrained|Warding Bond|
|Cause of Fear|Flying|Mage Armor|Sanctuary| |


![icon set #1, 20 images](https://github.com/BradleyStaples/dnd5e-status-icons-2/raw/main/img/icon-set-1.jpg)

![icon set #2, 20 images](https://github.com/BradleyStaples/dnd5e-status-icons-2/raw/main/img/icon-set-2.png)

![icon set #3, 22 images](https://github.com/BradleyStaples/dnd5e-status-icons-2/raw/main/img/icon-set-3.png)

## Related Modules

No other modules are required to use these icons, but I recommend:

* [Combat Utility Belt](https://foundryvtt.com/packages/combat-utility-belt) has a utility called [Triggler](https://github.com/death-save/combat-utility-belt/wiki/triggler) that can be used with Combat Utility Belt's **Conditon Lab** to set automatic conditons that can apply various status icons (you'll need to Enable **Enhanced Conditions** first under Module Settings -> Combat Utility Belt). See the links for more info.
* [Custom CSS Rules](https://foundryvtt.com/packages/custom-css) (along with its dependency [Code Mirror](https://foundryvtt.com/packages/_CodeMirror)): Custom CSS Rules allows you to customize the CSS for the display of the icons. Add this rule to your Custom CSS Rules under Module Settings to enlarge the icons and set the status effects pane to be 10 icons wide:

```css
#token-hud .status-effects {
  width: 320px !important;
  grid-template-columns: 40px 40px 40px 40px 40px 40px 40px 40px !important;
}
#token-hud .status-effects .effect-control {
  height: 40px !important;
  width: 40px !important;
}
```

#### Before
![icons arranged by default](https://github.com/BradleyStaples/dnd5e-status-icons-2/raw/main/img/css-icons-before.png)

#### After

![enlarged icons in a wider grid](https://github.com/BradleyStaples/dnd5e-status-icons-2/raw/main/img/css-icons-after.png)|
